// Create an object using bracket and dot notation that represents the characters and the data you may find in a game of Clue.

var game = {};

game.murderer = "??";

game['weapons'] = [
    {type: 'lasers', location: 'lab'},
    {type: 'angry cats', location: 'garden'},
    {type: 'dish soap', locations: 'bedroom'}
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr. Green');


