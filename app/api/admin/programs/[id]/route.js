import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Program from "@/models/Program";
import { connectDB } from "@/lib/mongodb";

// GET a program by ID
export async function GET(req, context) {
  await connectDB();
  const { id } = await context.params; // unwrap the promise

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const program = await Program.findById(id);
  if (!program) {
    return NextResponse.json({ error: "Program not found" }, { status: 404 });
  }

  return NextResponse.json(program);
}

// PATCH update a program by ID
export async function PATCH(req, context) {
  await connectDB();
  const { id } = await context.params; // unwrap
  const body = await req.json();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const program = await Program.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!program) {
    return NextResponse.json({ error: "Program not found" }, { status: 404 });
  }

  return NextResponse.json(program);
}

// DELETE a program by ID
export async function DELETE(req, context) {
  await connectDB();
  const { id } = await context.params; // unwrap

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Program.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ error: "Program not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Program deleted successfully" });
}
