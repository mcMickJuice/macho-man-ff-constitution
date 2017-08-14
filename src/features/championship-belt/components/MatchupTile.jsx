import React from 'react';
import PropTypes from 'prop-types';
import WinnerTile from './WinnerTile';
import { teamShape } from './shapes';
import styled from 'styled-components';

const getWinner = (...teams) => {
  return teams.filter(t => t.isWinner)[0];
};

const Container = styled.div``;

const Tile = styled.div`
    height: 100px;
    width: 100px;
    border: 1px solid black;
    margin-right: 2px
`;

const MatchupTile = ({ week, holder, challenger, onMatchupSelected }) => {
  const isDecided = holder.score != null || holder.score != null;

  //if not decided...show blank tile for now
  const bodyElement = isDecided
    ? <WinnerTile team={getWinner(holder, challenger)} />
    : <div className="pending-matchup">Undecided!</div>;

  return (
    <Container>
      {week}
      <Tile onClick={() => onMatchupSelected(week)}>
        {bodyElement}
      </Tile>
    </Container>
  );
};

MatchupTile.propTypes = {
  week: PropTypes.number.isRequired,
  holder: teamShape,
  challenger: teamShape,
  onMatchupSelected: PropTypes.func.isRequired
};

export default MatchupTile;
