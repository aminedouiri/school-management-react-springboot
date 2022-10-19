import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";
import Student from "./Student";

const StudentList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await StudentService.getStudents();
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteStudent = (e, id) => {
    e.preventDefault();
    StudentService.deleteStudent(id).then((res) => {
      if (students) {
        setStudents((prevElement) => {
          return prevElement.filter((student) => student.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/add-student")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add Student
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Surname
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Date of Birth
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Class Number
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email
              </th>
              
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Phone
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {students.map((student) => (
                <Student
                  student={student}
                  deleteStudent={deleteStudent}
                  key={student.id}></Student>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default StudentList;