import React from 'react'
import {Link} from 'react-router-dom'

 const Icons = () => {
    return (
        <div className="row" >
            <div className="col-sm-3"> <span  ><i className="fas fa-balance-scale-right"></i>  <span className="text-info"><Link>Loan Balance</Link></span> </span> </div>
         <div className="col-sm-3">  <span ><i className="fas fa-clipboard-list"></i>&nbsp; <span className="text-info"><Link>EMI Viewer</Link></span></span></div>
         <div className="col-sm-3"><span ><i class="fas fa-calculator"></i>&nbsp; <span className="text-info"><Link>Loan Calculator</Link></span></span></div>
           <div className="col-sm-3"><span ><i class="fas fa-sign-out-alt"></i>&nbsp; <span className="text-info"><Link>Logout</Link></span></span></div>
          
       
         
        </div>
    )
}

export default Icons
