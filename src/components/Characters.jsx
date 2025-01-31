import { useState, useEffect } from 'react';
import './Characters.css';

export default function Characters() {

  const [allChara, setAllChara] = useState(null);

  useEffect(()=> { // on Mount
  
  }, [])

  return (
    <main id="characters">
      <div className='container'>
        <h1>Characters</h1>
        <button>Update from GenshinDev API</button>
        <ul>
          <li>Test</li>

        </ul>
      </div>
    </main>
  );
}
