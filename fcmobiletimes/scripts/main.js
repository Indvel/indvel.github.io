const datas = [
    {name: "프라임 아이콘", otherNames: ["프아"], image: "./resources/cards/PrimeIcon.png", eo: 1, min: 35, sec: 0},
    {name: "Remember 2002", otherNames: ["2002", "리멤버2002"], image: "./resources/cards/Remember02.png", eo: 1, min: 21, sec: 30},
    {name: "탑 더비 아이콘", otherNames: ["탑더비"], image: "./resources/cards/TopDirby.png", eo: 1, min: 35, sec: 0},
    {name: "Korean Heroes 12", otherNames: ["KH12", "KH"], image: "./resources/cards/KH12.png", eo: 0, min: 5, sec: 0},
    {name: "Fantastic Duo 21", otherNames: ["판타스틱 듀오", "판듀21", "판듀"], image: "./resources/cards/FantasticDuo21.png", eo: 1, min: 36, sec: 0},
    {name: "WT21 아이콘", otherNames: ["월드투어", "WT"], image: "./resources/cards/WT21.png", eo: 1, min: 35, sec: 0},
    {name: "첼시 엠버서더 아이콘", otherNames: ["첼앰", "첼엠", "CMA"], image: "./resources/cards/ChelseaAmb.png", eo: 1, min: 36, sec: 0},
    {name: "Top Of Europe 21 아이콘", otherNames: ["TOE", "TOE21"], image: "./resources/cards/TOE21_Icons.png", eo: 1, min: 34, sec: 0},
    {name: "내셔널 아이콘", otherNames: ["내셔널", "NI"], image: "./resources/cards/NationalIcon.png", eo: 1, min: 37, sec: 30},
    {name: "풋마스21 아이콘", otherNames: ["풋마스", "FUTMAS"], image: "./resources/cards/Futmas21.png", eo: 1, min: 38, sec: 0},
    {name: "UCL22 Best", otherNames: ["22챔베", "챔베22", "챔베", "챔스"], image: "./resources/cards/UCL22_Best.png", eo: 1, min: 33, sec: 0},
    {name: "TOTS22", otherNames: ["토츠22", "22토츠", "토츠"], image: "./resources/cards/TOTS22.png", eo: 1, min: 33, sec: 30},
    {name: "UTOTS22", otherNames: ["얼토츠22", "22얼토츠", "얼토츠", "토츠"], image: "./resources/cards/TOTS22_UT.png", eo: 1, min: 35, sec: 50},
    {name: "TOTY22 Nominee", otherNames: ["22토티", "토티22", "노미니", "토티"], image: "./resources/cards/TOTY22_Nominee.jpg", eo: 1, min: 24, sec: 0},
    {name: "TOTY22 HM", otherNames: ["22파토", "파토22", "HM", "토티", "아너블멘션"], image: "./resources/cards/TOTY22_HM.jpg", eo: 1, min: 30, sec: 0},
    {name: "NYI Icon", otherNames: ["22토티", "토티22", "토티"], image: "./resources/cards/NYI_Icon.jpg", eo: 1, min: 20, sec: 0},
    {name: "TOTY22 Final", otherNames: ["22파토", "파토22", "파토", "토티", "파이널"], image: "./resources/cards/TOTY22_Final.png", eo: 1, min: 25, sec: 0},
    {name: "Hero22", otherNames: ["히어로22", "22히어로", "히어로"], image: "./resources/cards/Hero22.png", eo: 0, min: 0, sec: 0},
    {name: "FlashBack22", otherNames: ["플래시백", "플백"], image: "./resources/cards/FlashBack22.png", eo: 1, min: 31, sec: 0},
    {name: "NOS22", otherNames: ["노스22", "22노스", "노스"], image: "./resources/cards/NOS22.png", eo: 1, min: 32, sec: 40},
    {name: "ISS22", otherNames: ["ISS"], image: "./resources/cards/IconSuperStar_2.png", eo: 1, min: 20, sec: 35},
    {name: "레트로 썸머 22", otherNames: ["RS", "썸머"], image: "./resources/cards/RS22.png", eo: 1, min: 36, sec: 0},
    {name: "레트로 썸머 22 아이콘", otherNames: ["RS", "썸머"], image: "./resources/cards/RS22_Icon.png", eo: 1, min: 20, sec: 40},
    {name: "LN22 아이콘", otherNames: ["LN22", "LN", "레전더리 넘버"], image: "./resources/cards/LegendaryNumbers22.png", eo: 1, min: 21, sec: 0},
    {name: "LN22 히어로", otherNames: ["LN22", "LN", "레전더리 넘버"], image: "./resources/cards/LegendaryNumbers22.png", eo: 0, min: 0, sec: 0},
    {name: "레알 엠버서더", otherNames: ["레엠", "RMA"], image: "./resources/cards/RMA22.png", eo: 1, min: 37, sec: 0},
    {name: "레알 엠버서더 아이콘", otherNames: ["레엠", "RMA"], image: "./resources/cards/RMA22_Icons.png", eo: 1, min: 22, sec: 0},
    {name: "TT22", otherNames: ["TT22", "22TT", "TT"], image: "./resources/cards/TopTransfers22.png", eo: 1, min: 37, sec: 0},
    {name: "TT22 아이콘", otherNames: ["TT22", "22TT", "TT"], image: "./resources/cards/TT22_Icon.jpg", eo: 0, min: 20, sec: 0},
    {name: "월드컵22 베이스(11.17출시)", otherNames: ["월드컵", "월베", "베이스"], image: "./resources/cards/WorldCup22_Base.jpg", eo: 0, min: 0, sec: 20},
    {name: "월드컵22 스타", otherNames: ["월드컵", "월스", "월컵"], image: "./resources/cards/WorldCup22_Star.png", eo: 0, min: 13, sec: 30},
    {name: "월드컵22 베스트", otherNames: ["월드컵", "월베", "월컵"], image: "./resources/cards/WorldCup22_Best.png", eo: 0, min: 13, sec: 15},
    {name: "월드컵22 헤드라인", otherNames: ["월드컵", "월헤", "중국방석", "헤드라인", "월컵"], image: "./resources/cards/WorldCup22_Headlines.png", eo: 0, min: 12, sec: 14},
    {name: "월드컵 아이콘", otherNames: ["월드컵", "월콘", "월드콘", "월컵"], image: "./resources/cards/WCIcon.png", eo: 1, min: 6, sec: 0},
    {name: "IF23", otherNames: ["IF23", "이프23", "이프"], image: "./resources/cards/IF23.png", eo: 1, min: 21, sec: 0},
    {name: "ISS23", otherNames: ["ISS"], image: "./resources/cards/IconSuperStar_2.png", eo: 1, min: 6, sec: 0},
    {name: "Fearless23", otherNames: ["피어리스", "FL"], image: "./resources/cards/Fearless23.png", eo: 0, min: 32, sec: 15},
    {name: "Fearless23 아이콘", otherNames: ["피어리스", "FL", "아이콘"], image: "./resources/cards/Fearless23_Icons.jpg", eo: 1, min: 7, sec: 30},
    {name: "TOTS23", otherNames: ["토츠23", "23토츠", "토츠"], image: "./resources/cards/TOTS23_Moment.png", eo: 0, min: 33, sec: 30},
    {name: "UTOTS23", otherNames: ["얼토츠23", "23얼토츠", "얼토츠", "토츠"], image: "./resources/cards/UTOTS23.png", eo: 0, min: 37, sec: 5},
    {name: "UCL23", otherNames: ["챔스23", "23챔스", "챔스"], image: "./resources/cards/UCL23_TOP25.png", eo: 0, min: 27, sec: 0},
    {name: "UCL23 Best", otherNames: ["23챔베", "챔베22", "챔베", "챔스"], image: "./resources/cards/UCL23_Best.png", eo: 0, min: 37, sec: 5},
    {name: "TOTY23 Nominee", otherNames: ["토티23", "23토티", "노미니", "토티"], image: "./resources/cards/TOTY23_Low.png", eo: 0, min: 23, sec: 20},
    {name: "TOTY23 Final", otherNames: ["23파토", "파토23", "파토", "파이널", "토티"], image: "./resources/cards/TOTY23_Final.png", eo: 0, min: 25, sec: 0},
    {name: "Hero23", otherNames: ["히어로23", "23히어로", "히어로"], image: "./resources/cards/HERO23_A.png", eo: 0, min: 0, sec: 0},
    {name: "TKL23", otherNames: ["K리그", "티케이엘", "케이리그"], image: "./resources/cards/TKL23.jpg", eo: 0, min: 37, sec: 30},
    {name: "HOL23", otherNames: ["홀23", "HOL23"], image: "./resources/cards/HOL23_High.png", eo: 0, min: 38, sec: 40},
    {name: "HOL23 아이콘", otherNames: ["홀23", "HOL23"], image: "./resources/cards/HOL23_Icon.png", eo: 1, min: 7, sec: 0},
    {name: "HOL23 아이콘(H)", otherNames: ["홀23", "HOL23"], image: "./resources/cards/HOL23_Icon.png", eo: 0, min: 0, sec: 0},
    {name: "Founders24", otherNames: ["파운더스24", "파운더스", "1차"], image: "./resources/cards/Founders24.png", eo: 0, min: 39, sec: 25},
    {name: "Founders24 아이콘", otherNames: ["파운더스24", "파운더스", "1차", "아이콘"], image: "./resources/cards/Founders24_icon.png", eo: 1, min: 8, sec: 0},
    {name: "Founders24 아이콘(H)", otherNames: ["파운더스24", "파운더스", "1차", "아이콘"], image: "./resources/cards/Founders24_icon.png", eo: 0, min: 1, sec: 0},
    {name: "Founders24 2차 ", otherNames: ["파운더스24", "파운더스", "2차"], image: "./resources/cards/Founders24_2.avif", eo: 0, min: 41, sec: 45},
    {name: "Founders24 2차 아이콘", otherNames: ["파운더스24", "파운더스", "2차", "아이콘"], image: "./resources/cards/Founders24_2_Icon.avif", eo: 1, min: 8, sec: 40},
    {name: "Founders24 2차 아이콘(H)", otherNames: ["파운더스24", "파운더스", "2차", "아이콘"], image: "./resources/cards/Founders24_2_Icon.avif", eo: 0, min: 1, sec: 20},
    {name: "UCL24 베이스", otherNames: ["챔스24", "24챔스", "베이스", "챔스"], image: "./resources/cards/UCL24_Base.avif", eo: 0, min: 54, sec: 50},
    {name: "UCL24 스타", otherNames: ["챔스24", "24챔스", "스타", "챔스"], image: "./resources/cards/UCL24_Star.avif", eo: 1, min: 11, sec: 0},
    {name: "유벤투스24", otherNames: ["유벤24", "유벤투스", "유벤"], image: "./resources/cards/JuventusAmb.png", eo: 0, min: 14, sec: 25},
    {name: "유벤투스24 아이콘&히어로", otherNames: ["유벤24", "유벤투스", "유벤"], image: "./resources/cards/JuventusAmb_Icon.png", eo: 0, min: 23, sec: 30},
    {name: "트로피 아이콘", otherNames: ["트로피", "트아"], image: "./resources/cards/TrophyIcons.png", eo: 1, min: 9, sec: 0},
    {name: "트로피 아이콘(H)", otherNames: ["트로피", "트아"], image: "./resources/cards/TrophyIcons.png", eo: 0, min: 1, sec: 25},
    {name: "KFA23&18", otherNames: ["KFA23", "KFA18", "KFA"], image: "./resources/cards/KFA23&18.png", eo: 0, min: 54, sec: 0},
    {name: "Rivals", otherNames: ["라이벌스", "라이벌"], image: "./resources/cards/Rivals_Mixed.png", eo: 1, min: 14, sec: 50},
    {name: "Rivals Icon", otherNames: ["라이벌스", "라이벌", "아이콘"], image: "./resources/cards/Rivals24_Icon.png", eo: 1, min: 23, sec: 50},
    {name: "RuleBreakers24", otherNames: ["룰브레이커", "룰브"], image: "./resources/cards/RuleBreakers24.png", eo: 1, min: 34, sec: 50},
    {name: "RuleBreakers24 아이콘", otherNames: ["룰브레이커", "룰브"], image: "./resources/cards/RuleBreakers24_Icon.png", eo: 1, min: 24, sec: 0},
    {name: "삼국24", otherNames: ["삼국", "중국"], image: "./resources/cards/KO3L_Icon.png", eo: 0, min: 24, sec: 0}
];

