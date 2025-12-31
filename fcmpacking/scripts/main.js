var result = {};
var selected = 'ucl25_base';
const packOvrs = {
    'ucl25': {'123': 30, '124': 20, '125': 10, '126': 10, '127': 10, '128': 10, '129': 10}
}
const packEvls = {
    '0to5': [30, 25, 20, 15, 6, 4],
    '5to8': [55, 30, 10, 5],
    '8to10': [95, 3, 2]
}

const evl0to5 = [0, 1, 2, 3, 4, 5];
const evl5to8 = [5, 6, 7, 8];
const evl8to10 = [8, 9, 10];

const evlOvr = [3, 6, 10, 14, 18, 24, 31, 39, 48, 60];
const whiteClass = ['[UCL25]', '[TOTY25]', '[UTOTY25]', '[BLD24]', '[RS24]', '[FB25]', '[EURO24]', '[UCL25 XI]', '[5TAR]'];

function probabilityInfo() {
    var str = '0-5 진화: ' + packEvls['0to5'][0] + '%, ' + packEvls['0to5'][1] + '%, ' + packEvls['0to5'][2] + '%, '
    + packEvls['0to5'][3] + '%, ' + packEvls['0to5'][4] + '%, ' + packEvls['0to5'][5] + '%'
    + '\n5-8 진화: ' + packEvls['5to8'][0] + '%, ' + packEvls['5to8'][1] + '%, ' + packEvls['5to8'][2] + '%, ' + packEvls['5to8'][3] + '%'
    + '\n8-10 진화: ' + packEvls['8to10'][0] + '%, ' + packEvls['8to10'][1] + '%, ' + packEvls['8to10'][2] + '%' 
    alert(str + '\n모든 팩에 동일하게 적용되며, 오버롤 별 확률은 아직 미구현입니다.');
}

$('#pack-select').on('change', function() {
    selected = $('#pack-select option:selected').attr('value');
});

