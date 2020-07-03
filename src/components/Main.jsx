import React,{useState}from 'react'
import Meter from './Meter'
import Progcards from './Progcards'
import Probtask from './Probtask'
import Overdue from './Overdue'
import Upcoming from './Upcoming'
import Icons from './Icons'
import Sidebar from './Sidebar'
import Salesdash from './Salesdash'
import Avghandle from './Avghandle'

const Main = () => {
     const[mtval,setMtval]=useState(60)
    return (
        <div>

            <div className="row">
                <div className="col-sm-2"> <Sidebar/> </div>
                    <div className="col-sm-10">
                   {/* code cut from here */}
                    <div className="row">
                {/* <div className="col-sm-2"> </div> */}
                    <div className="col-sm-6 text-center">
                        <h4>Sales Dashboard</h4>
                    </div>
                      <div className="col-sm-6" style={{display:'flex'}}>
                           <button className="btn btn-sm btn-success">Create Folder</button>
                    <form>
                        <input type="file"  />
                    </form>
                    </div>
               
            </div>
           
            <div className="row">
                {/* <div className="col-sm-2">
                

                </div> */}
             
                <div className="col-sm-6">
                   <Meter val={mtval}/>
                </div>

                <div className="col-sm-6">
                <Progcards val1={60} val2={40} val3={20} val4={10}/>
                </div>
            </div>
            <br/>

            <div className="row" style={{marginTop:'5px'}}>
                {/* <div className="col-sm-2">
                   
                </div> */}
                <div className="col-sm-5"> <Probtask/></div>
                <div className="col-sm-6"><Overdue/></div>
     
            </div>
           <br/>

            <div className="row">
            {/* <div className="col-sm-2"> </div> */}
            <div className="col-sm-5"><Avghandle/></div>
            <div className="col-sm-6"><Upcoming/></div>
            </div>
          <br/>
                    </div>
               
            </div>

{/* Code to be inserted here */}
    
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10"> <Icons/></div>
           
            </div>
        </div>
    )
}

export default Main