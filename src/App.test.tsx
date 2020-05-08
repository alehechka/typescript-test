import React from 'react';
import ProjectSummary from './components/projects/ProjectSummary';
import renderer from 'react-test-renderer';

test('Project summary renders', () => {
	const component = renderer.create(<ProjectSummary project={{ title: '', content: '' }} />);
	let tree = component.toJSON();
	expect(tree).toMatchObject;
});
