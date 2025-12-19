import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

async function verifyToken(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  try {
    return jwt.verify(token, JWT_SECRET); // returns { id, email } if valid
  } catch {
    return null;
  }
}

// GET all users
export async function GET(req) {
  await connectDB();
  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const admins = await Admin.find().select("-password");
  return NextResponse.json(admins);
}

// POST create a new user
export async function POST(req) {
  await connectDB();
  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, email, password, role } = await req.json();

  if (!name || !email || !password)
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );

  const existing = await Admin.findOne({ email });
  if (existing)
    return NextResponse.json(
      { error: "Email already in use" },
      { status: 400 }
    );

  const newAdmin = new Admin({ name, email, password, role });
  await newAdmin.save();

  const adminData = newAdmin.toObject();
  delete adminData.password;

  return NextResponse.json(adminData, { status: 201 });
}
