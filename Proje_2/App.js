import logo from './logo.svg';
import './App.css';

import { Dices } from 'lucide-react';
import { AArrowUp } from 'lucide-react';
import { Pi } from 'lucide-react';
import { LampFloor } from 'lucide-react';
import { SunSnow } from 'lucide-react';
import { WholeWord } from 'lucide-react';
import { CaseUpper } from 'lucide-react';

function App() {
         let randomNumber = Math.random();
         let x = Math.max(10,20)
         let y = Math.PI
         let c = Math.floor(23)

  return (
         <main>
                  <div className='container'>
                           <div className='item'>
                                    <p><span></span> <Dices color='red' size={30}/></p>
                                 <h1>{randomNumber}</h1> 
  
                           </div>

                               <div className='item'>
                                    <p><span></span> < AArrowUp color='blue' size={30}/></p>
                                 <h1>{x}</h1> 
  
                           </div>



                           <div className='item'>
                                    <p><span></span> <Pi color='yellow' size={30}/></p>
                                 <h1>{y}</h1> 
  
                           </div>

                           <div className='item'>
                                    <p><span></span> <LampFloor color='green' size={30}/></p>
                                 <h1>{c}</h1> 
  
                           </div>


                            <div className='item'>
                                    <p><span></span> <SunSnow color='yellow' size={30}/></p>
                                 <h1>{Date()}</h1> 
  
                           </div>

                             <div className='item'>
                                    <p><span>Şuan Anın Kelime Sayısı; <WholeWord color='red' size={30}/></span></p>
                                 <h1>{Date().length}</h1> 
  
                           </div>

                            <div className='item'>
                                    <p><span>Büyük Harf;</span> <CaseUpper color='azure' size={30}/></p>
                                 <h1>{Date().toUpperCase()}</h1> 
                           </div>

                               <div className='item'>
                                    <p><span>Küçük Harf;</span></p>
                                 <h1>{Date().toLowerCase()}</h1> 
                           </div>

                                <div className='item'>
                                    <p><span>Küçük Harf;</span></p>
                                 <h1>{Date().substring()}</h1> 
                           </div>

                  </div>
         </main>
  );
}

export default App;
