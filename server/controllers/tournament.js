let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Tournament = require('../models/tournament');

module.exports.displayTournamentList = (req, res, next) => {
    Tournament.find((err, tournamentList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            
           res.json(tournamentList)      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    
    res.json({success: true, msg: 'Succesfully Displayed Add Page'});      
}

module.exports.processAddPage = (req, res, next) => {
    let newTournament = Tournament({

        "name": req.body.name,
        "location": req.body.location,
        "entryFee": req.body.entryFee,
        "startDate":req.body.startDate,
        "status":req.body.status
    });

    Tournament.create(newTournament, (err, Tournament) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the tournament list
            //res.redirect('/list');
            res.json({success: true, msg: 'Successfully Added New Tournament'});
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Tournament.findById(id, (err, tournamentToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            /*
            res.render('tournament/edit', {title: 'Edit Tournament', tournament: tournamentToEdit, 
            displayName: req.user ? req.user.displayName : ''});
            */
            res.json({success: true, msg: 'Successfully Displayed Tournament to Edit', tournament: tournamentToEdit});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedTournament = Tournament({
        "_id": id,
        "name": req.body.name,
        "location": req.body.location,
        "entryFee": req.body.entryFee,
        "startDate":req.body.startDate,
        "status":req.body.status
    });

    Tournament.updateOne({_id: id}, updatedTournament
, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the tournament list
            //res.redirect('/list');
            res.json({success: true, msg: 'Successfully Edited Book', tournament: updatedTournament});
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Tournament.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the tournament list
             //res.redirect('/list');
             res.json({success: true, msg: 'Successfully Deleted Tournament'});
        }
    });
}