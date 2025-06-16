const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { requireAuth, setupAuthRoutes } = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dreammore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Models
const Service = require('./models/Service');
const Project = require('./models/Project');
const Industry = require('./models/Industry');
const Course = require('./models/Course');

// --- CRUD ROUTES ---
// Services
app.get('/api/services', async (req, res) => {
  res.json(await Service.find());
});
app.post('/api/services', async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json(service);
});
app.put('/api/services/:id', async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(service);
});
app.delete('/api/services/:id', async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Projects
app.get('/api/projects', async (req, res) => {
  res.json(await Project.find());
});
app.post('/api/projects', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});
app.put('/api/projects/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
});
app.delete('/api/projects/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Industries
app.get('/api/industries', async (req, res) => {
  res.json(await Industry.find());
});
app.post('/api/industries', async (req, res) => {
  const industry = new Industry(req.body);
  await industry.save();
  res.json(industry);
});
app.put('/api/industries/:id', async (req, res) => {
  const industry = await Industry.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(industry);
});
app.delete('/api/industries/:id', async (req, res) => {
  await Industry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Courses
app.get('/api/courses', async (req, res) => {
  res.json(await Course.find());
});
app.post('/api/courses', async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});
app.put('/api/courses/:id', async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
});
app.delete('/api/courses/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

setupAuthRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
