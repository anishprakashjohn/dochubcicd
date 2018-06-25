import React from 'react';

export default class DealingForm extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            
            
            formName: props.dealing ? props.dealing.formName: '',
            legislation: props.dealing ? props.dealing.legislation: '',
            dealingCat: props.dealing ? props.dealing.dealingCat: '',
            dealingType:   props.dealing ? props.dealing.dealingType : '',
            folioReq: props.dealing ? props.dealing.folioReq: '',
            partLand: props.dealing ? props.dealing.partLand: '',
            coFTReq: props.dealing ? props.dealing.coFTReq: '',

            subjectInterestInLand: props.dealing ? props.dealing.subjectInterestInLand: '',
            encType:props.dealing ? props.dealing.encType: '',
            
            
            currentIntParty: props.dealing ? props.dealing.currentIntParty: '',
            currentIntPartyLabel:props.dealing ? props.dealing.currentIntPartyLabel: '',
            intParty: props.dealing ? props.dealing.intParty: '',
            intPartyLabel: props.dealing ? props.dealing.intPartyLabel: '',
            
            currentProp:props.dealing ? props.dealing.currentProp: '',
            currentPropLabel:props.dealing ? props.dealing.currentPropLabel: '',
            prop: props.dealing ? props.dealing.prop: '',
            propLabel:props.dealing ? props.dealing.propLabel: '',
            applicant: props.dealing ? props.dealing.applicant: '',
            applicantLabel:props.dealing ? props.dealing.applicantLabel: '',

            consideration: props.dealing ? props.dealing.consideration: '',
            additionalDtl: props.dealing ? props.dealing.additionalDtl: '',
            additionalDtlLabel:props.dealing ? props.dealing.additionalDtlLabel: '',
            additionalDtlContent: props.dealing ? props.dealing.additionalDtlContent: '',
            dlngReq: props.dealing ? props.dealing.dlngReq: '',

            supportDocReq:props.dealing ? props.dealing.supportDocReq: '',
            imageInst: props.dealing ? props.dealing.imageInst: '',
            attDesc: props.dealing ? props.dealing.attDesc: '',

            stampDuty: props.dealing ? props.dealing.stampDuty: '',
            noa: props.dealing ? props.dealing.noa: '',
            operativeWords: props.dealing ? props.dealing.operativeWords: '',
            
            //formName: props.dealing ? (props.expense.amount/100 ).toString():'',
            //createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            // calendarFocused: false,
            error: ''
        };
    }

    onFormNameChange = (e) => {
        const formName = e.target.value;
        this.setState (()=> ({
            formName
        }))
    }
    onLegisChange = (e) => {
        const legislation= e.target.value;
        
        this.setState (()=> ({
            legislation
        }))
    }

    onDealingCatChange = (e) => {
        const dealingCat= e.target.value;
        this.setState (()=> ({
            dealingCat
        }))
    }
    onDealingType = (e) => {
        const dealingType = e.target.value;
        this.setState (()=> ({
            dealingType
        }))
    }
    
    

    
    onFolioReqChange = (e) => {
        const folioReq= e.target.value;
        this.setState (()=> ({
            folioReq
        }))
    }
    onCoFTReqChange = (e) => {
        const coFTReq=e.target.value;
        this.setState (()=> ({
            coFTReq
        }))
    }

    onPartLandChange =(e)=> {
        const partLand=e.target.value;
        this.setState (()=> ({
            partLand
        }))
    }

    onSubjIntChange = (e) => {
        const subjectInterestInLand= e.target.value;
        
        this.setState (()=> ({
            subjectInterestInLand
        }))
    }

    
    onEncTypeChange = (e) => {
        const encType= e.target.value;
        
        this.setState (()=> ({
            encType
        }))
    }
    // Current Interest Party
    onCurrentInt = (e) => {
        const currentIntParty = e.target.value;
        this.setState (()=> ({
            currentIntParty
        }))
    }

    onCurrentIntLabel = (e)=> {
        const currentIntPartyLabel = e.target.value;
        this.setState (()=> ({
            currentIntPartyLabel
        }))
    }

    // Interest Party
    onInt = (e) => {
        const intParty = e.target.value;
        this.setState (()=> ({
            intParty
        }))
    }

    onIntLabel = (e)=> {
        const intPartyLabel = e.target.value;
        this.setState (()=> ({
            intPartyLabel
        }))
    }
    
    // Current Proprietor
    onCurrentProp = (e)=> {
        const currentProp = e.target.value;
        this.setState (()=> ({
            currentProp
        }))
    }
    onCurrentPropLabel = (e)=> {
        const currentPropLabel = e.target.value;
        this.setState (()=> ({
            currentPropLabel
        }))
    }

    // Proprietor

    onProp= (e)=> {
        const prop=e.target.value;
        this.setState (()=> ({
            prop
        }))
    }

    onPropLabel = (e)=> {
        const propLabel = e.target.value;
        this.setState (()=> ({
            propLabel
        }))
    }

    //Applicant

    onApplicant= (e)=> {
        const applicant=e.target.value;
        this.setState (()=> ({
            applicant
        }))
    }

    onApplicantLabel = (e)=> {
        const applicantLabel = e.target.value;
        this.setState (()=> ({
            applicantLabel
        }))
    }

    // Consideration

    onConsideration = (e) => {
        
        const consideration = e.target.value;
        
        this.setState (()=> ({
            consideration
        }))
        
    }

    //Additional Information
    onAddInfo = (e) => {
        const additionalDtl = e.target.value;
        this.setState (()=> ({
            additionalDtl
        }))
    }

    onAddInfoLabel = (e)=> {
        const additionalDtlLabel = e.target.value;
        this.setState (()=> ({
            additionalDtlLabel
        }))
    }

    onAddInfoContent = (e)=> {
        const additionalDtlContent = e.target.value;
        this.setState (()=> ({
            additionalDtlContent
        }))
    }
    

    //Image Inst and Supp Doc

    onImgInst = (e)=> {
        const imageInst = e.target.value;
        this.setState (()=> ({
            imageInst
        }))
    }

    onSuppDoc = (e)=> {
        const supportDocReq = e.target.value;
        this.setState (()=> ({
            supportDocReq
        }))
    }

    onAttDesc = (e) => {
        const attDesc = e.target.value;
        this.setState (()=> ({
            attDesc
        }))
    }

    onDlngReq = (e) => {
        const dlngReq = e.target.value;
    
        
        this.setState (()=> ({
            dlngReq
        }))
        
    }

    // StampDuty and NOA

    onStampDuty = (e) => {
        const stampDuty = e.target.value;
    
        
        this.setState (()=> ({
            stampDuty
        }))
        
    }

    onNoa = (e) => {
        const noa = e.target.value;
    
        
        this.setState (()=> ({
            noa
        }))
        
    }

    onOpWordsChange = (e) => {
        const operativeWords = e.target.value;  
        console.log(operativeWords)
        
        this.setState (()=> ({
            operativeWords
        }))
        

    }


    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.formName || !this.state.dealingCat || !this.state.legislation ) {
            this.setState (()=> ({
                error: 'Please provide value for all these fields : Form Name, Dealing Category, Legislation and Dealing Description description'
            }))
        }
        else {
            this.setState (()=> ({error: ''}));
            
            this.props.onSubmit ({
               
                formName: this.state.formName,
                legislation: this.state.legislation,
                dealingCat: this.state.dealingCat,
                dealingType: this.state.dealingType,
                
                folioReq: this.state.folioReq,
                coFTReq: this.state.coFTReq,
                partLand: this.state.partLand,

                subjectInterestInLand: this.state.subjectInterestInLand,
                encType:this.state.encType,
                
                currentIntPartyLabel: this.state.currentIntPartyLabel,
                currentIntParty: this.state.currentIntParty,
                intParty: this.state.intParty,
                intPartyLabel: this.state.intPartyLabel,

                currentProp: this.state.currentProp,
                currentPropLabel: this.state.currentPropLabel,
                prop: this.state.prop,
                propLabel: this.state.propLabel,
                applicant: this.state.applicant,
                applicantLabel: this.state.applicantLabel,

                consideration: this.state.consideration,
                additionalDtl: this.state.additionalDtl,
                additionalDtlLabel: this.state.additionalDtlLabel,
                additionalDtlContent: this.state.additionalDtlContent,
                dlngReq: this.state.dlngReq,

                supportDocReq: this.state.supportDocReq,
                imageInst: this.state.imageInst,
                attDesc: this.state.attDesc,

                noa: this.state.noa,
                stampDuty: this.state.stampDuty,
                operativeWords: this.state.operativeWords


            })
        }
        
        
    }
   
    render () {
        let optionElements = [{
            name: ''
        },
            {
            name: 'Mandatory'
        }, {
            name: 'Optional'
        }, {
            name: 'Not Required'
        }];
        let optionItems = optionElements.map((optionitem) =>
                <option value = {optionitem.name} key={optionitem.name}>{optionitem.name}</option>
            );
        let optionPtyLblElements = [{
                name: ''
            },
                {
                name: 'Relinquishing Party'
            }, {
                name: 'Receiving Party'
            }, {
                name: 'Applicant'
            }];
            let optionPtyLblItems = optionPtyLblElements.map((optionPtyLblitem) =>
                    <option value = {optionPtyLblitem.name} key={optionPtyLblitem.name}>{optionPtyLblitem.name}</option>
                );
            
        return (
            <div>
              
                <form  className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error"> {this.state.error} </p>}
                   
                   
                    
                  
                    <input 
                        type="text"
                        placeholder = "FormName"
                        className="text-input"
                        value={this.state.formName}
                        onChange={this.onFormNameChange}
                    />
                    <input 
                        type="text"
                        className="text-input"
                        placeholder = "Legislation"
                        value={this.state.legislation}
                        onChange={this.onLegisChange}
                    />
                    <div className="list-item">
                    Dealing Category
                        
                        <select name="Category" className="select" value={this.state.dealingCat} onChange= {this.onDealingCatChange}>
                                <option value=" "></option>
                                <option value="Change Proprietorship">Change Propritorship</option>
                                <option value="Record">Recording of Encumbrance</option>
                                <option value="Vary">Variation of Encumbrance</option>
                                <option value="Remove">Removal of Encumbrance</option>
                                <option value="Action">Action by Registrar</option>
                        </select> 
                    
                    <input 
                        type="text"
                        className="text-input"
                        placeholder = "Dealing Type Code"
                        value={this.state.dealingType}
                        onChange={this.onDealingType}
                    />
                    
                   

                    
                    
                        
                    </div>
                    <div className="list-item">
                    Folio 
                     <select name="folioOption" value={this.state.folioReq} className="select" onChange={this.onFolioReqChange} >
                            {optionItems}
                    </select> 

                    Part of Land
                    <select name="folioOption" value={this.state.partLand} className="select" onChange={this.onPartLandChange} >
                           {optionItems}
                   </select> 
                    CoFT Required
                    <select name="cofTRequired" value={this.state.coFTReq}  className="select" onChange={this.onCoFTReqChange} >
                           {optionItems}
                   </select> 
                    </div>
                    
                    <div className="list-item">
                    Subject Interest In Land
                    <select name="subjectInterestInLand" value={this.state.subjectInterestInLand}  className="select" onChange = {this.onSubjIntChange} >
                            {optionItems}                   
                        
                    </select> 
                    <input 
                        type="text"
                        className="text-input"
                        placeholder = "Enumbrance Type" 
                        value={this.state.encType}
                        onChange={this.onEncTypeChange}
                    />
                    </div>

                    <div className="list-item">
                    Current Interest Party
                    <select name="currentInterestParty" value={this.state.currentIntParty} className="select" onChange={this.onCurrentInt} >
                        {optionItems}
                    </select> 
                    
                    <select name="currentInterestPartyLabel" value={this.state.currentIntPartyLabel} className="select" onChange={this.onCurrentIntLabel} >
                        {optionPtyLblItems}
                    </select> 
                    </div>

                    <div className="list-item">
                    Incoming Interest Party
                    <select name="InterestParty" className="select" value={this.state.intParty} onChange={this.onInt} >
                        {optionItems}
                    </select> 
                    
                    <select name="InterestPartyLabel" className="select" value={this.state.intPartyLabel}  onChange={this.onIntLabel} >
                        {optionPtyLblItems}
                    </select> 
                    </div>

                    <div className="list-item">
                    Current Proprietor
                    <select name="currentProprietor" className="select" value={this.state.currentProp}  onChange={this.onCurrentProp} >
                        {optionItems}
                    </select> 
                    
                    <select name="currentProprietorLabel" className="select" value={this.state.currentPropLabel} onChange={this.onCurrentPropLabel} >
                        {optionPtyLblItems}
                    </select> 
                    </div>

                   
                    <div className="list-item">
                    Incoming Proprietor
                    <select name="proprietor" className="select" value={this.state.prop} onChange={this.onProp} >
                        {optionItems}
                    </select> 
                    
                    <select name="proprietorLabel" className="select"  value={this.state.propLabel} onChange={this.onPropLabel} >
                        {optionPtyLblItems}
                    </select> 
                    </div>

                   

                    <div className="list-item">
                    Applicant
                    <select name="applicant" className="select" value={this.state.applicant} onChange={this.onApplicant} >
                        {optionItems}
                    </select> 
            
                    <select name="applicantLabel" className="select" value={this.state.applicantLabel} onChange={this.onApplicantLabel} >
                        {optionPtyLblItems}
                    </select> 
                    </div>

                    <div className="list-item">
                    Consideration
                    <select name="consideration" className="select" value={this.state.consideration} onChange={this.onConsideration} >
                        {optionItems}
                    </select> 

                    Dealing Requirement

                    <input 
                    type="text"
                    className="text-input"
                    placeholder = "Dealing Req"
                    value={this.state.dlngReq}
                    onChange={this.onDlngReq}
                    />

                    </div>

                    <div className="list-item">
                    Additional Detail
                    
                    <select name="additionInfoReq" value={this.state.additionalDtl} className="select" onChange={this.onAddInfo} >
                        {optionItems}
                    </select> 
                    
                    <input 
                        type="text"
                        className="text-input"
                        placeholder = "Additional Detail Label"
                        value={this.state.additionalDtlLabel}
                        onChange={this.onAddInfoLabel}
                    />
                    </div>

                    <textarea
                        placeholder="Add description for additional Detail (optional)"
                        className="textarea"
                        value={this.state.additionalDtlContent}
                        onChange={this.onAddInfoContent}
                    >
                    </textarea>

                    <div className="list-item">
                    Stamp Duty
                    
                    <select name="stampDuty" value={this.state.stampDuty} className="select" onChange={this.onStampDuty} >
                        {optionItems}
                    </select> 
                    
                    NOA Required
                    
                    <select name="NOA" value={this.state.noa}  className="select" onChange={this.onNoa} >
                        {optionItems}
                    </select> 
                    </div>

                    <div className="list-item">
                    Operative Words
                        
                        <select name="Category" className="select" value={this.state.operativeWords} onChange= {this.onOpWordsChange}>
                                <option value=" "></option>
                                <option value="Transfer - Residual Document">Transfer - Residual Document</option>
                                <option value="T2 Transfer">T2 Transfer</option>
                                <option value="Change of Proprietorship">Change of Proprietorship</option>

                                <option value="Record">Record</option>
                                <option value="Lease">Lease</option>
                                <option value="Annuity">Annuity</option>
                                <option value="Creation of Forestry Right">Creation of Forestry Right</option>
                                <option value="Transfer of Forestry Right">Transfer of Forestry Right</option>

                                <option value="Variation">Variation</option>
                                <option value="Remove">Remove</option>
                                <option value="Action">Action</option>
                    </select> 
                    </div>

                    <div className="list-item">
                    Supporting Document Required
                    
                    <select name="supportingDocReq" value={this.state.supportDocReq} className="select" onChange={this.onSuppDoc} >
                        {optionItems}
                    </select> 
                    
                    Image Instrument Required
                    
                    <select name="ImageInstrumentReq" value={this.state.imageInst}  className="select" onChange={this.onImgInst} >
                        {optionItems}
                    </select> 
                    </div>

                    <textarea
                        placeholder="Add description for attachments / dealing(optional)"
                        className="textarea"
                        onChange={this.onAttDesc}
                        value={this.state.attDesc}  
                    >
                    </textarea>

                    

                    <button className="button">Update </button>
                </form>
            </div>
        )
    }
}

