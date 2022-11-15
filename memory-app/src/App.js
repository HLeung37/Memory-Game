import './App.css';
import Card from './Card'

function App() {
  const cardValues = ["Card1", "Card2", "Card3", "Card4", "Card1", "Card2", "Card3", "Card4"];
  var selected_item_id = -1;
  var selected_item_name = "";

  function checkFlipped(card){
    var props = card.props
    console.log(props.id);
    if (selected_item_id < 0){//Change Selection 1
      selected_item_id = props.id
      selected_item_name = props.cardName
    }else{//Change Selection 2
      if (props.id == selected_item_id){
        selected_item_id = -1
        selected_item_name = ""
      }else{

      }
    }
  }

  return (
    <div className="App">
      {cardValues.map((item,idx)=>(<Card id={idx} key={idx} cardText={item} function1={checkFlipped}/>))}
    </div>
  );
}

export default App;
