import React, { Component } from 'react';
import { getCurrentHolder } from '../service/dataService';
import styled from 'styled-components';

const TeamImage = styled.div`
  & > img {
    max-height: 300px;
    display: block;
  }
`;

class CurrentHolder extends Component {
  constructor() {
    super();

    this.state = {
      holder: {},
      isLoading: true
    };
  }

  componentDidMount() {
    getCurrentHolder().then(holder =>
      this.setState({
        holder,
        isLoading: false
      })
    );
  }

  render() {
    const { holder } = this.state;

    return (
      <div className="mm-current-holder">
        <div>
          <h2>Current Belt Holder</h2>
        </div>
        <div>
          {holder.team}
        </div>
        <div>
          Current Streak: {holder.streak}
        </div>
        <TeamImage>
          <img src={holder.imageUrl} alt={holder.team} />
        </TeamImage>
      </div>
    );
  }
}

export default CurrentHolder;
