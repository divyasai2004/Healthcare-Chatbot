import './fitbit.css'
import Card from '../../component/card/Card';
import Slide from '../../component/slidingbutton/Slide';
import Header from '../../container/header/Header';
import Button from '../../component/button/Button';



const Fitbit = () => {
    return (
        <div className="fitbit">
            <Header/>
            <Slide/> 
        <div className="gridcontainer">
            <div className='gridItem'>
            <Card title="Steps count"/>
            </div>
            <div className='gridItem'>
            <Card title="Steps count"/>
            </div>
            <div className='gridItem'>
            <Card title="Steps count"/>
            </div>
            <div className='gridItem'>
            <Card title="Steps count"/>
            </div>   
        </div>
        <div className='button'>
        <Button text = "Download Your Report" />
        </div>
        </div>
    );
}


export default Fitbit;