function startPacking() {
    var pn = selected.split("_")[0];
    var data = playerData[pn];
    // var ovrRand = Math.floor() * 100;
    // var filter;
    // if(packOvrs[pn]['123'] >= ovrRand) {
    //     filter = data.filter((e) => { return e.ovr == 123 });
    // }
    // if(packOvrs[pn]['124'] >= ovrRand) {
    //     filter = data.filter((e) => { return e.ovr == 124 });
    // }
    // if(packOvrs[pn]['125'] >= ovrRand) {
    //     filter = data.filter((e) => { return e.ovr == 125 });
    // }
    // if(packOvrs[pn]['126'] >= ovrRand) {
    //     filter = data.filter((e) => { return e.ovr == 126 });
    // }
    // if(packOvrs[pn]['127'] >= ovrRand) {
    //     filter = data.filter((e) => { return e.ovr == 127 });
    // }
    // if(packOvrs[pn]['128'] >= ovrRand) {
    //     filter = data.filter((e) => { return e.ovr == 128 });
    // }
    // if(packOvrs[pn]['129'] >= ovrRand) {
    //     filter = data.filter((e) => { return e.ovr == 129 });
    // }
    var rand = Math.floor(Math.random() * data.length);
    result = { name: data[rand].playerKor, className: data[rand].className, ovr: data[rand].ovr, pos: data[rand].position, 
        cardImg: data[rand].bimage, playerImg: data[rand].pimage, teamId: data[rand].teamid, nation: data[rand].nationality };

    $('#img-background').attr('src', result.cardImg);
    $('#img-flag').attr('src', 'https://fco.vod.nexoncdn.co.kr/assets/flags/flags_32x32/f_' + result.nation + '.png');
    $('#img-face').attr('src', result.playerImg);
    $('#pos-text').text(result.pos);
    $('#name-text').text(result.name);
    if(result.name.length > 8) {
        $('.card-name').css({'font-size': '17px'});
    } else {
        $('.card-name').css({'font-size': '20px'});
    }

    if(selected.includes('icon')) {
        if(whiteClass.includes(result.className)) {
            $('.card-name').css({'color': 'white'});
            $('.card-pos').css({'color': 'white'});
            $('.card-ovr').css({'color': 'white'});
        } else {
            $('.card-name').css({'color': '#3c2622'});
            $('.card-pos').css({'color': '#3c2622'});
            $('.card-ovr').css({'color': '#3c2622'});
        }
    }
    if(selected.includes('ev')) {
        if(selected.includes('-')) {
            var split = selected.split("_")[2].split('-');
            var evRand = Math.random();
            var evl = Number(split[0]);
            var calcOvr = 0;
            if(selected.includes('0-5')) {
                if((packEvls['0to5'][0] * 0.01) >= evRand) {
                    evl = 0;
                }
                if((packEvls['0to5'][1] * 0.01) >= evRand) {
                    evl = 1;
                }
                if((packEvls['0to5'][2] * 0.01) >= evRand) {
                    evl = 2;
                }
                if((packEvls['0to5'][3] * 0.01) >= evRand) {
                    evl = 3;
                }
                if((packEvls['0to5'][4] * 0.01) >= evRand) {
                    evl = 4;
                }
                if((packEvls['0to5'][5] * 0.01) >= evRand) {
                    evl = 5;
                }
                calcOvr = result.ovr + evlOvr[evl - 1];
            } else if(selected.includes('5-8')) {
                if((packEvls['5to8'][0] * 0.01) >= evRand) {
                    evl = 5;
                }
                if((packEvls['5to8'][1] * 0.01) >= evRand) {
                    evl = 6;
                }
                if((packEvls['5to8'][2] * 0.01) >= evRand) {
                    evl = 7;
                }
                if((packEvls['5to8'][3] * 0.01) >= evRand) {
                    evl = 8;
                }
                calcOvr = result.ovr + evlOvr[evl - 1];
            } else if(selected.includes('8-10')) {
                if((packEvls['8to10'][0] * 0.01) >= evRand) {
                    evl = 8;
                }
                if((packEvls['8to10'][1] * 0.01) >= evRand) {
                    evl = 9;
                }
                if((packEvls['8to10'][2] * 0.01) >= evRand) {
                    evl = 10;
                }
                calcOvr = result.ovr + evlOvr[evl - 1];
            }
            if(evl == 0) {
                $('#ovr-text').text(result.ovr);
                $('#img-icon').attr('src', 'https://fco.vod.nexoncdn.co.kr/assets/team_logos/team_logos_32x32/l' + result.teamId + '.png');
                $('#img-icon').css({'width': '24px', 'height': '24px'});
                $('.card-icon').css({'width': '24px', 'height': '24px'});
            } else {
                $('#ovr-text').text(calcOvr);
                $('#img-icon').attr('src', './resources/EV' + evl + '.png');
                $('#img-icon').css({'width': '32px', 'height': '32px'});
                $('.card-icon').css({'width': '32px', 'height': '32px'});
            }
        } else {
            if(selected.split("_")[2] == "8") {
                $('#ovr-text').text(result.ovr + evlOvr[7]);
                $('#img-icon').attr('src', './resources/EV' + 8 + '.png');
                $('#img-icon').css({'width': '32px', 'height': '32px'});
                $('.card-icon').css({'width': '32px', 'height': '32px'});
            } else if(selected.split("_")[2] == "5") {
                $('#ovr-text').text(result.ovr + evlOvr[4]);
                $('#img-icon').attr('src', './resources/EV' + 5 + '.png');
                $('#img-icon').css({'width': '32px', 'height': '32px'});
                $('.card-icon').css({'width': '32px', 'height': '32px'});
            } else {
                $('#img-icon').attr('src', './resources/EV' + selected.split("_")[2] + '.png');
            }
        }
    } else {
        $('#ovr-text').text(result.ovr);
        $('#img-icon').attr('src', 'https://fco.vod.nexoncdn.co.kr/assets/team_logos/team_logos_32x32/l' + result.teamId + '.png');
        $('#img-icon').css({'width': '24px', 'height': '24px'});
        $('.card-icon').css({'width': '24px', 'height': '24px'});
    }
}

function deleteKeys(cn) {
    const keyToKeep = ["pid", "className", "playerKor", "pimage", "bimage", "teamid", "team", "position", "ovr", "nationality", "nation", "Trait"];
    for(const obj of playerData[cn]) {
        for(const key in obj) {
            if(!keyToKeep.includes(key)) {
                delete obj[key];
            }
        }
    }
}