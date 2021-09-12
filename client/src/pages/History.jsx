import React, { Component } from "react";
import { getHistoryReport } from "./HistoryData";

export default class History extends Component {
  state = {
    history: getHistoryReport(),
  };

  handleDelete = (historyData) => {
    const editedHistoryList = this.state.history.filter(m => m._id !== historyData._id);
    this.setState({ history: editedHistoryList })

  };
  render() {
    return (
      <div>
        <h2>
          Dashboard{" "}
          <span class="badge badge-secondary">history for last 2 weeks</span>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Mood</th>
              <th>Scale %</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.history.map((data) => (
              <tr>
                <td>{data.mood}</td>
                <td>{data.scale}</td>
                <td>{data.description}</td>
                <td>{data.date}</td>
                <td><button onClick={() => this.handleDelete(data)} 
                className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
