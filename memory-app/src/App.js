import './App.css';
import Card from './Card'

function App() {
  const cardValues = ["Card1", "Card2", "Card3", "Card4", "Card1", "Card2", "Card3", "Card4"];
  var selection1_id = -1;
  var selection2_id = -1;
  var selection1_name = "";
  var selection2_name = "";

  function checkFlipped(props){
    console.log(props.id);
    if (selection1_id < 0){//Change Selection 1
      selection1_id = props.id
      selection1_name = props.cardName
    }else if (selection2_id < 0){//Change Selection 2
      if (props.id == selection1_id){
        selection1_id = -1
        selection1_name = ""
      }else{
        selection2_id = props.id
        selection2_name = props.cardName
      }
    }else if (selection1_name == selection2_name){//Check if both matches

    }
  }

  return (
    <div className="App">
      {cardValues.map((item,idx)=>(<Card id={idx} key={idx} cardText={item} function1={checkFlipped}/>))}
    </div>
  );
}

export default App;
