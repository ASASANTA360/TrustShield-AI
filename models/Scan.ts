import mongoose, { Schema, models } from "mongoose";

const ScanSchema = new Schema(
  {
    wallet: {
      type: String,
      required: true,
    },

    network: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    risk: {
      type: String,
      required: true,
    },

    scamProbability: {
      type: Number,
      required: true,
    },

    transactionsAnalyzed: {
      type: Number,
      default: 0,
    },

    threats: {
      type: [String],
      default: [],
    },

    aiSummary: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);


const Scan =
  models.Scan ||
  mongoose.model("Scan", ScanSchema);


export default Scan;