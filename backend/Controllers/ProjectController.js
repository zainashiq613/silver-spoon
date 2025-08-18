const project = require('../Models/ProjectModel');
const projectdata = require('../Data/project.json')
const baseUrl = process.env.BASE_URL || "http://localhost:5000/";


exports.insertProjects = async (req, res) => {
    try {
        const newProjects = await project.insertMany(projectdata);
        res.status(201).json({ message: 'Projects created successfully', projects: newProjects });
    } catch (error) {
        res.status(500).json({ message: 'Error creating projects', error: error.message });
    }
};
// get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await project.find();

     

   const baseUrl = `${req.protocol}://${req.get("host")}/public/`;

   const updatedProjects = projects.map((p) => ({
     ...p._doc,
    thumbnail: p.thumbnail ? baseUrl + p.thumbnail : null, // use 'thumbnail' from schema
   }));

    res.status(200).json({ 
      message: "Projects fetched successfully", 
      projects: updatedProjects 
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error fetching projects", 
      error: error.message 
    });
  }
};


// get project by slug
exports.getProjectBySlug = async (req, res) => {
  try {
    const projectSlug = req.params.slug;
    const projectData = await project.findOne({ slug: projectSlug });

    if (!projectData) {
      return res.status(404).json({ message: "Project not found" });
    }

   const updatedProject = {
     ...projectData._doc,
     thumbnail: projectData.thumbnail ? baseUrl + projectData.thumbnail : null, // use 'thumbnail'
   };

    res.status(200).json({ 
      message: "Project fetched successfully", 
      project: updatedProject 
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error fetching project", 
      error: error.message 
    });
  }
};

exports.addProject = async (req, res) => {
    const { title, description, stackType, githubLink, demoLink } = req.body;
    try {
        const newProject = new project({
            title,
            description,
            stackType,
            githubLink,
            demoLink
        });
        await newProject.save();
        res.status(201).json({ message: 'Project added successfully', project: newProject });
    } catch (error) {
        res.status(500).json({ message: 'Error adding project', error: error.message });
    }
};
exports.updateProjectById = async (req, res) => {
    const { title, description, stackType, githubLink, demoLink } = req.body;
    try {
        const updatedProject = await project.findByIdAndUpdate(req.params.id, {
            title,
            description,
            stackType,
            githubLink,
            demoLink
        }, { new: true });
        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
    } catch (error) {
        res.status(500).json({ message: 'Error updating project', error: error.message });
    }
};
exports.deleteProject = async (req, res) => {
    try {
        await project.deleteMany();
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error: error.message });
    }
};
