import React from "react";

const Child = ({ users }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-6 w-60 hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Age:</span> {user.age}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">City:</span> {user.city}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Child;
