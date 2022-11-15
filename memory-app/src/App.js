import './App.css';
import Card from './Card'

function App() {
  const cardValues = ["Card1", "Card2", "Card3", "Card4", "Card1", "Card2", "Card3", "Card4"];
  const selection1 = "";
  const selection2 = "";

  function printFlipped(props){
    console.log(props.cardText);
    if (selection1 == ""){//Change Selection 1

    }else if (selection2 == ""){//Change Selection 2

    }else{//Check if both matches

    }
  }

  return (
    <div className="App">
      {cardValues.map((item,idx)=>(<Card key={idx} cardText={item} function1={printFlipped}/>))}
    </div>
  );
}

export default App;
