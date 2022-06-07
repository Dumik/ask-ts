import { Routes as Switch, Route } from 'react-router-dom';
import { SignUpPage, HomePage, SignInPage } from '../pages';
import { SIGN_UP, SIGN_IN, HOME } from './path';

export const Routes = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={HOME} element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={HOME} element={<HomePage />} />
      <Route path={SIGN_UP} element={<SignUpPage />} />
      <Route path={SIGN_IN} element={<SignInPage />} />
      <Route path="*" element={<HomePage />} />
    </Switch>
  );
};
