var activeQuestion = 1;
var originalProgressWidth = $(".progress").width();
var updatedProgressWidth = originalProgressWidth;

function nextQuestion() {
    console.log("nextQuestion function called.")

    $("#question-" + activeQuestion).removeClass("active");
    activeQuestion++;
    $("#question-" + activeQuestion).addClass("active");

    // Adjust Progress Bar
    updatedProgressWidth = updatedProgressWidth + originalProgressWidth;
    $(".progress").width(updatedProgressWidth)


}

function previousQuestion() {
    console.log("previousQuestion function called.")
    $("#question-" + activeQuestion).removeClass("active");
    activeQuestion--;
    $("#question-" + activeQuestion).addClass("active");

    // Adjust Progress Bar
    updatedProgressWidth = updatedProgressWidth - originalProgressWidth;
    $(".progress").width(updatedProgressWidth)

}

$('#extension-options input[type="radio"').on("click", function () {
    localStorage.setItem("extension_name", this.dataset.value);
    localStorage.setItem("extension_value", this.value);
})

$('#size-options input[type="radio"').on("click", function () {
    localStorage.setItem("size_name", this.dataset.value);
    localStorage.setItem("size_value", this.value);
})

$('#finish-options input[type="radio"').on("click", function () {
    localStorage.setItem("finish_name", this.dataset.value);
    localStorage.setItem("finish_value", this.value);
})

if (window.location.pathname === '/index.html') {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            $("#content").animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 'fast');

            setTimeout(() => {
                    window.location.href = "/calculatorForm.html"
                }, 300

            )
        }
    });

}
// Check if the current page is page2.html
else if (window.location.pathname === '/yourEstimate.html' || window.location.pathname === '/home-extension-cost-calculator/yourEstimate.html') {
    window.addEventListener('load', function () {

        $("#extension_name").text(localStorage.getItem("extension_name"))
        $("#extension_value").text(localStorage.getItem("extension_value"))

        $("#size_name").text(localStorage.getItem("size_name"))
        $("#size_value").text(localStorage.getItem("size_value"))

        $("#finish_name").text(localStorage.getItem("finish_name"))
        $("#finish_value").text(localStorage.getItem("finish_value"))

        function calculateExtensionRange() {
            const lowRange = (((1400 * localStorage.getItem("size_value")) * localStorage.getItem("extension_value")) * localStorage.getItem("finish_value")) * 0.8;
            const highRange = (((1400 * localStorage.getItem("size_value")) * localStorage.getItem("extension_value")) * localStorage.getItem("size_value")) * 1.1;

            return [lowRange, highRange]
        }

        const extensionRange = calculateExtensionRange();

        $("#low_estimate_calc").text(extensionRange[0].toLocaleString("en-US"));
        $("#high_estimate_calc").text(extensionRange[1].toLocaleString("en-US"));

    });
}