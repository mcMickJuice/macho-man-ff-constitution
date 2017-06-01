import React from 'react'
import PropTypes from 'prop-types'
import WinnerTile from './WinnerTile'
import {teamShape} from './shapes'

const getWinner = (...teams) => {
    return teams.filter(t => t.isWinner)[0];
}

const style = {
    'height': '100px',
    'width': '100px',
    'border': '1px solid black',
    'marginRight': '2px'
}




const MatchupTile = ({week, holder, challenger, onMatchupSelected}) => {

    const isDecided = holder.score != null || holder.score != null;

    //if not decided...show blank tile for now
    const bodyElement = isDecided
        ? <WinnerTile team={getWinner(holder, challenger) } />
        : <div className="pending-matchup">Undecided!</div>

    return (
        <div>
            {week}
            <div className="matchup-tile"
                style={style}
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