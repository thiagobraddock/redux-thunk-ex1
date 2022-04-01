import './Posts.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../redux/actions/postAction';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPost: {},
    };
  }

  handleSelectPost = (selectPost) => {
    this.setState(
      {
        selectPost,
      },
      () => {
        this.props.dispatch({ type: 'SELECT_POST', selectPost });
      }
    );
  };

  handleLogin = () => {
    this.props.dispatch({ type: 'LOGIN' });
  };

  render() {
    console.log(this.state);
    return (
      <div className="bg-full">
        <div className="wrapper">
          <h1>POSTS</h1>
          <button onClick={this.handleLogin} className="posts--btnLogin">
            {this.props.logged ? 'DESLOGAR' : 'LOGAR'}
          </button>{' '}
          {this.props.logged && (
            <button
              className="posts--btnShowPosts"
              onClick={() => {
                this.props.dispatch(getAllPosts());
              }}
            >
              CARREGAR POSTS
            </button>
          )}
          <div className="posts--results">
            {!this.props.posts.length
              ? 'Nenhum Dados Encontrado'
              : this.props.posts.map((post) => (
                  <div className="post--item" key={post.id}>
                    <h3>{post.title}</h3>
                    <button onClick={() => this.handleSelectPost(post)}>
                      SELECIONAR
                    </button>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  logged: state.user.logged,
});
export default connect(mapStateToProps)(Posts);
