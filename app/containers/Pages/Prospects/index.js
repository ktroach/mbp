import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import layoutStyles from 'containers/Layout/styles';
import PageBase from 'components/PageBase';

import styles from './styles';

import Stuff from '../stuff';

class ProspectsPage extends React.PureComponent {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }

  render() {
    const { loading } = this.state;

    return (
      <PageBase title="Prospects" minHeight={500} loading={loading}>
        {!loading && (
          <div>
            <Stuff />
          </div>
        )}
      </PageBase>
    );
  }
}

ProspectsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  { withTheme: true },
)(ProspectsPage);
