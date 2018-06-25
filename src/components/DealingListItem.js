import React from 'react';
import {Link} from 'react-router-dom';

const DealingListItem = ({
    
    
    
    id,
    formName,
    dealingCat,
    legislation,
    subjectInterestInLand,
    currentIntParty

}) => (
    
    <div>
    <Link className="list-item" to={`/view/${id}`}>
        
        <div className="list-item__title"> {id}.{formName} - {legislation} </div>
        
    </Link>  
    


    
    </div>
)

export default DealingListItem;