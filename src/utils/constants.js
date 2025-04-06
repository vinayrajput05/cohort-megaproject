/**
 * @type {{ADMIN: 'admin', PROJECT_ADMIN: 'project_admin', MEMBER: 'member'}}
 */
export const UserRoleEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

export const AvailableUserRoles = Object.values(UserRoleEnum);

/**
 * @type {{TODO: 'todo', IN_PROGRESS: 'in_progress', DONE: 'done'}}
 */
export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export const AvailableTaskStatuses = Object.values(TaskStatusEnum);
