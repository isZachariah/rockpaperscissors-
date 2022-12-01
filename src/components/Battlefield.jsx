import React from "react";
import Rock from '/images/Rock.png';
import Paper from '/images/Paper.png';
import Scissors from '/images/Scissors.png';


export const Battlefield = ({player, computer, winner}) => {

    return (
        <div>
            <div className={'battlefield flex flex-row'}>
                <div className="player-choice">
                    <img className="player-img tr" src={`images/${player}.png`} alt=''></img>
                </div>
                <div className="computer-choice">
                    <img className="computer-img" src={`images/${computer}.png`} alt=''></img>
                </div>
            </div>
            <p className={'mt-12 text-3xl'}>{winner}</p>
        </div>
    )
}