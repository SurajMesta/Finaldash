import React from 'react'
import {Bar} from 'react-chartjs-2'

 const Avghandle = () => {
     const data={
         labels:['Georg','Kate','Nancy','Paula','Richard'],
         datasets:[
             {
                 label:'Time%',
                 backgroundColor: 'tomato',
                 data:[53/10,45/10,37/10,48/10,64/10]
             }
         ]
     }
    return (
        <div style={{height:'50%'}}>
         <div className="card">
      
           <div className="card-title text-center " style={{color:'blue'}}>   Avg handle Time (In Days) For Project-Task   </div>
            
            <div className="card-body mt-10">
                <div style={{marginTop:'20px'}}>
                             <Bar data={data} options={{
                       legend:{
                           display:false
                       }
                   }}/>
                </div>

                <div style={{marginTop:'90px'}}>

                </div>
          
                   
             
            </div>
            
      


         </div>
        </div>
    )
}


export default Avghandle
