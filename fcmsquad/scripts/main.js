var data = {form: "0", cards: []};

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
    });

    if(window.innerWidth <= 992) {
        var diff = 1000 - window.innerWidth;
        $('.bg-img').css({objectPosition: '-' + diff + 'px'});
        $('.side-menu').css({width: '200px'});
    } else {
        $('.bg-img').css({objectPosition: 'center'});
        $('.side-menu').css({width: 'fit-content'});
    }
});

$(document).on('change', '#form-select', function() {
    selected = $('#form-select option:selected').val();
    data.form = selected;
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
                if(window.innerWidth <= 992) {
                    var diff = 1000 - window.innerWidth;
                    var mleft;
                    if(diff > Number(split[0].replace("px", ""))) {
                        mleft = diff - Number(split[0].replace("px", ""));
                    } else {
                        mleft = Number(split[0].replace("px", "")) - diff;
                    }
                    $('#' + e.name).css({display: 'block', left: mleft + 'px', top: split[1], textAlign: 'center'});
                    $('.bg-img').css({objectPosition: '-' + diff + 'px'});
                } else {
                    $('#' + e.name).css({display: 'block', left: split[0], top: split[1], textAlign: 'center'});
                    $('.bg-img').css({objectPosition: 'center'});
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
                $('#' + posSel).attr('cdx', this.getAttribute("idx"));
                $('#' + posSel + ' > div.card-text').css({color: cardData[Number(this.getAttribute("idx"))].color});
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
                        var name = allData[Number(idx)].name;
                        if(name.length == 5) {
                            $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length + 1) + 'px'});
                        } else if(name.length > 8) {
                            $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length - 2) + 'px'});
                        } else if(name.length == 10) {
                            $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length - 4) + 'px'});
                        } else if(name.length >= 11) {
                            $('#' + posSel + ' > div.card-text').css({fontSize: Number(name.length - 5) + 'px'});
                        } else {
                            $('#' + posSel + ' > div.card-text').css({fontSize: '10px'});
                        }
                        $('#' + posSel + ' > div.card-text').text(allData[Number(idx)].name);
                        $('#' + posSel).attr("pdx", idx);
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
        var date = new Date();
        var now = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
        saveImg(canvas.toDataURL('image/png'), now +'-SQUAD.png');
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

function saveData() {

    document.querySelectorAll('.position').forEach(function(e) {
        data.cards.push({name: e.id, cardIdx: e.getAttribute("cdx"), playerIdx: e.getAttribute("pdx")});
    });

    const blob = new Blob([JSON.stringify(data)], {type:'application/json'});
    const url = window.URL.createObjectURL(blob);
    var date = new Date();
    var now = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = now + "-SQUAD";
    document.body.appendChild(a);
    
    a.click();

    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 100);
}

function applyData() {
    selected = data.form;
    changeFormation();
    data.cards.forEach(function(e) {
        $('#' + e.name).css({
            background: 'url(' + cardData[Number(e.cardIdx)].image + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: 'none'
        });
        $('#' + e.name).attr('cdx', e.cardIdx);
        $('#' + e.name + ' > div.card-text').css({color: cardData[Number(e.cardIdx)].color});

        var name = allData[Number(e.playerIdx)].name;
        if(name.length == 5) {
            $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length + 1) + 'px'});
        } else if(name.length > 8) {
            $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length - 2) + 'px'});
        } else if(name.length == 10) {
            $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length - 4) + 'px'});
        } else if(name.length >= 11) {
            $('#' + e.name + ' > div.card-text').css({fontSize: Number(name.length - 5) + 'px'});
        } else {
            $('#' + e.name + ' > div.card-text').css({fontSize: '10px'});
        }
        $('#' + e.name + ' > div.card-text').text(allData[Number(e.playerIdx)].name);
        $('#' + e.name).attr("pdx", e.playerIdx);
    });
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