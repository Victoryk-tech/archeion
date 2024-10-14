import React from "react";

const UserProfile = ({ params }) => {
  return (
    <div className="flex items-center justify-center py-20">
      <h1>profile </h1>
      <h2>profile page</h2>
      <p className="text-2xl font-bold">{params.id}</p>
    </div>
  );
};

export default UserProfile;
