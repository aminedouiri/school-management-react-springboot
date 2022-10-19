import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

const AddStudent = () => {

    const [student, setStudent] = useState({
        id:"",
        name: "",
        surname: "",
        dateBirht: "",
        classe: "",
        email: "",
        phone: ""
    });
    const handleChange = (e) =>{
        const value = e.target.value;
        setStudent({...student, [e.target.name]: value});
    };
    const navigate = useNavigate();

    const reset = (e) => {
        e.preventDefault();
        setStudent({
            id:"",
            name: "",
            surname: "",
            dateBirht: "",
            classe: "",
            email: "",
            phone: ""
        });
      };
    const saveStudent = (e) => {
        e.preventDefault();
        StudentService.saveStudent(student)
          .then((response) => {
            console.log(response.data);
            navigate("/students");
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>ADD New Student</h1>
                </div>
                <div className="items-center justify-content h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Name
                    </label>
                    <input type="text" 
                    className="h-10 w-96 border mt-2 px-2 py-2" name="name"
                    value={student.name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-content h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Surname
                    </label>
                    <input type="text" 
                    className="h-10 w-96 border mt-2 px-2 py-2" name="surname"
                    value={student.surname} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-content h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Email
                    </label>
                    <input type="email" 
                    className="h-10 w-96 border mt-2 px-2 py-2" name="email"
                    value={student.email} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-content h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Phone
                    </label>
                    <input type="phone" 
                    className="h-10 w-96 border mt-2 px-2 py-2" name="phone"
                    value={student.phone} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-content h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Date of Birth
                    </label>
                    <input type="date" 
                    className="h-10 w-96 border mt-2 px-2 py-2" name="dateBirth"
                    value={student.date} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-content h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Class Number
                    </label>
                    <input type="number" 
                    className="h-10 w-96 border mt-2 px-2 py-2" name="classe"
                    value={student.classe} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="items-center justify-content h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6"
                    onClick={saveStudent}>
                        Save
                        </button>
                    <button className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6"
                    onClick={reset}>
                        Clear
                    </button>
                </div>
            </div>

        </div>
    );
}

export default AddStudent;
