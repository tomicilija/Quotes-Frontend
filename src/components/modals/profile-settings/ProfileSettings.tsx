import React, { FC, useEffect, useState } from "react";
import { deleteUser, getUser, updateUser } from "../../../api/UserApi";
import {
  Container,
  Wrapper,
  SettingsHeader,
  SettingsForm,
  SettingsSection,
  TwoInRow,
} from "./ProfileSettings.style";

interface Register {
  email: string;
  pass: string;
  passConfirm: string;
  name: string;
  surname: string;
}
interface Props {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (isSettingsOpen: boolean) => void;
}

const ProfileSettings: FC<Props> = ({ isSettingsOpen, setIsSettingsOpen }) => {
  const isLoggedIn = localStorage.getItem("accessToken");

  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const [ErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getUser(JSON.parse(isLoggedIn!))
      .then(({ email, name, surname, id }) => {
        setEmail(email);
        setFirstName(name);
        setLastName(surname);
      })
      .catch((e) => {
        console.log("Error: Cant get user" + e);
      });
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    updateUser(
      {
        email: newEmail,
        pass: newPassword,
        passConfirm: newPasswordConfirm,
        name: newFirstName,
        surname: newLastName,
      },
      JSON.parse(isLoggedIn!)
    )
      .then(() => {
        setIsSettingsOpen(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const deleteProfile = async () => {
    deleteUser(JSON.parse(isLoggedIn!))
      .then(() => {
        setIsSettingsOpen(false);
        localStorage.clear();
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.message);
      })
  };

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
              <h3>{ErrorMessage}</h3>
            </SettingsHeader>
            {/* <DefaultProfilePicture /> */}
            <form onSubmit={handleSubmit}>
              <SettingsForm>
                <SettingsSection>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder={email}
                    value={newEmail}
                    required
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </SettingsSection>
                <TwoInRow>
                  <SettingsSection>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="firstname"
                      placeholder={firstName}
                      value={newFirstName}
                      required
                      onChange={(e) => setNewFirstName(e.target.value)}
                    />
                  </SettingsSection>
                  <SettingsSection>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="lastname"
                      placeholder={lastName}
                      value={newLastName}
                      required
                      onChange={(e) => setNewLastName(e.target.value)}
                    />
                  </SettingsSection>
                </TwoInRow>
                <SettingsSection>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </SettingsSection>
                <SettingsSection>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    value={newPasswordConfirm}
                    required
                    onChange={(e) => setNewPasswordConfirm(e.target.value)}
                  />
                </SettingsSection>
                <SettingsSection>
                  <TwoInRow>
                    <button type="submit">Submit</button>
                    <p onClick={() => setIsSettingsOpen(false)}>Cancel</p>
                  </TwoInRow>
                  <button onClick={deleteProfile}>Delete Profile</button>
                </SettingsSection>
              </SettingsForm>
            </form>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default ProfileSettings;
