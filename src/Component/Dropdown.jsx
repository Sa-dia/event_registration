import React from 'react'
// import { FaWhatsapp, FaPhone} from 'react-icons/fa';
function Dropdown() {
    return ( 
        <div>
        <div class="dropdown">
       <a href="#" data-bs-toggle="dropdown" aria-expanded="false">Contact</a>
     <ul class="dropdown-menu" >
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
     </ul>
      </div>
        </div>
     );
}

export default Dropdown;