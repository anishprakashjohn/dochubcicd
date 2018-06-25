import React from 'react';
import {connect} from 'react-redux';
import DealingListItem from './DealingListItem';
import selectDealings from '../selectors/dealings';

export const DealingList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <h4 > Instrument Description</h4>
            
        </div>
        { props.dealings.length === 0 ? (
            <div className="list-item list-item--message">
                <span>No Dealings</span>
            </div>
                
            ): ( 
            
              
                 props.dealings.map((dealing,index)=> 
                    <DealingListItem {...dealing}/>)
                        
                    
            )
            
            
                
        }
    </div>
)
const mapStateToProps = (state) => {
    return {
        dealings: selectDealings(state.dealings, state.filters)
    }
}

export default connect (mapStateToProps)(DealingList);