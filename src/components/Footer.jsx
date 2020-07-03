import React from 'react'
import {Link} from 'react-router-dom'

const Footer=()=>{
    return(
        <div >
   <div style={{borderTop:'5px solid orange'}} className="text-center"> </div>
    
    <div style={{margin:'auto',width:'50%',textAlign:'center',marginTop:'10px'}}>
           <ul className="list-group" style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
         <li style={{listStyle:'none'}}><Link>IntelOra Resources & Developments</Link></li>
         <li style={{listStyle:'none'}} ><Link>www.intelora.co.in</Link></li>
     </ul>
    </div>
  
     

        </div>
  
    )
}

export default Footer