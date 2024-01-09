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
        data = PlayerList[selected];
        data = filteringData(data);
        setRandomData();
        $('.quiz-status').text("");
    }
}

function filteringData(d) {
    if(d != null && d.length != 0) {
        var f = d.filter(function(item1, idx1) {
            return d.findIndex(function(item2, idx) {
                return item1.name == item2.name
            }) == idx1;
        });
        return f;
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
            var f = allData.filter(v => v.name.indexOf($('#inputTxt').val()) != -1 || v.originName.indexOf($('#inputTxt').val()) != -1);
            if(f.length != 0) {
                for(var i = 0; i < f.length; i++) {
                    var sch = document.createElement("li");
                    var cdx = countryData.findIndex(e => e.name == f[i].country);
                    var idx2 = -1;
                    for(var j = 0; j < ClubsData.length; j++) {
                        if(ClubsData[j].name.includes("|")) {
                            var arr = ClubsData[j].name.split("|");
                            arr.forEach(function(n) {
                                if(n.indexOf(f[i].team) != -1) {
                                    idx2 = j;
                                    return;
                                }
                            });
                        } else {
                            if(ClubsData[j].name.indexOf(f[i].team) != -1) {
                                idx2 = j;
                                break;
                            }
                        }
                    }
                    if(ClubsData[idx2] != undefined) {
                        sch.innerHTML = '<img style="width:25px;" src=' + countryData[cdx].logos + '> <img style="width:25px;" src=' + ClubsData[idx2].logos + '> ' + '<span style="color:green;">' + f[i].pos + '</span> <b>' + f[i].name + '</b>';
                    } else {
                        sch.innerHTML = '<img style="width:25px;" src=' + countryData[cdx].logos + '> <span style="color:green;">' + f[i].pos + '</span> <b>' + f[i].name + '</b>';
                    }
                    sch.onclick = function(e) {
                        var idx = allData.findIndex(e => e.name == this.innerHTML.split("<b>")[1].split("</b>")[0]);
                        checkAnswer(allData[idx]);
                        $('#inputTxt').val("");
                        $('.search-list').css({display: 'none'});
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
        quiz = {name: data[rand].name, originName: data[rand].originName, country: data[rand].country, birth: data[rand].birth, pos: data[rand].pos, team: data[rand].team};
        $('.btns').css({display: 'flex'});
        $('.buttonDiv').css({display: 'none'});
        $('.quiz-alert').text("스무고개 시작!");
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
    var check1 = document.createElement("div");
    var check2 = document.createElement("div");
    var check3 = document.createElement("div");
    var check4 = document.createElement("div");
    var check5 = document.createElement("div");
    var idx = countryData.findIndex(e => e.name == sel.country);
    var li = document.createElement("li");

    tries++;
    check1.innerHTML = tries + '번째';
    check1.style.background = 'whitesmoke';
    check1.style.color = 'black';
    li.appendChild(check1);

    check2.innerHTML = '<img style="width: 25px;" src='  + countryData[idx].logos + ' title="' + countryData[idx].name +  '">';
    if(sel.country == quiz.country) { 
        check2.style.background = 'limegreen';
    } else {
        check2.style.background = 'crimson';
    }
    li.appendChild(check2);

    check3.innerHTML = sel.pos;
    if(sel.pos == quiz.pos) {
        check3.style.background = 'limegreen';
    } else {
        check3.style.background = 'crimson';
    }
    li.appendChild(check3);

    var idx2 = -1;
    for(var i = 0; i < ClubsData.length; i++) {
        if(ClubsData[i].name.includes("|")) {
            var arr = ClubsData[i].name.split("|");
            arr.forEach(function(n) {
                if(n.indexOf(sel.team) != -1) {
                    idx2 = i;
                    return;
                }
            });
        } else {
            if(ClubsData[i].name.indexOf(sel.team) != -1) {
                idx2 = i;
                break;
            }
        }
    }
    if(ClubsData[idx2] != undefined) {
        check4.innerHTML = '<img style="width: 25px;" src=' + ClubsData[idx2].logos + ' title="' + ClubsData[idx2].name.split("|")[0] + '">';
    } else {
        check4.innerHTML = '<img style="width: 25px;" title="' + sel.team + '">';
    }
    if(sel.team == quiz.team) {
        check4.style.background = 'limegreen'
    } else {
        check4.style.background = 'crimson';
    }
    li.appendChild(check4);

    var age = calcAge(sel.birth);
    var ageOrg = calcAge(quiz.birth);
    if(age > ageOrg) {
        check5.innerHTML = age + '▼';
        check5.style.background = 'crimson';
    } else if(age < ageOrg) {
        check5.innerHTML = age + '▲';
        check5.style.background = 'crimson';
    } else if(age == ageOrg) {
        check5.innerHTML = age;
        check5.style.background = 'limegreen';
    }
    li.appendChild(check5);

    document.querySelector(".history-list").prepend(li);

    if(tries >= 20) {
        $('.quiz-alert').text("횟수 초과! 정답은 (" + quiz.name + ")");
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
        return;
    }

    if(sel.name == quiz.name) {
        $('.quiz-alert').text("정답을 맞히셨습니다! (" + quiz.name + ")");
        isStart = false;
        quiz = [];
        tries = 0;
        $('.btns').css({display: 'none'});
        $('.buttonDiv').css({display: ''});
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