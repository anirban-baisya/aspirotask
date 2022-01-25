import React from 'react';

export default function Nexttrip() {
  return <>
         <section class="next-trip">
        <div class="content">
          <p class="subtitle">Easy and Fast</p>
          <h2 class="title">Book your Next Trip in 3 Easy Steps</h2>
          <div class="steps">
            <div class="step">
              <div class="icon"><img src="assets/imeages/nextsteps1.png" alt="" /></div>
              <div class="text">
                <h3 class="title">Choose Destination</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quos, dolor!
                </p>
              </div>
            </div>
            <div class="step">
              <div class="icon"><img src="assets/imeages/nextsteps2.png" alt="" /></div>
              <div class="text">
                <h3 class="title">Make Payment</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quos, dolor!
                </p>
              </div>
            </div>
            <div class="step">
              <div class="icon"><img src="assets/imeages/nextsteps3.png" alt="" /></div>
              <div class="text">
                <h3 class="title">Reach Airport on Selected Date</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quos, dolor!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="trip">
          <img src="assets/imeages/next trip.jpg" alt="" />
          <h3 class="title">Trip to Greece</h3>
          <p class="subTitle">14-29 April | by Anirban Baisya</p>
          <div class="icons">
            <div class="icon">
              <i class="fas fa-leaf"></i>
            </div>
            <div class="icon">
              <i class="fas fa-map"></i>
            </div>
            <div class="icon">
              <i class="fas fa-location-arrow"></i>
            </div>
          </div>
          <div class="like">
            <div class="count">
              <i class="fas fa-skiing-nordic"></i>
              <span>24 people going</span>
            </div>
            <i class="far fa-heart"></i>
          </div>
        </div>
      </section>

  </>;
}
