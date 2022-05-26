import React, { useEffect, useState } from "react";

import { longMonth } from "../../utils/dateFormat";

import { useAuth } from "../../hooks/useAuth";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

import { StyledProfilePage } from "../../styles/StyledProfilePage";

export const ProfilePage = () => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      // console.log("___USER___");
      const payload = {
        id: auth?._id,
      };
      const postUrl = `users/${auth?.username}`;

      const { data } = await axiosPrivate.get(postUrl, payload);
      setUserData(data);
      console.log(data);
    };
    fetchUser();
  }, [auth?._id, auth?.username, axiosPrivate]);

  return (
    <StyledProfilePage className="ProfilePage">
      <section className="user">
        <section className="user_details">
          <div className="user_details_image-wrapper">
            <div className="user_details_image-wrapper_actions">
              <button>edit</button>
              <button>hide</button>
            </div>
            <div className="user_details_image-wrapper_image">
              <div className="img">img</div>
            </div>
          </div>

          <div className="user_details_info">
            <h1 className="user_details_info_username">{userData.username}</h1>
            <p className="user_details_info_date">
              joined: {longMonth(userData.date)}
            </p>
          </div>
        </section>
        <section className="user_activity"></section>
      </section>
      <section className="suggestions"></section>
    </StyledProfilePage>
  );
};
