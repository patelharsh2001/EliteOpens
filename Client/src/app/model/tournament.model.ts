
export class Tournament
{
    [x: string]: any;
    constructor(

        public _id?: number,
        public name?:string,
        public location?:string,
        public entryFee?:string,
        public startDate?:string

    ){}
    public toString(): string
  {
    return `
    Tournament
    -------------------------------
    Name       : ${this.name}
    Location   : ${this.location}
    EntryFee   : ${this.entryFee}
    StartDate  : ${this.startDate}
    
    -------------------------------
    `;
  }
}