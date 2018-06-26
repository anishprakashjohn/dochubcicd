import React from 'react';
import {connect} from 'react-redux';
import {startRemoveDealing,startEditDealing} from '../actions/dealings';
import RenderDlngDetails from '../components/RenderDlngDetails';
import { NavLink, Link } from 'react-router-dom';

export class DealingDetails extends React.Component {
    onRemove = () => {
        this.props.dispatch(startRemoveDealing({id: this.props.dealing.id}));


        this.props.history.push('/list');
    }

    onNext = () => {
        var nextId = Number(this.props.dealing.id) + 1;
        this.props.history.push(`/view/${nextId}`);
    }

    onPrevious = () => {
        var previousId = Number(this.props.dealing.id) - 1;
        this.props.history.push(`/view/${previousId}`);
    }

    

    render () {
        return (
            
            <div className="content-container">
                <RenderDlngDetails {...this.props.dealing}/>
                 <div className="list-item">
                

                  <button className="button" onClick={this.onPrevious}> Previous </button>

                  <button className="button" onClick={this.onNext}> Next </button>
               
                   

                  
               
             
              </div>
                
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch, props) => ({
//     removeDealing: (data)=> dispatch(removeDealing(data))
// })

const mapStateToProps = (state, props)=> {
    return {
        dealing: state.dealings.find((dealing)=> {
            return dealing.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(DealingDetails);

// <button className="button" onClick={this.onRemove}> Remove </button>

//<button className="button" onClick={this.onRemove}> Remove </button>


// <Link className="list-item" to={`/edit/${this.props.dealing.id}`}>
// <button className="button"> Edit</button>
//  </Link>

// <Link className="list-item" to={`/edit/${this.props.dealing.id}`}>
//                         <button className="button"> Edit</button>
//                     </Link>

