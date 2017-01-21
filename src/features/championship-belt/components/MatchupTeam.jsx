import React, {PropTypes} from 'react';
import {teamShape} from './shapes'
import * as css from '../styles/matchup-team.less'

const MatchupTeam = ({team}) => {
    const {team: teamName, isWinner, score} = team;
    const resultClass = isWinner ? 'winner' : '';
    return <div className={`${resultClass} mm-matchup-team`}>
        <div className="mm-matchup-team__team-name">{teamName}</div>
        <div className="mm-matchup-team__score">{score}</div>
        <img className="mm-matchup-team__team-image" 
        src={team.imageUrl} 
        alt={team.team}/>
    </div>
}

MatchupTeam.propTypes = {
    team: teamShape    
}

export default MatchupTeam