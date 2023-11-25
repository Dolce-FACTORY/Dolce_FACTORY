$(function() {
    w = screen.width;
    if (w >= 540) $("<div class='error-container'></div>").appendTo($(".info_column")[0]);
    else $("<div class='error-container'></div>").appendTo($(".info_column")[1]);

    var today = new Date().toISOString().split('T')[0];

    $("#input-date").attr({
        "min": today, 
        "value": today
    });

    $("#input-submit").on("click", function(event) {
        event.preventDefault();

        $(".error-message").remove();



        var isOkName = false;
        var isOkPhone = false;
        var isOkTime = false;
        var isOkEmail = false;
        var isOkDate = false;
        var isOkPeople = false;

        var errorCont = $(".error-container");

        if (isValidName($("#input-name").val())) isOkName = true;
        else $("<p class='error-message'>Type correct name</p>").appendTo(errorCont);
        
        if (isValidPhone($("#input-phone").val())) isOkPhone = true;
        else $("<p class='error-message'>Type correct phone</p>").appendTo(errorCont);
        
        if (isValidEmail($("#input-email").val())) isOkEmail = true;
        else $("<p class='error-message'>Type correct email</p>").appendTo(errorCont);
        
        if (isValidTime($("#input-time").val())) isOkTime = true;
        else $("<p class='error-message'>We are working from 9AM to 9PM</p>").appendTo(errorCont);
        
        if (isValidPeople($("#input-people").val())) isOkPeople = true;
        else $("<p class='error-message'>We can serve from 1 to 20 people by once</p>").appendTo(errorCont);
    });
});

function isValidName(name) {
    if (name.length > 50) return false;
    var regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
}

function isValidPhone(phone) {
    if (!(phone.length === 13)) return false;
    var regex = /^(\+380)(\d+)$/;
    return regex.test(phone);
}

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isValidTime(t) {
    var hour = parseInt(t.slice(0, 2))

    if (hour >= 9 && hour <= 21) return true;
    else return false;
}

function isValidPeople(people) {
    var people = parseInt(people);
    console.log(people);
    if (people >= 1 && people <= 20) return true;
    else return false;
}
