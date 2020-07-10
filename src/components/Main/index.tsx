import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
      </Header>

      <ProfileInfo>
        <strong> Jhoni Santos</strong>
        <span>500 Tweets</span>
      </ProfileInfo>
    </Container>
  );
};

export default Main;
