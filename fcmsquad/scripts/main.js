var data = {form: "0", cards: []};
var posSel = "-1";
var multiSel = false;
var selDatas = [];
var posData = [];
var faceIdx = [];
var selected = "0";
var filterTeam = "";
var teamInfos = [{}];
var visitCount = 0;
var saveCount = 0;

const specialCard = ["RuleBreakers24 아이콘", "트로피 아이콘"];
const notices = "2024.11.12 미페 추가<br><b>- [CT24] B. 소사<br>- [COPA24] I. 코네, 다비드 한츠코<br>- [KL24] 불특정 다수</b>";
const nickData = [
    {nick: "팽이", name: "안토니"},
    {nick: "훔바훔바", name: "스티븐 제라드"},
    {nick: "신두형", name: "크리스티아누 호날두"},
    {nick: "루까꿍", name: "로멜루 루카쿠"},
    {nick: "아시발안나가", name: "케파"},
    {nick: "차붐", name: "치범근"},
    {nick: "메갓", name: "리오넬 메시"},
    {nick: "교수님", name: "토니 크로스"},
    {nick: "레비", name: "로베르트 레반도프스키"},
    {nick: "굴맨", name: "루드 굴리트"},
    {nick: "비맨", name: "비에이라"},
    {nick: "모들언니", name: "모드리치"},
    {nick: "콩락", name: "미하엘 발락"},
    {nick: "개간로", name: "마르코 로이스"},
    {nick: "합류왕", name: "마이클 오언"},
    {nick: "짭라탄", name: "아르나우토비치"},
    {nick: "신무형", name: "무드리크"},
    {nick: "흑표범", name: "사뮈엘 에투"},
    {nick: "인혜", name: "안드레스 이니에스타"},
    {nick: "잠자리", name: "위고 요리스"},
    {nick: "에밀신", name: "에밀리아노 마르티네스"},
    {nick: "쿠신", name: "티보 쿠르투아"},
    {nick: "박찬호", name: "일카이 귄도안"},
    {nick: "덕배", name: "케빈 더브라위너"},
    {nick: "대벨벨", name: "주드 벨링엄"},
    {nick: "대벨벨2", name: "카이 하베르츠"},
    {nick: "뮐친놈", name: "토마스 뮐러"},
    {nick: "미들라이커", name: "프랭크 램파드"},
    {nick: "외계인", name: "호나우지뉴"},
    {nick: "찰장군", name: "하칸 찰하놀루"},
    {nick: "셉셉이", name: "데얀 쿨루세브스키"},
    {nick: "해버지", name: "박지성"},
    {nick: "판타지스타", name: "안정환"},
    {nick: "을용타", name: "이을용"},
    {nick: "우리흥", name: "손흥민"},
    {nick: "비닐신", name: "비니시우스 주니어"},
    {nick: "조신", name: "조르지뉴"},
    {nick: "김미희", name: "요주아 키미히"},
    {nick: "건축가", name: "안드레아 피를로"},
    {nick: "노안", name: "아르연 로번"},
    {nick: "파라오", name: "모하메드 살라"},
    {nick: "거미", name: "레프 야신"},
    {nick: "핵이빨", name: "루이스 수아레스"},
    {nick: "반통수", name: "로빈 반페르시"},
    {nick: "가출남", name: "마누엘 노이어"},
    {nick: "관제탑", name: "문선민"},
    {nick: "조스카스", name: "조원희"},
    {nick: "진공청소기", name: "김남일"}
]

const onlongclick = ($target, duration, callback) => {
    $target.onmousedown = () => {
      const timer = setTimeout(callback, duration);
    
      $target.onmouseup = () => {
        clearTimeout(timer);
      };
    };  
  }

$(function() {
    formation.forEach(function(e) {
        var opt = document.createElement("option");
        opt.setAttribute("value", e.id);
        opt.innerText = e.name;
        document.querySelector("#form-select").appendChild(opt);
    });

    document.querySelectorAll('.position').forEach(function(e) {
        e.onclick = function(t) {
            if(posSel != this.id) {
                posSel = this.id;
                if(multiSel) {
                    selDatas.push(posSel);
                    posData.push($('#' + posSel + ' > div.pos-text').text());
                    $('.pos-name').text("선택: " + posData.join(','));
                } else {
                    posData = [];
                    $('.pos-name').text("선택: " + $('#' + posSel + ' > div.pos-text').text());
                    if($(this).attr('pdx') != "-1") {
                        getFaces(allData[Number($(this).attr('pdx'))].originName);
                    }
                }
                if($(this).css("background").indexOf("url") == -1) {
                    $(this).css({border: '1px solid green'});
                    if(!multiSel) {
                        var nd = $('.squad-content > div.position').not('#' + posSel);
                        for(var i = 0; i < nd.length; i++) {
                            if($(nd[i]).css("background").indexOf("url") != -1) {
                                $(nd[i]).css({border: 'none'});
                            } else {
                                $(nd[i]).css({border: '1px solid red'});
                            }
                        }
                    }
                }
            }
            if($(this).css("background").indexOf("url") != -1) {
                $('#inputTxt').val(cardData[Number($(this).attr('cdx'))].name);
                if($(this).attr('pdx') != "-1") {
                    $('#inputPlayer').val(allData[Number($(this).attr('pdx'))].name);
                }
            } else {
                $('#inputTxt').val('');
            }
            if(window.innerWidth <= 992) {
                showInfo(this);
            }
        }

        e.ondblclick = function(e) {
            showInfo(this);
        }

        e.onmousedown = function(e) {
            if(e.which == 3 || e.button == 2) {
                posSel = this.id;
                replacePosition();  
            }
        }

        if(location.origin.indexOf("127.0.0.1") != -1 || location.origin.indexOf("indvel.github.io") != -1) {
            showPopup("공지사항", notices);
        }
    });

    if(window.innerWidth <= 992) {
        var diff = 1000 - window.innerWidth;
        $('.div-img').css({width: '800px', height: '650px'});
        $('.bg-img').css({width: '800px', height: "650px"});
        $('.main-content').css({height: 'fit-content'});
        $('.side-menu').css({width: '200px'});
        $('#btnClear').css({width: 'auto'});
        $('#btnSave').css({width: 'auto'});
        $('#face-select').css({width: '150px'});
        $('.detail-search').css({width: '150px', marginLeft: '800px'});
        $('.div-bottom').css({display: 'none'});
        $('.div-bottom2').css({display: 'block'});
        selected = "0";
        changeFormation();
    } else {
        $('.div-img').css({width: '1000px', height: '650px'});
        $('.bg-img').css({width: '1000px', height: "650px"});
        $('.side-menu').css({width: 'fit-content'});
        $('.main-content').css({height: '100%'});
        $('#btnClear').css({width: '235px'});
        $('#btnSave').css({width: '235px'});
        $('#face-select').css({width: '200px'});
        $('.detail-search').css({width: '250px', marginLeft: '1000px'});
        $('.div-bottom').css({display: 'flex'});
        $('.div-bottom2').css({display: 'none'});
    }

    getVisitCount().then((data) => {
        if(data != undefined) {
            visitCount = Number(data);
            if(visitCount >= 0) {
                visitCount++;
                sendVisitCount(visitCount);
            }
        }
    });
    getSaveCount().then((data) => {
        if(data != undefined) {
            if(Number(data) > 0) {
                saveCount = Number(data);
            }
        }
    });
});

