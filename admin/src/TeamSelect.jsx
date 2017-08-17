import React from 'react';
import * as T from 'prop-types';
import styled from 'styled-components';

const Select = styled.select``;

const TeamSelect = ({ onTeamSelect, selectedTeam, teams }) => {
  const selectedTeamId = selectedTeam == null ? '' : selectedTeam.teamId;

  return (
    <Select
      value={selectedTeamId}
      onChange={evt => onTeamSelect(evt.target.value)}
    >
      <option default>Select a team</option>
      {teams.map(team => {
        return (
          <option key={team.teamId} value={team.teamId}>
            {team.team}
          </option>
        );
      })}
    </Select>
  );
};

TeamSelect.propTypes = {
  onTeamSelect: T.func.isRequired,
  selectedTeam: T.shape({
    teamId: T.number.isRequired,
    team: T.string.isRequired
  }),
  teams: T.arrayOf(
    T.shape({
      teamId: T.number.isRequired,
      team: T.string.isRequired
    })
  )
};

export default TeamSelect;
