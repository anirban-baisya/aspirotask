import React from 'react';
import Bootnav from './Bootnav';
import Category from './Category';
import Destination from './Destination';
import Nexttrip from './Nexttrip';
import Subcrfooter from './Subcrfooter';

export default function Home() {
  return <>
          {/* <div class="scrollToTop"><i class="fas fa-chevron-up"></i></div> */}
   
    <div class="container enti_body">
     
      
      




     <Bootnav/>
     <Category/>
     <Destination/>
     <Nexttrip/>
     <Subcrfooter/>


      
    
      
    </div> 
    

  </>;
}
