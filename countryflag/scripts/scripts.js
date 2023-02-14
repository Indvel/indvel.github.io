var data = {
    "아시아": [{"name":"마카오","code":"MO"},{"name":"방글라데시","code":"BD"},{"name":"일본","code":"JP"},{"name":"라오스","code":"LA"},{"name":"쿠웨이트","code":"KW"},{"name":"이스라엘","code":"IL"},{"name":"요르단","code":"JO"},{"name":"키르기스스탄","code":"KG"},{"name":"오만","code":"OM"},{"name":"카타르","code":"QA"},{"name":"레바논","code":"LB"},{"name":"시리아","code":"SY"},{"name":"네팔","code":"NP"},{"name":"캄보디아","code":"KH"},{"name":"인도","code":"IN"},{"name":"싱가포르","code":"SG"},{"name":"스리랑카","code":"LK"},{"name":"동티모르","code":"TL"},{"name":"카자흐스탄","code":"KZ"},{"name":"북한","code":"KP"},{"name":"아프가니스탄","code":"AF"},{"name":"아제르바이잔","code":"AZ"},{"name":"몽골","code":"MN"},{"name":"인도네시아","code":"ID"},{"name":"아르메니아","code":"AM"},{"name":"우즈베키스탄","code":"UZ"},{"name":"중국","code":"CN"},{"name":"말레이시아","code":"MY"},{"name":"필리핀","code":"PH"},{"name":"바레인","code":"BH"},{"name":"조지아","code":"GE"},{"name":"튀르키예","code":"TR"},{"name":"이라크","code":"IQ"},{"name":"부탄","code":"BT"},{"name":"베트남","code":"VN"},{"name":"대한민국","code":"KR"},{"name":"이란","code":"IR"},{"name":"사우디아라비아","code":"SA"},{"name":"아랍에미리트","code":"AE"},{"name":"브루나이","code":"BN"},{"name":"파키스탄","code":"PK"},{"name":"태국","code":"TH"},{"name":"팔레스타인","code":"PS"},{"name":"대만","code":"TW"},{"name":"몰디브","code":"MV"},{"name":"홍콩","code":"HK"},{"name":"투르크메니스탄","code":"TM"},{"name":"미얀마","code":"MM"},{"name":"타지키스탄","code":"TJ"},{"name":"예멘","code":"YE"}],
    "유럽": [{"name":"아이슬란드","code":"IS"},{"name":"우크라이나","code":"UA"},{"name":"아일랜드","code":"IE"},{"name":"룩셈부르크","code":"LU"},{"name":"벨기에","code":"BE"},{"name":"불가리아","code":"BG"},{"name":"슬로바키아","code":"SK"},{"name":"덴마크","code":"DK"},{"name":"프랑스","code":"FR"},{"name":"러시아","code":"RU"},{"name":"노르웨이","code":"NO"},{"name":"폴란드","code":"PL"},{"name":"영국","code":"GB"},{"name":"코소보","code":"XK"},{"name":"독일","code":"DE"},{"name":"세르비아","code":"RS"},{"name":"몬테네그로","code":"ME"},{"name":"그리스","code":"GR"},{"name":"에스토니아","code":"EE"},{"name":"이탈리아","code":"IT"},{"name":"라트비아","code":"LV"},{"name":"헝가리","code":"HU"},{"name":"스페인","code":"ES"},{"name":"모나코","code":"MC"},{"name":"포르투갈","code":"PT"},{"name":"스위스","code":"CH"},{"name":"몰타","code":"MT"},{"name":"크로아티아","code":"HR"},{"name":"키프로스","code":"CY"},{"name":"보스니아헤르체고비나","code":"BA"},{"name":"핀란드","code":"FI"},{"name":"지브롤터","code":"GI"},{"name":"알바니아","code":"AL"},{"name":"안도라","code":"AD"},{"name":"체코","code":"CZ"},{"name":"슬로베니아","code":"SI"},{"name":"네덜란드","code":"NL"},{"name":"북마케도니아","code":"MK"},{"name":"산마리노","code":"SM"},{"name":"스웨덴","code":"SE"},{"name":"오스트리아","code":"AT"},{"name":"바티칸","code":"VA"},{"name":"리히텐슈타인","code":"LI"},{"name":"벨라루스","code":"BY"},{"name":"리투아니아","code":"LT"},{"name":"몰도바","code":"MD"},{"name":"루마니아","code":"RO"}],
    "아메리카": [{"name":"아루바","code":"AW"},{"name":"수리남","code":"SR"},{"name":"브라질","code":"BR"},{"name":"도미니카공화국","code":"DO"},{"name":"몬트세랫","code":"MS"},{"name":"멕시코","code":"MX"},{"name":"파나마","code":"PA"},{"name":"미국","code":"US"},{"name":"퀴라소","code":"CW"},{"name":"에콰도르","code":"EC"},{"name":"칠레","code":"CL"},{"name":"앤티가바부다","code":"AG"},{"name":"쿠바","code":"CU"},{"name":"볼리비아","code":"BO"},{"name":"페루","code":"PE"},{"name":"생피에르미클롱","code":"PM"},{"name":"콜롬비아","code":"CO"},{"name":"캐나다","code":"CA"},{"name":"온두라스","code":"HN"},{"name":"과테말라","code":"GT"},{"name":"그레나다","code":"GD"},{"name":"미국령버진아일랜드","code":"VI"},{"name":"자메이카","code":"JM"},{"name":"포클랜드제도","code":"FK"},{"name":"영국령버진아일랜드","code":"VG"},{"name":"도미니카공화국","code":"DM"},{"name":"앵귈라","code":"AI"},{"name":"신트마르턴","code":"SX"},{"name":"트리니다드토바고","code":"TT"},{"name":"엘살바도르","code":"SV"},{"name":"세인트루시아","code":"LC"},{"name":"벨리즈","code":"BZ"},{"name":"파라과이","code":"PY"},{"name":"바하마","code":"BS"},{"name":"마르티니크","code":"MQ"},{"name":"우루과이","code":"UY"},{"name":"가이아나","code":"GY"},{"name":"아이티","code":"HT"},{"name":"니카라과","code":"NI"},{"name":"푸에르토리코","code":"PR"},{"name":"베네수엘라","code":"VE"},{"name":"아르헨티나","code":"AR"},{"name":"코스타리카","code":"CR"},{"name":"생바르텔레미","code":"BL"},{"name":"바베이도스","code":"BB"},{"name":"과들루프","code":"GP"},{"name":"그린란드","code":"GL"},{"name":"프랑스령기아나","code":"GF"},{"name":"세인트키츠네비스","code":"KN"},{"name":"세인트빈센트그레나딘","code":"VC"},{"name":"버뮤다","code":"BM"}],
    "아프리카": [{"name":"모잠비크","code":"MZ"},{"name":"나미비아","code":"NA"},{"name":"토고","code":"TG"},{"name":"튀니지","code":"TN"},{"name":"소말리아","code":"SO"},{"name":"시에라리온","code":"SL"},{"name":"남아프리카","code":"ZA"},{"name":"마요트","code":"YT"},{"name":"알제리","code":"DZ"},{"name":"세네갈","code":"SN"},{"name":"레위니옹","code":"RE"},{"name":"남수단","code":"SS"},{"name":"세인트헬레나","code":"SH"},{"name":"감비아","code":"GM"},{"name":"레소토","code":"LS"},{"name":"부룬디","code":"BI"},{"name":"앙골라","code":"AO"},{"name":"적도기니","code":"GQ"},{"name":"말라위","code":"MW"},{"name":"베냉","code":"BJ"},{"name":"코모로","code":"KM"},{"name":"말리","code":"ML"},{"name":"우간다","code":"UG"},{"name":"모리타니","code":"MR"},{"name":"세이셸","code":"SC"},{"name":"기니","code":"GN"},{"name":"지부티","code":"DJ"},{"name":"모리셔스","code":"MU"},{"name":"보츠와나","code":"BW"},{"name":"니제르","code":"NE"},{"name":"부르키나파소","code":"BF"},{"name":"가봉","code":"GA"},{"name":"에티오피아","code":"ET"},{"name":"마다가스카르","code":"MG"},{"name":"이집트","code":"EG"},{"name":"콩고민주공화국","code":"CD"},{"name":"기니비사우","code":"GW"},{"name":"가나","code":"GH"},{"name":"나이지리아","code":"NG"},{"name":"짐바브웨","code":"ZW"},{"name":"콩고","code":"CG"},{"name":"라이베리아","code":"LR"},{"name":"수단","code":"SD"},{"name":"잠비아","code":"ZM"},{"name":"서사하라","code":"EH"},{"name":"리비아","code":"LY"},{"name":"중앙아프리카공화국","code":"CF"},{"name":"에스와티니","code":"SZ"},{"name":"상투메프린시페","code":"ST"},{"name":"카메룬","code":"CM"},{"name":"르완다","code":"RW"},{"name":"케냐","code":"KE"},{"name":"모로코","code":"MA"},{"name":"탄자니아","code":"TZ"},{"name":"차드","code":"TD"},{"name":"카보베르데","code":"CV"},{"name":"에리트레아","code":"ER"},{"name":"코트디부아르","code":"CI"}],
    "오세아니아": [{"name":"괌","code":"GU"},{"name":"투발루","code":"TV"},{"name":"누벨칼레도니","code":"NC"},{"name":"사모아","code":"WS"},{"name":"왈리스퓌튀나","code":"WF"},{"name":"키리바시","code":"KI"},{"name":"뉴질랜드","code":"NZ"},{"name":"호주","code":"AU"},{"name":"니우에","code":"NU"},{"name":"바누아투","code":"VU"},{"name":"미크로네시아","code":"FM"},{"name":"통가","code":"TO"},{"name":"나우루","code":"NR"},{"name":"아메리칸사모아","code":"AS"},{"name":"피지","code":"FJ"},{"name":"토켈라우","code":"TK"},{"name":"팔라우","code":"PW"},{"name":"파푸아뉴기니","code":"PG"},{"name":"프랑스령폴리네시아","code":"PF"}]
};
var isStart = false;
var answer = "";
var problem = "";
var quizData = [];
var isHint = false;
var showed = 0;
var count = 0;
var corrected = [];
var timeInterval = null;
var time ;

