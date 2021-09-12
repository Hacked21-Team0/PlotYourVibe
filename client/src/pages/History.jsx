import React, { Component } from "react";
import { getHistoryReport } from "./HistoryData";

export default class History extends Component {
  state = {
    history: getHistoryReport(),
  };

  handleDelete = (historyData) => {
    const editedHistoryList = this.state.history.filter(
      (m) => m._id !== historyData._id
    );
    this.setState({ history: editedHistoryList });
  };

  render() {
    const { length: count } = this.state.history;
    if (count === 0)
      return (
        <h5>There are no mood entries. Try it. Tell us about your mood.</h5>
      );

    const thisPageCSS = {
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
    };

    return (
      <div>
        <h5 style={thisPageCSS}>
          Showing {count} moods entries in the database{" "}
          <span class="badge badge-secondary">history for last 2 weeks</span>
        </h5>
        <table style={thisPageCSS} className="table">
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
                <td>
                  <button
                    onClick={() => this.handleDelete(data)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
