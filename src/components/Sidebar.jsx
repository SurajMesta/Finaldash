import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
         <div>
               <div style={{marginTop:'50px'}}>
            <ul className="list-group" >
             <li className="list-group-item"><i class="fas fa-tachometer-alt"></i>&nbsp;&nbsp;<span> <Link >Dashboard</Link></span></li>
                  <li className="list-group-item"><i class="fas fa-users"></i>&nbsp;&nbsp;<span><Link>Segment</Link></span></li>
                       <li className="list-group-item"><i class="fas fa-tasks"></i>&nbsp;&nbsp;<span><Link>Approvals</Link></span></li>
                            <li className="list-group-item"><i class="fas fa-id-badge"></i>&nbsp;&nbsp;<span><Link>Contacts</Link></span></li>
                                 <li className="list-group-item"><i class="fas fa-address-card"></i>&nbsp;&nbsp;<span><Link>Followups</Link></span></li>
                                      <li className="list-group-item"><i class="fas fa-list-ul"></i>&nbsp;&nbsp;<span><Link>ToDoTask</Link></span></li>
                                           <li className="list-group-item"><i class="far fa-file"></i>&nbsp;&nbsp;<span><Link>Reports</Link></span></li>
                                                <li className="list-group-item"><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;<span><Link>Location</Link></span></li>
                                                     <li className="list-group-item"><i class="fas fa-sign-out-alt"></i>&nbsp;&nbsp;<span><Link>Logout</Link></span></li>
                                                     <li className="list-group-item">
                                                            <div style={{paddingTop:'500px',paddingRight:'0'}}></div>
                  
                  <div>
                     <Link>More Options</Link>
                  </div>
                                                     </li>
            </ul>
{/*                   
                  <div style={{paddingTop:'580px',paddingRight:'0'}}></div>
                  
                  <div>
                     <Link>More Options</Link>
                  </div> */}
            </div>
            
         </div>
       
          
       
    )
}

export default Sidebar
