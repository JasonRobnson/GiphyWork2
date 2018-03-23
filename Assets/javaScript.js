'strict'

// "



$(".btn").on("click", function(e) {
    console.log("data-person");
    let person = $(this).attr("data-person");
    let queryUrl ="https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=7";

    $.ajax({
        url: queryUrl,
         method: "Get"
    })

.then(function(response) {
    console.log(response);
    
    let results = response.data;
    for ( let i = 0; i < results.length; i++){
        let newDiv = $(".gifHolder");
        let ratings = results[i].rating;
        let gifDiv = $("<div>").addClass("TheGifDiv");
        var para = $("<p>").text("Ratings:" + ratings);
        let gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);
        newDiv.prepend(results);
        newDiv.prepend(para);
        newDiv.prepend(gifImage);
        newDiv.prepend(gifDiv);
    }
})
});