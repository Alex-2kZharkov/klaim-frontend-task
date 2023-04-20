import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Routes as AppRoutes } from '../../constants';
import { Profile } from '../Profile';
import { Company } from '../Company';
import { SignIn } from '../SignIn';

import './App.module.scss';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.default} element={<Company />} />
        <Route path={AppRoutes.profile} element={<Profile />} />
        <Route path={AppRoutes.signIn} element={<SignIn />} />
      </Routes>
    </Router>
  );
};
