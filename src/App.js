import logo from './logo.svg';
import './App.css';
import Profilephoto from './components/profile/Profilephoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address'

function App() {
  return (
    <div className="App">

      <FullName />
      <Address />
      <Profilephoto />
    </div>
  );
}

export default App;
