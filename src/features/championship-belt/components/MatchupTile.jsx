import React, {PropTypes, Component} from 'react';
import WinnerTile from './WinnerTile'
import {teamShape} from './shapes'
import MatchupPopover from './MatchupPopover'

const getWinner = (...teams) => {
    return teams.filter(t => t.isWinner)[0];
}

const style = {
    'height': '100px',
    'width': '100px',
    'border': '1px solid black',
    'margin': '10px'
}

class MatchupTile extends Component {
    constructor() {
        super();

        this.onTileMouseOut = this.onTileMouseOut.bind(this);
        this.onTileMouseEnter = this.onTileMouseEnter.bind(this);

        this.state = {
            showPopover: false
        }
    }

    onTileMouseEnter(evt) {
        console.log('mouse enter', evt);
        this.setState({
            showPopover: true
        })
    }

    onTileMouseOut(evt) {
        console.log('mouse out', evt)
        //timeout to make this less jarring?
        this.setState({
            showPopover: false
        })
    }

    render() {
        const {week, holder, challenger} = this.props;
        const {showPopover} = this.state;

        const isDecided = holder.score != null || holder.score != null;
        //if isDecided, show winner in tile

        //if not decided...show blank tile for now
        const bodyElement = isDecided
            ? <WinnerTile team={getWinner(holder, challenger) } />
            : <div className="pending-matchup">Undecided!</div>

        const popover = showPopover
            ? <MatchupPopover holder={holder} challenger={challenger} />
            : ''

        return (
            <div>
                {popover}
                <div className="matchup-tile"
                    style={style}
                    onMouseEnter={this.onTileMouseEnter}
                    onMouseOut={this.onTileMouseOut}>
                    {bodyElement}
                </div>
            </div>

        );
    }
}

MatchupTile.propTypes = {
    week: PropTypes.number.isRequired,
    holder: teamShape,
    challenger: teamShape
}


export default MatchupTile;