function closeNotice() {
    $('.notice-popup').css({display: 'none'});
}

function showInfo(t) {
    if($(t).attr('pdx') != "-1" && $('.player-info').css('display') != 'block') {
        var sel = allData[Number($(t).attr('pdx'))];
        var ul = document.querySelector('.info-list');
        ul.innerHTML = "";
        var li1 = document.createElement("li");
        if(sel.originName.length >= 12 && sel.originName.length <= 13) {
            li1.innerHTML = "<span style='font-size: 15px;'><b>" + sel.originName + '</b></span>';
        } else if(sel.originName.length > 13 && sel.originName.length < 16) {
            li1.innerHTML = "<span style='font-size: 13px;'><b>" + sel.originName + '</b></span>';
        } else if(sel.originName.length == 16) {
            li1.innerHTML = "<span style='font-size: 12px;'><b>" + sel.originName + '</b></span>';
        } else if(sel.originName.length > 16 && sel.originName.length < 20) {
            li1.innerHTML = "<span style='font-size: 11px;'><b>" + sel.originName + '</b></span>';
        } else if(sel.originName.length >= 20) { 
            li1.innerHTML = "<span style='font-size: 10px;'><b>" + sel.originName + '</b></span>';
        } else {
            li1.innerHTML = '<b>' + sel.originName + '</b>';
        }
        ul.appendChild(li1);
        var li2 = document.createElement("li");
        var flag = countryData[countryData.findIndex(e => e.name == sel.country)].logos;
        if(sel.country.length >= 10) {
            li2.innerHTML = '국적: <img style="width:25px;" src="' + flag + '"><span style="font-size:11px;"><b>' + sel.country + '</b></span>';
        } else {
            li2.innerHTML = '국적: <img style="width:25px;" src="' + flag + '"><b>' + sel.country + '</b>';
        }
        ul.appendChild(li2);
        var li3 = document.createElement("li");
        li3.innerHTML = "생년월일: <b>" + sel.birth + "</b>";
        ul.appendChild(li3);
        var li4 = document.createElement("li");
        li4.innerHTML = "포지션: <b>" + sel.pos + "</b>";
        ul.appendChild(li4);
        var li5 = document.createElement("li");
        li5.innerHTML = "신체: <b>" + sel.height + ' / ' + sel.weight + "</b>";
        ul.appendChild(li5);
        var li6 = document.createElement("li");
        if(sel.team.length >= 10) {
            li6.innerHTML = "소속팀: <span style='font-size: 11px;'><b>" + sel.team + '</b></span>';
        } else {
            li6.innerHTML = "소속팀: <b>" + sel.team + "</b>";
        }
        ul.appendChild(li6);
        var li7 = document.createElement("li");
        li7.setAttribute("class", "career-list");
        var filter = sel.career.filter((c, i) => {
            return sel.career.indexOf(c) === i;
        });
        li7.innerHTML = '<div class="div-career">' + "경력: <span style='font-size: 11px;'><b><br>&nbsp;" + filter.join("<br>&nbsp;") + "</b></span></div>";
        ul.appendChild(li7);
        var mleft = (Number($(t).css('left').replace("px", "")) - 180) + 'px';
        var mtop = (Number($(t).css('top').replace("px", "")) - 150) + 'px';
        $('#replace-button').css({display: 'flex'});
        $('.player-info').css({display: 'block', left: mleft, top: mtop});
    }
}

$(document).on('change', '#form-select', function() {
    selected = $('#form-select option:selected').val();
    data.form = selected;
    changeFormation();
});

$('#checkMulti').change(function(e) {
    if($(this).prop('checked')) {
        multiSel = true;
        selDatas = [];
    } else {
        multiSel = false;
        selDatas = [];
        posData = [];
        document.querySelectorAll('.position').forEach(function(e) {
            if($('#' + e.id).css("background").indexOf("url") == -1) {
                $('#' + e.id).css({background: '', border: '1px solid red'});
            }
        });
        $('.pos-name').text("선택: ");
    }
});

