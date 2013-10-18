var Lesson = (function () {
    function Lesson(short_cuts) {
        this.short_cuts = [];
        this.short_cuts = short_cuts;
    }
    Lesson.prototype.show = function () {
        return console.log(this.short_cuts);
    };
    return Lesson;
})();

$(document).ready(function () {
    $(".lesson-brand").click(function () {
        console.log("Lets hide it");
        $("#sidebar-wrapper").slideUp("slow", function () {
            console.log("did it work?");
        });
    });

    $("a").click(function () {
        $.getScript("lessons/" + this.id, function (data) {
            var json_data = JSON.parse(data);

            var lesson = new Lesson(json_data);
            var counter = 0;

            $("#lesson-box").attr('placeholder', lesson.short_cuts[0].command);
            $("#lesson-explanation").text(lesson.short_cuts[0].explanation);

            $("#lesson-box").on("input", function () {
                if (lesson.short_cuts[counter].command === $("#lesson-box").val()) {
                    counter++;

                    $("#lesson-box").css("border-color", "green");

                    setTimeout(function () {
                        $("#lesson-box").val("");
                        $("#lesson-box").css("border-color", "#9ecaed");
                    }, 450);
                } else {
                    var currentValue = $("#lesson-box").val().toString();

                    var validSubString = lesson.short_cuts[counter].command.substring(0, currentValue.length);

                    if (currentValue !== validSubString) {
                        $("#lesson-box").css("border-color", "red");

                        setTimeout(function () {
                            $("#lesson-box").css("border-color", "#9ecaed");
                        }, 450);
                    } else {
                        console.log("Stayin Blue");
                    }
                }

                if (counter > Object.keys(lesson.short_cuts).length - 1) {
                    counter = 0;
                }

                $("#lesson-box").attr("placeholder", lesson.short_cuts[counter].command);
                $("#lesson-explanation").text(lesson.short_cuts[counter].explanation);
            });
        });
    });
});
