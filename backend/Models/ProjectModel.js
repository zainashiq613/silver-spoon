const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true }, // for dynamic routing (/projects/:slug)

  shortDescription: { type: String, required: true }, // used in project grid cards
  stackType: {
    type: String,
    enum: ["App Script", "MERN Stack", "Laravel", "React"],
    required: true,
  },
  technologies: [String], // e.g. ["React", "Node.js", "MongoDB"]

  thumbnail: { type: String }, // card image
 

  // Sections for detail page
  hero: {
    heading: String,
    subHeading: String,
    image: String,
    ctaText: String,
 
  },

  overview: {
    title: String,
    description: String,
    image: String,
  },

  approaches: [String], // list of chips

  problemSolution: {
    problem: String,
    solution: String,
    image: String,
  },

  benefits: [
    {
      heading: String,
      description: String,
    },
  ],

  benefitsImage: String, // collage image

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Projects", ProjectSchema);
