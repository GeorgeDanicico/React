import React from 'react';
import Page from '../../components/Page/Page';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
// import loginActions from 'redux/actions/loginActions';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { APP_PAGE_URLS, BUTTON_TYPES } from '../../utils/constants';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const userInfo = useSelector((state) => state.currentUser.info);
  // const loginError = useSelector((state) => state.login.loginError);
  const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (userInfo && userInfo.firstName && userInfo.lastName) {
  //     dispatch(loginActions.loginSuccess());
  //     history.push(`/${APP_PAGE_URLS.main}`);
  //   } else if (userInfo && Object.keys(userInfo).length > 1) {
  //     history.push(`/${APP_PAGE_URLS.register}`);
  //   }
  // }, [dispatch, history, userInfo]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const usernameValidationRules = {
    required: {
      value: true,
      message: 'error',
    },
  };

  const passwordValidationRules = {
    required: {
      value: true,
      message: 'error',
    },
  };

  return (
    <Page>
      <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="input-container"
            {...register('username', usernameValidationRules)}
            placeholder={'Username'}
            required
            label={'Username'}
            labelIcon={faEnvelope}
            errorMessage={errors.username && errors.username.message}
          />

          <Input
            className="input-container"
            placeholder={'Password'}
            label={'Password'}
            labelIcon={faLock}
            required
            errorMessage={errors.password && errors.password.message}
            type="password"
            {...register('password', passwordValidationRules)}
          />

          <Button text="Sign In" type="submit" buttonType={BUTTON_TYPES.primary} />

          <Button text="Register" buttonType={BUTTON_TYPES.secondary} onClick={() => history.push(`/${APP_PAGE_URLS.register}`)} />

          {/* {loginError && <div className="error-message">{translate('LOGIN.loginError')}</div>} */}
        </form>
      </div>
    </Page>
  );
};

export default Login;