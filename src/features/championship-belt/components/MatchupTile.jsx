import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WinnerTile from './WinnerTile';
import { teamShape } from './shapes';
import styled from 'styled-components';
import MatchupResult from './MatchupResult';

const getWinner = (...teams) => {
  return teams.filter(t => t.isWinner)[0];
};

const Container = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
`;

const Tile = styled.div`
  width: 100px;
  margin-right: 2px;
`;

const TileDrawer = styled.div`background-color: lightgray;`;

class MatchupTile extends Component {
  constructor(props) {
    super(props);

    this.toggleResult = this.toggleResult.bind(this);

    this.state = {
      isOpened: true
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
    const { holder, challenger } = this.props;
    const isDecided = holder.score != null || holder.score != null;

    //if not decided...show blank tile for now
    const bodyElement = isDecided
      ? <WinnerTile team={getWinner(holder, challenger)} />
      : <div>Undecided!</div>;

    return (
      <Container onClick={this.toggleResult}>
        <Tile>
          {bodyElement}
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
