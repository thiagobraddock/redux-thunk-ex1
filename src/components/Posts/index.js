import './Posts.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../redux/actions/postAction';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-full">
        <div className="wrapper">
          <h1>POSTS</h1>
          <button
            onClick={() => {
              this.props.dispatch(getAllPosts());
            }}
          >
            CLICAR PARA VER POSTS
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Posts);
