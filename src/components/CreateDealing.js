import React from 'react';
import DealingForm from './DealingForm';
import {connect} from 'react-redux'
import {startAddDealings} from '../actions/dealings'


 class CreateDealing extends React.Component {
    onSubmit = (dealing) => {
       
        this.props.dispatch(startAddDealings(dealing));
        this.props.history.push('/');
    }

    render () {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h2 className="page-header__title"> Add Dealing Details </h2>
                    </div>
                </div>
                <div className="content-container">
                    <DealingForm onSubmit= {this.onSubmit} />
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
    
//     addDealing: (dealing) => dispatch(addDealing(dealing))
// })

//export default connect(undefined,mapDispatchToProps)(CreateDealing);

export default connect()(CreateDealing);