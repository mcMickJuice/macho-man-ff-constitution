import React from 'react';
import { teamShape } from './shapes';
import styled from 'styled-components';

const Container = styled.div`padding: 25px;`;

const TeamNames = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const Score = styled.span`font-size: 18px;`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TeamImage = styled.img`
  width: 150px;
  height: 100%;
  display: block;
`;

const MatchupResult = ({ holder, challenger }) => {
  return (
    <Container>
      <TeamNames>
        <div>
          <div>
            {holder.team}
          </div>
          <Score>
            {holder.score}
          </Score>
        </div>
        <div>
          <div>
            {challenger.team}
          </div>
          <Score>
            {challenger.score}
          </Score>
        </div>
      </TeamNames>
      <Images>
        <TeamImage src={holder.imageUrl} alt={holder.team} />
        <TeamImage src={challenger.imageUrl} alt={challenger.team} />
      </Images>
    </Container>
  );
};

MatchupResult.propTypes = {
  holder: teamShape,
  challenger: teamShape
};

export default MatchupResult;
