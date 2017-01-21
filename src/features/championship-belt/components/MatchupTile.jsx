import React, {PropTypes, Component} from 'react';
import WinnerTile from './WinnerTile'
import {teamShape} from './shapes'
import * as css from '../styles/matchup-tile'

const getWinner = (...teams) => {
    return teams.filter(t => t.isWinner)[0];
}

const MatchupTile = ({week, holder, challenger, onMatchupSelected}) => {

    const isDecided = holder.score != null || holder.score != null;

    //if not decided...show blank tile for now
    const bodyElement = isDecided
        ? <WinnerTile team={getWinner(holder, challenger) } />
        : <div className="mm-tile__pending-matchup">Undecided!</div>

    return (
        <div>
            {week}
            <div className="mm-tile__container"
                onClick={() => onMatchupSelected(week)}
                >
                {bodyElement}
            </div>
        </div>

    );
}


MatchupTile.propTypes = {
    week: PropTypes.number.isRequired,
    holder: teamShape,
    challenger: teamShape,
    onMatchupSelected: PropTypes.func.isRequired
}


export default MatchupTile;