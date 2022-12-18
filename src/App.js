import oleg from './oleg.jpg';
import './App.css';
import {useState} from "react";

function App() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [signUp, setSignUp] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignUp(true);
    }

  return (
    <div className="App">
      <header className="App-header">
          {signUp ?
              <div>
                  <h1 style={{fontSize: '100px'}}>Hello {login}</h1>
                  <button onClick={() => setSignUp(false)} style={{height: '40px', width: '200px'}}>Sign Out</button>
              </div> :
           <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
              <label>
                  <input required type="text" name="login" onChange={(e) => setLogin(e.target.value)} placeholder="Login"/>
              </label>
              <label>
                  <input required type="text" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
              </label>
              <input type="submit" value="Submit" style={{marginTop: '10px'}}/>
          </form>}
      </header>
    </div>
  );
}

export default App;
