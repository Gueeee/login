import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import useAuth from '../hooks/useAuth';

function Private({ Item }) {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
}

function RoutesApp() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default RoutesApp;
