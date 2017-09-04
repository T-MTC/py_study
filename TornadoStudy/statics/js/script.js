/**
 * Created by RU on 2017/9/3.
 */
function getCookie(name) {
    var x = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return x ? x[1] : undefined;
}

$(document).ready(function () {
    $("#login").click(function () {
        var user = $("#username").val();
        var pwd = $("#password").val();
        var pd = {"username": user, "password": pwd, "_xsrf": getCookie("_xsrf")};
        $.ajax({
            type: "post",
            url: "/",
            data: pd,
            cache: false,
            success: function (data) {
                console.log(data)
                //window.location.href = "/user?user=" + data;
                window.location.href = "/user";
            },
            error: function () {
                alert("error!");
            },
        });
    });
});
