import { NextResponse } from "next/server";
import Blog from "../../pages/lib/models/blog";

import connectDB from "../../pages/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req) {
  try {
    // Ensure database connection
    await connectDB();

    // Extract query parameters from the URL
    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const id = url.searchParams.get("id");

    // Debugging logs
    console.log("Query Params - Category:", category, "ID:", id);

    // Handle single blog retrieval by ID
    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        return NextResponse.json(
          { success: false, message: "Blog not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: blog }, { status: 200 });
    }

    // Ensure the category is provided
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category parameter is required." },
        { status: 400 }
      );
    }

    // Fetch blogs filtered by category
    const blogs = await Blog.find({ category }).sort({ createdAt: -1 });

    // Handle no blogs found
    if (blogs.length === 0) {
      return NextResponse.json(
        {
          success: true,
          data: [],
          message: "No blogs found for this category.",
        },
        { status: 200 }
      );
    }

    // Respond with the blogs
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error: " },
      { status: 500 }
    );
  }
}

// post

export async function POST(req) {
  try {
    await connectDB(); // Ensure DB connection is made

    // Extract data from the request body
    const { title, description, category, body, images, video, mediaType } =
      await req.json();

    // Validation: Ensure required fields are present
    if (!title || !description || !category) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, description, and category are required.",
        },
        { status: 400 }
      );
    }

    // Ensure only images OR a video link is provided, not both
    if (images && images.length > 0 && video) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You can only upload images or provide a video link, not both.",
        },
        { status: 400 }
      );
    }

    // Validate image array for non-gallery categories
    if (!video && (!images || images.length === 0)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You must upload at least one image or provide a video link.",
        },
        { status: 400 }
      );
    }

    // Special handling for "Designs" category
    if (category === "Designs" && images.length < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Designs must include at least one image.",
        },
        { status: 400 }
      );
    }

    // Prepare the blog post object
    const newPost = new Blog({
      title,
      description,
      category,
      body: body || "",
      images: images?.length ? images.map((img) => img.toString()) : [],
      video: video || "", // Store video only if no images are present
      mediaType: mediaType || "image",
    });
    // Save the post to the database
    const savedPost = await newPost.save();

    // Respond with the created post data
    return NextResponse.json(
      { success: true, data: savedPost },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error creating post:"); // Log error for debugging
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update a blog post completely
export async function PUT(req) {
  try {
    await connectDB();
    const { id, title, description, category, body, images, video, mediaType } =
      await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required." },
        { status: 400 }
      );
    }

    // Ensure at least one media (image or video) is provided
    if (!video && (!images || images.length === 0)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You must upload at least one image or provide a video link.",
        },
        { status: 400 }
      );
    }

    if (!title || !description || !category) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, description, and category are required.",
        },
        { status: 400 }
      );
    }

    // Ensure only images OR a video link is provided, not both
    if (images && images.length > 0 && video) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You can only upload images or provide a video link, not both.",
        },
        { status: 400 }
      );
    }

    const updatedPost = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        description,
        category,
        body: body || "",
        images: images?.length ? images.map((img) => img.toString()) : [],
        video: video || "", // Store video only if no images are present
        mediaType: mediaType || "image",
      },
      { new: true }
    );

    if (!updatedPost) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedPost },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// PATCH - Partially update a blog post
export async function PATCH(req) {
  try {
    await connectDB();

    const { id, title, description, category, body, images, video, mediaType } =
      await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required." },
        { status: 400 }
      );
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (category) updateData.category = category;
    if (typeof body !== "undefined") updateData.body = body || "";

    if (mediaType) updateData.mediaType = mediaType;

    // Ensure only images OR a video link is provided, not both
    if (images && images.length > 0 && video) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You can only upload images or provide a video link, not both.",
        },
        { status: 400 }
      );
    }

    // If updating images or video, enforce mutual exclusivity
    if (images?.length) {
      updateData.images = images.map((img) => img.toString());
      updateData.video = ""; // Clear video if images are added
    } else if (video) {
      updateData.video = video;
      updateData.images = []; // Clear images if a video is added
    }

    const updatedPost = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedPost) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedPost },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete a blog post

export async function DELETE(req) {
  try {
    await connectDB();

    // Use URL search params for ID
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required." },
        { status: 400 }
      );
    }

    // Validate if ID is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid blog ID format." },
        { status: 400 }
      );
    }

    // Perform deletion
    const result = await Blog.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Blog not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Blog post deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
