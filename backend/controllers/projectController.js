const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const existing = await Project.find({ user: req.user.id });
  if (existing.length >= 4) return res.status(400).send("Maximum 4 projects allowed");

  const project = new Project({ name: req.body.name, user: req.user.id });
  await project.save();
  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.json(projects);
};
