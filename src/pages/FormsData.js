import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/NewTopic.css';

class FormsData extends Component {

  render() { 
    const { topic } = this.props;
    const {level, projectFinished, thumbnail, title} = topic;
    console.log(topic)
    return (
      <form className="new-topic-form">
        <label htmlFor="title">
          Title:
          <input readonly name="title" id="title"
          value={title} />
        </label>
        <label htmlFor="level">
          Level:
          <input readonly name="level"
            id="level" value={level} />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <img src={thumbnail} alt='imagem' width='250px' height='250px'/>
        </label>
        <label htmlFor="projectFinished">
         Status do Projeto
          <input
            id="projectFinished"
            type="text"
            name="projectFinished"
            value={projectFinished ? "Finalizado" : "Em Andamento"}
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  topic: state.topicReducer.topic,
});

export default connect(mapStateToProps)(FormsData);

FormsData.propTypes = {
  topic: PropTypes.instanceOf(Object).isRequired,
};