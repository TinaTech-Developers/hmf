import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const admin = await Admin.findOne({ email });
  if (!admin)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const isMatch = await admin.comparePassword(password);
  if (!isMatch)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign(
    {
      id: admin._id.toString(),
      email: admin.email,
      role: admin.role,
    },
    JWT_SECRET,
    { expiresIn: "30min" }
  );

  return NextResponse.json({ token, role: admin.role });
}
