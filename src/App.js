import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Confirmation from './components/Confirmation/Confirmation';
import Doctors from './components/Doctors/Doctors';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Pharmacy from './components/Pharmacy/Pharmacy';
import Service from './components/Service/Service';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import SingleService from './components/SingleService/SingleService';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/pharmacy">
              <Pharmacy></Pharmacy>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/service/:id">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="/confirmation">
              <Confirmation></Confirmation>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <hr />
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
