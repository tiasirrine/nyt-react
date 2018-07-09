import React, { Component } from 'react';
import API from '../utils/API';

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    return this.loadArticles();
  }

  loadArticles = () => {
    return API.getSavedArticles()
      .then(result => this.setState({ savedArticles: result.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      //
    );
  }
}

export default Saved;
