import React from "react";

function Student({ person }) {
  return (
    <div>
      My name is {person.name}, I am {person.profession}
    </div>
  );
}
export default Student;
