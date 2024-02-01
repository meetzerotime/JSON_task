const express = require("express");
const app = express();

const quiz = require("../Data/quiz.json");
const games = require("../Data/games.json");
const response = require("../Data/response.json");
const format = require("../Data/format.json");

const userSelectedTopicIds = [2, 10, 12];
const userSelectedFormatIds = [3, 1, 2];

let quiz_points = 0;
let games_points = 0;
let news_points = 0;

// Calculate quiz points
for (const selectedTopicId of userSelectedTopicIds) {
for (const quizItem of quiz) {
if (selectedTopicId === quizItem.topic_id) {
for (const resp of response) {
if (resp.section_type === "Quiz") {
for (const content of resp.content) {
if (content.id === quizItem.id) {
quiz_points += 100;
       }
     }
   }
  }
 }
}
}

// Calculate games points
for (const selectedTopicId of userSelectedTopicIds) {
for (const game of games) {
if (selectedTopicId === game.topic_id) {
for (const resp of response) {
if (resp.section_type === "games") {
for (const content of resp.content) {
if (content.id === game.id) {
games_points += 100;
       }
  }
}
}
  }
 }
}

// Calculate points based on selected format
for (const selectedFormatId of userSelectedFormatIds) {
for (const formatItem of format) {
if (selectedFormatId === formatItem.id) {
 if (formatItem.title === "Playing" || formatItem.title === "Self-practicing") {
quiz_points += 10;
 games_points += 10;
   }
  }
}
}

for(const selectedTopicId of userSelectedTopicIds) {
    for(const news1 of news){
        if(selectedTopicId === news1.topic_id){
            for(const resp of response){
                if(resp.section_type === "news"){
                    for (const content of resp.content){
                        if (content.id === news1.id){
                            news_points += 100;
                        }
                    }
                }
            }
        }

    }
}

for(const selectedFormatId of userSelectedFormatIds) {
    for(const formatItem of format) {
        if (co)
    }
}



// Define routes
app.get("/quiz", (req, res) => {
    res.send(`Quiz points ${quiz_points}`);
});

app.get("/games", (req, res) => {
    res.send(`Games points ${games_points}`);
});

app.get("/news", (req, res) => {
    res.send(`news points ${news_points}`);
});
// Start server
app.listen(3001, () => {
    console.log("Server is running on port 3000");
});
