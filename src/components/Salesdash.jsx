import React from 'react'

 const Salesdash = () => {
    return (
        <div style={{marginTop:'20px'}}>
            <div>
             
                <div className="row">
                    <div className="col-sm-8 text-center">
                           <h4>Sales Dashboard</h4>
                      
                    </div>
                   <div className="col-sm-4" style={{display:'flex',justifyContent:'space-between'}}>
                        <button className="btn btn-sm btn-success" >Create Folder</button>
                         
                   
                    <form>
                        <input type="file"  />
                    </form>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Salesdash
