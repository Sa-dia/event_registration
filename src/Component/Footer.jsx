import React from 'react'
import './Style.css'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
function Footer() {
    return ( 
        <div class="last">
            <div>
              <h3 class="f">Share with your social network</h3>
              <div class="social-container">
              <FaFacebook class="icons facebook"></FaFacebook>
              <FaTwitter class="icons twitter"></FaTwitter>
              <FaInstagram class="icons instagram"></FaInstagram>
              <FaLinkedin class="icons linkedin"></FaLinkedin>
            </div>
            <p class="T">
            Department of Computer Science and Engineering, <br/>
            Jahangirnagar University, Savar, Dhaka-1342, Bangladesh.<br/> 
            Telephone: PABX: 880-2-7791045-51, Fax: 880-2-7791052
            </p>
            </div>
        </div>
     );
}

export default Footer
;