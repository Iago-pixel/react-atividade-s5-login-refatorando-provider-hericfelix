import Footer from "../../components/Footer";
import Header from "../../components/Header";
import blank from "../../assets/blank.png";

import { Container, Content, ProfileCard } from "./style";

import { Redirect } from "react-router";
import TechBox from "../../components/TechBox";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Profile = ({ isAutenticated, setIsAutenticated }) => {
  const [user, setUser] = useState({});
  const [id] = useState(localStorage.getItem("@KenzieHub:id"));

  useEffect(() => {
    api.get(`/users/${id}`).then((res) => setUser(res.data));
  }, []);

  if (!isAutenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Header
        isAutenticated={isAutenticated}
        setIsAutenticated={setIsAutenticated}
      />
      <Content>
        <ProfileCard>
          <div>
            <figure>
              <img
                alt="Profile"
                src={
                  user.avatar_url
                    ? user.avatar_url === null
                      ? blank
                      : user.avatar_url
                    : blank
                }
              ></img>
            </figure>
          </div>
          <div>
            <h2>{user.name ? user.name : " "}</h2>
            <h3>Module</h3>
            <p>{user.course_module}</p>
            <h3>Contact</h3>
            <p>{user.contact}</p>
            <h3>Bio</h3>
            <p>{user.bio}</p>
          </div>
        </ProfileCard>
        <hr />
        <TechBox />
      </Content>
      <Footer />
    </Container>
  );
};

export default Profile;
