import './App.css';
import { useEffect } from 'react';

function App() {
           // Sayfa yüklendiğinde varsayılan temayı ayarla
  useEffect(() => {
    document.body.classList.add('light-theme');
  }, []);

  function handleClick() {
    const bodyClass = document.body.classList;
    if (bodyClass.contains('dark-theme')) {
      bodyClass.replace('dark-theme', 'light-theme');
    } else {
      bodyClass.replace('light-theme', 'dark-theme');
    }
  }

  return (
         <main>
                  <button onClick={handleClick()}>
                           🌗
                  </button>
         </main>
  );
}

export default App;
