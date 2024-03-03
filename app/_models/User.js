import mongoose, {Schema} from "mongoose";

var userSchema = new Schema({
    listingsImg:{
        type:String,
      
        unique: true,
    },
    placeId:{
        type:String,
        
    },
    name:{
        type:String,
        required:true,
        index:true,
        unique: false,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    mobile:{
        type:Number,
        unique: false,
        required: false,
    
    },
    address:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    zip:{
        type:Number,
    },
    bday:{
        type:Date,
    },
    jobTitle:{
        type:String,
    },
    reThoughtAnniversary:{
        type:Date,
    },
    licNumber:{
        type:String,
    },
    role: {
        type: String,
        default: 'Agent',
        enum: ['Admin', 'Admin Assistant', 'Coordinator', 'Agent'],
    },
    active: {
        type: Boolean,
        default: true,
    },    
    netPaidYtd: {
        type: Number,
    },
    gciYtd: {
        type: Number,
    },
    transactionsYtd: {
        type: Number,
    },
    capYtd: {
        type: Number,
    },
    netPaid2022: {
        type: Number,
    },
    gci2022: {
        type: Number,
    },
    transactions2022: {
        type: Number,
    },
    cap2022: {
        type: Number,
    },
    netPaid2021: {
        type: Number,
    },
    gci2021: {
        type: Number,
    },
    transactions2021: {
        type: Number,
    },
    cap2021: {
        type: Number,
    },
    netPaid2020: {
        type: Number,
    },
    gci2020: {
        type: Number,
    },
    transactions2020: {
        type: Number,
    },
    cap2020: {
        type: Number,
    },
    netPaidAllTimes: {
        type: Number,
    },
    gciAllTimes: {
        type: Number,
    },
    transactionsAllTimes: {
        type: Number,
    },
    capAllTimes: {
        type: Number,
    },
    brokermintId: {
        type: Number,
    },
    currentCapGoal: {
        type: Number,
    },
    avatarUrl: {
        type: Buffer,
    },
    transactions:[{type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', default: null}],
    contacts:[{type: mongoose.Schema.Types.ObjectId, ref: 'Contact', default: null}]
},{
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  });

//Export the model

const User = mongoose.models.User || mongoose.model("User", userSchema );
export default User;