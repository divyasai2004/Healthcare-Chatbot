import './Appointment.css';
import Button from '../../component/button/Button';
import { useState } from 'react';
import SlidingButton from '../../component/slidingbutton/Slide';
import Header from '../../container/header/Header';


const Appointment = () => {

    let [doctor , setDoctor] = useState('');

    const handleChange = (e) =>{
        setDoctor(e.target.name);
        console.log(doctor);
    }

    return(
        <div className="appointment">
             {/* <Header/> */}
             {/* <SlidingButton/>  */}

            <div className='doctorbox'>
                <h1 className='fields'>Doctor: </h1>
                <input className="doctor" type="text" value={doctor}/>   
                <div class="dropdown-container">
               <button class="dropdown-btn">Select: </button>
                <div class="dropdown-content">
                 <a href="#" onClick={handleChange} name="divyasai">Option 1</a>
                 <a href="#" onClick="">Option 2</a>
                 <a href="#" onclick="">Option 3</a>
                </div>
            </div>
            </div>


            <div>
                <h1 classname="timeslot-container"></h1>
                <h1 className='fields'>Timeslot: </h1>
                <input className="timeslot" type="datetime-local" />
            </div>
            

            {/* <Button text="show nearby doctors"/> */}
            <button class="show-nearby-btn">Show nearby doctors</button>
        </div>

        );
}

export default Appointment;