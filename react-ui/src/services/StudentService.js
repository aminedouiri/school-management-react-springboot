import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8090/api/v1/students";

class StudentService {

    saveStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    getStudents() {
        return axios.get(STUDENT_API_BASE_URL);
      }
    
    getStudentById(id) {
        return axios.get(STUDENT_API_BASE_URL + "/" + id);
    }

    updateStudent(student, id) {
        return axios.put(STUDENT_API_BASE_URL + "/" + id, student);
    }

    deleteStudent(id) {
        return axios.delete(STUDENT_API_BASE_URL + "/" + id);
    }

}

export default new StudentService ();