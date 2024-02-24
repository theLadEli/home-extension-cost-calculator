var activeQuestion = 1;
var progressWidth = 168.67;

var userSelection = {
    extension: "",
    size: "",
    finish: "",
}

$(document).ready(function () {
    console.log("jQuery successfully loaded.")
})

function nextQuestion() {
    console.log("nextQuestion function called.")

    $("#question-" + activeQuestion).removeClass("active");
    activeQuestion++;
    $("#question-" + activeQuestion).addClass("active");

    // Adjust Progress Bar
    progressWidth = progressWidth + 150;
    $(".progress").css("width", progressWidth)


}

function previousQuestion() {
    console.log("previousQuestion function called.")
    $("#question-" + activeQuestion).removeClass("active");
    activeQuestion--;
    $("#question-" + activeQuestion).addClass("active");

    // Adjust Progress Bar
    progressWidth = progressWidth - 150;
    $(".progress").css("width", progressWidth)

}

$('#extension-options input[type="radio"').on("click", function () {
    userSelection.extension = this.value;
    console.log(userSelection)
})

$('#size-options input[type="radio"').on("click", function () {
    userSelection.size = this.value;
    console.log(userSelection)
})

$('#finish-options input[type="radio"').on("click", function () {
    userSelection.finish = this.value;
    console.log(userSelection)
})