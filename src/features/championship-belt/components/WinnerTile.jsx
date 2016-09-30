import React, {PropTypes} from 'react'
import {teamShape} from 'react'

const WinnerTile = ({team}) => {
    return <div>
        {team.team}
    </div>
}

WinnerTile.propTypes = teamShape

export default WinnerTile