const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');


// .env setup
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'config.env') });

// DB URI
const ATLAS_URI = process.env['ATLAS_URI'];

app.use(cors());
app.use(express.json());

// Connect DB
mongoose.set("strictQuery", false);
mongoose.connect(ATLAS_URI, () => {
    console.log('DB connected');
 });

//  Schema and Model
const Schema = mongoose.Schema;
const expensesSchema = new Schema({
    name: {type: String, require: true},
    amount: {type: Number, require: true},
    date: {type: String, require: true},
    category: {type: String, require: true}
}, 
{collection: 'expenses', versioneKey: false});
const expenses = mongoose.model('expenses', expensesSchema);

// post request
app.post('/api/add-expense', (req, res) =>{
    const {name, amount, date, category} = req.body;
	const expense = new expenses({name, amount: parseInt(amount), date, category});
	expense.save();
    res.send("success");
});

app.get('/api/expenses', async (req, res) => {
    const DBExpenses = await expenses.find({}).exec();
    res.json(DBExpenses);
});
// delete request
app.post('/api/delete-expense', async (req, res) =>{
    const {_id} = req.body;
	await expenses.findOneAndDelete({_id}).exec();
    res.send("delete expense success");
});
// update request
app.post('/api/update-expense', async (req, res) =>{
    const {_id} = req.body;
	await expenses.findOneAndUpdate({_id}, {...req.body}).exec();
    res.send("update expense success");
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });