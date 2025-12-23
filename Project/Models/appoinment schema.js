const AppointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  duration: { type: Number, default: 30 },
  type: { type: String, enum: ['online', 'in-person'] },
  status: { type: String, enum: ['pending','upcoming','completed','cancelled'], default: 'pending' },
  fee: Number,
  symptoms: String,
  notes: String,
  diagnosis: String,
  prescriptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'MedicalRecord' },
  videoCallLink: String,
  cancellationReason: String
}, { timestamps: true });