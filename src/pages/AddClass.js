import { useState, useContext } from "react";
import axios from "axios";
import "../styles/AddClass.css";
import AuthContext from "../store/auth-context";

const AddClass = () => {
  const authCtx = useContext(AuthContext);

  const [classFormValue, setClassFormValue] = useState({
    classType: "",
    classTime: "",
    classTeacher: "",
    classCapacity: "",
    classDuration: "",
  });

  const [classTypeIsValid, setClassTypeIsValid] = useState(true);
  const [classTimeIsValid, setClassTimeIsValid] = useState(true);
  const [classTeacherIsValid, setClassTeacherIsValid] = useState(true);
  const [classCapacityIsValid, setClassCapacityIsValid] = useState(true);
  const [classDurationIsValid, setClassDurationIsValid] = useState(true);

  const handleClassFormChange = (event) => {
    setClassFormValue({
      ...classFormValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddClass = async (event) => {
    event.preventDefault();

    if (classFormValue.classType.trim() === "") {
      setClassTypeIsValid(false);
      return;
    } else {
      setClassTypeIsValid(true);
    }

    if (classFormValue.classTime.trim() === "") {
      setClassTimeIsValid(false);
      return;
    } else {
      setClassTimeIsValid(true);
    }

    if (classFormValue.classTeacher.trim() === "") {
      setClassTeacherIsValid(false);
      return;
    } else {
      setClassTeacherIsValid(true);
    }

    if (classFormValue.classCapacity.trim() === "") {
      setClassCapacityIsValid(false);
      return;
    } else {
      setClassCapacityIsValid(true);
    }

    if (classFormValue.classDuration.trim() === "") {
      setClassDurationIsValid(false);
      return;
    } else {
      setClassDurationIsValid(true);
    }

    const newClassData = {
      type: classFormValue.classType,
      time: classFormValue.classTime,
      teacher: classFormValue.classTeacher,
      capacity: classFormValue.classCapacity,
      dureation: classFormValue.classDuration,
    };

    try {
      // send user data to backend
      let returnedClassDataFromBackend = await axios.post(
        "http://localhost:80/class/create",
        newClassData
      );

      if (returnedClassDataFromBackend.data.success === true) {
        // clear form
        setClassFormValue({
          classType: "",
          classTime: "",
          classTeacher: "",
          classCapacity: "",
          classDuration: "",
        });
      } else {
        // something went wrong on backend
        if (returnedClassDataFromBackend.data.message) {
          alert(returnedClassDataFromBackend.data.message);
        } else {
          alert("something went wrong");
        }
      }
    } catch (e) {
      console.log(e, "something went wrong");
    }
  };

  return (
    <div className="add-class-page container-fluid">
      <form className="add-class-form" onSubmit={handleAddClass}>
        <h1>Add New Class</h1>
        <div className="form-group">
          <label htmlFor="classType">Class Type</label>
          <input
            type="text"
            name="classType"
            className="form-control"
            id="classType"
            value={classFormValue.classType}
            onChange={handleClassFormChange}
            aria-describedby="classType"
          />
          {!classTypeIsValid && (
            <p className="error-text">Please enter a class type</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="classTime">Start Time</label>
          <input
            type="text"
            name="classTime"
            className="form-control"
            id="classTime"
            value={classFormValue.classTime}
            onChange={handleClassFormChange}
            aria-describedby="classTime"
          />
          {!classTimeIsValid && (
            <p className="error-text">Please enter a class time</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="classTeacher">Teacher</label>
          <input
            type="text"
            name="classTeacher"
            className="form-control"
            id="classTeacher"
            value={classFormValue.classTeacher}
            onChange={handleClassFormChange}
            aria-describedby="classTeacher"
          />
          {!classTeacherIsValid && (
            <p className="error-text">Please enter a teacher</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="classCapacity">Capacity</label>
          <input
            type="text"
            name="classCapacity"
            className="form-control"
            id="classCapacity"
            value={classFormValue.classCapacity}
            onChange={handleClassFormChange}
          />
          {!classCapacityIsValid && (
            <p className="error-text">Please enter a class capacity</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="classDuration">Duration</label>
          <input
            type="text"
            name="classDuration"
            className="form-control"
            id="classDuration"
            value={classFormValue.classDuration}
            onChange={handleClassFormChange}
          />
          {!classDurationIsValid && (
            <p className="error-text">Please enter a class duration</p>
          )}
        </div>
        <button type="submit" className="btn add-btn">
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
