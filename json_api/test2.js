const quizData = require("../Data/quiz.json");
const gamesData = require("../Data/games.json");
const responseData = require("../Data/response.json");
const formatData = require("../Data/format.json");

const userSelectedTopicIds = [2, 10, 12];
const userSelectedFormatIds = [3, 1, 2];

function calculateQuizPoints() {
    let quizPoints = 0;

    for (const selectedTopicId of userSelectedTopicIds) {
        for (const quizItem of quizData) {
            if (selectedTopicId === quizItem.topic_id) {
                for (const resp of responseData) {
                    if (resp.section_type === "Quiz") {
                        for (const content of resp.content) {
                            if (content.id === quizItem.id) {
                                quizPoints += 100;
                            }
                        }
                    }
                }
            }
        }
    }

    return quizPoints;
}

function calculateNewsPoints() {
    let newsPoints = 0;
    const newsPointsAwarded = {};

    for (const selectedTopicId of userSelectedTopicIds) {
        for (const resp of responseData) {
            if (resp.section_type === "news") {
                for (const content of resp.content) {
                    if (userSelectedTopicIds.includes(content.topic_id) && !newsPointsAwarded[content.topic_id]) {
                        newsPoints += 100;
                        newsPointsAwarded[content.topic_id] = true;
                    }
                }
            }
        }
    }

    return newsPoints;
}

function calculateGamesPoints() {
    let gamesPoints = 0;

    for (const selectedTopicId of userSelectedTopicIds) {
        for (const game of gamesData) {
            if (selectedTopicId === game.topic_id) {
                for (const resp of responseData) {
                    if (resp.section_type === "games") {
                        for (const content of resp.content) {
                            if (content.id === game.id) {
                                gamesPoints += 100;
                            }
                        }
                    }
                }
            }
        }
    }

    return gamesPoints;
}

function calculatePointsBasedOnFormat() {
    let quizPoints = 0;
    let gamesPoints = 0;
    let newsPoints = 0;

    for (const selectedFormatId of userSelectedFormatIds) {
        for (const formatItem of formatData) {
            if (selectedFormatId === formatItem.id) {
                if (formatItem.title === "Playing" || formatItem.title === "Self-practicing") {
                    quizPoints += 10;
                } else if (formatItem.title === "Reading") {
                    newsPoints += 10;
                }
                else if (formatItem.title === "Playing"){
                    gamesPoints += 10;
                }
            }
        }total
    }

    return {
        quizPoints,
        gamesPoints,
        newsPoints,
    }; 

    
}

function total() {

}

// Usage
function total (){
    calculateQuizPoints();
    calculateNewsPoints();
   calculateGamesPoints();
   
}