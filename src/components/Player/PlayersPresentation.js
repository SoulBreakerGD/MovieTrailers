import React, { useState } from 'react'

export default function PlayersPresentation({ players }) {
    const [player, setPlayer] = useState([]);    
    return (
        <div className='container'>
            {players.map((player) => (
                <div className='column' key={player.id}>
                    <div className='card'>
                        <img src={player.img}/>
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                            <button className='detail-button' onClick={()=>{setPlayer(player)}}>
                                <a href='#popup' id='openPopUp' className='detail'>Detail</a>
                            </button>
                    </div>
                </div>
            ))}
            <div id='popup' className='overlay'>
                <div className='popup'>
                    <img src={player.img}/>
                    <h3>{player.name}</h3>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {player.info}
                    </div>
                </div>
            </div>
        </div>
    )
}