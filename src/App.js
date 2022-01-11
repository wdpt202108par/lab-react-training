import React from 'react';
import './App.css';
import Idcard from './idcard/Idcard';

const App = () => {
  return (
    <div>
      <Idcard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      ></Idcard>
      <Idcard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={1.72}
        birth={new Date('1993-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      ></Idcard>
    </div>
  );
};

export default App;
