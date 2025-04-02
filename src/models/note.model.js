import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const ProjectNote = mongoose.model("ProjectNote", noteSchema);
export default ProjectNote;