if(window.innerWidth <= 640) {
     document.querySelector('.countryFlag').style.width = '20%'
} else {
	document.querySelector('.countryFlag').style.width = '180px';
}

function startQuiz() {
    if(!isStart) {
        var sel = data[$("#quiz-select option:selected").val()];
        if(quizData.length <= 0) {
            quizData = sel;
        }
        var idx = Math.floor(Math.random() * quizData.length);
        var rand = quizData[idx].name;
        var code = quizData[idx].code;
        if(count > 0) {
            quizData = quizData.filter((e) => e.name !== rand);
        } else {
            quizData = sel.filter((e) => e.name !== rand);
        }
        answer = rand;
        problem = new Array(answer.length).fill("-").join("");
        var prbsp = problem.split("");
        document.querySelector(".countryFlag").setAttribute('src', 'https://flagcdn.com/' + code.toLowerCase() + '.svg');
        document.querySelector(".problem-table").innerHTML = "";
        for(var i = 0; i < prbsp.length; i++) {
            var span = document.createElement("li");
            span.innerHTML = prbsp[i]; 
            document.querySelector(".problem-table").appendChild(span);
        }
        document.querySelector(".div-quiz").style.display = "none";
        if(count > 0) {
            document.querySelector(".quiz-status").innerHTML = "정답입니다! (" + count + " / " + data[$("#quiz-select option:selected").val()].length + ")";
            document.querySelector(".quiz-status").style.color = "green";
            isStart = true;
        } else {
            document.querySelector(".quiz-status").innerHTML = "국기퀴즈 시작! (주제: " + $("#quiz-select option:selected").val() + ")";
            document.querySelector(".quiz-status").style.color = "green";
            isStart = true;
            count = 0;
        }
        document.querySelector(".inpText").focus();
        if(timeInterval == null) {
            time = Number($('#time-select option:selected').val());
            $('.count-time').text(time);
            timeInterval = setInterval(function() {
                if(time <= 0) {
                    timeOut();
                } else {
                    time--;
                    $('.count-time').text(time);
                }
            }, 1000);
        }
    }
}

