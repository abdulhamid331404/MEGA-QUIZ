import React from 'react';
import { Line, LineChart, XAxis, YAxis,Tooltip, ResponsiveContainer} from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const data = [
        {id:1,name:"React",logo:"https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",total:8},{"id":2,name:"JavaScript","logo":"https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",total:9},{"id":4,name:"CSS","logo":"https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",total:8},{"id":5,name:"Git","logo":"https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",total:11}
    ]
    return (
        <div className='responsive-container'>
            <h1>Total Quiz Chart</h1>
            <ResponsiveContainer  width="90%" height={300} >
                
            <LineChart className='chart-container' data={data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;