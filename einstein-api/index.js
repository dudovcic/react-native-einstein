const express = require("express");
const app = express();

const QUESTIONS = [
  'Uhm... Who are you?',
  'How long ago did you live ?',
  'Did you live for 100 years ?'
];

app.get("/", (req, res) => {
  console.log('Handling request...')
  res.json({ questions: shuffle(QUESTIONS) });
});

app.listen(3000, () => console.log("Server listening on port 3000!"));



// utils
const shuffle = (arr) => {
  const array = [...arr];
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}