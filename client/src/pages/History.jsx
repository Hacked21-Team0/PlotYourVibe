import React, {Component} from 'react';
import BackendAPI from '../BackendAPI';

// Waiting on Redux //
const PLACEHOLDER_TOKEN = 'd9f33fb636c489e78fc7f11e84101ab0bd95561b';
const PLACEHOLDER_UID = 1;

export default class History extends Component {
    state = {
        history: []
    };

    reloadList = () => {

        BackendAPI.getAllMoods(
            PLACEHOLDER_TOKEN,
            PLACEHOLDER_UID
        ).then((response) => {
            console.log(response);
            this.setState({history: response.data});
        });

    };

    componentDidMount() {
        this.reloadList();
    }

    handleDelete = (moodID) => {
        BackendAPI.deleteMood(
            PLACEHOLDER_TOKEN,
            moodID
        ).then(this.reloadList);
    };

    render() {
        const {length: count} = this.state.history;
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
                    Showing {count} moods entries in the database{' '}
                    <span className="badge badge-secondary">history for last 2 weeks</span>
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
                    {this.renderMoods()}
                    </tbody>
                </table>
            </div>
        );
    }

    renderMoods() {
        return this.state.history.map((data) => (
            <tr key={data.id}>
                <td>{data.mood}</td>
                <td>{data.scale}</td>
                <td>{data.description}</td>
                <td>{data.date}</td>
                <td>
                    <button
                        onClick={() => this.handleDelete(data.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    }
}
