import styles from './Appointment.module.css';
import { useState } from 'react';

const Appointment = () => {
    let [doctor, setDoctor] = useState('');

    const handleChange = (e) => {
        setDoctor(e.target.name);
        console.log(doctor);
    }

    return (
        <div className={styles.appointment}>
            <div className={styles.doctorbox}>
                <h1 className={styles.fields}>Doctor: </h1>
                <input className={styles.doctor} type="text" value={doctor} />
                <div className={styles.dropdownContainer}>
                    <button className={styles.dropdownBtn}>Select: </button>
                    <div className={styles.dropdownContent}>
                        <a href="#" onClick={handleChange} name="divyasai">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
            </div>

            <div>
                <h1 className={styles.timeslotContainer}></h1>
                <h1 className={styles.fields}>Timeslot: </h1>
                <input className={styles.timeslot} type="datetime-local" />
            </div>

            <button className={styles.showNearbyBtn}>Show nearby doctors</button>
        </div>
    );
}

export default Appointment;
