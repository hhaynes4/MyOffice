import { useState, useEffect } from 'react';

import './App.scss';
import Cards from '../src/cards'
import {CardsType} from '../src/cards'

export default function App() {
  const [characters, setChars] = useState<CardsType[]>([]);

  const fetchingData = async () => {
    try {
      const response = await fetch('https://theofficeapi.dev/api/characters', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const parsedData = await response.json();
      setChars(parsedData.results);
    } catch {
      throw new Error('error fetching office data');
    }
  };

  useEffect(()=> {
    fetchingData();
  }, []);

  const charactersArr:JSX.Element[] = [];
  for (let i = 0; i < characters.length; i++) {
    charactersArr.push(<Cards char={characters[i]} key={'char'+i} id={'char'+i}/>)
  }

  console.log('char arr', charactersArr)

  return (
    <div id="title">
      <h1> Welcome to your Office</h1>
      <div id="container">
      {charactersArr}
      </div>
    </div>
  );
}
