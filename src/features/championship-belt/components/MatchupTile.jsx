import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { teamShape } from './shapes';
import styled from 'styled-components';
import MatchupResult from './MatchupResult';

const getWinner = (...teams) => {
  return teams.filter(t => t.isWinner)[0];
};

const Container = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Week = styled.div`
  position: absolute;
  color: white;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Tile = styled.div`
  padding: 10px;
  position: relative;
  & img {
    width: 100%;
  }
`;

const TileDrawer = styled.div`background-color: lightgray;`;

class MatchupTile extends Component {
  constructor(props) {
    super(props);

    this.toggleResult = this.toggleResult.bind(this);

    this.state = {
      isOpened: false
    };
  }

  toggleResult() {
    this.setState(state => {
      return {
        isOpened: !state.isOpened
      };
    });
  }

  render() {
    const { isOpened } = this.state;
    const { week, holder, challenger } = this.props;
    const winner = getWinner(holder, challenger);

    return (
      <Container onClick={this.toggleResult}>
        <Tile>
          <Week>
            Week {week}
          </Week>
          <img src={winner.imageUrl} alt={winner.team} />
        </Tile>
        <TileDrawer isOpened={isOpened}>
          {isOpened &&
            <MatchupResult holder={holder} challenger={challenger} />}
        </TileDrawer>
      </Container>
    );
  }
}

MatchupTile.propTypes = {
  week: PropTypes.number.isRequired,
  holder: teamShape,
  challenger: teamShape
};

export default MatchupTile;
