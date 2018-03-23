'strict'

let giphyButtonObj = {

    topics: ["Dougie", "Cabbage Patch","Running Man","Jit","Milly Rock", "Roger Rabbit Dance", "Humpty Dance", "Wobble"],
    searchButtonArray: [],
    loadTopicButtons: function (){
        for (let t = 0; t < giphyButtonObj.topics.length; t++){
            console.log(t);
            let topicButtons = $("<button>");
            topicButtons.addClass("topics");
            topicButtons.attr("data-person", giphyButtonObj.topics[t]);
            //make sure to ask a question about this line below to double check your understanding on how its working.
            topicButtons.append(giphyButtonObj.topics[t]);
            $(".gifButton").append(topicButtons);
    
        }
    },
    loadSearchTopcis: function(){

    },
    queryTopic: function(){
        $.ajax({
            url: queryUrl,
            method: "Get"
        })
    .then(function(response){
        console.log(response);
    })

    },

};

let person = $(this).attr("data-person");

let queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=15";

$(document).ready(giphyButtonObj.loadTopicButtons());

$(".topics").on("click", function(e) {
    console.log("The click works!");
    giphyButtonObj.queryTopic();
});

//Click function on dynamic loaded buttons







// $(".btn").on("click", function(e) {
//     //could I use another data name, and would it work the same "data-topic, data-foobar" abd as long as I reference data-"name" I will be able to exract information. 
//     console.log("data-person");
//     let person = $(this).attr("data-person");
//     let queryUrl ="https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=15";

//     $.ajax({
//         url: queryUrl,
//          method: "Get"
//     })

// .then(function(response) {
//     console.log(response);
    
//     let results = response.data;
//     for ( let i = 0; i < results.length; i++){
//         let newDiv = $(".gifHolder");
//         let title = results[i].title;
//         let gifDiv = $("<div>").addClass("TheGifDiv");
//         var para = $("<p>").html("<strong>" + title + "</strong>");
//         let gifImage = $("<img>");
//         gifImage.attr("src", results[i].images.fixed_height.url);
//         newDiv.prepend(results);
//         newDiv.prepend(para);
//         newDiv.prepend(gifImage);
//         newDiv.prepend(gifDiv);
//     }
// });

// $(".gifHolder").on("click", function(){
//     //ask for a walkthrough on this information within the object, for memory purposes. 
//     let state = $(this).attr("data-state");
//     if (state == "still") {
//         let animateImage = $(this).attr("data-animate");
//         $(this).attr("src", animateImage);
//         $(this).attr("data-state", "animate");
//          } else {
//              $(this).attr("src",$(this).attr("data-still"));
//              $(this).attr("data-state", "still")
//          }
// })
// });
