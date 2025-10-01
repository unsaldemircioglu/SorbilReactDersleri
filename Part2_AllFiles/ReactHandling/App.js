import logo from './logo.svg';
import './App.css';

function App() { 
         // function tiklaZaman(e){
         //          console.log("Yıl📅🌍 => ", new Date().getFullYear())
         //          console.log("Gün📅 => ",new Date().getDay())
         //          console.log("Ay📅 => ",new Date().getMonth())
         //          console.log("Saat📅 => ",new Date().getHours())
         //          console.log("Bölge📅 => ",new Date().getTimezoneOffset())
         //          e.preventDefault(); // Varsayılan Özellikleri Kapatmamaıza yarar
         //          e.stopPropagation();
         // }

  return (
         <main>
                  {/* <button onClick={function handleClick(e){
                           console.log("Yıl📅🌍 => ", new Date().getFullYear())
                  console.log("Gün📅 => ",new Date().getDay())
                  console.log("Ay📅 => ",new Date().getMonth())
                  console.log("Saat📅 => ",new Date().getHours())
                  console.log("Bölge📅 => ",new Date().getTimezoneOffset())
                  e.preventDefault(); // Varsayılan Özellikleri Kapatmamaıza yarar
                  // e.stopPropagation();
                  }}>
                           Anlık Veriler⌛🌍
                  </button> */}


                  {/* <button onClick={() => {
                           alert("Butona Tıklandı!")
                  }}>🌍</button> */}


                  
                  {/* <form onSubmit={() => alert('Gönderiliyor!')}>
                           <input/>
                           <button>Gönder</button>
                  </form> */}


                  <form onSubmit={e => {
                           e.preventDefault();
                           alert('Gönderiliyor');
                  }}>
                           <input/>
                           <button>Gönder</button>
                  </form>




                  
         </main>
  );
}

export default App;

