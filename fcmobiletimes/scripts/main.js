const odd = [1, 7, 9, 11, 13, 15, 17, 19, 21, 23];
const even = [0, 2, 8, 10, 12, 14, 16, 18, 20, 22];

$(document).ready(function() {
    getList(datas);
});

var timer = null;

function getList(d) {
    clearInterval(timer);
    document.querySelector(".card-table").innerHTML = '<tr><th scope="col">카드</th><th scope="col">이름</th><th scope="col">갱신 시간</th><th scope="col">남은 시간</th</tr>';
    d.forEach(function(e, i) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", "list");
        tr.setAttribute("idx", i);
        tr.innerHTML = '<td><img src="' + e.image + '"/></td><td>' + e.name + "</td><td>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td>" + getUpdateRemain(e.eo, e.min, e.sec) + "</td>";
        if(!e.available) {
            tr.style.opacity = "45%";
        }
        document.querySelector(".card-table").appendChild(tr);
    });
    timer = setInterval(function() {
        if(document.querySelector(".card-table > tr:nth-child(2)") != null) {
            var tr = document.querySelectorAll(".card-table tr.list");
            d.forEach(function(e, i) {
                if(e.available) {
                    var rem = getUpdateRemain(e.eo, e.min, e.sec);
                    if(rem.split("분")[0] == "0") {
                        tr[i].innerHTML = '<td class="soon"><img src="' + e.image + '"/></td><td class="soon">' + e.name + "</td><td class='soon'>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td class='soon'><span class='close'>" + rem + "</span></td>";
                    } else {
                        tr[i].innerHTML = '<td><img src="' + e.image + '"/></td><td>' + e.name + "</td><td>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td>" + rem + "</td>";
                    }
                }
            });
        }
    }, 1000);
}

function getUpdateTimes(eo, m, s) {
    if(eo == 0) {
        return "짝수시 " + m + "분 " + s + "초";
    } else {
        return "홀수시 " + m + "분 " + s + "초";
    }
}

function getUpdateRemain(eo, m, s) {
    var date = new Date();
    if(eo == 0) {
        if(even.indexOf(date.getHours()) != -1) {
            if(date.getMinutes() < m) {
                var end = new Date();
                end.setHours(date.getHours());
                end.setMinutes(m);
                end.setSeconds(s);
                var sec = parseInt(end - date) / 1000;
                var days = parseInt(sec / 60 / 60 / 24);
                sec = sec - days * 60 * 60 * 24;
                var hour = parseInt(sec / 60 / 60);
                var sec = sec - hour * 60 * 60;
                var min = parseInt(sec / 60);
                sec = parseInt(sec - min * 60);
                return min + "분 " + sec +  "초 후 갱신";
            } else {
                return "-";
            }
        } else {
            return "-";
        }
    } else if(eo == 1) {
        if(odd.indexOf(date.getHours()) != -1) {
            if(date.getMinutes() < m) {
                var end = new Date();
                end.setHours(date.getHours());
                end.setMinutes(m);
                end.setSeconds(s);
                var sec = parseInt(end - date) / 1000;
                var days = parseInt(sec / 60 / 60 / 24);
                sec = sec - days * 60 * 60 * 24;
                var hour = parseInt(sec / 60 / 60);
                var sec = sec - hour * 60 * 60;
                var min = parseInt(sec / 60);
                sec = parseInt(sec - min * 60);
                return min + "분 " + sec +  "초 후 갱신";
            } else {
                return "-";
            }
        } else {
            return "-";
        }
    }
}

function checkEnter() {
    if(event.keyCode == 13) {
        searchSeason();
    }
}

function searchSeason() {
    if($('#inputTxt').val().length != 0) {
        var text = $('#inputTxt').val();
        var filter = datas.filter((v) => {
            if(v.name.indexOf(text.toUpperCase()) != -1 || v.otherNames.indexOf(text.toUpperCase()) != -1) {
                return true;
            }
            return false;
        });
        getList(filter);
    } else {
        getList(datas);
    }
}