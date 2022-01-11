import React from 'react';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Dolores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Dolores</Greetings>
      <Random min={1} max={6}/>
      <BoxColor r={128} g={255} b={25} />
    </div>
  );
}

export default App;
