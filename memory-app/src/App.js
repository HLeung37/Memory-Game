import './App.css';
import Card from './Card'

function App() {
  const cardValues = ["Card1", "Card2", "Card3", "Card4", "Card1", "Card2", "Card3", "Card4"];
  var selected_item = null;

  function checkFlipped(card){
    var props = card.props
    //console.log(props.id);
    if (selected_item == null){//Change Selection 1
      selected_item = card
    }else{//Change Selection 2
      if (props.id == selected_item.props.id){
        selected_item = null
        console.log("Flip back")
      }else{
        if (props.cardName == selected_item.props.cardName){
          console.log("Same card")
        }
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
