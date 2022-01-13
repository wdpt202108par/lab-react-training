import React from 'react';
import './App.css';
import IdCard from './IdCard/IdCard.js'
import Greetings from './Greetings/Greetings';
import Random from './Random/Random';
import BoxColor from './BoxColor/BoxColor';

function App() {
  return (
    <div className="App">
      
      <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    </div>
  );
}

export default App;
