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
    $('#inputDate').datepicker({
        dateFormat: "yy-mm-dd",
        selectOtherMonths: true,
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
    $('#inputAddDate').datepicker({
        dateFormat: "yy-mm-dd",
        selectOtherMonths: true,
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
});

function getMemberData(value) {
        getClanData().then((data) => {
        if(data != undefined) {
            var totalAge = 0;
            document.querySelector(".data-table").innerHTML = "<tr><th scope='col' width='150px'>이름</th><th scope='col' width='70px'>소속</th><th scope='col' width='60px'>나이</th><th scope='col' width='100px'>최고 점수</th><th scope='col' width='40px'>대화방 참여</th><th scope='col' width='40px'>경고</th><th scope='col' width='80px'>가입일</th></tr>";
            clanData = data;
            keys = Object.keys(data);
            keys.forEach((e, i) => {
                if(value != "all") {
                    if(data[e].clan == value) {
                        var tr = document.createElement("tr");
                        tr.setAttribute("name", e);
                        var tdName = document.createElement("td");
                        if(data[e].role != undefined || data[e].role != "normal") {
                            if(data[e].role == "master") {
                                tdName.innerHTML = "<div class='crown'><img src='../resources/crown_blue.png'></div>" + e;
                            } else if(data[e].role == "manager") {
                                tdName.innerHTML = "<div class='crown'><img src='../resources/crown_pink.png'></div>" + e;
                            } else {
                                tdName.innerHTML = e;
                            }
                        } else { 
                            tdName.innerHTML = e; 
                        }
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
                        var tdDate = document.createElement("td");
                        if(data[e].regDate != undefined) {
                            tdDate.innerHTML = data[e].regDate;
                        } else {
                            tdDate.innerHTML = ""
                        }
                        tr.appendChild(tdDate);

                        tr.onclick = function(e) {
                        sel = this.getAttribute("name");
                            showEditPopup();
                        }
                        document.querySelector(".data-table").appendChild(tr);
                        totalAge += Number(data[e].age);
                    }
                } else {
                    var tr = document.createElement("tr");
                    tr.setAttribute("name", e);
                    var tdName = document.createElement("td");
                    if(data[e].role != undefined || data[e].role != "normal") {
                        if(data[e].role == "master") {
                            tdName.innerHTML = "<div class='crown'><img src='../resources/crown_blue.png'></div>" + e;
                        } else if(data[e].role == "manager") {
                            tdName.innerHTML = "<div class='crown'><img src='../resources/crown_pink.png'></div>" + e;
                        } else {
                            tdName.innerHTML = e;
                        }
                    } else { 
                        tdName.innerHTML = e; 
                    }
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
                    var tdDate = document.createElement("td");
                    if(data[e].regDate != undefined) {
                        tdDate.innerHTML = data[e].regDate;
                    } else {
                        tdDate.innerHTML = ""
                    }
                    tr.appendChild(tdDate);

                    tr.onclick = function(e) {
                    sel = this.getAttribute("name");
                    showEditPopup();
                    }
                    document.querySelector(".data-table").appendChild(tr);
                    totalAge += Number(data[e].age);
                }
            });
            $('.count').text("총 " + ($('.data-table tr').length - 1) + "명");
            $('.avg').text("평균 나이: " + (totalAge / ($('.data-table tr').length - 1)).toFixed(1) + "세");
        }
    })
}

function showEditPopup() {
    if(user.displayName.indexOf("클랜원") != -1) {
        alert("데이터 수정/추가는 운영진만 가능합니다.");
        return;
    } else {
        $('#inputName').val(sel);
        $('#inputAge').val(clanData[sel].age);
        $('#inputFans').val(clanData[sel].maxFans);
        $('#inputStacks').val(clanData[sel].stacks);
        $('.dataClanSelect option[value=' + clanData[sel].clan + ']').prop('selected', true);
        $('.dataTalkSelect option[value=' + clanData[sel].participateTalk + ']').prop('selected', true);
        $('#data-edit-popup').css({display: 'block'});
        if(clanData[sel].role != undefined) {
            $('.dataRoleSelect option[value=' + clanData[sel].role + ']').prop('selected', true);
        } else if(clanData[sel].role == undefined || clanData[sel].role == "normal") {
            $('.dataRoleSelect option[value="normal"]').prop('selected', true);
        }
    adjustPopupPosition();
    }
}

function closePopup() {
    $('#data-edit-popup').css({display: 'none'});
    $('#data-add-popup').css({display: 'none'});
}

function showAddPopup() {
    if(user.displayName.indexOf("클랜원") != -1) {
        alert("데이터 수정/추가는 운영진만 가능합니다.");
        return;
    } else {
        $('#data-add-popup').css({display: 'block'});
    }
}

function adjustPopupPosition() {
    const popup = document.querySelector('#data-edit-popup');
    const pHeight = popup.offsetHeight;
    const wHeight = window.innerHeight;

    const scrollTop = window.scrollY;
    const top = scrollTop + (wHeight - pHeight) / 2;

    $('#data-edit-popup').css({top: top + 'px'});
}

function saveData() {
    if(sel != $('#inputName').val()) {
        deleteClanData(sel).then(() => {
            addClanData($('#inputName').val(), {clan: $('.dataClanSelect option:selected').attr("value"), age: $('#inputAge').val(), maxFans: $('#inputFans').val(), participateTalk: $('.dataTalkSelect option:selected').attr("value") == "true" ? true : false, stacks: $('#inputStacks').val(), role: $('.dataRoleSelect option:selected').attr("value"), regDate: $('#inputDate').val()})
            .then(() => {
                alert($('#inputName').val() + "의 정보가 업데이트 되었습니다.");
                closePopup();
                getMemberData($('.clanSelect option:selected').attr('value'));
            })
        })
    } else {
        updateClanData(sel, 
        {clan: $('.dataClanSelect option:selected').attr("value"), age: $('#inputAge').val(), maxFans: $('#inputFans').val(), participateTalk: $('.dataTalkSelect option:selected').attr("value") == "true" ? true : false, stacks: $('#inputStacks').val(), role: $('.dataRoleSelect option:selected').attr("value"), regDate: $('#inputDate').val()})
        .then(() => {
            alert(sel + "의 정보가 업데이트 되었습니다.");
            closePopup();
            getMemberData($('.clanSelect option:selected').attr('value'));
        });
    }
}

function addData() {
    addClanData($('#inputAddName').val(),
        {clan: $('.dataAddClanSelect option:selected').attr("value"), age: $('#inputAddAge').val(), maxFans: $('#inputAddFans').val(), participateTalk: $('.dataAddTalkSelect option:selected').attr("value") == "true" ? true : false, stacks: $('#inputAddStacks').val(), role: 'normal', regDate: $('#inputAddDate').val()}
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