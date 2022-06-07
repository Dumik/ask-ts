import { Routes as Switch, Route } from 'react-router-dom';
import { SignUpPage, HomePage } from '../pages';
import { AUTH, HOME } from './path';

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
      <Route path={AUTH} element={<SignUpPage />} />
      <Route path="*" element={<HomePage />} />
    </Switch>
  );
};
