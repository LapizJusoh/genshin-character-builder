import { useState, useEffect } from 'react';
import './Characters.css';

export default function Characters() {
  const [allChara, setAllChara] = useState(null);
  const url = `https://genshin.jmp.blue/characters/`;

  useEffect(()=> { // on Mount
  
  }, [])

  function updateAllChara() {
    fetch(url)
    .then(response => response.json())
    .then(data => setAllChara(() => data))
    .catch(err => console.log(err));

    console.log(allChara);
  }

  return (
    <main id="characters">
      <div className='container'>
        <h1>Characters</h1>
        <button onClick={updateAllChara}>Update from GenshinDev API</button>
        <ul>
          {(allChara!==null) ? allChara.map((chara) => <li key={chara}><img src={url+chara+'/icon'}></img><p>{chara}</p></li>) : ''}
        </ul>
      </div>
    </main>
  );
}
