import uuid from 'uuid';
import database from '../firebase/firebase.js'

// ADD DEALING ACTION

export const addDealing = (dealing) => ({
    type: 'ADD_DEALING',
    dealing 
});

// START ADD DEALINGS

export const startAddDealings = (dealingData = {})=> {
    return (dispatch)=> {
        const {
            formName='',
            legislation='',
            dealingCat = '',
            dealingType ='',
            folioReq= '',
            coFTReq='',
            partLand='',

            subjectInterestInLand = '',
            encType='',

            currentIntParty='',
            currentIntPartyLabel='',
            intParty='',
            intPartyLabel='',

            currentProp='',
            currentPropLabel='',
            prop='',
            propLabel='',
            applicant='',
            applicantLabel='',

            consideration='',
            additionalDtl='',
            additionalDtlLabel='',
            additionalDtlContent='',
            dlngReq='',

            supportDocReq='',
            imageInst='',
            attDesc='',
            noa='',
            stampDuty='',
            operativeWords =''
            
            
        }= dealingData ;
        const dealing = {
           
            formName,
            legislation,
            dealingCat,
            dealingType,

            folioReq,
            coFTReq,
            partLand,

            subjectInterestInLand,
            encType,

            currentIntParty,
            currentIntPartyLabel,
            intParty,
            intPartyLabel,

            currentProp,
            currentPropLabel,
            prop,
            propLabel,
            applicant,
            applicantLabel,

            consideration,
            additionalDtl,
            additionalDtlLabel,
            additionalDtlContent,
            dlngReq,

            noa,
            stampDuty,

            supportDocReq,
            imageInst,
            attDesc,
            operativeWords
        }
        
        return database.ref('dealings').push(dealing).then((ref)=> {
            console.log(dealing)
            dispatch(addDealing({
                id: ref.key,
                ...dealing
            }))
    })
}
}

// REMOVE DEALING ACTION 
export const removeDealing = ({id}={}) => ({
    type: 'REMOVE_DEALING',
    id
})

// START REMOVE DEALING

export const startRemoveDealing = ({id}={}) => {
    return (dispatch)=> {
        return database.ref(`dealings/${id}`).remove().then(()=> {
            dispatch(removeDealing({id}))
        })
    }
}

// EDIT_Dealing
export const editDealing = (id, updates) => ({
    type: 'EDIT_DEALING',
    id,
    updates
  });
  
  export const startEditDealing = (id, updates) => {
    return (dispatch ) => {
      
      return database.ref(`dealings/${id}`).update(updates).then(() => {
        dispatch(editDealing(id, updates));
      });
    }
  };

// SET_DEALINGS

export const setDealings = (dealings) => ({
    type: 'SET_DEALINGS',
    dealings
})

export const startSetDealings = () => {
    return (dispatch) => {
        return database.ref('dealings').once('value').then((snapshot)=> {
            const dealings = [];
            snapshot.forEach((childSnapshot)=> {
                dealings.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
           
            dispatch(setDealings(dealings));
        })
    }
}
