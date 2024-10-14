import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// Connect to the database
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 }
      );
    }
    console.log("user exists");
    // check if password is correct

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    // create token data

    const tokenData = {
      id: user._id,
      firstName: user.firstName,
      email: user.email,
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "login successfully",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      //secure: process.env.NODE_ENV === "production", // Set 'true' if in production for HTTPS
      //sameSite: "strict", // Prevent CSRF attacks
      //path: "/",
    });
    return response;
  } catch (error) {
    console.log("Error login user:", error); // Log the error for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
