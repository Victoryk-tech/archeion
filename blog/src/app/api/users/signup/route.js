import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { firstName, lastName, email, password } = reqBody;

    console.log(reqBody);

    // Use the User model to find a user by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    // Save the new user
    const savedUser = await newUser.save();

    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.error("Error creating user:", error); // Log the error for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
