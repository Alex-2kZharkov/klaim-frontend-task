import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { Profile } from '../Profile';
import { Company } from '../Company';
import { SignIn } from '../SignIn';

import './App.module.scss';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.default} element={<Company />} />
        <Route path={ROUTES.profile} element={<Profile />} />
        <Route path={ROUTES.signIn} element={<SignIn />} />
      </Routes>
    </Router>
  );
};
