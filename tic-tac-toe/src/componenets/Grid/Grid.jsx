import { useState } from "react";
import Card from "../Card/card";
import isWinner from "../../helpers/checkWinner";
import './Grid.css';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); // true => 0,false => x
    const[winner,setWinner] = useState(null);
    const[IsDraw,setIsDraw]=useState(false);

    function play(index) {
        if (board[index] || winner || IsDraw) return;
        if (turn === true) {
            board[index] = 'O';

        } else {
            board[index] = 'x';
        }
        

        const win = isWinner(board, turn ? "O" : "x");
        if(win){
            setWinner(win);
        }else if (board.every(cell => cell !==""))
            {
                setIsDraw(true);
            }else
            {setTurn(!turn);}
        setBoard([...board]);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setIsDraw(false);
        setBoard(Array(numberOfCards).fill("")) ;
    }

    return (
        <div className="grid_wrapper">
            {
                winner && (
                    <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }

{IsDraw &&  !winner && (
                    <>
                    <h1 className="turn-highlight">Game Draw!!</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }

            <h1 className="turn-highlight"> Current turn: {(turn) ? 'O' : 'x'}</h1>

            <div className="grid">
                {board.map((el, idx) => <Card gameEnd= {winner ? true:false} key={idx} onPlay={play} player={el} index={idx} />)}

            </div>
        </div>
    )
}

export default Grid;