function changeFormation() {
    if(selected != "") {
        $('.squad-text').text(formation[Number(selected)].name);
        formation[Number(selected)].pos.forEach(function(e) {
            if(e.xy == "0") {
                $('#' + e.name).css({display: 'none'});
            } else {
                var split = e.xy.split(",");
                if(window.innerWidth <= 992) {
                    var diff = 1080 - window.innerWidth;
                    var mleft;
                    mleft = Number(split[0].replace("px", "")) - diff;
                    $('#' + e.name).css({display: 'flex', left: mleft + 'px', top: split[1], textAlign: 'center'});
                } else {
                    $('#' + e.name).css({display: 'flex', left: split[0], top: split[1], textAlign: 'center'});
                }
                $('#' + e.name + ' > div.pos-text').text(e.text);
            }
        });
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

function filteringData(d, key) {
    if(d != null && d.length != 0) {
        var f = d.filter(function(item1, idx1) {
            return d.findIndex(function(item2, idx) {
                return item1['key'] == item2['key']
            }) == idx1;
        });
        return f;
    }
}

function searchCards() {
    if($('#inputTxt').val().length == 0) {
        $('#card-list').css({display: 'none'});
    } else {
        $('#card-list').css({display: 'block'});
        var list = document.querySelector('#card-list > .search-list');
        list.innerHTML = "";
        var text = $('#inputTxt').val();
        var f = cardData.filter((v) => {
            if(v.name.indexOf(text.toUpperCase()) != -1 || v.otherNames.indexOf(text.toUpperCase()) != -1) {
                return true;
            }
            return false;
        });
        f.forEach(function(e) {
            var li = document.createElement("li");
            li.setAttribute("idx", e.idx);
            li.innerHTML = '<img style="width:25px;" src=' + e.image + '> <span style="color:black;">' + e.name + '</span>';
            li.onclick = function(e) {
                var t = this;
                if(multiSel) {
                    selDatas.forEach(function(e) {
                        $('#' + e).css({
                            background: 'url(' + cardData[Number(t.getAttribute("idx"))].image + ')',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            border: 'none'
                        });
                        $('#' + e).attr('cdx', t.getAttribute("idx"));
                        $('#' + e + ' > div.card-text').css({color: cardData[Number(t.getAttribute("idx"))].color});
                        if(cardData[Number(t.getAttribute("idx"))].type == "fc") {
                            $('#' + e + ' > div.card-text').css({marginTop: '40px'});
                        } else if(cardData[Number(t.getAttribute("idx"))].type == "fm"){
                            $('#' + e + ' > div.card-text').css({marginTop: ''});
                        }
                    });
                } else {
                    $('#' + posSel).css({
                        background: 'url(' + cardData[Number(this.getAttribute("idx"))].image + ')',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        border: 'none'
                    });
                    $('#' + posSel).attr('cdx', this.getAttribute("idx"));
                    $('#' + posSel + ' > div.card-text').css({color: cardData[Number(this.getAttribute("idx"))].color});
                    if(cardData[Number(t.getAttribute("idx"))].type == "fc") {
                        $('#' + posSel + ' > div.card-text').css({marginTop: '40px'});
                    } else if(cardData[Number(t.getAttribute("idx"))].type == "fm"){
                        $('#' + posSel + ' > div.card-text').css({marginTop: ''});
                    }
                    $('#face-select').prop('selectedIndex', 0).change();
                    if($('#' + posSel).attr('pdx') != "-1") {
                        getFaces(allData[Number($('#' + posSel).attr('pdx'))].originName);
                        var opt = document.querySelectorAll('#face-select > option');
                        $('#face-select').prop('selectedIndex', 0).change();
                        for(var i = 0; i < opt.length; i++) {
                            if(opt[i].innerText.indexOf(cardData[Number($('#' + posSel).attr('cdx'))].code) != -1) {
                                $('#face-select').prop('selectedIndex', i).change();
                                break;
                            }
                        }
                    }
                }
                $('#card-list').css({display: 'none'});
            }
            list.appendChild(li);
        });
    }
}

function closeInfo() {
    $('.player-info').css({display: 'none'});
}

function openDetailSearch() {
    if($('.detail-search').css('margin-left') == '1000px' || $('.detail-search').css('margin-left') == '800px') {
        $('.detail-search').css({marginLeft: '470px'});
    }
}

function closeDetailSearch() {
    if($('.detail-search').css('margin-left') == '470px') {
        if(window.innerWidth <= 992) {
            $('.detail-search').css({marginLeft: '800px'});
        } else {
            $('.detail-search').css({marginLeft: '1000px'});
        }
    }
}

function showPopup(title, text) {
    $('.notice-popup').css({display: 'block'});
    $('.notice-title').text(title);
    $('.notice-content').html(text);
}

function checkEnter(n) {
    if(event.keyCode == 13) {
        if(n == 0) {
            searchCards();
        } else if(n == 1) {
            if($('#inputPlayer').val() == "summary") {
                showPopup("통계", "총 방문: <b>" + numberWithCommas(visitCount) + "</b><br>이미지 저장 횟수: <b>" + numberWithCommas(saveCount) + "</b><br><span style='font-size: 13px; font-style: italic; color: green;'>(2024. 05. 09 부터 기록)</span>");
                $('#inputPlayer').val("");
            } else {
                searchPlayers();
            }
        } else if(n == 2) {
            searchTeam();
        }
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setFace(str, id) {
    if(posSel != "-1") {
        if(faceIdx != -1 && faceData[faceIdx].images.length != 0) {
            $('#' + posSel + ' > .face-img > img').attr('src', faceData[faceIdx].images[selected]);
        } else {
            if(cardData[Number($('#' + posSel).attr('cdx'))].type == "fc") {
                $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0_NOFACE.png");
            } else {
                $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0.png");
            }
        }
    }
}

function getFaces(str) {
    document.querySelector("#face-select").innerHTML = "";
    var idx = fcmData.findIndex((e) => e.name == str || e.nick == str);
    var data;
    if(idx != -1) {
        if(posSel != "-1") {
            if($('#' + posSel).attr('cdx') != '-1') {
                if(cardData[Number($('#' + posSel).attr('cdx'))].type == 'fm') {
                    data = faceData2;
                } else {
                    data = faceData;
                }
            }
        }
        faceIdx = data.findIndex((e) => e.pid == fcmData[idx].pid);
        if(faceIdx != -1) {
            if(Object.keys(data[faceIdx]).includes("images")) {
                if(data[faceIdx].images.length != 0) {
                    data[faceIdx].images.forEach(function(e, i) {
                        var opt = document.createElement("option");
                        opt.setAttribute("idx", i);
                        opt.setAttribute("fidx", faceIdx);
                        if(e.indexOf("/normal") != -1) {
                            if(e.indexOf("player_24") != -1) {
                                opt.innerText = e.split("player_24_")[1].split("/normal")[0];
                            } else {
                                opt.innerText = e.split("player_23_")[1].split("/normal")[0];
                            }
                        } else {
                            opt.innerText = e.split("players/")[1].split(".png")[0];  
                        }
                        document.querySelector("#face-select").appendChild(opt);
                    });
                } else {
                    if(cardData[Number($('#' + posSel).attr('cdx'))].type == "fc") {
                        $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0_NOFACE.png");
                    } else {
                        $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0.png");
                    }
                }
            }
        } else {
            if(cardData[Number($('#' + posSel).attr('cdx'))].type == "fc") {
                $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0_NOFACE.png");
            } else {
                $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0.png");
            }
        }
    } else {
        if(cardData[Number($('#' + posSel).attr('cdx'))].type == "fc") {
            $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0_NOFACE.png");
        } else {
            $('#' + posSel + ' > .face-img > img').attr('src', "./resources/players/p0.png");
        }
    }
}

$('#face-select').blur(function() {
    selected = $('#face-select option:selected').attr('idx');
    faceIdx = $('#face-select option:selected').attr('fidx');
    var data;
    if(posSel != "-1") {
        if($('#' + posSel).attr('cdx') != '-1') {
            if(cardData[Number($('#' + posSel).attr('cdx'))].type == 'fm') {
                data = faceData2;
            } else {
                data = faceData;
            }
        }
        if(data[faceIdx] != undefined) {
            if(data[faceIdx].images.length != 0) {
                $('#' + posSel + ' > .face-img > img').attr('src', data[faceIdx].images[selected]);
                data.face = data[faceIdx].images[selected];
            }
        }
    }
});

$('#face-select').on('change', function() {
    selected = $('#face-select option:selected').attr('idx');
    faceIdx = $('#face-select option:selected').attr('fidx');
    var data;
    if(posSel != "-1") {
        if($('#' + posSel).attr('cdx') != '-1') {
            if(cardData[Number($('#' + posSel).attr('cdx'))].type == 'fm') {
                data = faceData2;
            } else {
                data = faceData;
            }
        }
        if(data[faceIdx] != undefined) {
            if(data[faceIdx].images.length != 0) {
                $('#' + posSel + ' > .face-img > img').attr('src', data[faceIdx].images[selected]);
                data.face = data[faceIdx].images[selected];
            }
        }
    }
});

function searchPlayers(str) {
    if($('#inputPlayer').val() == "summary") {
        showPopup("통계", "총 방문: <b>" + numberWithCommas(visitCount) + "</b><br>이미지 저장 횟수: <b>" + numberWithCommas(saveCount) + "</b><br><span style='font-size: 13px; font-style: italic; color: green;'>(2024. 05. 09 부터 기록)</span>");
        $('#inputPlayer').val("");
        return;
    }
    if(allData.length != 0) {
        if($('#inputPlayer').val().length == 0) {
            $('#player-list').css({display: 'none'});
        } else {
            $('#player-list').css({display: 'block'});
            var list = document.querySelector('#player-list > .search-list');
            list.innerHTML = "";
            var input = $('#inputPlayer').val();
            nickData.forEach((e) => {
                if(e.nick == input.toUpperCase()) {
                    input = e.name;
                }
            })
            var f;
            if(str != null && str.length != 0) {
                if(str.indexOf("pos:") != -1) {
                    var pos = "";
                    if(str.split("pos:")[1].split("|")[0] == "전체") {
                        pos = "*";
                    } else {
                        pos = str.split("pos:")[1].split("|")[0];
                    }
                    if(str.indexOf("t:") != -1) {
                        if(pos == "*") {
                            f = allData.filter(v => v.career.some((x) => str.split("t:")[1].split("|")[0].indexOf(x) != -1)
                            && (Number(v.height.replace("cm", "")) >= Number(str.split("h:")[1].split(",")[0])) && (Number(v.height.replace("cm", "")) < Number(str.split("h:")[1].split(",")[1])));
                        } else {
                            f = allData.filter(v => v.pos == pos && v.career.some((x) => str.split("t:")[1].split("|")[0].indexOf(x) != -1)
                            && (Number(v.height.replace("cm", "")) >= Number(str.split("h:")[1].split(",")[0])) && (Number(v.height.replace("cm", "")) < Number(str.split("h:")[1].split(",")[1])));
                        }
                    } else {
                        if(pos == "*") {
                            f = allData.filter(v => (Number(v.height.replace("cm", "")) >= Number(str.split("h:")[1].split(",")[0])) && (Number(v.height.replace("cm", "")) < Number(str.split("h:")[1].split(",")[1])));
                        } else {
                            f = allData.filter(v => v.pos == pos 
                                && (Number(v.height.replace("cm", "")) >= Number(str.split("h:")[1].split(",")[0])) && (Number(v.height.replace("cm", "")) < Number(str.split("h:")[1].split(",")[1])));
                            }
                    }
                } else {
                    f = allData.filter(v => v.career.some((x) => str.indexOf(x) != -1 || x.indexOf(str) != -1));
                }
            } else {
                if(!isNaN(input)) {
                    f = allData.filter(v => Number(v.height.replace("cm", "")) >= Number(input));
                } else {
                    f = allData.filter(v => v.name.indexOf(input) != -1 || v.originName.indexOf(input) != -1 || v.team.indexOf(input) != -1 || v.country.indexOf(input) != -1 || v.career.indexOf(input) != -1);
                }
            }
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
                        sch.innerHTML = '<img style="width:25px;" src=' + countryData[cdx].logos + '> <img style="width:25px; height:25px;" src=' + ClubsData[idx2].logos + '> ' + '<span style="color:green;">' + f[i].pos + '</span> <b>' + f[i].name + '</b>';
                    } else {
                        sch.innerHTML = '<img style="width:25px;" src=' + countryData[cdx].logos + '> <span style="color:green;">' + f[i].pos + '</span> <b>' + f[i].name + '</b>';
                    }
                    sch.onclick = function(e) {
                        var idx = allData.findIndex(e => e.name == this.innerHTML.split("<b>")[1].split("</b>")[0] && e.pos == this.innerHTML.split("<span")[1].split("</span>")[0].split(">")[1]);
                        var name = allData[Number(idx)].name;
                        if(multiSel) {
                            selDatas.forEach(function(e) {
                                if(name.length > 6 && name.length <= 8) {
                                    $('#' + e + ' > div.card-text').css({fontSize: Number(name.length + 1) + 'px'});
                                } else if(name.length > 8 && name.length < 10) {
                                    $('#' + e + ' > div.card-text').css({fontSize: Number(name.length - 2) + 'px'});
                                } else if(name.length == 10) {
                                    $('#' + e + ' > div.card-text').css({fontSize: Number(name.length - 2.5) + 'px'});
                                } else if(name.length >= 11) {
                                    $('#' + e + ' > div.card-text').css({fontSize: Number(name.length - 5) + 'px'});
                                } else {
                                    $('#' + e + ' > div.card-text').css({fontSize: '10px'});
                                }
                                $('#' + e + ' > div.card-text').text(allData[Number(idx)].name);
                                $('#' + e).attr("pdx", idx);
                            });
                        } else {
                            if(name.length > 6 && name.length <= 8) {
                                $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length + 1) + 'px'});
                            } else if(name.length > 8 && name.length < 10) {
                                $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length - 2) + 'px'});
                            } else if(name.length == 10) {
                                $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length - 2.5) + 'px'});
                            } else if(name.length >= 11) {
                                $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length - 5) + 'px'});
                            } else {
                                $('#' + posSel + ' > div.card-text').css({fontSize: '10px'});
                            }
                            $('#' + posSel + ' > div.card-text').text(allData[Number(idx)].name);
                            $('#' + posSel).attr("pdx", idx);
                            getFaces(allData[Number(idx)].originName);
                            var opt = document.querySelectorAll('#face-select > option');
                            $('#face-select').prop('selectedIndex', 0).change();
                            for(var i = 0; i < opt.length; i++) {
                                var code = cardData[Number($('#' + posSel).attr('cdx'))].code;
                                if(code.includes("|")) {
                                    var split = code.split("|");
                                    for(var c in split) {
                                        if(opt[i].innerText.indexOf(c) != -1) {
                                            $('#face-select').prop('selectedIndex', i).change();
                                            break;
                                        }
                                    }
                                } else {
                                    if(opt[i].innerText.indexOf(code) != -1) {
                                        $('#face-select').prop('selectedIndex', i).change();
                                        break;
                                    }
                                }
                            }
                        }
                        $('#inputPlayer').val("");
                        $('#player-list').css({display: 'none'});
                        setTeamColors();
                    }
                    list.appendChild(sch);
                    $('#player-list').css({display: 'block'});
                }
            }
        }
    }
}

