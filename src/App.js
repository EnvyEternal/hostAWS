import oleg from './oleg.jpg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [signUp, setSignUp] = useState(false);
    const [profile, setProfile] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://m9y45x41u8.execute-api.us-east-1.amazonaws.com/dev/signup', {
                login: login,
                password: password,
            });
            if(response.data.uuid) {
                setProfile(response.data);
                setSignUp(true);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const signOut = () => {
        setSignUp(false);
        setProfile(null);
    }

  return (
    <div className="App">
      <header className="App-header">
          {signUp ?
              <div>
                  <h1 style={{fontSize: '50px'}}>Hello {profile.login}</h1>
                  <div>Your ID: {profile.uuid}</div>
                  <button onClick={signOut} style={{height: '40px', width: '200px', marginTop: '20px'}}>Sign Out</button>
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
