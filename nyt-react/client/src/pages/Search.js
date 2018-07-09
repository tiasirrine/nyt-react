import React, { Component } from 'react';
import Button from '../components/Form/Button';
import DropDown from '../components/Form/DropDown';
import Input from '../components/Form/Input';
import API from '../utils/API';
import { EndYear } from '../components/Form/EndYear';
import { StartYear } from '../components/Form/StartYear';
import Wrapper from '../components/Wrapper/Wrapper';
import { Fragment } from 'react';
import Article from '../components/Article/Article';

class Search extends Component {
  state = {
    search: '',
    record: 1,
    start: 0,
    end: 0,
    returnedArticles: []
  };

  //componentDidMount() {
  //this.loadArticles();
  //}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticles = event => {
    const copy = this.state.returnedArticles.slice();
    const savedArticle = copy[event.target.getAttribute('data-id')];
    const savedObject = {};
    savedObject.title = savedArticle.headline.main;
    savedObject.url = savedArticle.web_url;
    savedObject.date = savedArticle.pub_date;
    savedObject.summary = savedArticle.snippet;

    API.saveArticle(savedObject)
      .then(res => {
        this.setState({
          returnedArticles: copy
        });
        console.log(this.state.returnedArticles);
      })
      .catch(err => console.log(err, savedObject));
  };

  searchArticles = event => {
    event.preventDefault();
    API.scrape(this.state)
      .then(res => {
        this.setState({
          returnedArticles: res.data.response.docs.slice(0, this.state.record)
        });
        console.log(this.state.returnedArticles);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <form>
          <Input name="search" className="form-control" onChange={this.handleInputChange} />
          <DropDown name="record" onChange={this.handleInputChange} />
          <StartYear
            type="text"
            minLength="8"
            maxLength="8"
            className="form-control"
            id="start-year"
            name="start"
            onChange={this.handleInputChange}
          />
          <EndYear
            type="text"
            minLength="8"
            maxLength="8"
            className="form-control"
            id="end-year"
            name="end"
            onChange={this.handleInputChange}
          />
          <Button onClick={this.searchArticles} />
        </form>
        <Wrapper>
          {this.state.returnedArticles.map((indArticle, index) => (
            <Article
              _id={indArticle._id}
              key={indArticle._id}
              date={indArticle.pub_date}
              title={indArticle.headline.main}
              url={indArticle.web_url}
              summary={indArticle.snippet}
              saveArticle={this.saveArticle}
              index={index}
              onClick={this.saveArticles}
            />
          ))}
        </Wrapper>
      </Fragment>
    );
  }
}

export default Search;
