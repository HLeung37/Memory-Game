import './App.css';
import Card from './Card'

function App() {
  var cardValues = ["Card1", "Card2", "Card3", "Card4", "Card1", "Card2", "Card3", "Card4"];
  var selected_item = null;
  var debounce = false

  function randomize(){
    for (var i = cardValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]];
    }
  }

  function checkFlipped(card){
    if (debounce == true){
      return
    }else{
      card.setState(state => ({isFlipped: !state.isFlipped}));
    }
    var props = card.props
    if (selected_item == null){//Change Selection 1
      selected_item = card
    }else{//Change Selection 2
      if (props.id == selected_item.props.id){
        selected_item = null
        console.log("Set back null")
      }else{
        if (props.cardText == selected_item.props.cardText){
          console.log("Match")
          card.state.forceUpFunction()
          selected_item.state.forceUpFunction()
          selected_item = null
        }else{
          console.log("Mismatch")
          debounce = true
          const flipDownDelay = setTimeout(function(){
            card.state.flipDown()
            selected_item.state.flipDown()
            selected_item = null
            debounce = false
          },1500)
        }
      }
    }
  }

  randomize()
  return (
    <div>
      <div className = "card-grid">
        {cardValues.map((item,idx)=>(<Card id={idx} key={idx} cardText={item} function1={checkFlipped}/>))}
      </div>
    </div>
  );
}

export default App;
