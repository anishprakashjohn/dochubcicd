import React from 'react';

const RenderDlngDetails = ({

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
    

})=> (
    <div className="content-container">
        <div className="list-item">  <b>Instrument Name:</b> {formName} </div>
       
        <div className="list-item"> <b> Legislation:</b> {legislation} </div>
        <div className="list-item">
            <div className="list-item-two">  <b>Dealing Category: </b>{dealingCat} </div>
            <div className="list-item-two">  <b>Dealing Type Code: </b>{dealingType} </div>
        </div>
        
        <div className="list-item">
            
            <div className="list-item-two"> <b> Folio:  </b> {folioReq} </div>
            <div className="list-item-two"> <b> Part of Land:  </b> {partLand} </div>
            <div className="list-item-two">  <b>Coft Required: </b>{coFTReq} </div> 
                                
        </div>
        {(subjectInterestInLand=='Mandatory' || subjectInterestInLand=='Optional' ) &&
        <div className="list-item">
            <div className="list-item-two">  <b>Subject Interest in Land: </b>{subjectInterestInLand} </div>
            {encType && <div className="list-item-two"> <b> Encumbrance Type:  </b> {encType} </div> }                       
        </div>
        }
        
            <div className="list-item">
                <div className="list-item-two">  <b>Current Interest Party: </b>{currentIntParty} </div>
              {currentIntPartyLabel &&   <div className="list-item-two"> <b> Label:  </b> {currentIntPartyLabel} </div>  }                      
            </div>
        

        
            <div className="list-item">
                <div className="list-item-two">  <b>Incoming Interest Party: </b>{intParty} </div>
               {intPartyLabel && <div className="list-item-two"> <b> Label:  </b> {intPartyLabel} </div>   }                     
            </div>
        

        
            <div className="list-item">
                <div className="list-item-two">  <b>Current Proprietor: </b>{currentProp} </div>
            {currentPropLabel &&     <div className="list-item-two"> <b> Label:  </b> {currentPropLabel} </div>}
        </div>

       
        <div className="list-item">
            <div className="list-item-two">  <b> Incoming Proprietor: </b>{prop} </div>
         {propLabel &&   <div className="list-item-two"> <b> Label:  </b> {propLabel} </div> }</div>
       
        <div className="list-item">
            <div className="list-item-two">  <b> Applicant: </b>{applicant} </div>
            { applicantLabel &&   <div className="list-item-two"> <b> Label:  </b> {applicantLabel} </div>   }
    </div>

    
    <div className="list-item">
        <div className="list-item-two">  <b> Consideration: </b>{consideration} </div>
        { dlngReq ? (
        <div className="list-item-two"> <b> Dealing Requirement:  </b> {dlngReq} </div> ):
        (<div className="list-item-two"> <b> Dealing Requirement:  </b> NA </div>)
        }                       
    </div>

    <div className="list-item">
        <div className="list-item-two">  <b> Additional Detail: </b>{additionalDtl} - {additionalDtlLabel}</div>
        { additionalDtlContent && 
        <div className="list-item-two"> {additionalDtlContent} </div> 
        }                       
    </div>

    <div className="list-item">
        
        <div className="list-item-two">  <b> Stamp Duty : </b>{stampDuty} </div>
        <div className="list-item-two">  <b> NOA: </b>{noa} </div>
                            
    </div>

    <div className="list-item">
        <div className="list-item-two">  <b> Supporting Document: </b>{supportDocReq} </div>
        <div className="list-item-two">  <b> Image Instrument : </b>{imageInst} </div>
        
                            
    </div>
    {operativeWords &&
    <div className="list-item-two"> <b> Operative Words: </b>     {operativeWords}  </div> 
    }
    <div className="list-item"> {attDesc} </div> 
    
        
    
          

    </div>

    
)

export default RenderDlngDetails;