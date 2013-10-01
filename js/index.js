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
    $("a").click(function () {
        console.log(this.id);

        $.getScript("lessons/" + this.id, function (data) {
            var json_data = JSON.parse(data);

            var lesson = new Lesson(json_data);
            var counter = 0;

            $("#lesson-box").attr('placeholder', lesson.short_cuts[0].command);
            $("#lesson-explanation").text(lesson.short_cuts[0].explanation);

            $("#lesson-box").on("input", function () {
                if (lesson.short_cuts[counter].command === $("#lesson-box").val()) {
                    counter++;

                    setTimeout(function () {
                        $("#lesson-box").val("");
                    }, 450);
                } else {
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
