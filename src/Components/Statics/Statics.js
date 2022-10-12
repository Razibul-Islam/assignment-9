import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statics = () => {
  const {data} = useLoaderData()
  // console.log(data);





    return (
      <div>
        <ResponsiveContainer className="mx-auto my-16" width={"90%"} height={500}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="name"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statics;