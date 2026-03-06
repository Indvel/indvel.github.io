var session = null;
var user = null;
var clanData = null;
var keys = null;
var sel = null;

$(document).ready(function() {
    session = checkSessionAvailable();
    if(session == null) {
        alert("로그인 후 이용해주세요.");
        history.back();
    } else {
        user = JSON.parse(sessionStorage.getItem(session));
        $('.userInfo').text(user.displayName);
    }
    getMemberData($('.clanSelect option:selected').attr('value'));
});

function getMemberData(value) {
        getClanData().then((data) => {
        if(data != undefined) {
            document.querySelector(".data-table").innerHTML = "<tr><th scope='col' width='150px'>이름</th><th scope='col' width='80px'>소속</th><th scope='col' width='60px'>나이</th><th scope='col' width='120px'>최고 점수</th><th scope='col' width='100px'>대화방 참여</th><th scope='col' width='80px'>경고</th></tr>";
            clanData = data;
            keys = Object.keys(data);
            keys.forEach((e, i) => {
                if(value != "all") {
                    if(data[e].clan == value) {
                        var tr = document.createElement("tr");
                        tr.setAttribute("name", e);
                        var tdName = document.createElement("td");
                        tdName.innerHTML = e;
                        tr.appendChild(tdName);
                        var tdClan = document.createElement("td");
                        tdClan.innerHTML = convertClan(data[e].clan);
                        tr.appendChild(tdClan);
                        var tdAge = document.createElement("td");
                        tdAge.innerHTML = data[e].age;
                        tr.appendChild(tdAge);
                        var tdFans = document.createElement("td");
                        tdFans.innerHTML = numberWithCommas(data[e].maxFans);
                        tr.appendChild(tdFans);
                        var tdTalk = document.createElement("td");
                        tdTalk.innerHTML = data[e].participateTalk == true ? "참여" : "미참여";
                        tr.appendChild(tdTalk);
                        var tdStacks = document.createElement("td");
                        tdStacks.innerHTML = data[e].stacks;
                        tr.appendChild(tdStacks);
                        tr.onclick = function(e) {
                        sel = this.getAttribute("name");
                        showEditPopup();
                        }
                        document.querySelector(".data-table").appendChild(tr);
                    }
                } else {
                    var tr = document.createElement("tr");
                    tr.setAttribute("name", e);
                    var tdName = document.createElement("td");
                    tdName.innerHTML = e;
                    tr.appendChild(tdName);
                    var tdClan = document.createElement("td");
                    tdClan.innerHTML = convertClan(data[e].clan);
                    tr.appendChild(tdClan);
                    var tdAge = document.createElement("td");
                    tdAge.innerHTML = data[e].age;
                    tr.appendChild(tdAge);
                    var tdFans = document.createElement("td");
                    tdFans.innerHTML = numberWithCommas(data[e].maxFans);
                    tr.appendChild(tdFans);
                    var tdTalk = document.createElement("td");
                    tdTalk.innerHTML = data[e].participateTalk == true ? "참여" : "미참여";
                    tr.appendChild(tdTalk);
                    var tdStacks = document.createElement("td");
                    tdStacks.innerHTML = data[e].stacks;
                    tr.appendChild(tdStacks);
                    tr.onclick = function(e) {
                    sel = this.getAttribute("name");
                    showEditPopup();
                    }
                    document.querySelector(".data-table").appendChild(tr);
                }
            });
        }
    })
}

function showEditPopup() {
    $('#inputName').val(sel);
    $('#inputAge').val(clanData[sel].age);
    $('#inputFans').val(clanData[sel].maxFans);
    $('#inputStacks').val(clanData[sel].stacks);
    $('.dataClanSelect option[value=' + clanData[sel].clan + ']').prop('selected', true);
    $('.dataTalkSelect option[value=' + clanData[sel].participateTalk + ']').prop('selected', true);
    $('#data-edit-popup').css({display: 'block'});
}

function closePopup() {
    $('#data-edit-popup').css({display: 'none'});
    $('#data-add-popup').css({display: 'none'});
}

function showAddPopup() {
    $('#data-add-popup').css({display: 'block'});
}

function saveData() {
    if(sel != $('#inputName').val()) {
        deleteClanData(sel).then(() => {
            addClanData($('#inputName').val(), {clan: $('.dataClanSelect option:selected').attr("value"), age: $('#inputAge').val(), maxFans: $('#inputFans').val(), participateTalk: $('.dataTalkSelect option:selected').attr("value") == "true" ? true : false, stacks: $('#inputStacks').val()})
            .then(() => {
                alert($('#inputName').val() + "의 정보가 업데이트 되었습니다.");
                closePopup();
                getMemberData($('.clanSelect option:selected').attr('value'));
            })
        })
    } else {
        updateClanData(sel, 
        {clan: $('.dataClanSelect option:selected').attr("value"), age: $('#inputAge').val(), maxFans: $('#inputFans').val(), participateTalk: $('.dataTalkSelect option:selected').attr("value") == "true" ? true : false, stacks: $('#inputStacks').val()})
        .then(() => {
            alert(sel + "의 정보가 업데이트 되었습니다.");
            closePopup();
            getMemberData($('.clanSelect option:selected').attr('value'));
        });
    }
}

function addData() {
    addClanData($('#inputAddName').val(),
        {clan: $('.dataAddClanSelect option:selected').attr("value"), age: $('#inputAddAge').val(), maxFans: $('#inputAddFans').val(), participateTalk: $('.dataAddTalkSelect option:selected').attr("value") == "true" ? true : false, stacks: $('#inputAddStacks').val()}
    ).then(() => {
        alert("데이터가 추가되었습니다.");
        closePopup();
        getMemberData($('.clanSelect option:selected').attr('value'));
    })
}

function deleteData() {
    if(confirm("정말 삭제하시겠습니까?")) {
        deleteClanData(sel)
        .then(() => {
            alert(sel + "의 정보가 삭제되었습니다.");
            sel = null;
            closePopup();
            getMemberData($('.clanSelect option:selected').attr('value'));
        });
    }
}

function changeClanSelect() {
    getMemberData($('.clanSelect option:selected').attr('value'));
}

function convertClan(clan) {
    switch(clan) {
        case "rank":
            return "랭커 1기";
        case "rank2":
            return "랭커 2기";
        case "primev1":
            return "진보권 1기";
        case "primev2":
            return "진보권 2기";
        case "primev3":
            return "진보권 3기";
        case "primev4":
            return "진보권 4기";
        case "primev5":
            return "진보권 5기";
        case "primerest":
            return "휴식 클랜";
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}