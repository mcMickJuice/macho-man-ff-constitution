import React from 'react';
import * as T from 'prop-types'
import styled from 'styled-components'

const Select = styled.select``;


const TeamSelect = ({onTeamSelect, selectedTeam, teams}) => {
  const selectedTeamId = selectedTeam == null ? '' : selectedTeam.id
  
  return (
    <Select value={selectedTeamId} onChange={evt => onTeamSelect(evt.target.value)}>
      <option default>Select a team</option>
      {teams.map(team => {
        return <option key={team.id} value={team.id}>{team.team}</option>
      })}
    </Select>
  );
};

TeamSelect.propTypes = {
  onTeamSelect: T.func.isRequired,
  selectedTeam: T.shape({
    id: T.number.isRequired,
    team: T.string.isRequired
  }),
  teams: T.arrayOf(T.shape({
    id: T.number.isRequired,
    team: T.string.isRequired
  }))
}

export default TeamSelect;