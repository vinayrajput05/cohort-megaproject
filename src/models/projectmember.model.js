import mongoose, { Schema } from "mongoose";
import {
  AvailableUserRoles,
  UserRolesEnum,
} from "../../../29march/src/utils/constants";

const projectMemberSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    role: {
      type: String,
      enum: AvailableUserRoles,
      default: UserRolesEnum.MEMBER,
    },
  },
  { timestamps: true },
);

const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);
export default ProjectMember;
