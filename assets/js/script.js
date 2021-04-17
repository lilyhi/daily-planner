var CurrentDate = moment();
console.log(CurrentDate);

$("#currentDay").text(CurrentDate.format("dddd, MMMM Do YYYY"));

const workTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(document.getElementsByClassName("timeChecker"));


var checkDate = function () {
    var currentMilitaryTime = +CurrentDate.format("k");
    console.log(typeof currentMilitaryTime);
    // check current time 
    console.log(document.getElementsByClassName("timeChecker"));
    for (var i  = 0; i < workTimes.length; i++) {
        // console.log(currentMilitaryTime);
        if (currentMilitaryTime === workTimes[i]) {
            console.log(`currentTime: ${currentMilitaryTime} workTime: ${workTimes[i]} conditional: currentMilitaryTime === workTime`,(currentMilitaryTime === workTimes[i]));
            document.getElementsByClassName("timeChecker")[i].className="timeChecker table-success";
            document.getElementsByClassName("text-box")[i].className="text-box table-success";
        }   else if (currentMilitaryTime > workTimes[i]) {
            console.log(`currentTime: ${currentMilitaryTime} workTime: ${workTimes[i]} conditional: currentMilitaryTime > workTime`,(currentMilitaryTime > workTimes[i]));
            document.getElementsByClassName("timeChecker")[i].className="timeChecker table-danger";
            document.getElementsByClassName("text-box")[i].className="text-box table-danger";
        }   else if (currentMilitaryTime < workTimes[i]) {
            console.log(`currentTime: ${currentMilitaryTime} workTime: ${workTimes[i]} conditional: currentMilitaryTime < workTime`,(currentMilitaryTime < workTimes[i]));
            document.getElementsByClassName("timeChecker")[i].className="timeChecker table-info";
            document.getElementsByClassName("text-box")[i].className="text-box table-info";
        }
    }
}

$(".btn").on("click", function() {
    console.log("This is test msg");
    var inputText =  $(this).parent().siblings().find(".text-box").val();
    // console.log(inputText);
    var time = $(this).parent().siblings().find(".hour").prevObject[0].innerText;
    // console.log("this is the time", time); 
    localStorage.setItem(time, inputText);
});

checkDate();

//On page load retain values 
$("#nineInputText").find(".text-box").val(localStorage.getItem("9:00"))
$("#tenInputText").find(".text-box").val(localStorage.getItem("10:00"))
$("#elevenInputText").find(".text-box").val(localStorage.getItem("11:00"))
$("#twelveInputText").find(".text-box").val(localStorage.getItem("12:00"))
$("#thirteenInputText").find(".text-box").val(localStorage.getItem("13:00"))
$("#fourteenInputText").find(".text-box").val(localStorage.getItem("14:00"))
$("#fifteenInputText").find(".text-box").val(localStorage.getItem("15:00"))
$("#sixteenInputText").find(".text-box").val(localStorage.getItem("16:00"))
$("#seventeenInputText").find(".text-box").val(localStorage.getItem("17:00"))