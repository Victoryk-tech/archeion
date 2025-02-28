import { NextResponse } from "next/server";

import connectDB from "../../pages/lib/dbConnect";
import Blog from "../../pages/lib/models/blog";

export async function GET() {
  try {
    // Connect to the database
    await connectDB();

    // Retrieve all blog posts
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    // Return the response with the blogs and their total count
    return NextResponse.json(
      { success: true, data: blogs, totalBlogs: blogs.length },
      { status: 200 }
    );
  } catch (error) {
    console.log("Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
