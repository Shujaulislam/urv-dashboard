import React from 'react';
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart as RechartsLineChart
} from 'recharts';

const data = [
  { month: 'Jan', members: 300 },
  { month: 'Feb', members: 420 },
  { month: 'Mar', members: 610 },
  { month: 'Apr', members: 700 },
  { month: 'May', members: 810 },
];

function LineChart() {
  return (
    <div style={{ width: '100%', height: 300 }}> 
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }} 
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#ccc" 
          />
          <XAxis 
            dataKey="month" 
            stroke="#888888"
            tick={{ fill: '#666' }}
          />
          <YAxis 
            stroke="#888888"
            tick={{ fill: '#666' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <Line
            type="monotone"
            dataKey="members"
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ 
              r: 4,
              fill: '#3b82f6',
              strokeWidth: 2
            }}
            activeDot={{
              r: 6,
              fill: '#fff',
              stroke: '#3b82f6',
              strokeWidth: 2
            }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
