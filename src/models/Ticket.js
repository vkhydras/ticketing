"use server"
import mongoose from 'mongoose';

// Connect to MongoDB using the provided URI
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Db connected'))
  .catch((err) => console.error('Error connecting to database:', err));

// Use global Promise for mongoose
mongoose.Promise = global.Promise;

// Define the schema for tickets
const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  priority: Number,
  progress: Number,
  status: String,
  active: Boolean,
}, {
  timestamps: true,
});

// Create or retrieve the Ticket model
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;
