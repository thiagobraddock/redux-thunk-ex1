import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTopic } from '../redux/actions/newRequest';
import '../css/NewTopic.css';

class NewTopic extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      level: 1,
      thumbnail: '',
      projectFinished: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ?
      target.checked : target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const { addNewTopic, history } = this.props;
    e.preventDefault();
    addNewTopic(this.state);
    history.push('/formsData')
  }

  render() {
    const {
      state: {
        title, level, thumbnail, projectFinished,
      }, handleChange, handleSubmit,
    } = this;
    return (
      <form className="new-topic-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title"
            onChange={handleChange} value={title} />
        </label>
        <label htmlFor="level">
          Level:
          <input type="number" min="1" max="5" name="level"
            id="level" onChange={handleChange} value={level} />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <input type="text" name="thumbnail" id="thumbnail"
            onChange={handleChange} value={thumbnail} />
        </label>
        <label htmlFor="projectFinished">
          Projeto foi finalizado?
          <input
            id="projectFinished"
            type="checkbox"
            name="projectFinished"
            onChange={this.handleChange}
            value={projectFinished}
          />
        </label>
        <button 
          type="submit">Adicionar tópico</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewTopic: (state) => dispatch(addTopic(state)),
});
export default connect(null, mapDispatchToProps)(NewTopic);

NewTopic.propTypes = {
  addNewTopic: PropTypes.func.isRequired,
};