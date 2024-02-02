const quiz = require("../Data/quiz.json");
const games = require("../Data/games.json");
const response = require("../Data/response.json");
const format = require("../Data/format.json");

const userSelectedTopicIds = [2, 10, 12, ];
const userSelectedFormatIds = [3, 1, 2, ];

let quiz_points = 0;
let games_points = 0;
let news_points = 0;


// Calculate quiz points
function quizpoint ()
{
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

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Calculate news points
const newsPointsAwarded = {}; // To track if points have already been awarded for a topic
for (const selectedTopicId of userSelectedTopicIds) {
    for (const resp of response) {
        if (resp.section_type === "news") {
            for (const content of resp.content) {
                if (userSelectedTopicIds.includes(content.topic_id) && !newsPointsAwarded[content.topic_id]) {
                    news_points += 100;
                    newsPointsAwarded[content.topic_id] = true;
                }
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Calculate points based on selected format
//  else if (formatItem.title === "Reading") {
//                 news_points += 10;
//             }
//         }
//     }
// }
