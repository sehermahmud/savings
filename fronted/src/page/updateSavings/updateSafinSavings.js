import React, { Component } from 'react';
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      amount: 0,
      date: 0,
      month: 0,
      year: 0,
      description: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/safin/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          amount: response.data.amount,
          date: response.data.date,
          month: response.data.month,
          year: response.data.year,
          description: response.data.description,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeMonth(e) {
    this.setState({
      month: e.target.value,
    });
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateSavings = {
      name: this.state.name,
      amount: this.state.amount,
      date: this.state.date,
      month: this.state.month,
      year: this.state.year,
      description: this.state.description,
    };

    console.log(updateSavings);

    axios
      .post(
        'http://localhost:4000/safin/update/' + this.props.match.params.id,
        updateSavings
      )
      .then((res) => console.log(res.data));

    window.location = '/safinsavings';
  }

  render() {
    return (
      <div
        className="card"
        elevation={3}
        style={{
          background: 'linear-gradient(45deg, #1de9b6 30%, #e6ee9c 90%)',
        }}
      >
        <div className="card-body" style={{ alignItems: 'center' }}>
          <h3 style={{ color: 'white' }}>Edit Saving</h3>
          <form onSubmit={this.onSubmit}>
            <div class="row">
              <div className="col-md-6 form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  label="your name"
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  value={this.state.amount}
                  label="amount"
                  onChange={this.onChangeAmount}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="number"
                  className="form-control"
                  id="date"
                  value={this.state.date}
                  label="date"
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="col-md-4 form-group">
                <label htmlFor="month">Month</label>
                <input
                  type="number"
                  className="form-control"
                  id="month"
                  value={this.state.month}
                  label="month"
                  onChange={this.onChangeMonth}
                />
              </div>
              <div className="col-md-4 form-group">
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  value={this.state.year}
                  label="year"
                  onChange={this.onChangeYear}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description, Optional</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={this.state.description}
                label="description"
                onChange={this.onChangeDescription}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Savings"
                className="btn btn-info"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
