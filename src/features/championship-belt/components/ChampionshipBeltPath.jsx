import React, { Component } from 'react';
import { getResults } from '../service/dataService';
import CurrentHolder from './CurrentHolder';
import MatchupTile from './MatchupTile';

class ChampionshipBeltPath extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      isLoading: true
    };
  }

  componentDidMount() {
    getResults().then(results => {
      this.setState({
        results,
        isLoading: false
      });
    });
  }

  render() {
    const { results, isLoading } = this.state;

    const resultsElements = results.map(r => {
      return (
        <MatchupTile
          key={r.week}
          week={r.week}
          holder={r.holder}
          challenger={r.challenger}
        />
      );
    });

    const elementBody = isLoading ? <div>Loading...</div> : resultsElements;

    return (
      <div>
        <CurrentHolder />
        <div className="belt-path-container">
          {elementBody}
        </div>
      </div>
    );
  }
}

export default ChampionshipBeltPath;
