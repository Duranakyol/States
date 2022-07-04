import { useState }  from 'react';
import './App.css';
import Counter from './components/Counter'

function App() {

  const [name, setName] = useState("Duran");
  const [age, setAge] = useState(27);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [adress, setAdress] = useState({ title: "Berlin" , PLZ: 12353 })

  return (
    <div className="App">
      <div> {name} </div>
      <div> { age } </div>
      <button onClick={() => setName("Kazim")}>NameChange</button><br/>
      <button onClick={() => setAge(31)}>AgeChange</button>

      <hr />
      <h2>Friends :</h2>
      {
        friends.map((friend, index) => {
          return (
            <div> 
              <div key={index}>{friend}</div>
            </div>  
          )
        })
      }
      <button onClick={() => setFriends([...friends, 'Ayse'])}>Add Friend</button><br />
      <h2>ADRESS :</h2>
      <div> {adress.title} {adress.PLZ} </div>
      <button onClick={() => setAdress({ title: "Ankara", PLZ: 71100 })}>AdressChange</button><br />
      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
