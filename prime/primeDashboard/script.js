var session = null;
var user = null;
var clanData = null;
var keys = null;

$(document).ready(function() {
    session = checkSessionAvailable();
    if(session == null) {
        alert("로그인 후 이용해주세요.");
        //history.back();
    } else {
        user = JSON.parse(sessionStorage.getItem(session));
        $('.userInfo').text(user.displayName);
    }
    getMemberData();
});

function getMemberData() {
        getClanData($('.clanSelect option:selected').attr('value')).then((data) => {
        if(data != undefined) {
            document.querySelector(".data-table").innerHTML = "<tr><th scope='col' width='150px'>이름</th><th scope='col' width='80px'>소속</th><th scope='col' width='60px'>나이</th><th scope='col' width='120px'>최고 점수</th><th scope='col' width='100px'>대화방 참여</th><th scope='col' width='80px'>경고</th></tr>";
            clanData = data;
            keys = Object.keys(data);
            keys.forEach((e, i) => {
                var tr = document.createElement("tr");
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
                // tr.onclick = function(e) {
                //   location.href = 'view.html?' + this.getAttribute("data-id");
                // }
                document.querySelector(".data-table").appendChild(tr);
        });
        }
    })
}

function convertClan(clan) {
    switch(clan) {
        case "rank":
            return "랭커 1기";
        case "rank2":
            return "랭커 2기";
        case "v1":
            return "진보권 1기";
        case "v2":
            return "진보권 2기";
        case "v3":
            return "진보권 3기";
        case "v4":
            return "진보권 4기";
        case "v5":
            return "진보권 5기";
        case "rest":
            return "휴식 클랜";
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}