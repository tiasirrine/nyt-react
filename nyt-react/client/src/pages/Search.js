import React, { Component } from 'react';
import Button from '../components/Form/Button';
import DropDown from '../components/Form/DropDown';
import Input from '../components/Form/Input';
import API from '../utils/API';
import { EndYear } from '../components/Form/EndYear';
import { StartYear } from '../components/Form/StartYear';

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

  //loadArticles = () = {
  //API.getArticles()
  //}

  render() {
    console.log(this.state);
    return (
      <form>
        <Input onChange={this.handleInputChange} />
        <DropDown />
        <StartYear
          type="text"
          minLength="8"
          maxLength="8"
          className="form-control"
          id="start-year"
          name="StartYear"
          onChange={this.handleInputChange}
        />
        <EndYear
          type="text"
          minLength="8"
          maxLength="8"
          className="form-control"
          id="end-year"
          name="endYear"
          onChange={this.handleInputChange}
        />
        <Button onClick={this.searchArticles} />
      </form>
    );
  }
}

export default Search;
