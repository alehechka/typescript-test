import { ProjectActionTypes, CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../types/projectTypes';
import ProjectModel from '../../models/Project';

interface State {
	projects: [ProjectModel];
}

const initState: State = {
	projects: [
		{
			title: '',
			content: '',
		},
	],
};

const projectReducer = (state: State = initState, action: ProjectActionTypes) => {
	switch (action.type) {
		case CREATE_PROJECT:
			return state;
		case CREATE_PROJECT_ERROR:
			return state;
		default:
			return state;
	}
};

export default projectReducer;
