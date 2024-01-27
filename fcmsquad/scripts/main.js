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
                $('.pos-name').text("선택: " + $('#' + posSel + ' > div.pos-text').text());
            }
        }
    })
});

$(document).on('change', '#form-select', function() {
    selected = $('#form-select option:selected').val();
    changeFormation();
});

function changeFormation() {
    if(selected != "") {
        $('.squad-text').text(formation[Number(selected)].name);
        formation[Number(selected)].pos.forEach(function(e) {
            if(e.xy == "0") {
                $('#' + e.name).css({display: 'none'});
            } else {
                var split = e.xy.split(",");
                $('#' + e.name).css({display: 'block', left: split[0], top: split[1], textAlign: 'center'});
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

function searchCards() {
    if($('#inputTxt').val().length == 0) {
        $('#card-list').css({display: 'none'});
    } else {
        $('#card-list').css({display: 'block'});
        var list = document.querySelector('#card-list');
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
                $('#' + posSel).css({
                    background: 'url(' + cardData[Number(this.getAttribute("idx"))].image + ')',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    border: 'none'
                });
                $('#card-list').css({display: 'none'});
            }
            list.appendChild(li);
        });
    }
}

function checkEnter(n) {
    if(event.keyCode == 13) {
        if(n == 0) {
            searchCards();
        } else if(n == 1) {
            searchPlayers();
        }
    }
}

function searchPlayers() {
    if(allData.length != 0) {
        if($('#inputPlayer').val().length == 0) {
            $('#player-list').css({display: 'none'});
        } else {
            $('#player-list').css({display: 'block'});
            var list = document.querySelector('#player-list');
            list.innerHTML = "";
            var f = allData.filter(v => v.name.indexOf($('#inputPlayer').val()) != -1 || v.originName.indexOf($('#inputPlayer').val()) != -1);
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
                        $('#' + posSel + ' > div.card-text').text(allData[Number(idx)].name);
                        $('#inputPlayer').val("");
                        $('#player-list').css({display: 'none'});
                    }
                    list.appendChild(sch);
                    $('#player-list').css({display: 'block'});
                }
            }
        }
    }
}

function saveImage() {
    html2canvas($('.div-squad')[0], {allowTaint: true}).then(canvas => {
        saveImg(canvas.toDataURL('image/png'), $('.squad-text').text() + '.png');
    });
}

const saveImg = (uri, filename) => {
    let link = document.createElement('a');

    document.body.appendChild(link);

    link.href = uri;
    link.download = filename;
    link.click();

    document.body.removeChild(link);
};