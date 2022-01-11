import React from 'react';
import IdCard from './idcard/IdCard';
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


    </div>
  );
}

export default App;
