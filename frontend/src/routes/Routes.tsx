import { Routes as Switch, Route } from 'react-router-dom';
import { SignUpPage, HomePage, SignInPage, ProfilePage } from '../pages';
import { SIGN_UP, SIGN_IN, HOME, PROFILE } from './path';

export const Routes = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={PROFILE} element={<ProfilePage />} />
        <Route path="*" element={<ProfilePage />} />
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
