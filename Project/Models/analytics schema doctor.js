const AnalyticsSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  today: {
    appointments: Number,
    revenue: Number,
    patients: Number
  },
  week: {
    appointments: Number,
    revenue: Number,
    patients: Number
  },
  month: {
    appointments: Number,
    revenue: Number,
    patients: Number
  },
  chartData: {
    appointments: [{ day: String, count: Number }],
    revenue: [{ day: String, amount: Number }]
  },
  demographics: {
    ageGroups: [{ range: String, count: Number }],
    gender: { male: Number, female: Number, other: Number }
  }
});