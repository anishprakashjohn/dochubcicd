import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setCategoryFilter} from '../actions/filters';

class DealingListFilters extends React.Component {

   render (){
       return (
            <div className="content-container">
            <p> </p>
                <div className="input-group">
                <div className="list-item">    
                    <div className="list-item-two">
                        <input 
                            type="text" 
                            value={this.props.filters.text} 
                            onChange ={(e)=> {
                                this.props.dispatch(setTextFilter(e.target.value))
                            }}
                        />
                    </div>
                
                <div className="list-item-two">
                 <select className="select" name="Category" onChange= {(e)=> {
                        this.props.dispatch(setCategoryFilter(e.target.value))}}>
                        <option value="All">All</option>
                            <option value="Change Proprietorship">Change Propritorship</option>
                            <option value="Record">Recording of Encumbrance</option>
                            <option value="Vary">Variation of Encumbrance</option>
                             <option value="Remove">Removal of Encumbrance</option>
                             <option value="Action">Action by Registrar</option>
                    </select> 
                </div>
                
                <p> </p>
           </div>
           </div>
           </div>  

       )
   }
    
}
const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
}


export default connect(mapStateToProps)(DealingListFilters);