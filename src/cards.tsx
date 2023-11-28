import React from 'react';
import '../src/cards.scss';

interface CardsProps {
  char: {
    name: string;
    job: string[];
    workplace: string[];
    actor: string;
  };
  key: string;
  id: string;
}

// functional component that takes cardsProps as a prop
const Cards: React.FC<CardsProps> = ({ char, key, id }) => {
  console.log(char);
  return (
    <div className='individual' id={id}>
      <h3>{char.name}</h3>
      {char.job.length > 0 && <p>Job: {char.job[0]}</p>}
      {char.workplace.length > 0 && <p>Workplace: {char.workplace[0]}</p>}
      <p>Actor: {char.actor}</p>
    </div>
  );
};

export default Cards;
