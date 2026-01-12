import react from 'react'
import './Style.css'
import Dropdown from './Dropdown.jsx'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Tour_to_Sylhet from './images/Tour_to_Sylhet.png'
import iftar_2024 from './images/iftar_2024.jpg'
import StMartin from './images/StMartin_tour.jpg'
// import coxTour from './images/coxTour.jpg'
function HomePage() {
  
    return ( 
        <div className="Cover">
       <div className="home-area">
         <h1>Event Registration System</h1>
         <div className="event-container">
          <div className="event">
          {/* <a href='/Individual'>For Individual Event</a><br/> */}
          {/* <a href='/Group'>For Group Event</a> */}
          <a href='/mainpage'className='event-link'><img src={Tour_to_Sylhet} alt="Annual Tour - 2024" className="event-image" />
          <h2 className="event-title"> Annual Tour - 2024</h2></a>
            <span className="text-glow"><i>*Event registration ongoing..*</i></span>
          </div>
          <div className="event">
          <a href=''className='event-link'><img src={iftar_2024} alt="Annual Iftar Mahfil and NCPC Celebration 2024" className="event-image event-iftar" />
          <h2 className="event-title">Annual Iftar Mahfil and NCPC Celebration 2024</h2></a>
          </div>
          <div className="event">
          <a href=''className='event-link'><img src={StMartin} alt="Annual Tour - 2024 (by CSE-28)" className="event-image event-iftar" />
          <h2 className="event-title">Annual Tour - 2024 <br/>(by CSE-28)</h2></a>
          </div>
          {/* <div className="event">
          <a href=''className='event-link'><img src={coxTour} alt="Annual Tour - 2022 (by CSE-27)" className="event-image event-tour22" />
          <h2 className="event-title">Annual Tour - 2022 <br/>(by CSE-27)</h2></a>
          </div> */}
         </div>
         {/* <button class="Button"><Link to="/mainpage">Deatils about the tour</Link></button></div> */}
       </div>
       </div>
     );
}

export default HomePage;