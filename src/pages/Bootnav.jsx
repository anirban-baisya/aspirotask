import React from 'react';

export default function Bootnav() {
  return <>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent ">
  <a class="navbar-brand brand" href="#">Jadoo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto ">
      <li class="nav-item active">
        <a class="nav-link mr-4 navi" href="#">Destinations <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4 navi  " href="#">Hotels</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4 " href="#">Flights</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4 " href="#">Bookings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4 " href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4 border border-dark rounded p-2" href="#">Sign up</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        EN
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

<section class="starter">
        
<div class="container">
    <div class="content">
        <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p class="subTitle">Best Destinations around the world</p>
                     <h1 class="title">
                    Travel, <span>enjoy</span> and live a new and full life
                     </h1>
                     <div class="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                            molestias, vel aliquid at praesentium quo.
                    </div>
                    <div class="last">
                        <button className='btn btn-lg p-2.9 '>Find out more</button>
                        <div class="play">
                            <button><i class="fas fa-play"></i></button>
                            <span>Play Demo</span>
                        </div>
                    </div>
                </div>


                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="image">
                            <img src="assets/imeages/traveller1.png" alt="" />
                            </div>

                        </div>
         </div>
    </div>
</div>
        
      </section>
  </>;
}
