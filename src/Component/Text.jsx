import react from 'react'
import './Style.css';
function Text() {
    return ( 
               <div class="detail">
                <h2 class="heading">Annual Tour-2024</h2>
                <div class="content1">
                 <p class="venue">
                 <h3 class="t-header">Tour Details</h3>
                 Every year, the students of CSE department, Jahangirnagar University,
                 go on a tour in order to get out of the monotonous academic life and enjoy a few days in nature
                 for refreshment of mind and body.<br/><br/>
                 This year, the students of CSE, batch-29, organised the tour to Sylhet.<br/>
                 The details of the tour is mentioned below.<br/><br/>
                 <h4>Date:</h4>
                 Starting on : 27 November, 2024<br/>
                 Returning on : 30 November, 2024<br/><br/>
                 <h4>Places to visit:</h4>
                 1. Lalakhal<br/>
                 2. Ratargul<br/>
                 3. Shada pathor,Bholagonj<br/>
                 4. Malnichhara Tea Estate<br/><br/>
                 <h4>Registration fee:</h4> 
                 5000 BDT (per person)<br/><br/>
                 <h4>For online payment - </h4>
                 Bkash number : 01521571755<br/>
                 Nagad number : 01521571755<br/>
                 Rocket number : 01521571755<br/>
                 <i>Please mention "jucse_tour2024" in reference.</i><br/><br/>
                 Further details will be mentioned in the facebook page of the event.<br/>
                 (The link of the event will be provided later)<br/><br/>
                 To register for this event, click on - <a href='/username-form' className='regForm'>Registration Form</a>
                 <br/><br/>
                 To edit any information on the registration form, click on - <a href='/edit-form' className='regForm'>Edit Form</a>
                 <br/><br/>
                 You are most welcome to join us if you are interested in the event.<br/>
                 To join us,<br/>
                 For individual participation, <a href='/Individual' className='regForm'>click here</a>.<br/>
                 For group participation, <a href='/Group' className='regForm'>click here</a>. 
                 <br/><br/>
                 </p>
                </div>
                </div>
                
     );
}

export default Text;