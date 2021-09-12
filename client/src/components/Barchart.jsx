import React, {Component} from 'react';
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import '../styles/dashboard.css';
import BackendAPI from '../BackendAPI';

// Waiting on Redux //
const PLACEHOLDER_TOKEN = 'd9f33fb636c489e78fc7f11e84101ab0bd95561b';
const PLACEHOLDER_UID = 1;

class Barchart extends Component {

    state = {
        history: []
    };


    styles = {
        margin: '20px',
        width: '80%',
        height: '90%',
        backgroundColor: 'yellow',
    };

    refreshMoods = () => {

        BackendAPI.getAllMoods(
            PLACEHOLDER_TOKEN,
            PLACEHOLDER_UID
        ).then((response) => {
            console.log(response);
            this.setState({history: response.data});
        });

    };

    componentDidMount() {
        this.refreshMoods();
    }

    render() {
        return (
            <div>

                <BarChart
                    width={window.innerWidth * .95}
                    height={window.innerHeight * .8}

                    data={this.state.history}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="timestamp" fill="#82ca9d" />
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="scale" fill="#8884d8"/>
                </BarChart>
            </div>
        );
    }
}

export default Barchart;
