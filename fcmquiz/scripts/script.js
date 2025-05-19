var data = [];
var quiz = [];
var prevData = [];
var isStart = false;
var selected = "13";
var selData = [];
var tries = 0;
var allData = [];

function startQuiz() {
    if(!isStart) {
        document.querySelector(".history-list").innerHTML = "";
        tries = 0;
        setRandomData();
        $('.quiz-status').text("");
    }
}

function filteringData(d) {
    if(d != null && d.length != 0) {
        var f = d.filter(function(item1, idx1) {
            return d.findIndex(function(item2, idx) {
                return item1.playerKor == item2.playerKor
            }) == idx1;
        });
        return f;
    }
}

function filteringAll() {
    if(playerData != null && playerData.length != 0) {
        var f = playerData.filter(function(item1, idx1) {
            return playerData.findIndex(function(item2, idx) {
                 return item1.playerKor == item2.playerKor
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
    if(playerData.length != 0 && isStart) {
        if($('#inputTxt').val().length == 0) {
            $('.search-list').css({display: 'none'});
        } else {
            var list = document.querySelector('.search-list');
            list.innerHTML = "";
            var f = playerData.filter(v => v.playerKor.indexOf($('#inputTxt').val()) != -1);
            if(f.length != 0) {
                for(var i = 0; i < f.length; i++) {
                    var sch = document.createElement("li");
                    var originIdx = playerData.findIndex(e => e.pid == f[i].pid && e.className == f[i].className && e.ovr == f[i].ovr);
                    if(originIdx != -1) {
                        sch.setAttribute("idx", originIdx);
                    }
                    sch.innerHTML = '<img style="width:25px;" src="https://fco.vod.nexoncdn.co.kr/assets/team_logos/team_logos_32x32/l' + f[i].teamid + '.png"> ' + '<span style="color:dodgerblue;">' + f[i].ovr + '</span><span style="color:green;">' + f[i].position + '</span> <b>' + f[i].className + " " + f[i].playerKor + '</b>';
                    sch.onclick = function(e) {
                        checkAnswer(playerData[this.getAttribute("idx")]);
                        $('#inputTxt').val("");
                        $('.search-list').css({display: 'none'});
                    }
                    list.appendChild(sch);
                }
                $('.search-list').css({display: 'block'});
            }
        }
    }
}

function setRandomData() {
    var rand = Math.floor(Math.random() * playerData.length);
    $('.quiz-img').css({display: 'none'});
    $('.quiz-alert').text("문제 가져오는 중...");
    quiz = {pid: playerData[rand].pid, class: playerData[rand].className, name: playerData[rand].playerKor, ovr: playerData[rand].ovr, nation: playerData[rand].nation, team: playerData[rand].teamid, pos: playerData[rand].position};
    $('.btns').css({display: 'flex'});
    $('.buttonDiv').css({display: 'none'});
    $('.quiz-alert').text("스무고개 시작!");
    isStart = true;
}

function giveUp() {
    if(isStart) {
        $('.quiz-alert').text("포기. 정답은 " + quiz.class + " " + quiz.name);
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
    }
}

function checkAnswer(sel) {
    var check1 = document.createElement("div");
    var check2 = document.createElement("div");
    var check3 = document.createElement("div");
    var check4 = document.createElement("div");
    var check5 = document.createElement("div");
    var check6 = document.createElement("div");
    var li = document.createElement("li");

    tries++;
    check1.innerHTML = tries + '번째';
    check1.style.background = 'whitesmoke';
    check1.style.color = 'black';
    li.appendChild(check1);

    check2.innerHTML = '<img style="width: 25px;" src="https://fco.vod.nexoncdn.co.kr/assets/flags/flags_32x32/f_'  + sel.nationality + '.png" title="' + sel.nation +  '">';
    if(sel.nation == quiz.nation) { 
        check2.style.background = 'limegreen';
    } else {
        check2.style.background = 'crimson';
    }
    check2.onclick = function(e) {
        alert(sel.nation);
    }
    li.appendChild(check2);

    check3.innerHTML = sel.position;
    if(sel.position == quiz.pos) {
        check3.style.background = 'limegreen';
    } else {
        check3.style.background = 'crimson';
    }
    li.appendChild(check3);
    check4.innerHTML = '<img style="width: 25px;" src="https://fco.vod.nexoncdn.co.kr/assets/team_logos/team_logos_32x32/l' + sel.teamid + '.png">';
    if(sel.teamid == quiz.team) {
        check4.style.background = 'limegreen';
    } else {
        check4.style.background = 'crimson';
    }
    li.appendChild(check4);

    if(sel.ovr > quiz.ovr) {
        check5.innerHTML = sel.ovr + "▼";
    } else if(sel.ovr < quiz.ovr) {
        check5.innerHTML = sel.ovr + "▲";
    } else {
        check5.innerHTML = sel.ovr;
    }
    if(sel.ovr == quiz.ovr) {
        check5.style.background = 'limegreen';
    } else {
        check5.style.background = 'crimson';
    }
    li.appendChild(check5);

    check6.innerHTML = sel.className;
    if(sel.className == quiz.class) {
        check6.style.background = 'limegreen';
    } else {
        check6.style.background = 'crimson';
    }
    if(sel.className.length >= 7) {
        check6.style.fontSize = '12px';
    } else {
        check6.style.fontSize = '16px';
    }
    li.appendChild(check6);

    document.querySelector(".history-list").prepend(li);

    if(sel.pid == quiz.pid && sel.className == quiz.class && sel.ovr == quiz.ovr) {
        $('.quiz-alert').text("정답을 맞히셨습니다! (" + quiz.class + " " + quiz.name + ")");
        isStart = false;
        quiz = [];
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
        document.querySelector(".quiz-img").innerHTML = '<img src="' + sel.pimage + '">';
        $('.quiz-img').css({display: 'block'});
    }

    if(tries >= 20) {
        $('.quiz-alert').text("횟수 초과! 정답은 (" + quiz.class + " " + quiz.name + ")");
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
        return;
    }
}

function calcAge(birth, bDate) {
	var date = new Date();
	if(bDate != null) {
		if(bDate.replace('-', '').replace('-', '').length != 8) {
			return "기준 날짜를 정확히 입력해 주세요.";
		} else {
			date = new Date(bDate.substr(0, 4), bDate.substr(4, 2) - 1, bDate.substr(6, 2));
		}
	}
    if(birth.indexOf(".") != -1 || birth.indexOf("-") != -1) {
        birth = birth.replace(/[.-]/g, '');
    }
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0'+ day;
    var monthDay = month + day;
    var birthDate = new Date(birth.substr(0, 4), birth.substr(4, 2) - 1, birth.substr(6, 2));
    var time = date.getTime() - birthDate.getTime();
    birth = birth.replace('-', '').replace('-', '');
    if(birth.length != 8) return null;
    
    var birthdayy = birthDate.getFullYear();

    if(birthdayy > year) return null;

	var age = Math.floor((time / 1000 / 60 / 60 / 24) / 365);
	if(isNaN(age)) {
		return null;
	}
    return age;
}