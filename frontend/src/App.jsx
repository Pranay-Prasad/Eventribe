import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Client from './Client';

import users from './User.json'
import RegisterForm from './RegisterForm';
import Main from './Main';
import CAdmin from './components/Client/Admin/CAdmin';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/register' element={<RegisterForm/>}/>
          {users.map((user)=><Route exact path={'/' +user.url} key={user._id} element={<Client user={user} />}/>)}
          {users.map((user)=><Route exact path={'/' +user.url + '/Admin'} key={user._id} element={<CAdmin user={user} />}/>)}
        </Routes>
      </Router>
    </>
  );
}

export default App;
