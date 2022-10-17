import React from "react";
import { useNavigate } from "react-router-dom";

const Student = ({ student, deleteStudent }) => {
  const navigate = useNavigate();
  const editStudent = (e, id) => {
    e.preventDefault();
    navigate(`/edit-student/${id}`);
  };

  return (
    <tr key={student.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{student.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{student.surname}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{student.email}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{student.phone}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">  
          <a href={0} onClick={(e, id) => editStudent(e, student.id)}
            className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
            Edit
          </a>
          <a href={0} onClick={(e, id) => deleteStudent(e, student.id)}
            className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
            Delete
          </a>
      </td>
    </tr>
  );
};

export default Student;
