import logo from './logo.svg';
import './App.css';
import TestButton from './components/Layout/TestButton';
import ApprovePushNotifications from './components/Layout/ApprovePushNotifications';

function App() {
  console.log("THE PROCESS : ", process.env)
  return (
    <div className="App">
      <ApprovePushNotifications />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <TestButton />
      </header>
    </div>
  );
}

export default App;
