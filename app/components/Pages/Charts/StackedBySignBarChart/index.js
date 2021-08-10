import React from 'react';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from '../styles';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: -3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: -2000, pv: -9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: -1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: -3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const StackedBySignBarChart = ({ classes, title }) => (
  <Paper
    style={{ width: '100%', height: 400, padding: '30px 30px 30px 0px' }}
    square
  >
    <Typography
      gutterBottom
      variant="h2"
      className={classes.title}
      style={{ paddingLeft: 20, marginBottom: 10 }}
    >
      {title}
    </Typography>
    <ResponsiveContainer>
      <BarChart
        width={600}
        height={300}
        data={data}
        stackOffset="sign"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
        <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
      </BarChart>
    </ResponsiveContainer>
  </Paper>
);

StackedBySignBarChart.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme), {
  withTheme: true,
})(StackedBySignBarChart);
