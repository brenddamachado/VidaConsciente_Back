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
    const idCaseExist = listCasesDST.find(id => id.idCase === caseId);
    if(idCaseExist) {
        let index = listCasesDST.findIndex(id => id.idCase === caseId);
        listCasesDST.splice(indexCase,1);
        return "Caso removido com sucesso"
    }else{
        return "Caso inexistente"
    }
}
