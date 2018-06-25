import React from 'react';
import { connect } from 'react-redux';
import DealingForm from './DealingForm';
import { startEditDealing, startRemoveDealing } from '../actions/dealings';

export class EditDealingPage extends React.Component {
  onSubmit = (dealing) => {
    this.props.startEditDealing(this.props.dealing.id, dealing);
    this.props.history.push(`/view/${this.props.dealing.id}`);
  };
  onRemove = () => {
    this.props.startRemoveDealing({ id: this.props.dealing.id });
    this.props.history.push('/list');
  };

  
  render() {
    
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Dealing</h1>
          </div>
        </div>
        <div className="content-container">
          <DealingForm
            dealing={this.props.dealing}
            onSubmit={this.onSubmit}
          />
          
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  dealing: state.dealings.find((dealing) => dealing.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditDealing: (id, dealing) => dispatch(startEditDealing(id, dealing)),
  startRemoveExpense: (data) => dispatch(startRemoveDealing(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDealingPage);