function searchTeam() {
    var txt = $('#inputTeam').val();
    if(txt.length != 0) {
        var filter = ClubsData.filter((e) => e.name.indexOf(txt) != -1);
        if(filter.length != 0) {
            document.querySelector('.filter-list').innerHTML = "";
            filter.forEach((e) => {
                var sch = document.createElement("li");
                var n = e.name.indexOf("|") != -1 ? e.name.split("|")[0] : e.name;
                sch.innerHTML = '<img style="width:25px; height:25px;" src=' + e.logos + '><b>' + n + '</b>';
                sch.onclick = function(e) {
                    $('#inputTeam').val(this.innerHTML.split("<b>")[1].split("</b>")[0]);
                    $('.div-filter').css({display: 'none'});
                    filterTeam = $('#inputTeam').val();
                }
                document.querySelector('.filter-list').appendChild(sch);
            });
            $('.div-filter').css({display: 'block'});
        } else {
            filterTeam = "";
            $('.div-filter').css({display: 'none'});
        }
    } else {
        filterTeam = "";
        $('.div-filter').css({display: 'none'});
    }
}

function detailSearch() {
    var txt1 = $('#inputHeight1').val();
    var txt2 = $('#inputHeight2').val();
    var height = "";

    if(txt1.length != 0) {
        if(txt2.length != 0) {
            height = txt1 + "," + txt2;
        } else {
            height = txt1 + ",230";
        }
    } else {
        if(txt2.length != 0) {
            if(txt1.length != 0) {
                height = txt1 + "," + txt2;
            } else {
                height = "150," + txt2;
            }
        }
    }
    var sel = $('#pos-select option:selected').text();
    if(sel.length != 0) {
        if(filterTeam != "") {
            $('#inputPlayer').val(filterTeam);
            searchPlayers("t:" + filterTeam + "|pos:" + sel + "|h:" + height);
        } else {
            $('#inputPlayer').val(".");
            searchPlayers("pos:" + sel + "|h:" + height);
        }
    }
}
 
