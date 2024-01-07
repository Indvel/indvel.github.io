var data = [];
var quiz = [];
var prevData = [];
var isStart = false;
var selected = "13";

$(function() {
    LeagueId.forEach(function(e) {
        var opt = document.createElement("option");
        opt.setAttribute("value", e.id);
        opt.innerText = e.name;
        document.querySelector("#league-select").appendChild(opt);
    });
});

$('#league-select').on('change', function() {
    selected = $('#league-select option:selected').val();
    data = [];
});

function startQuiz() {
    if(!isStart) {
        if(data == null || data == undefined || data.length == 0) {
            var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://static.api.nexon.co.kr/fconline/latest/spid.json");
                xhr.onreadystatechange = function() {
                    if(this.readyState == 4) {
                        data = JSON.parse(this.responseText);
                    }
                    $('.quiz-alert').text("최초 데이터 가져오는 중...");
                    filteringData();
                    setRandomData();
                }
                xhr.send();
            }
        $('.quiz-status').text("");
    }
}

function requestTest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fifaonline4.inven.co.kr/dataninfo/player/?mode=getList&league=83");
    xhr.onreadystatechange = function() {
        if(this.readyState == 4) {
            console.log(this.responseText);
        }
    }
    xhr.send();
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
                } else {
                    quiz = {name: res['name'], country: res['nationality'], birth: res['birthdate'], pos: res['mainPos'], team: res['previousClubs'][0]};
                }
                console.log(quiz);
            }
        }
        xhr.send();
    }
}