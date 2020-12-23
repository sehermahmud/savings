import React, { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:4000/safin/add';

export default function AddSavings() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [description, setDescription] = useState('');

  const AddSavings = (e) => {
    e.preventDefault();

    const newList = {
      name: name,
      amount: amount,
      date: date,
      month: month,
      year: year,
      description: description,
    };

    console.log(newList);

    axios.post(`${URL}`, newList).then((res) => console.log(res.data));

    window.location = '/safinsavings';
  };

  return (
    <div
      className="card"
      elevation={3}
      style={{
        background: 'linear-gradient(45deg, #1de9b6 30%, #e6ee9c 90%)',
      }}
    >
      <div className="card-body" style={{ alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Add Your Saving</h3>
        <form>
          <div class="row">
            <div className="col-md-6 form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                label="your name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={amount}
                label="amount"
                onChange={(event) => setAmount(event.target.value)}
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
                value={date}
                label="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="month">Month</label>
              <input
                type="number"
                className="form-control"
                id="month"
                value={month}
                label="month"
                onChange={(event) => setMonth(event.target.value)}
              />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                className="form-control"
                id="year"
                value={year}
                label="year"
                onChange={(event) => setYear(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description, Optional</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              label="description"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <button onClick={AddSavings} className="btn btn-success">
            Add Saving
          </button>
        </form>
      </div>
    </div>
  );
}