function checkAnswer() {
    var inp = document.querySelector(".inpText").value.toUpperCase();
    if(inp == answer) {
        count++;
        if(count >= data[$("#quiz-select option:selected").val()].length) {
            allCorrect();
            return;
        }
        time = Number($("#time-select option:selected").val());
        $('.count-time').text(time);
        for(var i = 0; i < answer.length; i++) {
            var spans = document.querySelectorAll(".problem-table > li");
            spans[i].innerHTML = answer[i];
            spans[i].style.background = "green";
        }
        corrected.push(answer);
        answer = "";
        problem = "";
        showed = 0;
        isHint = false;
        isStart = false;
        startQuiz();
        playAudio("sound_correct.mp3", 0.1);
    } else {
        var anwsp = answer.split("");
        var inpsp =  inp.split("");
        var prbsp = problem.split("");
        var result = [];
        var corrects = 0;
        if(inpsp.length == anwsp.length) {
            for(var i = 0; i < anwsp.length; i++) {
                if(inpsp[i] == anwsp[i]) {
                    corrects++;
                    result[i] = anwsp[i];
                } else {
                    result[i] = prbsp[i];
                }
            }
            if(corrects != 0) {
                showed += corrects;
                problem = result.join("");
                for(var i = 0; i < problem.length; i++) {
                    var spans = document.querySelectorAll(".problem-table > li");
                    spans[i].innerHTML = problem[i];
                    spans[i].style.background = "goldenrod";
                }
                document.querySelector(".quiz-status").innerHTML = "일부는 맞췄습니다."
                document.querySelector(".quiz-status").style.color = "darkorange";
                playAudio("sound_nope.mp3", 0.2);
            } else {
                document.querySelector(".quiz-status").innerHTML = "틀렸습니다."
                document.querySelector(".quiz-status").style.color = "rgb(231, 0, 0)";
                document.querySelectorAll(".problem-table > li").forEach(e => e.style.background = "rgb(231, 0, 0)");
                playAudio("sound_nope.mp3", 0.2);
            }
        }
    }
    document.querySelector(".inpText").value = "";
}

