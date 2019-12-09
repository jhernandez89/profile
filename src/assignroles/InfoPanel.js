import React from "react";
import UserInfo from "./InfoPanel/UserInfo";

const InfoPanel = ({ user }) => {
  return (
    <div className="user-info-wrapper">
      <img
        className="image"
        src={user.picture ? user.picture : user.auth0Image}
      />
      <UserInfo user={user} className="user-info" />
      {/* <Permissions/> */}
      {/* <UserDepartments/> */}
    </div>
  );
};

export default InfoPanel;
