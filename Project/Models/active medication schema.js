const MedicationSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  name: { type: String, required: true },
  dosage: String,
  frequency: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['active','completed','discontinued'], default: 'active' },
  prescribedBy: String,
  instructions: String,
  reminderEnabled: { type: Boolean, default: false },
  reminderTime: String
});