
import './App.css';
import TicketBooking from './component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from './component/Signuppage';
import Login from './component/Loginpage';
import Detailspage from './component/Detailspage';
import Get from './component/Get';
import YourBookings from './component/Delete';
//import Delete from './component/Delete';
//import TicketBooking from './component/Home';
//import Home from './component/Home';

function App() {
  return (
    <div className="App">
    <header className='App-header'>
    <BrowserRouter>
    <Routes>
    <Route path='/Signup' element={<SignUp/>}></Route>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Home' element={<TicketBooking/>}></Route>
    <Route path='/Detailspage' element={<Detailspage/>}></Route>
    <Route path='/Get' element={<Get/>}></Route>
    <Route path='/del' element={<YourBookings/>}></Route>
    </Routes>
    </BrowserRouter>
    </header>
    </div>
  );
}

export default App;
