import React, {PropTypes} from 'react'
import MatchupTile from './MatchupTile'
import MatchupPopover from './MatchupPopover'
import {teamShape} from './shapes'

const MatchupWithPopover = ({showPopover, week, holder, challenger, onMatchupSelected}) => {
    const popover = showPopover
        ? <MatchupPopover holder={holder} challenger={challenger} />
        : '';

    return <div style={{ position: 'relative' }}>
        {popover}
        <MatchupTile week={week}
            holder={holder}
            challenger={challenger}
            onMatchupSelected={onMatchupSelected} />
    </div>
}

MatchupWithPopover.propTypes = {
    showPopover: PropTypes.bool,
    week: PropTypes.number.isRequired,
    holder: teamShape.isRequired,
    challenger: teamShape.isRequired,
    onMatchupSelected: PropTypes.func.isRequired
}

export default MatchupWithPopover