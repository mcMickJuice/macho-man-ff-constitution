import React, {Component} from 'react';
import {getResults} from '../service/dataService'
import MatchupTile from './MatchupTile'
import MatchupPopover from './MatchupPopover'

class ChampionshipBeltPath extends Component {
    constructor() {
        super();

        this.onMatchupSelect = this.onMatchupSelect.bind(this)

        this.state = {
            results: [],
            selectedWeek: null,
            isLoading: true
        }
    }

    componentDidMount() {
        getResults()
            .then(results => {
                this.setState({
                    results,
                    isLoading: false
                })
            })
    }

    onMatchupSelect(week) {
        console.log(' clicked')
        const {selectedWeek} = this.state;
        const newWeek = selectedWeek === week
            ? null
            : week;

        this.setState({
            selectedWeek: newWeek
        })
    }

    render() {
        const {results, isLoading, selectedWeek} = this.state;

        const resultsElements = results.map(r => {
            return <MatchupWithPopover key={r.week}
                showPopover={r.week === selectedWeek }
                week={r.week}
                holder={r.holder}
                challenger={r.challenger}
                onMatchupSelected={this.onMatchupSelect}
                />
        })

        const elementBody = isLoading
            ? <div>Loading...</div>
            : resultsElements

        return <div>
            <h3>Belt Path</h3>
            <div style={{display: 'flex'}}>
                {elementBody}
            </div>
        </div>
    }
}

const MatchupWithPopover = ({showPopover, week, holder, challenger, onMatchupSelected}) => {
    const popover = showPopover
        ? <MatchupPopover holder={holder} challenger={challenger} />
        : '';

    return <div style={{ position: 'relative' }}>
        {popover}
        <MatchupTile week={week}
            holder={holder}
            challenger={challenger}
            onMatchupSelected={onMatchupSelected}/>
    </div>
}

export default ChampionshipBeltPath;