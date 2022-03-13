import styles from "./LatestExerciseAddedSection.module.css";
export default function LatestExerciseAddedSection({latestExerciseAdded}) {

const {description, duration, date, _id, username} = latestExerciseAdded;

    return (
        <section className={styles.LatestExerciseAddedSection}>
        <h3>Latest Exercise Added:</h3>
        <p>ID: {_id}</p>
        <p>Username: {username}</p>
        <p>Exercise: {description}</p>
        <p>Duration: {duration}</p>
        <p>Date: {date}</p>
        </section>
    )
}