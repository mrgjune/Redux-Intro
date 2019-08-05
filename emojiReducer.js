const INITIAL_STATE = {mood: "( ◉◞౪◟◉)"};

function emojiReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case "HAPPY":
            return {...state, mood: "⊂◉‿◉つ", color: "green"}
        
        case "SAD":
            return  {...state, mood: "ಠ╭╮ಠ", color: "grey"}

        case "ANGRY":
            return {...state, mood: "(╬ಠ益ಠ)", color: "red"}
        
        case "CONFUSED":
            return {...state, mood: "(⊙_◎)", color:"purple"}

        default: 
            return state
    }
}

function changeColor(){
    const color = store.getState().color
    document.body.style.backgroundColor = color
}
const store = Redux.createStore(emojiReducer)
store.subscribe(changeColor)
