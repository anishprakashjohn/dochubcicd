import React from 'react';
import DealingList from './DealingList';
import DealingListFilter from './DealingListFilter';
import DashboardSubHeader from './DashboardSubHeader';

const DashBoard = () => (
    <div>
        <DashboardSubHeader />
        <DealingListFilter />
        <DealingList />
    </div>
    
 
);

export default DashBoard;