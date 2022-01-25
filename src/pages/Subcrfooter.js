import React from 'react';

export default function Subcrfooter() {
  return <>
        <section class="subscribe">
        <h2 class="title">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo.
        </h2>
        <div class="contact">
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </section>

      <footer>
        <div class="grid">
          <div class="brand">
            <div class="logo">Jadoo.</div>
            <div class="subTitle">
              Book your trip in minute, get full Control for much longer.
            </div>
          </div>
          <div class="content">
            <div class="title">Company</div>
            <div class="links">
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="title">Contact</div>
            <div class="links">
              <ul>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="title">More</div>
            <div class="links">
              <ul>
                <li>Airline Fees</li>
                <li>Airline</li>
                <li>Low Fare Trips</li>
              </ul>
            </div>
          </div>
          <div class="social">
            <div class="links">
              <div class="link">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="link">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="link">
                <i class="fab fa-facebook-f"></i>
              </div>
            </div>
            <div class="app">
              <div class="title">Discover our app</div>
              <div class="links">
                <img src="assets/imeages/playstore.png" alt="" />
                <img src="assets/imeages/appstore.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <span>All rights reserved @Jadoo.co</span>
      </footer>

  </>;
}
