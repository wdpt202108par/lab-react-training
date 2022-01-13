import React from 'react';

const Greetings = ({ lang, children }) => {
  let greeting = {
    fr: 'Bonjour',
    de: 'Hallo',
    es: 'Hola',
    en: 'Hello',
  };
  return (
    <div>
      <p>
        {greeting[lang]} {children}
      </p>
    </div>
  );
};

export default Greetings;