function resetHeight() {
    $('#inputHeight1').val('150');
    $('#inputHeight2').val('230');
}

function replacePosition() {
    if($('.change-pos').css('display') != 'block') {
        $('.change-pos').css({display: 'block'});
        loadPosData();
    }
    $('.player-info').css({display: 'none'});
}

function cancelChange() {
    $('.change-pos').css({display: 'none'});
}

function loadPosData() {
    if(posSel != '-1') {
        document.querySelector('#change-select').innerHTML = '';
        document.querySelectorAll('.position').forEach(function(e) {
            if($('#' + e.id).attr('cdx') != '-1' && posSel != e.id) {
                var opt = document.createElement("option");
                opt.setAttribute('value', e.id);
                if($('#' + e.id).attr('pdx') != '-1') {
                    opt.innerHTML = $('#' + e.id + ' > .pos-text').text() + ': ' + allData[Number($('#' + e.id).attr('pdx'))].name;
                } else {
                    opt.innerHTML = $('#' + e.id + ' > .pos-text').text() + ': ' + cardData[Number($('#' + e.id).attr('cdx'))].name;
                }
                document.querySelector('#change-select').appendChild(opt);
            }
        });   
    }
}

function changePosition() {
    var sel = $('#change-select option:selected').val();
    var tempHtml = '';
    var tempCdx = '';
    var tempPdx = '';
    var tempBack = '';
    var tempFace = '';
    tempHtml = document.querySelector('#' + sel).innerHTML;
    tempCdx = $('#' + sel).attr('cdx');
    tempPdx = $('#' + sel).attr('pdx');
    tempBack = $('#' + sel).css('background');
    tempFace = $('#' + sel + ' > .face-img > img').attr('src');

    var tname = allData[Number(tempPdx)].name;
    var name = allData[Number($('#' + posSel).attr('pdx'))].name;
    var tempPos = $('#' + sel + ' > .pos-text').text();
    var tempPos2 = $('#' + posSel + ' > .pos-text').text();

    document.querySelector('#' + sel).innerHTML = document.querySelector('#' + posSel).innerHTML;
    $('#' + sel + ' > .pos-text').text(tempPos);
    $('#' + sel).attr('cdx', $('#' + posSel).attr('cdx'));
    $('#' + sel).attr('pdx', $('#' + posSel).attr('pdx'));
    $('#' + sel).css('background', $('#' + posSel).css('background'));
    $('#' + sel + ' > .face-img > img').attr('src', $('#' + posSel + ' > .face-img > img').attr('src'));

    if(name.length > 6 && name.length <= 8) {
        $('#' + sel + ' > div.card-text').css({fontSize: Number(name.length + 1) + 'px'});
    } else if(name.length > 8 && name.length < 10) {
        $('#' + sel + ' > div.card-text').css({fontSize: Number(name.length - 2) + 'px'});
    } else if(name.length == 10) {
        $('#' + sel + ' > div.card-text').css({fontSize: Number(name.length - 2.5) + 'px'});
    } else if(name.length >= 11) {
        $('#' + sel + ' > div.card-text').css({fontSize: Number(name.length - 5) + 'px'});
    } else {
        $('#' + sel + ' > div.card-text').css({fontSize: '10px'});
    }

    document.querySelector('#' + posSel).innerHTML = tempHtml;
    $('#' + posSel + ' > .pos-text').text(tempPos2);
    $('#' + posSel).attr('cdx', tempCdx);
    $('#' + posSel).attr('pdx', tempPdx);
    $('#' + posSel).css('background', tempBack);
    $('#' + posSel + ' > .face-img > img').attr('src', tempFace);

    if(tname.length > 6 && tname.length <= 8) {
        $('#' + posSel + ' > div.card-text').css({fontSize: Number(tname.length + 1) + 'px'});
    } else if(tname.length > 8 && tname.length < 10) {
        $('#' + posSel + ' > div.card-text').css({fontSize: Number(tname.length - 2) + 'px'});
    } else if(tname.length == 10) {
        $('#' + posSel + ' > div.card-text').css({fontSize: Number(tname.length - 2.5) + 'px'});
    } else if(tname.length >= 11) {
        $('#' + posSel + ' > div.card-text').css({fontSize: Number(tname.length - 5) + 'px'});
    } else {
        $('#' + posSel + ' > div.card-text').css({fontSize: '10px'});
    }

    $('.change-pos').css({display: 'none'});
}

