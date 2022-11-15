import './App.css';
import Card from './Card'

function App() {
  var cardValues = ["Card1", "Card2", "Card3", "Card4", "Card1", "Card2", "Card3", "Card4"];
  var selected_item = null;
  var cards = [];
  var card_test = null;
  var debounce = false;

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
    var states = card.state
    if (selected_item == null){//Change Selection 1
      selected_item = card
    }else{//Change Selection 2
      if (props.id == selected_item.props.id){
        selected_item = null
        console.log("Set back null")
      }else{
        if (states.cardText == selected_item.state.cardText){
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

  function logCard(card,id){
    cards[id] = card
  }

  function newGame(){
    randomize()
    cards.forEach((card, idx) => {
      card.state.flipDown()
      card.state.changeText(cardValues[idx])
      card.state.reset()
    });
  }
  randomize()
  return (
    <div>
    <button className="newGame" onClick={newGame}>New Game</button>
      <div className = "card-grid">
        {cardValues.map((item,idx)=>(cards[idx] = <Card id={idx} key={idx} cardText={item} function1={checkFlipped} function2={logCard}/>))}
      </div>

    </div>
  );
}

export default App;
