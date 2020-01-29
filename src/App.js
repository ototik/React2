import React from 'react';
import Contact from './components/Contact'





  function Opp () {
       return (
      <div className="Contact">
         
          <Contact
          nameavatar="https://randomuser.me/api/portraits/men/22.jpg"
          names="Joe Black"
          status="online"
          />

        <Contact
          nameavatar="https://randomuser.me/api/portraits/women/44.jpg"
          names="Nia Harris"
          status="online"
          />    

        <Contact
          nameavatar="https://randomuser.me/api/portraits/women/6.jpg"
          names="Clueless Lady"
          status="online"
          />    
        </div>
           );
    }
   

export default Opp;
