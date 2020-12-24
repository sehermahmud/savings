import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography } from '@material-ui/core';

export default class savingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savings: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/safin/' + this.props.match.params.id)
      .then((response) => {
        this.setState({ savings: response.data });
        console.log('saving: ', this.state.savings);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { name, amount, date, month, year, description } = this.state.savings;

    return (
      <div>
        <Card
          style={{
            margin: '0.5em',
            width: '90%',
            margin: '0 auto',
            float: 'none',
            marginBottom: '10px',
          }}
        >
          <CardContent>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              {name}, {amount}
            </Typography>
            <hr />
            <br />
            <div class="form-row">
              <div class="form-group col-md-6">
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Name
                </Typography>
                <Typography variant="h5">{name}</Typography>
                <br />
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Amount
                </Typography>
                <Typography variant="h5">{amount}</Typography>
                <br />
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Description
                </Typography>
                <Typography variant="h5">{description}</Typography>
              </div>
              <div class="form-group col-md-6">
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Date
                </Typography>
                <Typography variant="h5">{date}</Typography>
                <br />
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Month
                </Typography>
                <Typography variant="h5">{month}</Typography>
                <br />
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Year
                </Typography>
                <Typography variant="h5">{year}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
