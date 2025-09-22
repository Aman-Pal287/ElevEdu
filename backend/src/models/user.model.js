const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 6 },

    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      default: "student",
    },

    // Student side
    enrolledCourses: [
      {
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        progress: {
          completedVideos: [{ type: Number }], // index of completed videos
          isCompleted: { type: Boolean, default: false },
        },
      },
    ],

    // Instructor side
    createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "course" }],

    // Extra (for portfolio/future scaling)
    profileImage: { type: String, default: "" }, // Cloudinary/URL
    bio: { type: String, default: "" },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
