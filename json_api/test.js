// const { log } = require('console');
// const response = require('../json_data/response.json');
// const userSelectedTopicIds = [2, 10, 12];
// const userSelectedFormatIds = [3, 1, 2];
// const userSelectedSourceIds = [12, 6, 20];

// // Define points for each topic, format, and source
// const pointsMapping = {
//     topic: {
//         2: 200, // Caitlin Clark Record Tracker
//         10: 300, // Walmart makes a major store change
//         12: 400 // Seared Gnocchi with Roasted Arugula
//     },
//     format: {
//         1: 100, // Listening
//         2: 150, // Reading
//         3: 200 // Watching
//     },
//     source: {
//         12: 50, // iHeart
//         6: 75, // Youtube
//         20: 100 // Rainbow Plant Life
//     }
// };

// // // // // Function to calculate points for each section
// // // // function calculatePoints(section) {
// // // //     let points = 0;
// // // //     section.content.forEach(games => {
// // // //         if (userSelectedTopicIds.includes(games.topic_id)) {
// // // //             points += pointsMapping.topic[games.topic_const gameszes = require('./games.json');
// // // //             const topics = require('./topic.json');
            
// // // //             // Create a map to store topics by their IDs
// // // //             const topicMap = new Map();
// // // //             topics.forEach(topic => {
// // // //                 topicMap.set(topic.id, topic.title);
// // // //             });
            
// // // //             // Map gameszes with topics
// // // //             const gameszesWithTopics = gameszes.map(games => {
// // // //                 const topicsForgames = games.topics.map(topicId => {
// // // //                     return topicMap.get(topicId);
// // // //                 });
// // // //                 return {
// // // //                     id: games.id,
// // // //                     title: games.title,
// // // //                     topics: topicsForgames
// // // //                 };
// // // //             });
            
// // // //             // Print the result
// // // //             console.log(JSON.stringify(gameszesWithTopics, null, 2));
// // // //             e_id)) {
// // // //             points += pointsMapping.source[games.source_id] || 0;
// // // //         }
// // // //         console.log(topic_id);
// // // //     });
// // // //     return points;
// // // // }

// // // // // Assign points to each section
// // // // response.forEach(section => {
// // // //     if (section.section_type === 'games') {
// // // //         section.points = calculatePoints(section);
// // // //     }
// // // // });

// // // // // Write the updated response back to the file
// // // // const fs = require('fs');
// // // // fs.writeFileSync('../json_data/response.json', JSON.stringify(response, null, 2));
// // // // \




// // // // const gameszes = require('../json_data/games.json');
// // // // const topics = require('../json_data/topic.json');

// // // Create a map to store topics by their IDs
// // const topicMap = new Map();
// // topics.forEach(topic => {
// //     topicMap.set(topic.id, topic.title);

// // });

// // // // // Map gameszes with topics
// // // // const gameszesWithTopics = gameszes.map(games => {
// // // //     // Check if topics are defined for the games
// // // //     if (games.topics && Array.isArray(games.topics)) {
// // // //         const topicsForgames = games.topics.map(topicId => {
// // // //             return topicMap.get(topicId);
// // // //         });
// // // //         return {
// // // //             id: games.id,
// // // //             title: games.title,
// // // //             topics: topicsForgames
// // // //         };
// // // //     } else {
// // // //         console.log(`Topics are missing or not an array for games with ID: ${games.id}`);
// // // //         return null; // Or handle the case as per your requirements
// // // //     }
// // // // }).filter(games => games !== null); // Remove any null entries

// // // // // Print the result
// // // // console.log(JSON.stringify(gameszesWithTopics, null, 2));


// // const games = require("../json_data/games.json");
// // const topic = require("../json_data/topic.json");

// // // Define user selected topics and their corresponding points
// // const userSelectedTopicPoints = {
// //     2: 0,   // Points for topic ID 2
// //     10: 100, // Points for topic ID 10
// //     12: 0   // Points for topic ID 12
// // };

// // Map gameszes with topics and assign points based on user selection
// const gameszesWithPoints = games.map(gamesItem => {
//     const matchedTopic = topic.find(topicItem => gamesItem.topic_id === topicItem.id);
//     const points = userSelectedTopicPoints[matchedTopic ? matchedTopic.id : null] || 0;
//     return {
//         gamesId: gamesItem.id,
//         topicId: matchedTopic ? matchedTopic.id : null,
//         points: points
//     };
// });

// console.log(gameszesWithPoints);

// // const response = require("../json_data/response.json");
// // const games = require("../json_data/games.json");
// // const games = require("../json_data/games.json");
// // const format = require("../json_data/format.json");
// // const topic = require("../json_data/topic.json");

// // const userSelectedTopicIds = [2, 10, 12];
// // const userSelectedFormatIds = [3, 1, 2];
// // const userSelectedSourceIds = [12, 6, 20];

// // let games_content = [];
// // let games_content = [];
// // let format_content = [];
// // let topic_content = [];

// // // Map gameszes with topics
// // // for (let gamesItem of games) {
// //     const matchedTopic = topic.find(topicItem => gamesItem.topic_id === topicItem.id);
// //     if (matchedTopic) {
// //         games_content.push({
// //             gamesId: gamesItem.id,
// //             topicId: matchedTopic.id
// //         });
// //     }
// // }

