import React, { Component } from 'react';
import styled from 'styled-components';
import NumericInput from './NumericInput';
import TeamSelect from './TeamSelect';

const Container = styled.div`width: 90%;`;

const Panel = styled.div`
  width: 45%;
  border: 1px solid black;
`;

const PanelContainer = styled.div`display: flex;`;

const teams = [
  {
    id: 1,
    team: 'Mikes team'
  },
  {
    id: 2,
    team: 'another team'
  }
];

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})``;

class App extends Component {
  constructor(props) {
    super(props);

    this.onWeekChange = this.onWeekChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onHolderTeamChange = this.onHolderTeamChange.bind(this);

    this.state = {
      selectedWeek: 1,
      selectedYear: 2017,
      holderTeam: null,
      challengerTeam: null,
      winningTeam: null
    };
  }

  onWeekChange(evt) {
    this.setState({
      selectedWeek: Number(evt.target.value)
    });
  }

  onYearChange(evt) {
    this.setState({
      selectedYear: Number(evt.target.value)
    });
  }

  onHolderTeamChange(teamId) {
    const selectedTeam = teams.find(t => t.id == teamId);

    this.setState({
      holderTeam: selectedTeam
    });
  }

  render() {
    const {
      selectedWeek,
      selectedYear,
      holderTeam
      // challengerTeam
    } = this.state;

    return (
      <Container>
        <NumericInput value={selectedWeek} onChange={this.onWeekChange} />
        <NumericInput value={selectedYear} onChange={this.onYearChange} />
        <PanelContainer>
          <Panel>
            <h3>Holder</h3>
            <TeamSelect
              onTeamSelect={this.onHolderTeamChange}
              selectedTeam={holderTeam}
              teams={teams}
            />
            <Checkbox disabled={holderTeam == null} />
          </Panel>
          <Panel>
            <h3>Challenger</h3>
          </Panel>
        </PanelContainer>
      </Container>
    );
  }
}

export default App;
