import asyncHandler from "../utils/async-handler";

export const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
  registrationValidation(body);
});

export const loginUser = asyncHandler(async (req, res) => {});


// Project:
// getProjects
// getProjectById
// createProject
// updateProject
// deleteProject
// addMemberToProject
// getProjectMembers
// updateProjectMembers
// updateMemberRole
// deleteMember