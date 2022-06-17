import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../hooks/useData';
// import './Dashboard.css'

const DashBoard = () => {
    const [data] = useData([]);
    return (
        <div>
            <div className="line-chart p-5">

                <LineChart width={400} height={270} data={data} className="m-auto">
                    <Line dataKey={'sell'} />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={'sell'} />

                </LineChart>
            </div>

        </div>
    );
};

export default DashBoard;