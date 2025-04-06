import mongoose, { Schema } from "mongoose";

const subtaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      tyoe: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Subtask = mongoose.model("Subtask", subtaskSchema);
export default Subtask;
