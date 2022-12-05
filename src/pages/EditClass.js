import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../styles/AddClass.css";
import { useNavigate, useParams } from "react-router-dom";

const EditClass = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [yogaClass, setYogaClass] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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

  const getClass = async () => {
    try {
      let res = await axios.get(`http://localhost:80/class/edit/${id}`);
      setYogaClass(res.data.classToEdit);
    } catch (e) {
      console.log(e);
    }
  };

  async function loadPage() {
    setIsLoading(true);
    await getClass();
    setIsLoading(false);
  }

  // this loads the yogaclass from backend
  useEffect(() => {
    loadPage();
  }, []);

  // this runs when we receive yogaclass from backend
  useEffect(() => {
    if (!yogaClass._id) return;
    setClassFormValue({
      classType: yogaClass.type,
      classDate: moment(yogaClass.date).format("YYYY-MM-DD"),
      classTime: yogaClass.time,
      classTeacher: yogaClass.teacher,
      classCapacity: yogaClass.capacity,
      classDuration: yogaClass.duration.toString(),
    });
  }, [yogaClass]);

  const handleClassFormChange = (event) => {
    setClassFormValue({
      ...classFormValue,
      [event.target.name]: event.target.value,
    });
  };

  const cancelEdit = () => {
    navigate("/schedule");
  };

  const addBlur = (event) => {
    event.target.blur();
  };

  // only runs when you click button
  const handleCancelClass = async (event) => {
    event.preventDefault();

    const updatedClassData = {
      isCanceled: !yogaClass.isCanceled,
    };

    try {
      // send user data to backend
      let data = updatedClassData;
      data.id = id;

      let returnedClassDataFromBackend = await axios.post(
        "http://localhost:80/class/cancel",
        data
      );

      if (returnedClassDataFromBackend.data.success === true) {
        setYogaClass({ ...yogaClass, isCanceled: data.isCanceled });
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

    event.target.blur();
  };

  const handleEditClass = async (event) => {
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

    if (classFormValue.classCapacity.length === 0) {
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

    const updatedClassData = {
      type: classFormValue.classType,
      date: moment(classFormValue.classDate, "YYYY-MM-DD").toDate(),
      time: classFormValue.classTime,
      teacher: classFormValue.classTeacher,
      capacity: classFormValue.classCapacity,
      duration: classFormValue.classDuration,
    };
    console.log(updatedClassData);

    try {
      // send user data to backend
      let data = updatedClassData;
      data.id = id;

      let returnedClassDataFromBackend = await axios.post(
        "http://localhost:80/class/edit",
        data
      );

      if (returnedClassDataFromBackend.data.success === true) {
        alert("class updated");
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
      {!isLoading ? (
        <form className="add-class-form" onSubmit={handleEditClass}>
          <h1>Edit Class</h1>
          <div className="form-group">
            <label htmlFor="classType">Class Type</label>
            <select
              name="classType"
              className="form-select"
              id="classType"
              value={classFormValue.classType}
              onChange={handleClassFormChange}
              aria-describedby="classType"
              disabled={yogaClass.isCanceled}
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
              disabled={yogaClass.isCanceled}
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
              disabled={yogaClass.isCanceled}
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
              disabled={yogaClass.isCanceled}
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
              disabled={yogaClass.isCanceled}
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
                disabled={yogaClass.isCanceled}
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
                disabled={yogaClass.isCanceled}
              />
              <label className="form-check-label" htmlFor="classDuration90">
                90 min
              </label>
              {!classDurationIsValid && (
                <p className="error-text">Please enter a class duration</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            onClick={addBlur}
            disabled={yogaClass.isCanceled}
            className="btn add-btn"
          >
            Save Changes
          </button>{" "}
          <button onClick={cancelEdit} className="btn add-btn">
            Back
          </button>{" "}
          <button onClick={handleCancelClass} className="btn add-btn">
            {yogaClass.isCanceled ? "Undo Cancel" : "Cancel Class"}
          </button>
        </form>
      ) : (
        <div className="row spinner-text spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only"> Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditClass;
