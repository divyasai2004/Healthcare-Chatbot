import './plan.css';
import { Link } from 'react-router-dom';

const Plan = () => {
    return (
        <div className='planButton'>
            <Link to="/plans">
                <button className='plan'>Plans</button>
            </Link>
        </div>
    );
}

export default Plan;


// import './plan.css'

// const Plan = () => {
//     return(
//         <div className='planButton'>
//             <button className='plan'>Plans</button>
//         </div>
//     )
// }

// export default Plan;