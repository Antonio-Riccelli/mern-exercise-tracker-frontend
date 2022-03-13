import {useState} from "react";
import styles from './App.module.css';
import CreateUserForm from '../CreateUserForm/CreateUserForm.js';
import CreatedUserSection from "../CreatedUserSection/CreatedUserSection.js";
import AddExerciseSection from "../AddExerciseSection/AddExerciseSection.js";
import LatestExerciseAddedSection from "../LatestExerciseAddedSection/LatestExerciseAddedSection.js";
import ExerciseLog from "../ExerciseLog/ExerciseLog.js";

function App() {
const URL = `https://fcc-exercise-trackr.herokuapp.com/api/users`;
const [createdUser, setCreatedUser] = useState({});
const [latestExerciseAdded, setLatestExerciseAdded] = useState({});

  return (
    <section className="App">
     <h1>Exercise Tracker</h1>
     <section className={styles.forms}>
    <CreateUserForm url={URL} setCreatedUser={setCreatedUser} createdUser={createdUser} />
    <AddExerciseSection setLatestExerciseAdded={setLatestExerciseAdded}/>
    </section>

    <section className={styles.returnedResults}>
      <CreatedUserSection createdUser={createdUser} />
      <LatestExerciseAddedSection latestExerciseAdded={latestExerciseAdded} />
    </section>

    <section className={styles.returnedResults}>
    <ExerciseLog url={URL} />
    </section>
    </section>
  );
}

export default App;
