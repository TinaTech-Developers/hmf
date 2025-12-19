import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    link: { type: String, default: "" },
    date: { type: Date, required: true },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Program ||
  mongoose.model("Program", ProgramSchema);
