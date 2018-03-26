'strict'

let gifHolder = $(".gifHolder");

let person = $(this).attr("data-person");

let queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=15";

let giphyButtonObj = {

    topics: ["Teach me how to Dougie", "Cabbage Patch","Running Man Dance","Shmoney Dance","Milly Rock", "Nae Nae Dance", "The sprinkler dance","The Carlton Dance"],
    searchButtonArray: [],
    loadTopicButtons: function (){
        for (let t = 0; t < giphyButtonObj.topics.length; t++){
            let topicButtons = $("<button>");
            topicButtons.addClass("topics");
            topicButtons.attr("data-person", giphyButtonObj.topics[t]);
            //make sure to ask a question about this line below to double check your understanding on how its working?
            topicButtons.append(giphyButtonObj.topics[t]);
            $(".gifButton").append(topicButtons);
    
        }
    },

};


$(document).ready(giphyButtonObj.loadTopicButtons());

$(".topics").on("click", function(e) {
    //could I use another data name, and would it work the same "data-topic, data-foobar" abd as long as I reference data-"name" I will be able to exract information? 
    console.log("data-person");
    gifHolder.empty();
    let person = $(this).attr("data-person");
    let queryUrl ="https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=15";

    $.ajax({
        url: queryUrl,
         method: "Get"
    })

.then(function(response) {
    console.log(response);
    
    let results = response.data;
    for ( let i = 0; i < results.length; i++){
        let newDiv = $(".gifHolder");
        let title = results[i].title;
        let gifDiv = $("<div>").addClass("TheGifDiv");
        let para = $("<p>").html("<strong>" + title + "</strong>");
        let gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);
        newDiv.prepend(results);
        newDiv.prepend(para);
        newDiv.prepend(gifImage);
        newDiv.prepend(gifDiv);
    }
})
});

// Search box function

$("#searchButton").on("click", function (){
    let searchValue = $("#searchBox").val();
    let queryUrl ="https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=dc6zaTOxFJmzC&limit=15";
   
    $.ajax({
        url: queryUrl,
        method: "Get"
    })
    .then(function(response){
        let results = response.data;
       for(let i = 0; i < results.length; i++){
           let newDiv = $(".gifHolder");
           let title = results [i].title;
           let gifDiv = $("<div>").addClass("TheGifDiv");
           let para = $("<p>").html("<strong>" + title + "</strong>");
           let gifImage = $("<img>");
           gifImage = $("<img>");
           gifImage.attr("src", results[i].images.original_still);
           newDiv.prepend(results);
           newDiv.prepend(para);
           newDiv.prepend(gifImage);
           newDiv.prepend(gifDiv);
       }
       //if (searchValue == **a string value**) { then the  statement below here}
       let searchButton = $("<button>");
       searchButton.addClass("topics");
       searchButton.attr("data-person", searchValue);
       console.log(searchValue);
        searchButton.append(searchValue);
        $(".gifButton").append(searchButton);
    })
    
});




$(".gifHolder").on("click", function(){
    console.log("You clicked the GifDiv")
    //ask for a walkthrough on this information within the object, for memory purposes. 
    let state = $(this).attr("data-state");
    if (state === "still") {
        let animateURL = $(this).attr("data-animate");
        $(this).attr("src", animateURL);
        $(this).attr("data-state", "animate");
         } else if (state ==="animate") {
             $(this).attr("src",$(this).attr("data-still"));
             $(this).attr("data-state", "still")
         }
});
