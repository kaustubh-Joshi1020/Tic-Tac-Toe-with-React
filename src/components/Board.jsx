import React, { useState } from "react";
import Square from "./Square";
const Board = ()=>{


    const [state, setstate] = useState(Array(9).fill(null));
    const [IsXturn,setIsXturn] = useState(true);

    // const checkwinner=()=>{
    //     const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    //     for (let key in winner) {
    //         const [a,b,c] = winner[key];
    //         if(state[a]!==null &&state[a]===state[b]&&state[a]===state[c]){
    //              return state[a];   
    //         }
    //         if (!state.includes(null) && state[a] !== state[b] && state[a] !== state[c]) {
    //                         return `Game Draw`;
    //                          }
    //     }
    //         return false;
    //  }

    const checkwinner = () => {
        const winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < winner.length; i++) {
            const [a, b, c] = winner[i];
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
          if (!state.includes(null)) {
            return "draw"; // Return "draw" when all positions are filled
        }
        return null;
    };
    
    
        const iswinner = checkwinner();

    const handleclick = (index) =>{
        if(state[index]!== null){ // this is for not to change value at second click.
            return;
        }
        const copystate = [...state];
        copystate[index] = IsXturn ? "X" : "O";
        setstate(copystate);
        setIsXturn(!IsXturn);
    }

    const resetboard= () =>{
        setstate(Array(9).fill(null))
    }

    return(
        <div className="board-whole">
           
           {iswinner ? (
           <>
                    {iswinner === "draw" ? (
                        <>
                            <div className="winnerText">
                                It's a draw!
                            </div>
                            <div className="playagain">
                            <button onClick={resetboard}>Play again</button>
                            </div>
                        </>
                    ):(
                        <>
                            <div className="winnerText">
                            {iswinner} won!
                            </div>
                            <div className="playagain">
                            <button onClick={resetboard}>Play again</button>
                            </div>
                        </>
                    )}
            </>
            ) : (
                <>
            <h3 className="heading">player {IsXturn ? "X's" : "O's"} move</h3>
            <div className="board-row">
            <Square click={()=>handleclick(0)} value={state[0]}/>
            <Square click={()=>handleclick(1)} value={state[1]}/>
            <Square click={()=>handleclick(2)} value={state[2]}/>
            </div>
            
            <div className="board-row">
            <Square click={()=>handleclick(3)} value={state[3]}/>
            <Square click={()=>handleclick(4)} value={state[4]}/>
            <Square click={()=>handleclick(5)} value={state[5]}/>
            </div>

            <div className="board-row">
            <Square click={()=>handleclick(6)} value={state[6]}/>
            <Square click={()=>handleclick(7)} value={state[7]}/>
            <Square click={()=>handleclick(8)} value={state[8]}/>
            </div>
            </>
           )}
            
        </div>
    );
    }

export default Board;