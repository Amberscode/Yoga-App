import { useState } from "react";
import axios from "axios";
import moment from "moment";
import "../styles/AddClass.css";

const AddClass = () => {
  const [classFormValue, setClassFormValue] = useState({
    classType: "",
    classDate: "",
    classTime: "",
    classTeacher: "",
    classCapacity: "",
    classDuration: "",
  });

  const [classTypeIsValid, setClassTypeIsValid] = useState(true);
  const [classDateIsValid, setClassDateIsValid] = useState(true);
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

  const clearForm = (event) => {
    event.preventDefault();
    setClassFormValue({
      classType: "",
      classDate: "",
      classTime: "",
      classTeacher: "",
      classCapacity: "",
      classDuration: "",
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

    if (classFormValue.classDate.trim() === "") {
      setClassDateIsValid(false);
      return;
    } else {
      setClassDateIsValid(true);
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
      date: moment(classFormValue.classDate, "YYYY-MM-DD").toDate(),
      time: classFormValue.classTime,
      teacher: classFormValue.classTeacher,
      capacity: classFormValue.classCapacity,
      duration: classFormValue.classDuration,
    };
    console.log(newClassData);

    try {
      // send user data to backend
      let returnedClassDataFromBackend = await axios.post(
        "http://localhost:80/class/create",
        newClassData
      );

      if (returnedClassDataFromBackend.data.success === true) {
        alert("class added");
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
          <select
            name="classType"
            className="form-select"
            id="classType"
            value={classFormValue.classType}
            onChange={handleClassFormChange}
            aria-describedby="classType"
          >
            <option value="">--please choose a class type--</option>
            <option value="Acro">Acro Yoga</option>
            <option value="Aerial">Aerial Yoga</option>
            <option value="Hatha">Hatha Yoga</option>
            <option value="Power">Power Yoga</option>
            <option value="Vinyasa">Vinyasa Yoga</option>
            <option value="Yin">Yin Yoga</option>
          </select>
          {!classTypeIsValid && (
            <p className="error-text">Please select a class type</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="classDate">Date</label>
          <input
            type="date"
            name="classDate"
            className="form-control"
            id="classDate"
            value={classFormValue.classDate}
            onChange={handleClassFormChange}
            aria-describedby="classDate"
          />
          {!classDateIsValid && (
            <p className="error-text">Please enter a date</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="classTime">Start Time</label>
          <input
            type="time"
            min="05:30"
            max="22:00"
            step="900"
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
            type="number"
            min="5"
            max="30"
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
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input form-check-inline"
              type="radio"
              name="classDuration"
              id="classDuration60"
              value="60"
              checked={classFormValue.classDuration === "60"}
              onChange={handleClassFormChange}
            />
            <label className="form-check-label" htmlFor="classDuration60">
              60 min
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="classDuration"
              id="classDuration90"
              value="90"
              checked={classFormValue.classDuration === "90"}
              onChange={handleClassFormChange}
            />
            <label className="form-check-label" htmlFor="classDuration90">
              90 min
            </label>
            {!classDurationIsValid && (
              <p className="error-text">Please enter a class duration</p>
            )}
          </div>
        </div>
        <button type="submit" className="btn add-btn">
          Add Class
        </button>{" "}
        <button onClick={clearForm} className="btn add-btn">
          Clear Form
        </button>
      </form>
    </div>
  );
};

export default AddClass;
