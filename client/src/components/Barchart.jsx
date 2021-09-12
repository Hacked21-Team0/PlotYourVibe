import React from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/dashboard.css'

const Barchart = () =>{

	const data = [
		{
			type: "Happy",
			scale: 10
		},
		{
			type: "Sad",
			scale: 1
		},
		{
			type: "Depressed",
			scale: 2
		},
		{
			type: "Excited",
			scale: 8
		},
		{
			type: "Irritated",
			scale: 5
		},
		{
			type: "Anxious",
			scale: 7
		},
		{
			type: "Neutral",
			scale: 5
		},
	
	]

	let styles = {
		margin: '20px',
		width: '80%',
		height: '90%',
		backgroundColor: 'yellow',
	  };

	return <div>
		
        <BarChart
          width={window.innerWidth}
		  height={window.innerHeight*.5}

          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" fill="#82ca9d"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="scale" fill="#8884d8" />
        </BarChart>
	</div>
}

export default Barchart