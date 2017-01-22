import React, { Component } from 'react';
import { getResults } from '../service/dataService'
import MatchupTile from './MatchupTile'
import MatchupPopover from './MatchupPopover';
import CurrentHolder from './CurrentHolder'
import * as css from '../styles/championship-belt-path'

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
            return <MatchupTile key={r.week}
                week={r.week}
                holder={r.holder}
                challenger={r.challenger}
                onMatchupSelected={this.onMatchupSelect}
                />
        })

        const selectedMatchup = results.filter(r => r.week === selectedWeek)[0]

        const selectedMatchupElement = selectedMatchup != null
            ? <MatchupPopover
                holder={selectedMatchup.holder}
                challenger={selectedMatchup.challenger}
             />
             : '';

        const elementBody = isLoading
            ? <div>Loading...</div>
            : resultsElements

        return <div>
            <div className="mm-belt__current-holder">
                <CurrentHolder />
            </div>
            <h2>Belt Path <span className="mm-belt__callout--tiny">(click tile to see matchup details)</span></h2>
            <div className="mm-belt__belt-path">
                    {elementBody}
            </div>
            <div className="mm-belt__selected-matchup">
                {selectedMatchupElement}
            </div>
        </div>
    }
}



export default ChampionshipBeltPath;