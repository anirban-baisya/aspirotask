import React from 'react';

export default function Destination() {
  return <>
      <section class="destination">
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
      </section>
  </>;
}
