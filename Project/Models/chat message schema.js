const ChatMessageSchema = new mongoose.Schema({
  requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Emergency' },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  senderName: String,
  message: { type: String, required: true },
  read: { type: Boolean, default: false }
}, { timestamps: true });