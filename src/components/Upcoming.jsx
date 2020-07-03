import React from 'react'

 const Upcoming = () => {
    return (
        <div>
             <div >

            <div className="card" >
            <div className="card-title text-center" style={{color:'blue'}}>
                Upcoming Deadlines
            </div>

     
                       <table className="table table-stripped table-hover table-responsive"  >
                       <tbody style={{marginBottom:'0px'}}>
                           <tr className="text-center">
                             
                                   
                                   <th>Employee</th>
                                   <th>Task</th>
                                   <th>Deadline</th>
                                   <th>Workload</th>
                                
                        
                           </tr>
                      
                           <tr className="text-center" >
                              
                               <td >Catherine</td>
                                 <td >Interactive Dashboard Features</td>
                                   <td >2017-08-15</td>
                                     <td ><meter max="100" min="0" value="80"></meter></td>
                           </tr>

                              <tr className="text-center">
                               <td >Georg</td>
                                 <td>Facebook API Connector</td>
                                   <td >2017-08-12</td>
                                     <td ><meter max="100" min="0" value="60"></meter></td>
                           </tr>

                              <tr className="text-center">
                               <td >
                                  Nancy
                             
                                  
                                  </td>
                                 <td >Set-up Test Environment</td>
                                   <td >2017-08-12</td>
                                     <td ><meter max="100" min="0" value="40"></meter></td>
                           </tr>

                              <tr className="text-center">
                               <td >Paula</td>
                                 <td >Finalize Testing Plan</td>
                                   <td >2017-08-12</td>
                                     <td ><meter max="100" min="0" value="40"></meter></td>
                           </tr>

                           
                       </tbody>
                    </table>
          </div>
                
               
           
               
       
            </div>
    
        </div>
    )
}

export default Upcoming
