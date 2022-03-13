import {useState} from "react";
import axios from "axios";

export default function ExerciseLog({url}) {
    const [exerciseLog, setExerciseLog] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const _id = e.target.id.value;
        const from = (e.target.from.value) ? e.target.from.value : undefined;
        const to = (e.target.to.value) ? e.target.to.value : undefined;
        const limit = (e.target.limit.value) ? e.target.limit.value : undefined;
        console.log("This is the limit", limit);
        const options = {
            params: {
                "from": from,
                "to": to,
                "limit": limit
            }
        };
        const requestUrl = `${url}/${_id}/logs`;
        const res = await axios.get(requestUrl, options);
        setExerciseLog([res.data]);
        console.log(exerciseLog);
    }

    return (
        <section>
            <form encType="multipart/form" onSubmit={handleSubmit}>
            <input type="text" name="id" placeholder="Enter username id" />
            <input type="text" name="from" placeholder="Insert FROM date [optional]" />
            <input type="text" name="to" placeholder="Insert TO date [optional]" />
            <input type="number" name="limit" placeholder="Insert Limit" min="0" />
            <input type="submit" name="submit" value="Retrieve Log" />
            </form>
            {
                exerciseLog.length ? exerciseLog.map(obj => {
                    return (
                        <section key={obj._id}>
                            <h4>Log retrieved</h4>
                            <p>Username and ID: {obj.username}, {obj._id}</p>
                            <p>How many exercises has this user logged? {obj.count}</p>
                            <section id="log">
                               {obj.log.length ? obj.log.map((entry, ind) => {
                                   return (
                                      <section id="entry" key={entry._id}>
                                      <h4>Entry {ind + 1}</h4>
                                          <p>Exercise: {entry.description}</p>
                                          <p>Duration: {entry.duration}</p>
                                          <p>Date: {entry.date}</p>

                                      </section> 
                                   )
                               }) : <></>}
                            </section>
                        </section>
                    )
                }) : <></>
            }
        </section>
    )
}


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const _id = e.target.id.value;
//     const description = e.target.description.value;
//     const duration = e.target.duration.value;
//     const date = e.target.date.value;
//     let formData = new FormData();
//     formData.append("description", description);
//     formData.append("duration", duration);
//     formData.append("date", date);
//     const options = {
//         headers: { 'content-type': 'multipart/form-data' }
//     }
//     const URL = `https://fcc-exercise-trackr.herokuapp.com/api/users/${_id}/exercises`
//     console.log(formData);
//     const response = await axios.post(URL, formData, options);
//     setLatestExerciseAdded(response.data);
//     console.log(response);
// }