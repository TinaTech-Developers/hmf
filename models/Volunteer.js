import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ["children", "elderly", "community"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

// Avoid recompiling model
export default mongoose.models.Volunteer ||
  mongoose.model("Volunteer", VolunteerSchema);
