"use strict"
class Tournament
{
    constructor(_id="",name="",location="",entryFee="",startDate="")
    {
        this._id=id;
        this.name=name;
        this.location=location;
        this.startDate=startDate;
        this.entryFee=entryFee;
    }

    toString()
    {
        return "id          :" + this._id + "\n" +
               "name        : " + this.name + "\n" +
               "location      : " + this.location + "\n" +
               "entry Fee :" + this.entryFee + "\n" +
               "startDate       :" + this.startDate;
    }
}

module.exports.Tournament=Tournament;