const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String, // image URL
      default: "",
    },

    // Instructor of the course
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Videos inside course
    videos: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true }, // YouTube/Cloudinary/local
        duration: { type: String }, // optional, for display
      },
    ],

    // Students enrolled
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Quiz linked to course
    quizzes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],

    // Category / tags
    category: {
      type: String,
      default: "General",
    },
    tags: [String],

    // Difficulty Level
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
  },
  { timestamps: true }
);

const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;
