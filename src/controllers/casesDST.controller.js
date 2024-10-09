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

