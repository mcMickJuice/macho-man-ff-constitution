import React from 'react'
import {teamShape} from './shapes'
import MatchupTeam from './MatchupTeam'
import * as css from '../styles/matchup-popover'

const MatchupPopover = ({holder, challenger}) => {
    return <div className="mm-popover" >
        <div className="mm-popover__team">
            <MatchupTeam team={holder} />
        </div>
        <div className="mm-popover__divider"></div>
        <div className="mm-popover__team">
            <MatchupTeam team={challenger} />
        </div>
    </div>
}

MatchupPopover.propTypes = {
    holder: teamShape,
    challenger: teamShape
}

export default MatchupPopover