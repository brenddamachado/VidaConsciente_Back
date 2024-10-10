import { listCasesDST } from "../data/listCasesDST.js";
import { CaseDST } from "../models/casesDST.model.js";

export const createCase = (name, casesByYear) => {
    let cases = new CaseDST(name, casesByYear);
    listCasesDST.push(cases);
    return cases;
}

export const searchAll = () => {
    return listCasesDST;
}

export const deleteCase= (caseId) =>{
    const idCaseExist = listCasesDST.find(id => id.idCase === parseInt(caseId));
    if(idCaseExist) {
        let index = listCasesDST.findIndex(id => id.idCase === parseInt(caseId));
        listCasesDST.splice(index,1);
        return "Caso removido com sucesso"
    }else{
        return "Caso inexistente"
    }
}

export const updateCase =(id,updateCase) =>{
  
    const indexCase = listCasesDST.findIndex(caseIndex => caseIndex.idCase == parseInt(id));


    if (indexCase ==! -1) {
        listCasesDST[indexCase] = {
            ...listCasesDST[indexCase],
            ...updateCase
        }
        return listCasesDST[indexCase];
    } else {
        throw new Error('Caso inexistente')
    }

}