import React, {PropTypes} from 'react'
import {teamShape} from './shapes'



const MatchupPopover = ({holder, challenger}) => {
    return <div className="popover">Matchup Popover!</div>
}

MatchupPopover.propTypes = {
    holder: teamShape,
    challenger: teamShape
}

export default MatchupPopover