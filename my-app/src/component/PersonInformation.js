import React, { useState } from "react";
import Student from "./Student";
import Teacher from "./Teacher";

function PersonInformation({ AllPersonList }) {
  const [showStudent, setShowStudent] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);

  const StudentList = AllPersonList.filter(
    (item) => item.profession === "Student"
  ).map((sStudent, index) => <Student key={index} person={sStudent} />);

  const TeacherList = AllPersonList.filter(
    (item) => item.profession === "Teacher"
  ).map((tTeacher, index) => <Teacher key={index} person={tTeacher} />);

  function handleStudent() {
    setShowStudent((item) => !item);
  }
  function handleTeacher() {
    setShowTeacher((item) => !item);
  }

  return (
    <div className="list">
      <div className="student-list">
        <button className="student-btn" onClick={handleStudent}>
          {" "}
          {showStudent ? "Show" : "Hide"} - Students
        </button>
        <div className="student-out">
          {showStudent && <p className="student-tittle"> Student List</p>}
          {showStudent && <p className="student-context"> {StudentList}</p>}
        </div>
      </div>

      <div className="teacher-list">
        <button className="teacher-btn" onClick={handleTeacher}>
          {" "}
          {showTeacher ? "Show" : "Hide"} - Teachers
        </button>
        <div className="teacher-out">
          {showTeacher && <p className="teacher-tittle"> Teacher list</p>}
          {showTeacher && <p className="teacher-context"> {TeacherList} </p>}
        </div>
      </div>
    </div>
  );
}

export default PersonInformation;
