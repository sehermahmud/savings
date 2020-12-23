import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:4000/seher';

export default function AllSavings() {
  const [savings, setSavings] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setSavings(response.data);
  };

  const removeData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => {
      const del = savings.filter((saving) => saving._id !== id);
      setSavings(del);
    });
  };

  return (
    <table
      class="table table-striped table-bordered"
      id="savings-list"
      width="100%"
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {savings &&
          savings.map(
            ({ _id, name, amount, date, month, year, description }) => {
              return (
                <tr key={_id}>
                  <td>#</td>
                  <td>{name}</td>
                  <td>{amount}</td>
                  <td>
                    <div>
                      <Link
                        className="text-decoration-none"
                        to={'/seherDetials/' + _id}
                      >
                        <button
                          className="btn btn-info"
                          style={{ margin: '0.2em' }}
                        >
                          Details
                        </button>
                      </Link>
                      <Link
                        className="text-decoration-none"
                        to={'/editseher/' + _id}
                      >
                        <button
                          className="btn btn-info"
                          style={{ margin: '0.2em' }}
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        style={{ margin: '0.2em' }}
                        onClick={() => removeData(_id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        <tr>
          <td></td>
          <td>Total:</td>
          {savings &&
            savings.map(({ _id, amount }) => {
              return <td></td>;
            })}
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
