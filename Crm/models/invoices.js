const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
    },
    address:{
      type:String
    },
    phone: {
      type: Number,
      unique: true,
    },
    product: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    date: {
      type: String,
    },
    Id: {
      type: String,
    },
    InvoiceNo:{
      type:String
    },
    serialNo:{
     type:String
    },
    isAquakartUser: {
      default:false,
      type: Boolean,
    },
    Type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
