import React from 'react'
import {Doughnut} from 'react-chartjs-2'

 const Meter = ({val}) => {
     const data1={
         labels:['Apply%',''],
         datasets:[
             {
                 label:'',
                 backgroundColor: ['#d92027','#cceabb'],
                 data:[10,90]
             }
         ]
     }

     const data2={
         labels:['Pending%','%'],
         datasets:[
             {
                 label:'',
                 backgroundColor: ['#ffa41b','#cceabb'],
                 data:[40,90]
             }
         ]

     }

     const data3={
             labels:['Approved%','%'],
         datasets:[
             {
                 label:'',
                 backgroundColor: ['#58b4ae','#cceabb'],
                 data:[60,10]
             }
         ]

     }

     
     const data4={
             labels:['Done%','%'],
         datasets:[
             {
                 label:'',
                 backgroundColor: ['#21bf73','#cceabb'],
                 data:[90,10]
             }
         ]

     }
    return (
        <div style={{marginTop:'10px'}}>
            <meter style={{width:'100%',height:'30px'}} min="0" max="100" value={val}></meter>

            <div className="row" style={{marginTop:'15px'}} >
            <div className="col-sm-3 text-center" style={{padding:'5px' }}>
            <span style={{color:'#12947f'}} >Apply</span>
            <Doughnut data={data1} options={{legend:{display:false}}}/>
            
            </div>
            <div className="col-sm-3 text-center" style={{padding:'5px' }}>
                 <span style={{color:'#12947f'}} >Pending</span>
               <Doughnut data={data2} options={{legend:{display:false}}}/>
            </div>

            <div className="col-sm-3 text-center" style={{padding:'5px' }}>
                 <span style={{color:'#12947f'}} >Approved</span>
                 <Doughnut data={data3} options={{legend:{display:false}}}/>
            </div>

            <div className="col-sm-3 text-center" style={{padding:'5px' }}>
                 <span style={{color:'#12947f'}} >Done</span>
                    <Doughnut data={data4} options={{legend:{display:false}}}/>
            </div>
            </div>
        </div>
    )
}


export default Meter
