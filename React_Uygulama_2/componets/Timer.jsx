import React from 'react'
import { useState,useEffect } from 'react';

function Timer() {
         const [count,setCount] = useState(0);

         useEffect(() => {
                  setTimeout(() => {
                           setCount((count) => count + 1);
                  }, 100000);
         });
         return (
    <div>

<h1>Anlık SetTime</h1>
<span>
         <h1>
                  {count}    
         </h1>
         </span> 
    </div>
  )
}

export default Timer
