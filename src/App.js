import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import SignUp from './pages/authontication/SignUp';
import SignIn from './pages/authontication/SignIn';
import Account from './pages/Account';

function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
