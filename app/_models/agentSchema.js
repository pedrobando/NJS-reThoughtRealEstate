const agentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    personalPhone: String,
    systemPhone: String,
    photoUrl: String,
    homeAddress: String,
    birthDate: Date,
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    listings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }],
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
    azureUserId: String,
    brokermintUserId: String,
    dotloopUserId: String,
    active: Boolean,
    fubUserId: String,
    placesId:String
  });
  
  const Agent = mongoose.model('Agent', agentSchema);
  