function saveImage() {
    html2canvas($('.div-squad')[0], {allowTaint: true, useCORS: true, scale: 1, logging: true}).then(canvas => {
        var date = new Date();
        var now = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2)
         + "_" + ('0' + date.getHours()).slice(-2) + "-" + ('0' + date.getMinutes()).slice(-2) + "-" + ('0' + date.getSeconds()).slice(-2);
        saveImg(canvas.toDataURL('image/png'), 'SQUAD-' + now +'.png');
    });
}

const saveImg = (uri, filename) => {
    let link = document.createElement('a');

    document.body.appendChild(link);

    link.href = uri;
    link.download = filename;
    link.click();

    document.body.removeChild(link);

    if(saveCount >= 0) {
        saveCount++;
        sendSaveCount(saveCount);
    }
};

function saveData() {
    data.cards = [];
    document.querySelectorAll('.position').forEach(function(e) {
        if($('#' + e.id).attr('cdx') != '-1') {
            if(cardData[Number($('#' + e.id).attr('cdx'))].type == 'fc') {
                if(specialCard.indexOf(cardData[Number($('#' + e.id).attr('cdx'))].name) != -1 || $('#' + e.id + '> .face-img > img').attr("src").indexOf("indvel.github.io") != -1) {
                    data.cards.push({name: e.id, cardIdx: e.getAttribute("cdx"), playerIdx: e.getAttribute("pdx"), face: $('#' + e.id + '> .face-img > img').attr("src").split("players/")[1]});
                } else {
                    data.cards.push({name: e.id, cardIdx: e.getAttribute("cdx"), playerIdx: e.getAttribute("pdx"), face: $('#' + e.id + '> .face-img > img').attr("src").split("image-cdn/")[1]});
                }
            } else {
                data.cards.push({name: e.id, cardIdx: e.getAttribute("cdx"), playerIdx: e.getAttribute("pdx"), face: $('#' + e.id + '> .face-img > img').attr("src").split("players/")[1]});
            }
        }
    });

    const blob = new Blob([JSON.stringify(data)], {type:'application/json'});
    const url = window.URL.createObjectURL(blob);
    var date = new Date();
    var now = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2)
         + "_" + ('0' + date.getHours()).slice(-2) + "-" + ('0' + date.getMinutes()).slice(-2) + "-" + ('0' + date.getSeconds()).slice(-2);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = "SQUAD-" + now;
    document.body.appendChild(a);
    
    a.click();

    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 100);
}

