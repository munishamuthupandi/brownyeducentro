const MedicalRecordSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
  type: { type: String, enum: ['prescription','lab-report','x-ray','other'], required: true },
  status: { type: String, enum: ['verified','pending','transcribed','rejected'], default: 'pending' },
  title: { type: String, required: true },
  date: Date,
  medications: [{
    name: String,
    dosage: String,
    frequency: String,
    duration: String,
    instructions: String
  }],
  diagnosis: String,
  notes: String,
  images: [String]
}, { timestamps: true });