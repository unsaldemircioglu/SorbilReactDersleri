import '../App.css';
import '../Style/style.sass';
import { useState } from 'react';
import {createRoot} from 'react-dom/client'


function Hesapla() {
         const [count, setCount] = useState(0);
         const [todos,setTodos] = useState([]);
         const calculation = expensiveCalculation(count);

         const increment = () => { 
                  setCount((c) => c + 1);
         };

         const addTodo = () => {
                  setTodos((t) => [...t, "New Todo"]);
         };

  return (
         <div>
                  <h2>Todos: </h2>
                  {todos.map((todo,index) => {
                           return <p key={index}>{todo}</p>
                  })}
                  <button onClick={addTodo}>Add Todo(Todo Ekle)</button>

                  <hr/>
                  <br/>

                  <div>
                           Count: {count}
                           <button onClick={increment}>+(Arttır)</button>
                           <h2>Calcutaion(Hesaplama)</h2>
                           {calculation}

                  </div>
    
         </div>
  
);
}
 const expensiveCalculation = (num) => {
         for(let i = 0; i < 1000000; i ++){
                  num += 1;
         }
return num;
};

export default Hesapla;
