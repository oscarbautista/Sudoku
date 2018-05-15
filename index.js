
//Dependencies
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const http = require('http');
const path = require('path');
const sudoku = require('./node_modules/sudoku');

app.set('view engine', 'pug');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


//Server Setup
const hostname = '127.0.0.1';
const port = 3000;


app.get('/', function(req, res) {

	//This is an example of a fully solved sudoku puzzle
	//By replacing some of the digits with invalid entries
	//one can test how the API software works
	var puzzle = sudoku.createPuzzle();
	sudoku.setCell(puzzle, 0, 0, 7);
	sudoku.setCell(puzzle, 0, 1, 5);
	sudoku.setCell(puzzle, 0, 2, 9);
	sudoku.setCell(puzzle, 0, 3, 4);
	sudoku.setCell(puzzle, 0, 4, 6);
	sudoku.setCell(puzzle, 0, 5, 2);
	sudoku.setCell(puzzle, 0, 6, 8);
	sudoku.setCell(puzzle, 0, 7, 1);
	sudoku.setCell(puzzle, 0, 8, 3);

	sudoku.setCell(puzzle, 1, 0, 4);
	sudoku.setCell(puzzle, 1, 1, 6);
	sudoku.setCell(puzzle, 1, 2, 3);
	sudoku.setCell(puzzle, 1, 3, 5);
	sudoku.setCell(puzzle, 1, 4, 1);
	sudoku.setCell(puzzle, 1, 5, 8);
	sudoku.setCell(puzzle, 1, 6, 2);
	sudoku.setCell(puzzle, 1, 7, 9);
	sudoku.setCell(puzzle, 1, 8, 7);

	sudoku.setCell(puzzle, 2, 0, 1);
	sudoku.setCell(puzzle, 2, 1, 2);
	sudoku.setCell(puzzle, 2, 2, 8);
	sudoku.setCell(puzzle, 2, 3, 9);
	sudoku.setCell(puzzle, 2, 4, 7);
	sudoku.setCell(puzzle, 2, 5, 3);
	sudoku.setCell(puzzle, 2, 6, 6);
	sudoku.setCell(puzzle, 2, 7, 4);
	sudoku.setCell(puzzle, 2, 8, 5);

	sudoku.setCell(puzzle, 3, 0, 6);
	sudoku.setCell(puzzle, 3, 1, 9);
	sudoku.setCell(puzzle, 3, 2, 7);
	sudoku.setCell(puzzle, 3, 3, 1);
	sudoku.setCell(puzzle, 3, 4, 8);
	sudoku.setCell(puzzle, 3, 5, 4);
	sudoku.setCell(puzzle, 3, 6, 5);
	sudoku.setCell(puzzle, 3, 7, 3);
	sudoku.setCell(puzzle, 3, 8, 2);

	sudoku.setCell(puzzle, 4, 0, 5);
	sudoku.setCell(puzzle, 4, 1, 8);
	sudoku.setCell(puzzle, 4, 2, 4);
	sudoku.setCell(puzzle, 4, 3, 2);
	sudoku.setCell(puzzle, 4, 4, 3);
	sudoku.setCell(puzzle, 4, 5, 6);
	sudoku.setCell(puzzle, 4, 6, 9);
	sudoku.setCell(puzzle, 4, 7, 7);
	sudoku.setCell(puzzle, 4, 8, 1);
	
	sudoku.setCell(puzzle, 5, 0, 2);
	sudoku.setCell(puzzle, 5, 1, 3);
	sudoku.setCell(puzzle, 5, 2, 1);
	sudoku.setCell(puzzle, 5, 3, 7);
	sudoku.setCell(puzzle, 5, 4, 9);
	sudoku.setCell(puzzle, 5, 5, 5);
	sudoku.setCell(puzzle, 5, 6, 4);
	sudoku.setCell(puzzle, 5, 7, 8);
	sudoku.setCell(puzzle, 5, 8, 6);

	sudoku.setCell(puzzle, 6, 0, 3);
	sudoku.setCell(puzzle, 6, 1, 4);
	sudoku.setCell(puzzle, 6, 2, 5);
	sudoku.setCell(puzzle, 6, 3, 8);
	sudoku.setCell(puzzle, 6, 4, 2);
	sudoku.setCell(puzzle, 6, 5, 1);
	sudoku.setCell(puzzle, 6, 6, 7);
	sudoku.setCell(puzzle, 6, 7, 6);
	sudoku.setCell(puzzle, 6, 8, 9);

	sudoku.setCell(puzzle, 7, 0, 9);
	sudoku.setCell(puzzle, 7, 1, 1);
	sudoku.setCell(puzzle, 7, 2, 2);
	sudoku.setCell(puzzle, 7, 3, 6);
	sudoku.setCell(puzzle, 7, 4, 4);
	sudoku.setCell(puzzle, 7, 5, 7);
	sudoku.setCell(puzzle, 7, 6, 3);
	sudoku.setCell(puzzle, 7, 7, 5);
	sudoku.setCell(puzzle, 7, 8, 8);
	
	sudoku.setCell(puzzle, 8, 0, 8);
	sudoku.setCell(puzzle, 8, 1, 7);
	sudoku.setCell(puzzle, 8, 2, 6);
	sudoku.setCell(puzzle, 8, 3, 3);
	sudoku.setCell(puzzle, 8, 4, 5);
	sudoku.setCell(puzzle, 8, 5, 9);
	sudoku.setCell(puzzle, 8, 6, 1);
	sudoku.setCell(puzzle, 8, 7, 2);
	sudoku.setCell(puzzle, 8, 8, 4);

	var print = sudoku.printPuzzle(puzzle);

	res.render('index', {message: print});
});


//Run Server
app.listen(port, hostname, () => {
	console.log('Server is running on port ' + port);
});

