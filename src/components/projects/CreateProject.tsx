import React, { Component } from "react";
import { History } from "history";
import ProjectModel from "../../models/Project";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

interface Props {
    history: History
    createProject: (project: ProjectModel) => any
}

export class CreateProject extends Component<Props> {
  state: ProjectModel = {
    title: "",
    content: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.createProject(this.state);
    console.log(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: (action: any) => any) => {
  return {
    createProject: (project: ProjectModel) => dispatch(createProject(project)) 
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);
