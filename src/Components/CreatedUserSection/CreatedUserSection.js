import styles from "./CreatedUserSection.module.css"

export default function CreatedUserSection({createdUser}) {
   
    if (Object.keys(createdUser).length) {
        console.log("New user:" ,createdUser.data)
    return (
        <section className={styles.createdUserWrapper}>
        {[createdUser.data].map(obj => {
            return (
                <div key={obj._id}>
                <h3>This is the user you just created:</h3>
                <p>Username: <span>{obj.username}</span></p>
                <p>Id: <span>{obj._id}</span></p>
                </div>
            )
        })}
        </section>
    )
}  else {
    return (
        <></>
    )
}
}