function applyData() {
    selected = data.form;
    clearData();
    changeFormation();
    document.querySelector('#form-select').value = selected;
    data.cards.forEach(function(e) {
        var cdx = e.cardIdx;
        if(cdx != '-1') {
            $('#' + e.name).css({
                background: 'url(' + cardData[Number(cdx)].image + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                border: 'none'
            });
            $('#' + e.name).attr('cdx', e.cardIdx);
            $('#' + e.name + ' > div.card-text').css({color: cardData[Number(cdx)].color});
            if(cardData[Number(cdx)].type == "fc") {
                $('#' + e.name + ' > div.card-text').css({marginTop: '40px'});
            } else if(cardData[Number(cdx)].type == "fm"){
                $('#' + e.name + ' > div.card-text').css({marginTop: ''});
            }
        }

        var pdx = e.playerIdx;
        if(pdx != '-1') {
            var name = allData[Number(pdx)].name;
            if(name.length > 6 && name.length <= 8) {
                $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length + 1) + 'px'});
            } else if(name.length > 8 && name.length < 10) {
                $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length - 1) + 'px'});
            } else if(name.length == 10) {
                $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length - 2.5) + 'px'});
            } else if(name.length >= 11) {
                $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length - 5) + 'px'});
            } else {
                $('#' + e.name + ' > div.card-text').css({fontSize: '10px'});
            }
            $('#' + e.name + ' > div.card-text').text(allData[Number(pdx)].name);
            $('#' + e.name).attr("pdx", e.playerIdx);
        }
        if(e.hasOwnProperty('face')) {
            if(e.face.indexOf('/normal') != -1) {
                $('#' + e.name + ' > .face-img > img').attr('src', 'https://renderz.app/image-cdn/' + e.face);
            } else {
                $('#' + e.name + ' > .face-img > img').attr('src', './resources/players/' + e.face);
            }
        } else {
            $('#' + e.name + ' > .face-img > img').attr('src', 'resources/img_transparent.png');
        }
    });
    setTeamColors();    
}

function setTeamColors() {
    var teamColor = [];
    var nationColor = {};
    var teamInfos = {players: [], avgAge: '0', avgHeight: '0'};
    teamColor = getTeamColors();
    nationColor = getNationalColors();
    $('.team-color').css({display: 'flex'});
    if(teamColor != undefined) {
        if(teamColor.players.length == 1) {
            $('#logo1').css({display: 'flex', cursor: 'pointer'});
            $('#logo1 > #team-img').attr('src', getLogoByName(teamColor.players[0].name));
            teamInfos.players.push(teamColor.players[0].name + ": " + teamColor.players[0].count + "명");
            $('#logo2').css({display: 'none'});
        } else if(teamColor.players.length == 2) {
            $('#logo1').css({display: 'flex', cursor: 'pointer'});
            $('#logo1 > #team-img').attr('src', getLogoByName(teamColor.players[0].name));
            $('#logo2').css({display: 'flex', cursor: 'pointer'});
            $('#logo2 > #team-img').attr('src', getLogoByName(teamColor.players[1].name));
            teamInfos.players.push(teamColor.players[0].name + ": " + teamColor.players[0].count + "명");
            teamInfos.players.push(teamColor.players[1].name + ": " + teamColor.players[1].count + "명");
        } else {
            $('#logo1').css({display: 'none'});
            $('#logo2').css({display: 'none'});
        }
        if(teamColor.avgAge != null) {
            teamInfos.avgAge = teamColor.avgAge;
        }
        if(teamColor.avgHeight != null) {
            teamInfos.avgHeight = teamColor.avgHeight;
        }
    }
    if(nationColor != undefined) {
        var cdx = countryData.findIndex(e => e.name == nationColor.name);
        if(cdx != -1) {
            $('#logo3').css({display: 'flex'});
            $('.flag-img > #team-img').attr('src', countryData[cdx].logos);
            $('.flag-img > #team-img').attr('title', nationColor.name + ": " + nationColor.count + "명");
            if(teamColor == undefined) {
                $('#logo1').css({display: 'none'});
                $('#logo2').css({display: 'none'});
            }
        }
    } else {
        $('#logo3').css({display: 'none'});
    }
    if(teamColor == undefined && nationColor == undefined) {
        $('.team-color').css({display: 'none'});
    } else {
        document.querySelectorAll('.color-logo').forEach(function(e) {
            e.onclick = function(evt) {
                teamColorInfo(teamInfos);
            }
        });
    }
}

function teamColorInfo(d) {
    var ul = document.querySelector('.info-list');
    ul.innerHTML = "";
    var title = document.createElement("li");
    title.innerHTML = "<b>팀 컬러 정보</b>";
    ul.appendChild(title);
    d.players.forEach((e) => {
        var li = document.createElement("li");
        li.innerHTML = "<span class='color-list'>" + e + "</span>";
        ul.appendChild(li);
    });
    var avg1 = document.createElement("li");
    avg1.innerHTML = "평균 나이: <b>" + d.avgAge + "세</b>";
    ul.appendChild(avg1);
    var avg2 = document.createElement("li");
    avg2.innerHTML = "평균 신장: <b>" + d.avgHeight + "cm</b>";
    ul.appendChild(avg2);
    $('#replace-button').css({display: 'none'});
    $('.player-info').css({display: 'block', left: '10px', top: '120px'});
}

