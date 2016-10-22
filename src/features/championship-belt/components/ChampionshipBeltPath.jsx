import React, { Component } from 'react';
import { getResults } from '../service/dataService'
import MatchupTile from './MatchupTile'
import MatchupPopover from './MatchupPopover'
import CurrentHolder from './CurrentHolder'
import MatchupWithPopover from './MatchupWithPopover'
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
            return <MatchupWithPopover key={r.week}
                showPopover={r.week === selectedWeek}
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
            <div className="current-holder-container">
                <CurrentHolder />
            </div>
            <div className="belt-path-container">
                <h2>Belt Path</h2>

                <div style={{ display: 'flex' }}>
                    {elementBody}
                </div>
            </div>

        </div>
    }
}



export default ChampionshipBeltPath;