import React from 'react'


 const Overdue = () => {
    return (
        <div >

            <div className="card">
            <div className="card-title text-center" style={{color:'blue'}}>
                Overdue Tasks
            </div>

     
                       <table className="table table-hover table-responsive table-stripped"  >
                       <tbody style={{marginBottom:'0px'}}>
                           <tr className="text-center">
                             
                                   
                                   <th>Overdue</th>
                                   <th>Task</th>
                                   <th>Deadline</th>
                                   <th>Employee</th>
                                
                        
                           </tr>
                      
                           <tr className="text-center" >
                              
                               <td style={{color:'#ffa41b',background:'transparent'}}>1Day</td>
                                 <td>Status update for beyond</td>
                                   <td >2017-08-15</td>
                                     <td>Paula</td>
                           </tr>

                              <tr className="text-center">
                               <td style={{color:'#ffa41b',background:'transparent'}}>4Day</td>
                                 <td>Finish UX optimizations</td>
                                   <td>2017-08-12</td>
                                     <td>Paula</td>
                           </tr>

                              <tr className="text-center">
                               <td style={{color:'red',background:'transparent',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                  
                                   <div style={{backgroundColor: 'red',width:'10%',height:'15%',borderRadius:'50%',padding:'10%'}}></div> 10Days
                                  
                                  </td>
                                 <td >Status update for beyond</td>
                                   <td >2017-08-06</td>
                                     <td >Paula</td>
                           </tr>

                              <tr className="text-center">
                               <td style={{color:'red',background:'transparent',display:'flex',justifyContent:'space-between',alignItems:'center'}}>     <div style={{backgroundColor: 'red',width:'10%',height:'15%',borderRadius:'50%',padding:'10%'}}></div> &nbsp;&nbsp;24Days</td>
                                 <td >Relational Database Connections</td>
                                   <td >2017-08-15</td>
                                     <td >Paula</td>
                           </tr>

                           
                       </tbody>
                    </table>
          </div>
                
               
           
               
       
            </div>
    
    )
}

export default Overdue
