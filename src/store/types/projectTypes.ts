import ProjectModel from '../../models/Project';

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

interface CreateProjectAction {
	type: typeof CREATE_PROJECT;
	project: ProjectModel;
}

interface CreateProjectActionError {
	type: typeof CREATE_PROJECT_ERROR;
	err: Error;
}

export type ProjectActionTypes = CreateProjectAction | CreateProjectActionError;
