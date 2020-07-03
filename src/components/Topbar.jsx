import React from 'react'
import {Link} from 'react-router-dom'


 const Topbar = () => {
    return (
        <div>

       <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom:'1px solid blue'}}>
  <a class="navbar-brand" href="#">IntelOra</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="ml-auto">
       <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
 
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      <span className="nav-link"><i class="fas fa-question-circle"></i> </span>
      </li>
     
      <li class="nav-item">
       <span className="nav-link"><i class="fas fa-sign-out-alt"></i></span>
      </li>
   
    </ul>
  </div>
</nav>
        </div>
   
    )
}

export default Topbar
