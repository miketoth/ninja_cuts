/// <reference path="d/jquery.d.ts" />
/**

Structure of short_cuts

{
"command1": {
"explanation": "does stuff"
},
"command2": {
"explanation": "other stuff"
}
}

*/
var Lesson = (function () {
    function Lesson(short_cuts) {
        this.short_cuts = [];
        this.short_cuts = short_cuts;
    }
    // debug for the lesson
    Lesson.prototype.show = function () {
        return console.log(this.short_cuts);
    };
    return Lesson;
})();

//////////////////////////////////////////////////
$(document).ready(function () {
    // let user select which lesson to load
    // display each lesson in the lesson folder
    $("a").click(function (event) {
        console.log(event.target.id);
    });

    // get the specified JSON file and load it into the lesson
    $.getScript("lessons/test.js", function (data) {
        var json_data = JSON.parse(data);

        var lesson = new Lesson(json_data);
        var counter = 0;

        // insert initial command and explanation
        $("#lesson-box").attr('placeholder', lesson.short_cuts[0].command);
        $("#lesson-explanation").text(lesson.short_cuts[0].explanation);

        $("#lesson-box").on("input", function () {
            if (lesson.short_cuts[counter].command == $("#lesson-box").val()) {
                counter++;
            }

            // clear the box afterwards
            setTimeout(function () {
                $("#lesson-box").val("");
            }, 450);

            if (counter > Object.keys(lesson.short_cuts).length - 1) {
                counter = 0;
            }

            // put new character in the box
            $("#lesson-box").attr("placeholder", lesson.short_cuts[counter].command);
            $("#lesson-explanation").text(lesson.short_cuts[counter].explanation);
        });
    });
});
