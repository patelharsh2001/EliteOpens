
export class Tournament
{
    [x: string]: any;
    constructor(

        public _id?: number,
        public name?:string,
        public location?:string,
        public startDate?:string,
        public entryFee?:string,
        public status?:string,

    ){}
    public toString(): string
  {
    return `
    Tournament
    -------------------------------
    Name       : ${this.name}
    Location   : ${this.location}
    StartDate  : ${this.startDate}
    EntryFee   : ${this.entryFee}
    Status     : ${this.status}
    
    -------------------------------
    `;
  }
}