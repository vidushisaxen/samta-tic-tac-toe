import React from 'react'
import './TicTacToe.css';
import { useState,useRef, useEffect } from 'react';
import omark from './Assets/omark.png';
import xmark from './Assets/xmark.png';

let result = ["","","","","","","","",""];
const TicTacToe = () => {
    let[count,setCount] = useState(0);
    let[lock,setLock]=useState(false);
    let[xscore,setXscore] = useState(0);
    let[oscore,setOscore] = useState(0);
    let winnertitle= useRef(null);
    let box1 =useRef(null);
    let box2 =useRef(null);
    let box3 =useRef(null);
    let box4 =useRef(null);
    let box5 =useRef(null);
    let box6 =useRef(null);
    let box7 =useRef(null);
    let box8 =useRef(null);
    let box9 =useRef(null);

    let arrbox= [box1,box2,box3,box4,box5,box6,box7,box8,box9];

   

const boxtoggle=(e,num)=>{
    if(lock){
        return 0;
    }
    if(count%2===0){
        e.target.innerHTML=`<img src='${xmark}'>`
        result[num]="X";
        setCount(++count);
    }else{
        e.target.innerHTML=`<img src='${omark}'>`
        result[num]="O";
        setCount(++count);
    }
    iswinner();

}

const iswinner=()=>{
    if(result[0]===result[1] && result[1]===result[2] && result[2]!==""){
        win(result[2]);
    }else if(result[3]===result[4] && result[4]===result[5] && result[5]!==""){
        win(result[5]);
    }else if(result[6]===result[7] && result[7]===result[8] && result[8]!==""){
        win(result[8]);
    }else if(result[0]===result[3] && result[3]===result[6] && result[6]!==""){
        win(result[6]);
    }else if(result[1]===result[4] && result[4]===result[7] && result[7]!==""){
        win(result[7]);
    }else if(result[2]===result[5] && result[5]===result[8] && result[8]!==""){
        win(result[8]);
    }else if(result[0]===result[4] && result[4]===result[8] && result[8]!==""){
        win(result[8]);
    }else if(result[2]===result[4] && result[4]===result[6] && result[6]!==""){
        win(result[6]);
    }

}
const win = (winner)=>{
    setLock(true);
    if(winner ==="X"){
        winnertitle.current.innerHTML=`Congratulations! <img src='${xmark}'> wins`
        setXscore(++xscore);
        localStorage.setItem("xscore",xscore);
    }else{
        winnertitle.current.innerHTML=`Congratulations! <img src='${omark}'> wins`
        setOscore(++oscore);
        localStorage.setItem("oscore",oscore);
    }

}

const resetGame=()=>{
    setLock(false);
    result = ["","","","","","","","",""];
    winnertitle.current.innerHTML="Tic Tac Toe";
    arrbox.map((e)=>{
        e.current.innerHTML="";
    })
}

  return (
    <>
    <div className="tictactoe-container">
    <h1 className='tictactoe-heading' ref={winnertitle}>Tic Tac Toe</h1>
    <div className="score">
    <div className="x-score"><img src={xmark}></img> : <p>{localStorage.getItem("xscore")}</p></div>
    <div className="o-score"><img src={omark}></img> : <p>{localStorage.getItem("oscore")}</p></div>
    </div>
    <div className="tictactoe-board">
        <div className="row-one">
            <div className="boxes" ref={box1} onClick={(e)=>{boxtoggle(e,0)}}></div>
            <div className="boxes"  ref={box2} onClick={(e)=>{boxtoggle(e,1)}}></div>
            <div className="boxes"  ref={box3} onClick={(e)=>{boxtoggle(e,2)}}></div>
        </div>
        <div className="row-two">
            <div className="boxes"  ref={box4} onClick={(e)=>{boxtoggle(e,3)}}></div>
            <div className="boxes"   ref={box5} onClick={(e)=>{boxtoggle(e,4)}}></div>
            <div className="boxes"  ref={box6} onClick={(e)=>{boxtoggle(e,5)}}></div>
        </div>
        <div className="row-three">
            <div className="boxes"   ref={box7} onClick={(e)=>{boxtoggle(e,6)}}></div>
            <div className="boxes"  ref={box8} onClick={(e)=>{boxtoggle(e,7)}}></div>
            <div className="boxes"  ref={box9}  onClick={(e)=>{boxtoggle(e,8)}}></div>
        </div>
    </div>
    <button className='reset-game' onClick={()=>{resetGame()}}>Reset Game</button>
    </div>
    </>
  )
}

export default TicTacToe