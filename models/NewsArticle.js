import mongoose from "mongoose";

const NewsArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.NewsArticle ||
  mongoose.model("NewsArticle", NewsArticleSchema);
