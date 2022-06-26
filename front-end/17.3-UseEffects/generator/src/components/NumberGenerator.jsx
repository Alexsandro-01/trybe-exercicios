import React, { useEffect, useState } from 'react';

function NumberGenerator() {
  const [number, setNumber] = useState(0);
  const [acerto, setAcerto] = useState(false);

  function multiplo(num) {
    if (num % 3 === 0 || num % 5 === 0) {
      setAcerto(true);
    }
    else {
      setAcerto(false);
    } 
  }

  useEffect(() => {
    if (acerto) {
      setTimeout(() => setAcerto(false), 4000);
    }
  }, [acerto])
  
  useEffect(() => {
    const timer = setInterval(() => {
      const rnd = Math.floor(Math.random() * 100);
      setNumber(rnd);
      multiplo(rnd);
    }, 10000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <section>
      <h2>{ number }</h2>
      {
        acerto && <p>Acerto</p>
      }
    </section>
  );
}

export default NumberGenerator;
