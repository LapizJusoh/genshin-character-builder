import "../App.css";

export default function Header( { goToHome, goToCharacters, goToLogIn } ) {
  return (
    <header>
      <div className="container">
        <h1>GenshinDB</h1>
        <nav>
          <ul>
            <li>
              <button onClick={goToHome}>Home</button>
            </li>
            <li>
              <button onClick={goToCharacters}>Characters</button>
            </li>
            <li>
              <button onClick={goToLogIn}>Log In</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
