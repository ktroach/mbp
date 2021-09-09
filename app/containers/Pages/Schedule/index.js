import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import layoutStyles from 'containers/Layout/styles';
import PageBase from 'components/PageBase';

import styles from './styles';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './scheduler.css';

class SchedulePage extends React.PureComponent {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }

  render() {
    const { loading } = this.state;

    return (
      <PageBase title="Schedule" minHeight={500} loading={loading}>
        {!loading && (
          <div>
            <Calendar className="schedule" />
          </div>
        )}
      </PageBase>
    );
  }
}

SchedulePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  { withTheme: true },
)(SchedulePage);
