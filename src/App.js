import React from 'react';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';
import './App.css';

function App() {
  return (

    <div className="App">
      <p>hello toi</p>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>


    </div>
  );
}

export default App;