function getLogoByName(str) {
    var idx2 = -1;
    for(var j = 0; j < ClubsData.length; j++) {
        if(ClubsData[j].name.includes("|")) {
            var arr = ClubsData[j].name.split("|");
            arr.forEach(function(n) {
                if(n.indexOf(str) != -1) {
                    idx2 = j;
                    return;
                }
            });
        } else {
            if(ClubsData[j].name.indexOf(str) != -1) {
                idx2 = j;
                break;
            }
        }
    }
    if(idx2 != -1) return ClubsData[idx2].logos;
}

function removeData() {
    if(posSel != "-1") {
        if(multiSel) {
            selDatas.forEach(function(e) {
                $('#' + e).css({background: '', border: '1px solid red'});
                $('#' + e + ' > div.card-text').text('');
                $('#' + e).attr("cdx", "-1");
                $('#' + e).attr("pdx", "-1");
                $('#' + e + ' > .face-img > img').attr('src', 'resources/img_transparent.png');
            });
        } else {
            $('#' + posSel).css({background: '', border: '1px solid red'});
            $('#' + posSel + ' > div.card-text').text('');
            $('#' + posSel).attr("cdx", "-1");
            $('#' + posSel).attr("pdx", "-1");
            $('#' + posSel + ' > .face-img > img').attr('src', 'resources/img_transparent.png');
        }
    }
}

function removeFace() {
    if(posSel != "-1") {
        if(multiSel) {
            selDatas.forEach(function(e) {
                $('#' + e).attr("pdx", "-1");
                $('#' + e + ' > .face-img > img').attr('src', 'resources/img_transparent.png');
            });
        } else {
            $('#' + posSel).attr("pdx", "-1");
            $('#' + posSel + ' > .face-img > img').attr('src', 'resources/img_transparent.png');
        }
    }
}

function clearData() {
    document.querySelectorAll('.position').forEach(function(e) {
        $('#' + e.id).css({background: '', border: '1px solid red'});
        $('#' + e.id + ' > div.card-text').text('');
        $('#' + e.id).attr("cdx", "-1");
        $('#' + e.id).attr("pdx", "-1");
        $('#' + e.id + ' > .face-img > img').attr('src', 'resources/img_transparent.png');
    });
}

function getTeamColors() {
    var teams = [];
    var counts = {};
    var availCount = 0;
    var sum = {age: 0, height: 0};
    var avg = {age: 0, height: 0};
    document.querySelectorAll('.position').forEach(function(e) {
        if($('#' + e.id).attr("pdx") != "-1" && $('#' + e.id).attr("cdx") != "-1") {
            var pdx = Number($('#' + e.id).attr("pdx"));
            availCount++;
            var age = calcAge(allData[pdx].birth);
            if(age != null) {
                sum.age += age;
            }
            sum.height += Number(allData[pdx].height.replace("cm", ""));
            var filter = allData[pdx].career.filter((c, i) => {
                return allData[pdx].career.indexOf(c) === i;
            });
            teams.push(...filter);
        }
    });
    if(sum.age > 0) {
        avg.age = sum.age / availCount;
    }
    if(sum.height > 0) {
        avg.height = sum.height / availCount;
    }
    if(teams.length != 0) {
        teams.forEach((x) => { 
            counts[x] = (counts[x] || 0) + 1;
        });
    }
    var idx = [];
    var keys = Object.keys(counts);
    if(counts != null) {     
        keys.forEach((e, i) => {
            if(counts[e] >= 4) {
                idx.push(i);
            }
        });
    }
    if(idx.length > 0) {
        var result = {players: [], avgAge: '', avgHeight: ''};
        idx.forEach((e) => {
            result.players.push({name: keys[e], count: counts[keys[e]]});
        });
        result.avgAge = avg.age.toFixed(1);
        result.avgHeight = Math.floor(avg.height);
        return result;
    }
}

function getNationalColors() {
    var teams = [];
    var counts = {};
    document.querySelectorAll('.position').forEach(function(e) {
        if($('#' + e.id).attr("pdx") != "-1" && $('#' + e.id).attr("cdx") != "-1") {
            var pdx = Number($('#' + e.id).attr("pdx"));
            teams.push(allData[pdx].country);
        }
    });
    if(teams.length != 0) {
        teams.forEach((x) => { 
            counts[x] = (counts[x] || 0) + 1;
        });
    }
    var idx = [];
    var keys = Object.keys(counts);
    if(counts != null) {     
        keys.forEach((e, i) => {
            if(counts[e] >= 4) {
                idx.push(i);
            }
        });
    }
    if(idx.length > 0) {
        if(idx.length > 1) {
            var max = 0;
            idx.forEach((e, i) => {
                if(counts[keys[e]] > counts[keys[max]]) {
                    max = i;
                }
            });
            return {name: keys[max], count: counts[keys[max]]};
        } else {
            return {name: keys[idx[0]], count: counts[keys[idx[0]]]};
        }
    }
}

function readFile (file) {
	var url = window.URL.createObjectURL (file);
	var reader = new FileReader ();
	reader.onload = function (e) {
		var filetext = reader.result;
		data = JSON.parse(filetext);
        applyData();
	}
	reader.readAsText (file);
}

function openDialogCommand (fileTypes) {
	var theDialog = $("<input type=\"file\" accept=\"" + fileTypes + "\" style=\"display: none;\">");
	$(theDialog).change (function (event) {
		if (this.files.length > 0) {
			readFile (this.files [0]);
			}
		});
	$("body").append (theDialog);
	$(theDialog).trigger ("click"); 
}

function loadData() {
	openDialogCommand (".json");
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