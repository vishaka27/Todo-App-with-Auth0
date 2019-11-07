import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { signIn, signOut } from '../Auth';

const NavigationBarStyle = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

const Profile = styled.span`
  margin-left: 15px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 30px;
  margin-right: 5px;
`;

export default ({ user }) => (
  <NavigationBarStyle>
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      + Add New
    </Link>
    {!user && <Button onClick={signIn}>Login</Button>}
    {user && (
      <Fragment>
        <Button onClick={signOut}>Logout</Button>
        <Profile>
          <ProfilePicture src={user.profile.picture}></ProfilePicture>
          {user.profile.email}
        </Profile>
      </Fragment>
    )}
  </NavigationBarStyle>
);
