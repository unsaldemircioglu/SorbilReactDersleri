import '../App.css';
import '../Style/style.sass';

function Tekrar() {
         const sayfalar = ["Anasayfa","Hakkımızda","Ilteisim","Cozumlerimiz"];
         function ClickPoint(e){
                  e.preventDefault();
                  alert("Merhaba, Dünya")
         };
         function nowTime(){
                  alert(new Date())
         };
         // function HTML_Kodum(){
         //          console.log(document.cookie) // Bana Kodumun Body Kısmını Verir misin?
         // };
           function HTML_Kodum(){
                  console.log(document.innerHTML="Unsal Demircioglu") // Bana Kodumun Body Kısmını Verir misin?
         };
  return (
         <main className='ubuntu_font'>

                  <header className='container'>
                           <nav className='item'>
                                     <h5 id='title'>World Wide Web</h5> 
                           </nav>

                           <nav className='item'>
                                    <ul>
                                             {sayfalar.map((sayfalar) => 
                                             <li><a href='#' target='_blank'>{sayfalar}</a></li>
                                             )}
                                    </ul>
                           </nav>

                            <nav className='item'>
                                     <button onClick={ClickPoint} className='btn'>
                                             Tıkla
                                     </button>
                                        <nav className='item'>
                                     <button onClick={nowTime} className='btn'>
                                             Zaman
                                     </button>
                           </nav>
                              <nav className='item'>
                                     <button onClick={HTML_Kodum} className='btn'>
                                             HTML
                                     </button>
                           </nav>
                              <nav className='item'>
                                     <button onClick={HTML_Kodum} className='btn'>
                                             HTML
                                     </button>
                           </nav>
                              <nav className='item'>
                                     <button onClick={HTML_Kodum} className='btn'>
                                             HTML
                                     </button>
                           </nav>
                           </nav>

                  </header>
         </main>
  );
}

export default Tekrar;
