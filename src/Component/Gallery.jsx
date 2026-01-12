import React from 'react'
import './Style.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import iftar29 from './images/iftar_by_29.jpg'
import iftar29_2 from './images/iftar_by_29_r202.jpg'
import ncpc from './images/ncpc_all.jpg'
import badmintonTournamentFinal from './images/badmintonTournament_by_29_prize.jpg'
import badmintonTournamentFinal_2 from './images/badmintonTournament_by_29_final.jpg'
import tour28 from './images/tour_by_28.jpg'
import tour28_2 from './images/tour_by_28_batch29.jpg'
import iftar28 from './images/iftar_by_28.jpg'
import tour27 from './images/tour_by_27_batch29.jpg'
import tour27_2 from './images/tour_by_27.jpg'
import tour27_3 from './images/tour_by_27_b29.jpg'
import iftar27 from './images/iftar_by_27.jpg'
import reunion from './images/4th_alumni_reunion.jpg'
function Gallery() {
    return ( 
        
        <div class="gallery">
    <div class="gallery-item">
        <a href='#img1'><img src={iftar29} alt="Annual Iftar by batch 29"/></a>
        <div class="caption">Students of CSE-29 in Annual Iftar and NCPC Celebration 2024</div>
    </div>
    <div class="gallery-item">
        <img src={iftar29_2} alt="In Room 202 Iftar arranged by batch 29"/>
        <div class="caption">Students of CSE dept. in Annual Iftar and NCPC Celebration 2024</div>
    </div>
    <div class="gallery-item">
        <img src={ncpc} alt="All volunteers in NCPC 2024"/>
        <div class="caption">All volunteers in NCPC-2024 with respected teachers of CSE dept.</div>
    </div>
    <div class="gallery-item">
        <img src={badmintonTournamentFinal} alt="Players and Audience for Badminton Tournament Final"/>
        <div class="caption">Students of CSE-29 in Prize giving ceremony of Badminton Tournament-2024 Final</div>
    </div>
    <div class="gallery-item">
        <img src={badmintonTournamentFinal_2} alt="Prize giving for Badminton Tournament Final"/>
        <div class="caption"> Players and Audience of Badminton Tournament-2024 Final</div>
    </div>
    <div class="gallery-item">
        <img src={tour28} alt="All participants of St.Martin Tour 2024 by CSE-28"/>
        <div class="caption">All teachers and students in St. Martin Tour-2024</div>
    </div>
    <div class="gallery-item">
        <img src={tour28_2} alt="Batch-29 in St.Martin Tour 2024 by CSE-28"/>
        <div class="caption">Students of CSE-29 in St. Martin Tour-2024</div>
    </div>
    <div class="gallery-item">
        <img src={iftar28} alt="Annual Iftar arranged by CSE-28"/>
        <div class="caption">Students of CSE dept. in Annual Iftar Mahfil-2023</div>
    </div>
    <div class="gallery-item">
        <img src={tour27} alt="Batch-29 in Cox's Bazar Tour 2022 by CSE-27"/>
        <div class="caption">Students of CSE-29 in Cox's Bazar Tour-2022</div>
    </div>
    <div class="gallery-item">
        <img src={tour27_2} alt="Participants in Cox's Bazar Tour 2022 by CSE-27"/>
        <div class="caption">Teachers and students in Cox's Bazar Tour-2022</div>
    </div>
    <div class="gallery-item">
        <img src={tour27_3} alt="Batch-29 in Cox's Bazar Tour with respected teachers"/>
        <div class="caption">Students of CSE-29 in Cox's Bazar Tour-2022 with respected teachers</div>
    </div>
    <div class="gallery-item">
        <img src={iftar27} alt="Annual Iftar arranged by CSE-27"/>
        <div class="caption">Students of CSE-29 in Annual Iftar Mahfil-2022</div>
    </div>
    <div class="gallery-item">
        <img src={reunion} alt="Partial Participants in 4th Alumni Reunion"/>
        <div class="caption">Teachers and students in the 4th Alumni Reunion-2022</div>
    </div>
</div>
     );
}

export default Gallery;