function showHint() {
    if(!isHint && isStart) {
        if(showed >= Math.floor(answer.length / 1.5)) {
            alert("힌트가 너무 많이 공개됐습니다!");
            document.querySelector(".inpText").focus();
        } else {
            var anwsp = answer.split("");
            var prbsp = problem.split("");
			var htl = Math.floor(anwsp.length / 2);
            var idx = anwsp.length;
            for(var i = 0; i < htl; i++) {
                var rand = Math.floor(Math.random() * idx);
                if(prbsp[rand] != anwsp[rand]) {
                    prbsp[rand] = anwsp[rand];
                } else {
                    continue;
                }
            }
            showed += htl;
            problem = prbsp.join("");
            for(var i = 0; i < problem.length; i++) {
                var spans = document.querySelectorAll(".problem-table > li");
                spans[i].innerHTML = problem[i];
                spans[i].style.background = "goldenrod";
            }
            document.querySelector(".quiz-status").innerHTML = "힌트를 봤습니다.";
            document.querySelector(".quiz-status").style.color = "darkorange";
            isHint = true;
            document.querySelector(".inpText").focus();
        }
    } else if(isHint && isStart){
        alert("힌트는 한 번만 볼 수 있습니다.");
        document.querySelector(".inpText").focus();
    }
}

function timeOut() {
    if(isStart) {
        var percent = Math.floor((count / data[$("#quiz-select option:selected").val()].length) * 100);
        document.querySelector(".quiz-status").innerHTML = "타임아웃! 정답은 <b>" + answer + "</b> 입니다. <br><font color='black'>" + data[$("#quiz-select option:selected").val()].length + "개 중 " + count + "개 (" + percent + "%)를 맞췄습니다.</font>"
        document.querySelector(".quiz-status").style.color = "rgb(231, 0, 0)";
        document.querySelector(".problem-table").innerHTML = "";
        document.querySelector(".div-quiz").style.display = "";
        document.querySelector(".count-time").innerHTML = "";
        time = Number($('#time-select option:selected').val());
        clearInterval(timeInterval);
        timeInterval = null;
        quizData = [];
        answer = "";
        problem = "";
        showed = 0;
        count = 0;
        isHint = false;
        isStart = false;
        document.querySelector(".inpText").value = "";
        playAudio("sound_failed.mp3", 0.2);
    }
}

function allCorrect() {
    if(isStart) {
        document.querySelector(".quiz-status").innerHTML = data[$("#quiz-select option:selected").val()].length +  "개를 모두 맞췄습니다!"
        document.querySelector(".quiz-status").style.color = "green";
        document.querySelector(".problem-table").innerHTML = "";
        document.querySelector(".div-quiz").style.display = "";
        document.querySelector(".count-time").innerHTML = "";
        time = Number($('#time-select option:selected').val());
        clearInterval(timeInterval);
        timeInterval = null;
        quizData = [];
        answer = "";
        problem = "";
        showed = 0;
        count = 0;
        isHint = false;
        isStart = false;
        document.querySelector(".inpText").value = "";
        playAudio("sound_all-correct.mp3", 0.2);
    }
}

function giveUp() {
    if(isStart) {
        var percent = Math.floor((count / data[$("#quiz-select option:selected").val()].length) * 100);
        document.querySelector(".quiz-status").innerHTML = "포기하셨습니다. 정답은 <b>" + answer + "</b> 입니다. <br><font color='black'>" + data[$("#quiz-select option:selected").val()].length + "개 중 " + count + "개 (" + percent + "%)를 맞췄습니다.</font>"
        document.querySelector(".quiz-status").style.color = "rgb(231, 0, 0)";
        document.querySelector(".problem-table").innerHTML = "";
        document.querySelector(".div-quiz").style.display = "";
        document.querySelector(".count-time").innerHTML = "";
        time = Number($('#time-select option:selected').val());
        clearInterval(timeInterval);
        timeInterval = null;
        quizData = [];
        answer = "";
        problem = "";
        showed = 0;
        count = 0;
        isHint = false;
        isStart = false;
        playAudio("sound_failed2.mp3", 0.2);
    }
}

function playAudio(fileName, time) {
    var audio = new Audio("sounds/" + fileName);
    audio.pause();
    audio.load();
    audio.currentTime = time;
    audio.volume = 1;
    audio.play();
}

function checkEnter() {
    if(window.event.keyCode == 13) {
        checkAnswer();
    }
}