const odd = [1, 7, 9, 11, 13, 15, 17, 19, 21, 23];
const even = [0, 2, 8, 10, 12, 14, 16, 18, 20, 22];


$(document).ready(function() {
    getList(datas);
});

var timer = null;

function getList(d) {
    clearInterval(timer);
    document.querySelector(".card-table").innerHTML = '<tr><th scope="col">카드</th><th scope="col">이름</th><th scope="col">갱신 시간</th><th scope="col">남은 시간</th</tr>';
    d.forEach(function(e, i) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", "list");
        tr.setAttribute("idx", i);
        tr.innerHTML = '<td><img src="' + e.image + '"/></td><td>' + e.name + "</td><td>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td>" + getUpdateRemain(e.eo, e.min, e.sec) + "</td>";
        document.querySelector(".card-table").appendChild(tr);
    });
    timer = setInterval(function() {
        if(document.querySelector(".card-table > tr:nth-child(2)") != null) {
            var tr = document.querySelectorAll(".card-table tr.list");
            d.forEach(function(e, i) {
                tr[i].innerHTML = '<td><img src="' + e.image + '"/></td><td>' + e.name + "</td><td>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td>" + getUpdateRemain(e.eo, e.min, e.sec) + "</td>";
            });
        }
    }, 1000);
}

