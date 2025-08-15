const project = require('../Models/ProjectModel');
const projectdata = require('../Data/project.json')

exports.insertProjects = async (req, res) => {
    try {
        const newProjects = await project.insertMany(projectdata);
        res.status(201).json({ message: 'Projects created successfully', projects: newProjects });
    } catch (error) {
        res.status(500).json({ message: 'Error creating projects', error: error.message });
    }
};
exports.getProjects = async (req, res) => {
    try {
        const projects = await project.find();
        res.status(200).json({ message: 'Projects fetched successfully', projects });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error: error.message });
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
exports.deleteProjectById = async (req, res) => {
    try {
        await project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error: error.message });
    }
};
