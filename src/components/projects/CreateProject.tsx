import React from 'react';
import { History } from 'history';
import ProjectModel from '../../models/Project';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { useForm } from 'react-hook-form';

interface Props {
	history: History;
	createProject: (project: ProjectModel) => any;
}

const CreateProject = (props: Props) => {
	const { handleSubmit, register, formState } = useForm<ProjectModel>({ mode: 'onChange' });

	const onSubmit = (values: ProjectModel) => {
		props.createProject(values);
		props.history.push('/');
	};

	return (
		<div className='container'>
			<form className='white' onSubmit={handleSubmit(onSubmit)}>
				<h5 className='grey-text text-darken-3'>Create Project</h5>
				<div className='input-field'>
					<label htmlFor='title'>Title</label>
					<input type='text' id='title' name='title' ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<label htmlFor='content'>Project Content</label>
					<textarea
						id='content'
						name='content'
						ref={register({ required: true })}
						className='materialize-textarea'
					></textarea>
				</div>
				<div className='input-field'>
					<button type='submit' disabled={!formState.isValid} className='btn pink lighten-1 z-depth-0'>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch: (action: any) => any) => {
	return {
		createProject: (project: ProjectModel) => dispatch(createProject(project)),
	};
};

export default connect(null, mapDispatchToProps)(CreateProject);
