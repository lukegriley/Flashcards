const express =  require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const DeckModel = require('./models/Decks');
const cors = require('cors');


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://lukegriley:Lukecake77@cluster0.lfjptoi.mongodb.net/flashcards?retryWrites=true&w=majority');

app.get("/getUsers", (req,res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.get("/getDeck", (req,res) => {
    DeckModel.findById(req.query.id, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createDeck", async (req,res) => {
    const deck = req.body;
    const newDeck = new DeckModel(user);
    await newDeck.save();

    res.json(deck);
});



app.listen(3001, ()=> {
    console.log('server running');
});