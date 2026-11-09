const mongoose = require('mongoose');

const MaintenanceTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  room: { type: String, required: true }, // e.g., Kitchen, Bathroom
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MaintenanceTask', MaintenanceTaskSchema);
