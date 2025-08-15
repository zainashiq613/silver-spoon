const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  stackType: {
    type: String,
    enum: ["Google App Script", "MERN Stack", "Laravel", "React"],
    required: true,
  },
  githubLink: String,
  demoLink: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Project', ProjectSchema);