import React from 'react';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';
import CreditCard from './creditcard/CreditCard';
import Rating from './rating/Rating';
import DriverCard from "./drivercard/DriverCard";
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
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
    </div>
  );
}

export default App;
