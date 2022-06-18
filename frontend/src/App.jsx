import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Main from './Main';
import Client from './Client';

import users from './User.json'
import RegisterForm from './RegisterForm';
import Main from './Main';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/register' element={<RegisterForm/>}/>
          {users.map((user)=><Route exact path={'/' +user.url} key={user._id} element={<Client user={user} />}/>)}
        </Routes>
      </Router>
    </>
  );
}

export default App;
