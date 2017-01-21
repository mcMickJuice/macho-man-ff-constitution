import React, {PropTypes} from 'react'
import {teamShape} from 'react'

const WinnerTile = ({team}) => {
    return <div className="mm-tile">
        <img className="mm-tile__winner-image" 
        src={team.imageUrl} alt={team.team}/>
    </div>
}

WinnerTile.propTypes = teamShape

export default WinnerTile