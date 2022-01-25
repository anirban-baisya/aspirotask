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
     
       {/* Home Section */}
      {/* <nav>
        <div class="nav-container">
          <div class="brand">Jadoo</div>
          <div class="responsive-toggle">
            <i class="fas fa-bars"></i>
          </div>
        </div>

        <div class="links">
          <ul>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Flights</a></li>
            <li><a href="#">Bookings</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign up</a></li>
            <li><a href="#">EN <i class="fas fa-caret-down"></i></a></li>
          </ul>
        </div>
      </nav>

      <section class="starter">
        <div class="content">
          <p class="subTitle">Best Destinations around the world</p>
          <h1 class="title">
            Travel, <span>enjoy</span> and live a new and full life
          </h1>
          <div class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            molestias, vel aliquid at praesentium quo.
          </div>
          <div class="last">
            <button>Find out more</button>
            <div class="play">
              <button><i class="fas fa-play"></i></button>
              <span>Play Demo</span>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="assets/imeages/traveller1.png" alt="" />
        </div>
      </section>
       */}
      




     <Bootnav/>
     <Category/>
     <Destination/>
     <Nexttrip/>
     <Subcrfooter/>


      
      {/* <section class="destination">
        <p class="subtitle">Top Selling</p>
        <h2 class="title">Top Destinations</h2>
        <div class="cards">
          <div class="card">
            <div class="image">
              <img src="assets/imeages/destination1.png" alt="" />
            </div>
            <div class="content">
              <h3>Rome, Italy</h3>
              <h3>$5,32k</h3>
            </div>
            <div class="time">
              <i class="fas fa-location-arrow"></i>
              <h4>10 Days Trip</h4>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="assets/imeages/destination2.jpg" alt="" />
            </div>
            <div class="content">
              <h3>Rome, Italy</h3>
              <h3>$5,32k</h3>
            </div>
            <div class="time">
              <i class="fas fa-location-arrow"></i>
              <h4>10 Days Trip</h4>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="assets/imeages/destination3.png" alt="" />
            </div>
            <div class="content">
              <h3>Rome, Italy</h3>
              <h3>$5,32k</h3>
            </div>
            <div class="time">
              <i class="fas fa-location-arrow"></i>
              <h4>10 Days Trip</h4>
            </div>
          </div>
        </div>
      </section> */}
     
      
    </div> 
    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="script.js"></script>

  </>;
}
