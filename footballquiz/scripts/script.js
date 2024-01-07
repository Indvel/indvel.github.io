var allData = [];
var data = [];
var quiz = [];
var prevData = [];
var isStart = false;
var selected = "13";
var selData = [];
var tries = 0;

$(function() {
    LeagueId.forEach(function(e) {
        var opt = document.createElement("option");
        opt.setAttribute("value", e.id);
        opt.innerText = e.name;
        document.querySelector("#league-select").appendChild(opt);
    });
});

$(document).on('change', '#league-select', function() {
    selected = $('#league-select option:selected').val();
    data = [];
});

function startQuiz() {
    if(!isStart) {
        document.querySelector(".history-list").innerHTML = "";
        if(allData.length == 0) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://static.api.nexon.co.kr/fconline/latest/spid.json");
            xhr.onreadystatechange = function() {
                if(this.readyState == 4) {
                    allData = JSON.parse(this.responseText);
                }
                $('.quiz-alert').text("최초 데이터 가져오는 중...");
                filteringAll();
                data = PlayerList[selected];
                filteringData();
                setRandomData();
                $('.quiz-status').text("");
            }
            xhr.send();
        } else {
            data = PlayerList[selected];
            filteringData();
            setRandomData();
            $('.quiz-status').text("");
        }
    }
}

function filteringData() {
    if(data != null && data.length != 0) {
        var f = data.filter(function(item1, idx1) {
            return data.findIndex(function(item2, idx) {
                 return item1.name == item2.name
            }) == idx1;
        });
        data = f;
        maxLength = data.length;
    }
}

function filteringAll() {
    if(allData != null && allData.length != 0) {
        var f = allData.filter(function(item1, idx1) {
            return allData.findIndex(function(item2, idx) {
                 return item1.name == item2.name
            }) == idx1;
        });
        allData = f;
    }
}

function checkEnter() {
    if(event.keyCode == 13) {
        searchPlayers();
        $('#inputTxt').val("");
    }
}

function searchPlayers() {
    if(allData.length != 0 && isStart) {
        if($('#inputTxt').val().length == 0) {
            $('.search-list').css({display: 'none'});
        } else {
            var list = document.querySelector('.search-list');
            list.innerHTML = "";
            var f = allData.filter(v => v.name.indexOf($('#inputTxt').val()) != -1);
            if(f.length != 0) {
                for(var i = 0; i < f.length; i++) {
                    var sch = document.createElement("li");
                    sch.innerHTML = (i + 1) + '. <b>' + f[i].name + '</b>';
                    sch.onclick = function(e) {
                        var idx = allData.findIndex(e => e.name == this.innerHTML.split(">")[1].split("</")[0]);
                        getPlayerInfo(allData[idx].id)
                        .then(d => {
                            checkAnswer(d);
                            $('.search-list').css({display: 'none'});
                        });
                    }
                    list.appendChild(sch);
                    $('.search-list').css({display: 'block'});
                }
            }
        }
    }
}

function getPlayerInfo(code) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest;
        xhr.open("GET", "https://upxowbgcgsnlbdqafwlg.supabase.co/rest/v1/players?select=*&pid=eq." + String(code).substring(3) + "&order=ovr.desc");
        xhr.setRequestHeader("ApiKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVweG93YmdjZ3NubGJkcWFmd2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3MDMzNjQsImV4cCI6MTk4NzI3OTM2NH0.MpyZvbTzQ_rDpR24RSk7KKTsQVGfhDq20D7laFH8Tr0");
        xhr.onload = () => {
            if (xhr.status == 200) {
                let res = JSON.parse(xhr.response)[0];
                var result = [];
                if(res['currentTeam'] != null) {
                    result = {name: res['name'], country: res['nationality'], birth: res['birthdate'], pos: res['mainPos'], team: res['currentTeam']};
                } else if(res['currentTeam'] == null && res['previousClubs'].length != 0){
                    result = {name: res['name'], country: res['nationality'], birth: res['birthdate'], pos: res['mainPos'], team: res['previousClubs'][0]};
                } else {
                    result = {name: res['name'], country: res['nationality'], birth: res['birthdate'], pos: res['mainPos'], team: ''};
                }
                resolve(result);
            } else {
                alert("ERROR LOADING FILE!" + this.status);
            }
        };
        xhr.send();
    });
}

function setRandomData() {
    if(data != null && data.length != 0) {
        var rand = Math.floor(Math.random() * data.length);
        $('.quiz-alert').text("문제 가져오는 중...");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://upxowbgcgsnlbdqafwlg.supabase.co/rest/v1/players?select=*&pid=eq." + String(data[rand].id).substring(3) + "&order=ovr.desc");
        xhr.setRequestHeader("ApiKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVweG93YmdjZ3NubGJkcWFmd2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3MDMzNjQsImV4cCI6MTk4NzI3OTM2NH0.MpyZvbTzQ_rDpR24RSk7KKTsQVGfhDq20D7laFH8Tr0");
        xhr.onreadystatechange = function() {
            if(this.readyState == 4) {
                var res = JSON.parse(this.responseText)[0];
                if(res['currentTeam'] != null) {
                    quiz = {name: res['name'], country: res['nationality'], birth: res['birthdate'], pos: res['mainPos'], team: res['currentTeam']};
                } else if(res['currentTeam'] == null && res['previousClubs'].length != 0){
                    quiz = {name: res['name'], country: res['nationality'], birth: res['birthdate'], pos: res['mainPos'], team: res['previousClubs'][0]};
                } else {
                    setRandomData();
                }
                $('.btns').css({display: 'flex'});
                $('.buttonDiv').css({display: 'none'});
                $('.quiz-alert').text("스무고개 시작!");
            }
        }
        xhr.send();
        isStart = true;
    }
}

function giveUp() {
    if(isStart) {
        $('.quiz-alert').text("포기. 정답은 " + quiz.name);
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
    }
}

function checkAnswer(sel) {
    var check1 = "";
    var check2 = "";
    var check3 = "";
    var check4 = "";

    tries++;

    if(sel.name == quiz.name) {
        $('.quiz-alert').text("정답을 맞추셨습니다!");
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
        return;
    } else {
        check1 = "이름 틀림";
    }

    if(sel.country == quiz.country) {
        var idx = countryData.findIndex(e => e.name == sel.country);
        check2 = '국적 맞음 (<img style="width: 25px;" src='  + countryData[idx].logos + '>)';
    } else {
        check2 = "국적 틀림";
    }

    if(sel.pos == quiz.pos) {
        check3 = "포지션 맞음(" + sel.pos + ")";
    } else {
        check3 = "포지션 틀림";
    }

    if(sel.team == quiz.team) {
        for(var i = 0; i < ClubsData.length; i++) {
            if(ClubsData[i].name.includes("|")) {
                var arr = ClubsData[i].name.split("|");
                var idx = -1;
                arr.forEach(function(n) {
                    if(n.indexOf(sel.team) != -1) {
                        idx = i;
                        return;
                    }
                });
            } else {
                if(ClubsData[i].name.indexOf(sel.team) != -1) {
                    idx = i;
                    break;
                }
            }
        }
        check4 = '소속팀 맞음(<img style="width: 25px;" src=' + ClubsData[idx].logos + '>)';
    } else {
        check4 = "소속팀 틀림";
    }

    var li = document.createElement("li");
    li.innerHTML = tries + ". " +  check1 + " / " + check2 + " / " + check3 + " / " + check4;
    document.querySelector(".history-list").appendChild(li);
}