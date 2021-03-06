import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { isMobile } from 'utils/menuHelper';
import styles from './styles';

const Login = ({
  classes,
  email,
  errorMessage,
  onEmailChange,
  onForgotPassword,
  onPasswordChange,
  onRememberMeChange,
  onRegister,
  onSignIn,
  password,
  rememberMe,
}) => (
  <div
    className={classNames(
      classes.boxContainer,
      isMobile() ? classes.mobileContainer : {},
    )}
  >
    <div className={classes.boxWrapper}>
      <Paper className={classes.paper} elevation={3} square>
    
        <div className={classes.logoContainer1} style={{marginBottom: 0, textAlign: "center"}}>
        <img
            style={{ width: 325, height: 111 }}
            src="https://storage.snappages.site/b909xngy3z/assets/images/5452643_784x268_500.png"
            alt="Client Logo"
          />    
          <div>
            <h3 style={{color: "#9e9e9e"}}>Builder Portal Login</h3>
          </div>
        </div>

        {errorMessage ? (
          <Typography paragraph className={classes.errorMessage}>
            * {errorMessage}
          </Typography>
        ) : null}

        <form>
          <TextField
            margin="normal"
            label="E-mail"
            fullWidth
            defaultValue={email}
            onBlur={onEmailChange}
          />
          <TextField
            margin="normal"
            label="Password"
            fullWidth
            type="password"
            defaultValue={password}
            onBlur={onPasswordChange}
          />

          <div className={classes.buttonsContainer}>
            <div className={classes.checkRememberContainer}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={classes.checkRemember}
                    checked={rememberMe}
                    value="rememberMe"
                    onChange={onRememberMeChange}
                  />
                }
                label="Remember me"
              />
            </div>

            <Button
              variant="contained" color="primary"
              className={classes.boxBtn}
              onClick={onSignIn}
            >
              Login
            </Button>
          </div>
        </form>
      </Paper>
    </div>
    <div className={classes.buttonsDiv}>
      <Button
        onClick={onForgotPassword}
        className={classes.flatButton}
        icon={<Icon className="material-icons">help</Icon>}
      >
        Forgot Password?
      </Button>
      <Button
        onClick={onRegister}
        icon={<Icon className="material-icons">person_add</Icon>}
      >
        Register
      </Button>
    </div>


  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  rememberMe: PropTypes.any.isRequired,
  onRememberMeChange: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(() => styles(), {
  withTheme: true,
})(Login);
