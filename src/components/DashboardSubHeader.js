import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSubHeader  = () => (
    <div className="page-header">
      <div className="content-container">
        
      <div className="page-header__actions">
      <Link className="button" to="/list">Dashboard</Link>
      
    </div>

        
      </div>
    </div>
)

export default DashboardSubHeader


// <div className="page-header__actions">
//           <Link className="button" to="/create">Add Dealing</Link>
          
//         </div>
        