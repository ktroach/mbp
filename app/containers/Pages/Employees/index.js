import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import layoutStyles from 'containers/Layout/styles';
import PageBase from 'components/PageBase';

import styles from './styles';

import Stuff from '../stuff';

class EmployeesPage extends React.PureComponent {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }

  render() {
    const { loading } = this.state;

    return (
      <PageBase title="Employees" minHeight={500} loading={loading}>
        {!loading && (
          <div>
            <Stuff />
          </div>
        )}
      </PageBase>
    );
  }
}

EmployeesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  { withTheme: true },
)(EmployeesPage);
