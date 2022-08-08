import React, { FC } from "react";
import {
  Container,
  Wrapper,
  SettingsHeader,
  SettingsForm,
  SettingsSection,
  TwoInRow,
} from "./ProfileSettings.style";

interface Props {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (isSettingsOpen: boolean) => void;
}

const ProfileSettings: FC<Props> = ({ isSettingsOpen, setIsSettingsOpen }) => {
  return (
    <>
      {isSettingsOpen ? (
        <Container>
          <Wrapper>
            <SettingsHeader>
              <h1>
                Profile <span>settings</span>
              </h1>
              <h5>Change your profile settings</h5>
            </SettingsHeader>
            {/* <DefaultProfilePicture /> */}
            <SettingsForm>
              <SettingsSection>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </SettingsSection>
              <TwoInRow>
                <SettingsSection>
                  <label htmlFor="firstName">First Name</label>
                  <input type="firstname" id="firstName" />
                </SettingsSection>
                <SettingsSection>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="lastname" id="lastName" />
                </SettingsSection>
              </TwoInRow>
              <SettingsSection>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </SettingsSection>
              <SettingsSection>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" />
              </SettingsSection>
              <SettingsSection>
                <TwoInRow>
                  <button onClick={() => setIsSettingsOpen(false)} type="submit">Submit</button>
                  <p onClick={() => setIsSettingsOpen(false)}>Cancel</p>
                </TwoInRow>
              </SettingsSection>
            </SettingsForm>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default ProfileSettings;