function getUpdateTimes(eo, m, s) {
    if(eo == 0) {
        return "짝수시 " + m + "분 " + s + "초";
    } else {
        return "홀수시 " + m + "분 " + s + "초";
    }
}

function getUpdateRemain(eo, m, s) {
    var date = new Date();
    if(eo == 0) {
        if(even.indexOf(date.getHours()) != -1) {
            if(date.getMinutes() < m) {
                var end = new Date();
                end.setHours(date.getHours());
                end.setMinutes(m);
                end.setSeconds(s == 0 ? 59 : s);
                var min = Math.floor(((end - date) / (1000*60)) % 60);
                var sec = Math.abs(end.getSeconds() - date.getSeconds());
                return min + "분 " + sec +  "초 후 갱신";
            } else {
                return "-";
            }
        } else {
            return "-";
        }
    } else if(eo == 1) {
        if(odd.indexOf(date.getHours()) != -1) {
            if(date.getMinutes() < m) {
                var end = new Date();
                end.setHours(date.getHours());
                end.setMinutes(m);
                end.setSeconds(s == 0 ? 59 : s);
                var min = Math.floor(((end - date) / (1000*60)) % 60);
                var sec = Math.abs(end.getSeconds() - date.getSeconds());
                return min + "분 " + sec +  "초 후 갱신";
            } else {
                return "-";
            }
        } else {
            return "-";
        }
    }
}

function checkEnter() {
    if(event.keyCode == 13) {
        searchSeason();
    }
}

function searchSeason() {
    if($('#inputTxt').val().length != 0) {
        var text = $('#inputTxt').val();
        var filter = datas.filter((v) => {
            if(v.name.indexOf(text.toUpperCase()) != -1 || v.otherNames.indexOf(text.toUpperCase()) != -1) {
                return true;
            }
            return false;
        });
        getList(filter);
    } else {
        getList(datas);
    }
}