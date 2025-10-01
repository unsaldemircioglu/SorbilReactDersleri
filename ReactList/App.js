import "./App.css"
function App() {
         const programlama = ["C++","React_Js","Javascript","C#","Python","Sql","T-SQL","R","Java"]
  return (
    <div className="App">
         <ul>
         {programlama.map((programlama)=><li>{programlama}</li>)}
         </ul>
    </div>
  );
}

export default App;
