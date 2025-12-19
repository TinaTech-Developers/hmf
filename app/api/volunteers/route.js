import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.type || !body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create volunteer
    const newVolunteer = new Volunteer({
      type: body.type,
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });

    await newVolunteer.save();

    return NextResponse.json(
      { message: "Volunteer saved successfully", volunteer: newVolunteer },
      { status: 201 }
    );
  } catch (err) {
    console.error("Volunteer API error:", err);
    return NextResponse.json(
      { error: "Failed to save volunteer" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    return NextResponse.json(volunteers, { status: 200 });
  } catch (err) {
    console.error("Get volunteers error:", err);
    return NextResponse.json(
      { error: "Failed to fetch volunteers" },
      { status: 500 }
    );
  }
}
