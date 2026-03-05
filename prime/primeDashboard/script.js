var session = null;
var user = null;

$(document).ready(function() {
    session = checkSessionAvailable();
    if(session == null) {
        alert("로그인 후 이용해주세요.");
        history.back();
    } else {
        user = JSON.parse(sessionStorage.getItem(session));
        $('.userInfo').text(user.displayName);
    }
})