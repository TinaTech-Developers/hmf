import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["cash", "items"], required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    amount: { type: Number },
    items: { type: String },
    details: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Donation ||
  mongoose.model("Donation", donationSchema);
