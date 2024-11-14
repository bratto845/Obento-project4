import classroomVideo from '../../assets/classroomVideo.mp4'
import { Link } from 'react-router-dom'
import './StartPage.css'

export default function StartPage() {


    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={classroomVideo} autoPlay loop muted />
            <div className='welcome-message'>
                <h1>Let's make Obento</h1>
                <p>Press play to begin</p>
                <Link to="/menu"><button>START</button></Link>
            </div>
        </div>
    )
}
