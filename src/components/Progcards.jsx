import React from 'react'

 const Progcards = ({val1,val2,val3,val4}) => {
    return (
        <div>
            <div className="card" style={{width:'70%',marginTop:'20px'}}>
                <div className="card-body">
                   <meter className="mt1" max="100" min="0" value={val1}  style={{width:'80%'}}></meter> {val1}%
                    <br/>
                     <meter className="mt2" max="100" min="0" value={val2}  style={{width:'80%'}}></meter> {val2}%
                     <br/>
                      <meter className="mt3" max="100" min="0" value={val3}  style={{width:'80%'}}></meter> {val3}%
                      <br/>
                       <meter className="mt4" max="100" min="0" value={val4}  style={{width:'80%'}}></meter> {val4}%
                </div>
            </div>
        </div>
    )
}

export default Progcards
