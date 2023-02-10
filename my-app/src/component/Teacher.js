import React from "react";

function Teacher({ person }) {
  return (
    <div>
      My name is {person.name} , I am{person.profession}
    </div>
  );
}
export default Teacher;
