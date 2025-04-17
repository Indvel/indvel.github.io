var result = {};
var selected = 'ucl25_base';
const packOvrs = {
    'ucl25': {'123': 30, '124': 20, '125': 10, '126': 10, '127': 10, '128': 10, '129': 10}
}
const packEvls = {
    '5to8': [52, 30, 10, 8],
    '8to10': [92, 5, 3]
}

const evlOvr = [3, 6, 10, 14, 18, 24, 31, 39, 48, 60];

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
    result = { name: data[rand].playerKor, ovr: data[rand].ovr, pos: data[rand].position, 
        cardImg: data[rand].bimage, playerImg: data[rand].pimage, teamId: data[rand].teamid, nation: data[rand].nationality };

    $('#img-background').attr('src', result.cardImg);
    $('#img-flag').attr('src', 'https://fco.vod.nexoncdn.co.kr/assets/flags/flags_32x32/f_' + result.nation + '.png');
    $('#img-face').attr('src', result.playerImg);
    $('#pos-text').text(result.pos);
    $('#name-text').text(result.name);
    if(result.name.length > 8) {
        $('.card-name').css({'font-size': '18px'});
    } else {
        $('.card-name').css({'font-size': '20px'});
    }

    if(selected.includes('ev')) {
        if(selected.includes('to')) {
            var split = selected.split("_")[2].split('to');
            var evRand = Math.random() * 100;
            var evl = Number(split[0]);
            var calcOvr = 0;
            if(selected.includes('5to8')) {
                if(packEvls['5to8'][0] >= evRand) {
                    evl = 5;
                    calcOvr = result.ovr + evlOvr[evl - 1];
                } 
                if(packEvls['5to8'][1] >= evRand) {
                    evl = 6;
                    calcOvr = result.ovr + evlOvr[evl - 1];
                } 
                if(packEvls['5to8'][2] >= evRand) {
                    evl = 7;
                    calcOvr = result.ovr + evlOvr[evl - 1];
                } 
                if(packEvls['5to8'][3] >= evRand) {
                    evl = 8;
                    calcOvr = result.ovr + evlOvr[evl - 1];
                }
            } else if(selected.includes('8to10')) {
                if(packEvls['8to10'][0] >= evRand) {
                    evl = 8;
                    calcOvr = result.ovr + evlOvr[evl - 1];
                } 
                if(packEvls['8to10'][1] >= evRand) {
                    evl = 9;
                    calcOvr = result.ovr + evlOvr[evl - 1];
                } 
                if(packEvls['8to10'][2] >= evRand) {
                    evl = 10;
                    calcOvr = result.ovr + evlOvr[evl - 1];
                }
            }
            if(calcOvr == 0) {
                calcOvr = result.ovr + evlOvr[evl - 1];
            }
            $('#ovr-text').text(calcOvr);
            $('#img-icon').attr('src', './resources/EV' + evl + '.png');
        } else if(selected.split("_")[2] == "8") {
            $('#ovr-text').text(result.ovr + evlOvr[7]);
            $('#img-icon').attr('src', './resources/EV' + 8 + '.png');
        } else {
            $('#img-icon').attr('src', './resources/EV' + selected.split("_")[2] + '.png');
        }
        $('#img-icon').css({'width': '32px', 'height': '32px'});
        $('.card-icon').css({'width': '32px', 'height': '32px'});
    } else {
        $('#ovr-text').text(result.ovr);
        $('#img-icon').attr('src', 'https://fco.vod.nexoncdn.co.kr/assets/team_logos/team_logos_32x32/l' + result.teamId + '.png');
        $('#img-icon').css({'width': '24px', 'height': '24px'});
        $('.card-icon').css({'width': '24px', 'height': '24px'});
    }
}