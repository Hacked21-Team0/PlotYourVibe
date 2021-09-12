import React, { Component } from "react";
import { getHistoryReport } from "./HistoryData";

export default class History extends Component {
  state = {
    history: getHistoryReport(),
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
              <th>Scale 0-10</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
