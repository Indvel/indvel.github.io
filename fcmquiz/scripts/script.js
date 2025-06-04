var data = [];
var quiz = [];
var prevData = [];
var isStart = false;
var selected = "13";
var selData = [];
var tries = 0;
var allData = [];
var playerData = [];
var selRange = "all";

function onChangeSelect() {
    selRange = $('#quiz-select option:selected').attr('value');
}

function startQuiz() {
    if(!isStart) {
        document.querySelector(".history-list").innerHTML = "";
        tries = 0;
        if(selRange == "all") {
            playerData = quizData;
        } else if(selRange == "ih") {
            var filter = quizData.filter((e) => { return e.team == "ICON" || e.team == "HERO" });
            playerData = filter;
        } else {
            var filter = quizData.filter((e) => { return teamsList[selRange].includes(e.team) });
            playerData = filter;
        }
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
                    sch.innerHTML = '<img class="pImg" style="width: 25px;" src="' + f[i].pimage + '"><img style="width:25px;" src="https://fco.vod.nexoncdn.co.kr/assets/flags/flags_32x32/f_' + f[i].nationality + '.png"> ' + '<span style="color:dodgerblue;">' + f[i].ovr + '</span><span style="color:green;">' + f[i].position + '</span> <b>' + f[i].className + " " + f[i].playerKor + '</b>';
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
    quiz = {pid: playerData[rand].pid, class: playerData[rand].className, name: playerData[rand].playerKor, ovr: playerData[rand].ovr, nation: playerData[rand].nation, team: playerData[rand].teamid, teamName: playerData[rand].team, pos: playerData[rand].position, skillBoost: playerData[rand].skillBoostName, skillMoves: playerData[rand].skillMovesName};
    $('.btns').css({display: 'flex'});
    $('.buttonDiv').css({display: 'none'});
    $('.quiz-alert').text("스무고개 시작!");
    isStart = true;
}

function giveUp() {
    if(isStart) {
        $('.quiz-alert').html("포기. 정답은<br><b>" + quiz.class + " " + quiz.name + "</b>");
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
    }
}

function showHint() {
    if(isStart) {
        if(tries >= 10) {
            alert("힌트1\n스킬 부스트: " + quiz.skillBoost + "\n개인기: " + quiz.skillMoves + "\n\n힌트2\n국적: " + quiz.nation + "\n클래스: " + quiz.class + "\n팀: " + quiz.teamName);
        } else {
            alert("힌트1\n스킬 부스트: " + quiz.skillBoost + "\n개인기: " + quiz.skillMoves);
        }
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
    check4.onclick = function(e) {
        alert(sel.team);
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

    if(sel.pid == quiz.pid && sel.className == quiz.class && sel.ovr == quiz.ovr && sel.position == quiz.pos) {
        $('.quiz-alert').html("정답을 맞히셨습니다!<br><b>" + quiz.class + " " + quiz.name + "</b>");
        isStart = false;
        quiz = [];
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
        document.querySelector(".quiz-img").innerHTML = '<img src="' + sel.pimage + '">';
        $('.quiz-img').css({display: 'block'});
    }

    if(tries >= 20 && isStart) {
        $('.quiz-alert').html("횟수 초과! 정답은<br><b>" + quiz.class + " " + quiz.name + "</b>");
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
        return;
    }
}

var delList = ["240225", "273018", "189324", "207599", "201024", "269701", "226162", "257075", "263193", "237633", "200473", "240988", "278903", "270050", "270077", "208520", "244778", "260407", "220714", "170320", "193254", "225863", "224574", "239360", "225748", "234741", "263844", "204539", "219733", "277503", "232498", "225872", "239810", "259163", "238067", "269247", "180216", "234570", "212207", "263828", "229857", "246231", "212151", "219693", "146562", "224656", "260926", "245371", "259240", "258444", "220414", "262402", "197948", "243976", "192678", "245152", "247103", "202884", "248805", "243559", "272445", "268474", "257279", "213991", "204638", "168880", "214026", "232665", "253396", "247229", "253473", "257289", "265450", "256853", "236461", "224031", "272500", "231416", "260815", "259532", "238581", "279027", "246070", "243241", "215590", "220440", "230899", "243014", "255529", "275291", "237942", "264309", "244669", "241463", "240953", "246785", "244622", "224003", "211022", "237626", "252064", "201399", "239580", "205693", "253167", "265188", "213516", "224221", "241494", "242429", "212138", "210635", "256197", "256079", "237841", "238756", "228092", "252802", "254819", "260908", "238186", "201455", "262088", "240277", "244067", "255654", "215316", "204529", "169416", "264298", "206516", "239956", "276695", "273621", "252448", "163705", "231416", "216460", "262138", "266872", "193082", "231447", "257289", "266032", "251530", "236792", "244369", "260247", "243282", "259031", "226790", "236401", "261865", "243241", "246800", "241856", "276471", "237221", "263139", "25798", "242534", "260056", "252082", "213536", "214436", "271975", "213798", "251690", "263205", "252442", "264697", "262396"];
function deleteElementByPid(list) {
    var count = 0;
    playerData.forEach(function(e, i) {
		if(list.indexOf(String(e.pid)) != -1) {
			playerData.splice(i, 1);
            count++;
		}
	});
    console.log(count + "개 제거 완료");
}

function deleteElementByClass(cn, except) {
    var count = 0;
    playerData.forEach(function(e, i) {
        if(cn == e.className) {
            if(except != null && e.pimage.indexOf(except) == -1) {
                playerData.splice(i, 1);
                count++;
            } else if(except == null) {
                playerData.splice(i, 1);
                count++;
            }
        }
    });
    console.log(count + "개 제거 완료");
}

function deleteElementByNation(nation) {
    var count = 0;
    playerData.forEach(function(e, i) {
		if(e.nation == nation) {
			playerData.splice(i, 1);
            count++;
		}
	});
    console.log(count + "개 제거 완료");
}