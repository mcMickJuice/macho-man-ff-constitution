import React, { Component } from 'react';
import styled from 'styled-components';
import NumericInput from './NumericInput';
import TeamSelect from './TeamSelect';
import { getActiveTeams } from './services/data-client';

const Container = styled.div`width: 90%;`;

const Panel = styled.div`
  width: 45%;
  border: 1px solid black;
`;

const PanelContainer = styled.div`display: flex;`;

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})``;

const isInvalid = state => {
  const {
    selectedYear,
    selectedWeek,
    holderTeam,
    holderScore,
    challengerScore,
    challengerTeam
  } = state;
  return (
    selectedYear < 2015 ||
    selectedYear > 2025 ||
    (selectedWeek < 1 || selectedWeek > 17) ||
    holderTeam == null ||
    (holderScore < 0 || holderScore == null) ||
    challengerTeam == null ||
    (challengerScore < 0 || challengerScore == null)
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.onWeekChange = this.onWeekChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onHolderTeamChange = this.onHolderTeamChange.bind(this);
    this.onHolderScoreUpdate = this.onHolderScoreUpdate.bind(this);
    this.onChallengerTeamChange = this.onChallengerTeamChange.bind(this);
    this.onChallengerScoreUpdate = this.onChallengerScoreUpdate.bind(this);
    this.onWinnerToggle = this.onWinnerToggle.bind(this);

    this.state = {
      selectedWeek: 1,
      selectedYear: 2017,
      holderTeam: null,
      holderScore: 0,
      challengerScore: 0,
      challengerTeam: null,
      winningTeam: null,
      isHolderWinner: true,
      teams: []
    };
  }

  componentDidMount() {
    getActiveTeams().then(teams => {
      this.setState({
        teams
      });
    });
  }

  onWeekChange(week) {
    this.setState({
      selectedWeek: week
    });
  }

  onYearChange(year) {
    this.setState({
      selectedYear: year
    });
  }

  onHolderTeamChange(teamId) {
    const { teams } = this.state;
    const selectedTeam = teams.find(t => t.teamId == teamId);

    this.setState({
      holderTeam: selectedTeam
    });
  }

  onHolderScoreUpdate(score) {
    this.setState({
      holderScore: score
    });
  }

  onChallengerTeamChange(teamId) {
    const { teams } = this.state;

    const selectedTeam = teams.find(t => t.teamId == teamId);

    this.setState({
      challengerTeam: selectedTeam
    });
  }

  onChallengerScoreUpdate(score) {
    this.setState({
      challengerScore: score
    });
  }

  onWinnerToggle() {
    this.setState(state => {
      return {
        isHolderWinner: !state.isHolderWinner
      };
    });
  }

  render() {
    const {
      selectedWeek,
      selectedYear,
      holderTeam,
      holderScore,
      challengerTeam,
      challengerScore,
      isHolderWinner,
      teams
    } = this.state;

    return (
      <Container>
        <NumericInput
          value={selectedWeek}
          label="Week"
          min={1}
          max={17}
          onChange={this.onWeekChange}
        />
        <NumericInput
          value={selectedYear}
          min={2015}
          max={2025}
          label="Season"
          onChange={this.onYearChange}
        />
        <PanelContainer>
          <Panel>
            <h3>Holder</h3>
            <TeamSelect
              onTeamSelect={this.onHolderTeamChange}
              selectedTeam={holderTeam}
              teams={teams}
            />
            <NumericInput
              label="Score"
              min={0}
              value={holderScore}
              onChange={this.onHolderScoreUpdate}
            />
          </Panel>
          <Panel>
            <h3>Challenger</h3>
            <TeamSelect
              onTeamSelect={this.onChallengerTeamChange}
              selectedTeam={challengerTeam}
              teams={teams}
            />
            <NumericInput
              min={0}
              label="Score"
              value={challengerScore}
              onChange={this.onChallengerScoreUpdate}
            />
          </Panel>
        </PanelContainer>
        <div>
          <label>Is Holder the Winner?</label>
          <Checkbox onChange={this.onWinnerToggle} checked={isHolderWinner} />
        </div>
        <button disabled={isInvalid(this.state)}>Submit</button>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </Container>
    );
  }
}

export default App;
