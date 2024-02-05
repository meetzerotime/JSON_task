const quizData = require("../Data/quiz.json");
let responseData = require("../Data/response.json");
const formatData = require("../Data/format.json");
const sectionData = require("../Data/section.json")

const userSelectedTopicIds = [2, 10, 12];
const userSelectedFormatIds = [3, 1, 2];
const userSelectedSourceIds = [12, 6, 20]


function CombinedPoints() {
  let playingFormatId = 0;
  let selfPractFormatId = 0;
  let readingFormatId = 0;


  for (const formatItem of formatData) {
    if ( formatItem.title === "Playing" ){
      playingFormatId = formatItem.id
    } else if(formatItem.title === "Self-practicing"){
      selfPractFormatId = formatItem.id
    } else if (formatItem.title === "Reading") {
      readingFormatId = formatItem.id
    }
  }
  for (let resp of responseData) {
    // News section
    if (resp.section_type === "news") {
      resp.points = 0
      // Format
      if (userSelectedFormatIds.includes(readingFormatId)) {
        resp.points = 10;
      }
      for (const content of resp.content) {
        if (userSelectedTopicIds.includes(content.topic_id)) {
          resp.points += 100;
        }
      }
    }

    // Games Section
    if (resp.section_type === "games") {
      resp.points = 0
      // Format
      if (userSelectedFormatIds.includes(playingFormatId)) {
        resp.points = 10;
      }
    }
    // Quiz section
    else if (resp.section_type === "Quiz") {
      resp.points = 0
      // Format
      if (userSelectedFormatIds.includes(playingFormatId) || userSelectedFormatIds.includes(selfPractFormatId)) {
        resp.points = 10;
      }
      // Topic condition
      for (const content of resp.content) {
        for (const quizItem of quizData) {
          if(content.id === quizItem.id && userSelectedTopicIds.includes(quizItem.topic_id)){
            resp.points += 100;
          }
        }
      }
    }

    // Custom section items
    else if (resp.section_type === "Flight") {
      resp.points = 0
      for (let content of resp.content) {
        if (userSelectedFormatIds.includes(content.format_id)) {
          resp.points += 10
        }
         if (userSelectedSourceIds.includes(content.source_id)){
          resp.points += 10
        }
        // Topic
        for(let sectionitem of sectionData){
          if (sectionitem.id  === resp.section_id && userSelectedTopicIds.includes(sectionitem.topic_id)){
            resp.points += 100
          }
        }
      }
    }
  }

  return responseData
}

// Usage
function getdata(req, res) {
  res.json(CombinedPoints());
}


module.exports = getdata;

