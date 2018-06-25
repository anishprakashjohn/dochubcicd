import {create} from 'domain';

export default (dealings, {text, category})=> {


    return dealings.filter((dealing)=> {
           
            const textFormNameMatch = (dealing.formName.toLowerCase()).includes(text.toLowerCase());
            const textlegisMatch = (dealing.legislation.toLowerCase()).includes(text.toLowerCase());
           // const dlngTypeMatch = (dealing.dealingType.toLowerCase()).includes(text.toLowerCase());
            let dealingCategory = true;
            if(category == "All" ){
                dealingCategory = true;
            }
            else {
               
                dealingCategory = category.localeCompare(dealing.dealingCat) == 0;
            }
           // const dealingCategory = category != "All" ? (category.localeCompare(dealing.category)) : true ;
            return (textFormNameMatch || textlegisMatch)  && dealingCategory;
            //return textDealingDescMatch
    })
}