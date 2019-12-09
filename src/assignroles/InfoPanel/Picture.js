import React from "react";

const Picture = ({user}) => {
  console.log(user)
  return <div>
          <img
        className="image"
        alt=''
        src={user.picture ? user.picture : user.auth0Image}
      />
  </div>;
};

export default Picture;
