import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined> Edit profile</EditButton> */}
        <h1>Jhoni Santos</h1>
        <h2>jhonisds@</h2>
        <p>
          Developer at <a href="https://github.com/jhonisds">@git</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Born 21 July 2020
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>100</strong>
          </span>
          <span>
            <strong>672 </strong> follow
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