// // // Add games content
// // for (let gameItem of games) {
// //     // Add your conditions or logic here to filter games based on criteria if needed
// //     games_content.push(gameItem);
// // }

// // // Add format content
// // for (let formatItem of format) {
// //     // Add your conditions or logic here to filter format based on criteria if needed
// //     format_content.push(formatItem);
// // }

// // // Add topic content
// // for (let topicItem of topic) {
// //     // Add your conditions or logic here to filtgames
// // c"onst response = require("../Data/response.json")

// // const userSelectedTopicIds = [2, 10, 12]

// // const userSelectedFormatIds = [3, 1, 2 ]


// // // daily_games_topic start

// // const map_userSelectedTopicIds_gamesjson = []
// // const results_games = []
// // const results_games_content = []

// // const final_games_mapped = []games

// // let games_points = 0

// // for (let index = 0; index < userSelectedTopicIds.length; index++) {
// //     const element = userSelectedTopicIds[index];

// //     for (let index1 = 0; index1 < games.length; index1++) {

// //         if (element == games[index1].topic_id) {
// //             map_userSelectedTopicIds_gamesjson.push(games[index1])
// //         }
// //     }
// // }

// // for (let index2 = 0; index2 < response.length; index2++) {

// //     const element = response[index2];

// //     if (element.section_type == "games") {
// //         results_games.push(element)

// //         for (let index3 = 0; index3 < results_games.length; index3++) {
// //             const result_content_id = results_games[index3];

// //             for (let index4 = 0; index4 < result_content_id.content.length; index4++) {
// //                 const content_id = result_content_id.content[index4];
// //                 results_games_content.push(content_id)
// //             }
// //         }
// //     }

// // }

// // for (let index5 = 0; index5 < map_userSelectedTopicIds_gamesjson.length; index5++) {
// //     const element = map_userSelectedTopicIds_gamesjson[index5];

// //     for (let index6 = 0; index6 < results_games_content.length; index6++) {
// //         const element_results_games_content = results_games_content[index6];

// //         if (element.id == element_results_games_content.id) {
// //             final_games_mapped.push(element_results_games_content)
// //         }

// //     }

// // }


// // if (final_games_mapped.length > 0) {
// //     games_points += 100
// // }

// // // daily_games_topic end


// // // daily_games_format Start

// // const format = require("../Data/format.json")
// // const games_format_id = []
// // const games_format = ["Playing", "Self-practicing"]
// // const games_format_final = []

// // for (let index = 0; index < format.length; index++) {
// //     const element = format[index];

// //     for (let index1 = 0; index1 < games_format.length; index1++) {
// //         const element1 = games_format[index1];
// //         if (element.title == element1) {
// //             games_format_id.push(element)
// //         }
        
// //     }
    
// // }

// // for (let index = 0; index < userSelectedFormatIds.length; index++) {
// //     const element = userSelectedFormatIds[index];

// //     for (let index1 = 0; index1 < games_format_id.length; index1++) {
// //         const element1 = games_format_id[index1];

// //             if (element == element1.id) {
// //                 games_format_final.push(element1)

// //             }
        
// //     }
    
// // }

// // if (games_format_final.length > 0) {
// //     games_points += 10
// // }



// // app.get("/games", (req, res) => {
// //     res.send(`games points ${games_points}`)
// // })






// // app.listen(3000, () => {
// //     console.log("PORT Successfully Connected to 7000");
// // })"






const express = require('express');
const fs = require('fs');
const app = express();

const custom = require('../Data/custom-items.json')
const response = require('../Data/response.json')
const sectionid = require('../Data/section.json')

const quiz = require("../Data/quiz.json");


const userSelectedTopicIds = [2, 10, 12];


// Write the updated response.json back to file
fs.writeFile("../Data/response.json", JSON.stringify(response, null, 2), (err) => {
    if (err) {
        console.error("Error writing response.json:", err);
    } else {
        console.log("Quiz points updated successfully!");
    }
});



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

for (const selectedTopicId of userSelectedTopicIds) {
    for (const quizItem of quiz) {
        if (selectedTopicId === quizItem.topic_id) {
            for (const resp of response) {
                if (resp.section_id === "Quiz") {
                    for (const content of resp.content) {
                        if (content.id === quizItem.id) {
                            quiz_po
                        }
                    }
                }
            }
        }
    }
}

// Calculate quiz points and update response.json
for (const selectedTopicId of userSelectedTopicIds) {
    for (const resp of response) {
        if (resp.section_type === "Quiz") {
            for (const content of resp.content) {
                const matchingQuizItem = quiz.find(item => item.id === content.id && item.topic_id === selectedTopicId);
                if (matchingQuizItem) {
                    content.points = 100; // Assuming each correct answer gives 100 points
                }
            }
        }
    }
}

for (const selectedTopicId of userSelectedTopicIds){
    for(const section_item of sectionid){
        if (selectedTopicId === section_item){
            for(const content of response.content){


            }
        }
    }
}