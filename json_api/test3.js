const quizData = require("../Data/quiz.json");
const gamesData = require("../Data/games.json");
const responseData = require("../Data/response.json");
const formatData = require("../Data/format.json");

const userSelectedTopicIds = [2, 10, 12];
const userSelectedFormatIds = [3, 1, 2, 4];

function CombinedPoints() {
    let quizPoints = 0;
    let gamesPoints = 0;
    let newsPoints = 0;

    const newsPointsAwarded = {}; // To track if points have already been awarded for a topic

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
                    } else if (resp.section_type === "news") {
                        for (const content of resp.content) {
                            if (userSelectedTopicIds.includes(content.topic_id) && !newsPointsAwarded[content.topic_id]) {
                                newsPoints += 100;
                                newsPointsAwarded[content.topic_id] = true;
                            }
                        }
                    } else if (resp.section_type === "games") {
                        for (const game of gamesData) {
                            if (selectedTopicId === game.topic_id) {
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
        }
    }

    for (const selectedFormatId of userSelectedFormatIds) {
        for (const formatItem of formatData) {
            if (selectedFormatId === formatItem.id) {
                if (formatItem.title === "Playing" || formatItem.title === "Self-practicing") {
                    quizPoints += 10;
                    gamesPoints += 10;
                } else if (formatItem.title === "Reading") {
                    newsPoints += 10;
                }
            }
        }
    }

    return {
        quizPoints,
        gamesPoints,
        newsPoints
    };
}

// Usage
function getdata(req, res)
{const { quizPoints, gamesPoints, newsPoints } = CombinedPoints();

responseData.push({
    points: quizPoints,
    section_id: 100001, // This should be the correct section ID for the quiz section
    section_name: "Quiz",
    section_layout: "",
    section_type: "Quiz",
    content: responseData.find(item => item.section_type === "Quiz").content
});

responseData.push({
    points: gamesPoints,
    section_id: 100004, // This should be the correct section ID for the games section
    section_name: "Play Today!",
    section_layout: "",
    section_type: "games",
    content: responseData.find(item => item.section_type === "games").content
});

responseData.push({
    points: newsPoints,
    section_id: 100002, // This should be the correct section ID for the news section
    section_name: "Top News Now",
    section_layout: "",
    section_type: "news",
    content: responseData.find(item => item.section_type === "news").content
});
res.json(responseData)
}

module.exports = getdata
