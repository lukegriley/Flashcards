import {useState, useEffect} from "react";
import {AiFillDelete} from 'react-icons/ai';



function Deck(props) {
    const initCardValues = props.numbers.map(element => 
        ({
            front:"",
            back:"",
            starred:false,
            score:0
        })
        
    );

    const [cardValues,setCardValues] = useState(initCardValues);
    var listItems = cardValues.map((number,index) =>
        <div key={index}>
            {index+1}
            <input className={"front-input-"+index}
                placeholder="" onChange={(e) => handleChange(index, e)}
                name="front"
            />
            
            <input className={"back-input-"+number.toString}
                placeholder="" onChange={(e) => handleChange(index, e)}
                name="back"
            />
            <Button variant="outlined" startIcon={<AiFillDelete/>}></Button>
        </div>
    );

    function handleChange(num,e) {
        const {name,value} = e.target;
        const nextCardValues = cardValues.map((c, i) => {
            if (i === num) {
              var changed = c;
              changed[name] = value;
              return changed;
            } else {
              return c;
            }
          });
        setCardValues(nextCardValues);
        console.log(cardValues);
    }

    function addCard() {
        // let number = cardValues.length;
        // let index = number -1;
        // listItems = [...listItems,<div key={number}>
        //     {number}
        //     <input className={"front-input-"+index}
        //         placeholder="" onChange={(e) => handleChange(index, e)}
        //         name="front"
        //     />
            
        //     <input className={"back-input-"+number.toString}
        //         placeholder="" onChange={(e) => handleChange(index, e)}
        //         name="back"
        //     />
        // </div>]
        console.log("hi");
        setCardValues([...cardValues,{
            front:"",
            back:"",
            starred:false,
            score:0
        }]);
        console.log("CV:"+cardValues.length);
        console.log("LI:"+listItems.length);
    }
    
    return (<>
    <ul>{listItems}</ul>
    <button onClick={() => addCard()}>Add Card</button>
    </>)
}

export default Deck;