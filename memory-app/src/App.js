import './App.css';
import Card from './Card'

function App() {
  const cardValues = ["Card1", "Card2", "Card3", "Card4"];
  return (
    <div className="App">
      {cardValues.map((item,idx)=>(<Card key={idx} cardText={item}/>))}
    </div>
  );
}

export default App;
