export class CaseDST{
    constructor(name, casesByYear){
        this.idCase = Math.floor(Math.random() * (1000-1) + 1)
        this.name = name;
        this.casesByYear = casesByYear;
    }
}