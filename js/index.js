function showabout() {
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideInLeft");
    }, 800);
}
function closeabout() {
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display", "none");
    }, 800);
}
function showwork() {
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideInRight");
    }, 800);
}
function closework() {
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display", "none");
    }, 800);
}
function showcontact() {
    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideInUp");
    }, 800);
}
function closecontact() {
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display", "none");
    }, 800);
}

function showmusic() {
    $("#music_container").css("display", "inherit");
    $("#music_container").addClass("animated slideInDown");
    setTimeout(function () {
        $("#music_container").removeClass("animated slideInDown");
    }, 800);
}
function closemusic() {
    $("#music_container").addClass("animated slideOutUp");
    setTimeout(function () {
        $("#music_container").removeClass("animated slideOutUp");
        $("#music_container").css("display", "none");
    }, 800);
}
setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $("#box").css("display", "none");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);


$("#form").on("submit", function (e) {
    e.preventDefault()
    var params = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
    }

    var data = JSON.stringify(params);

    var form = new FormData();
    form.append("content", data);

    var settings = {
        "url": "https://discord.com/api/webhooks/841092840046067712/vKcANg97qftiJHQQrMbMv7es7wMuFMLNWxSc7CQh7H0LjoDZerH7wce38YQYtcCxQXb_",
        "method": "POST",
        "timeout": 0,
        // "headers": {
        //     "Cookie": "__cfduid=da1e50b73971c775caf3ef80a3e21392c1620552742; __dcfduid=0552c2bcbd924ecc8f10b45d5309e554"
        // },
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });


    setTimeout(function(){
        $(".response").show()
        setTimeout(function(){
            $(".response").hide()
        },1500)
        $("#form").trigger("reset");
    },1500)


})
