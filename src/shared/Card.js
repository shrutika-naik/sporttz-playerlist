import React from 'react';
import moment from 'moment';

import './Card.css';

export default function Card({playerList}){
    return (
        <ul class="cards">
            {playerList && playerList.map(player => {
            return (
            <li class="cards_item">
                <div class="card">
                    <div class="card_image"><img src={window.location.origin + `/player-images/${player.Id+".jpg"}`}/></div>
                    <div class="card_content">
                        <h2 class="card_title">{player.PFName}</h2>
                        <h1 class="card_text">{player.SkillDesc}</h1>
                        <h1 class="card_text">${player.Value}</h1>
                        <h1 class="card_text">{player.UpComingMatchesList[0].CCode +" vs "+ player.UpComingMatchesList[0].VsCCode} | {moment(player.UpComingMatchesList[0].MDate).format('DD-MM-YYYY h:mm:ss a')}</h1>
                    </div>
                </div>
            </li>)})}
        </ul>
    )
}