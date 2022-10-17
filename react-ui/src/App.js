import "./App.css";
import Navbar from "./componenets/Navbar";
import AddStudent from "./componenets/AddStudent";
import StudentList from "./componenets/StudentList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateStudent from "./componenets/UpdateStudent";
import NotFound from "./componenets/NotFound";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route index element={<StudentList />} />
          <Route path="/" element={<StudentList />}></Route>
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<UpdateStudent />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    
  );
}

export default App;
