let isCamOn = true;
let isMicOn = true;
let isScreenOn = false;
let isJoined = true;
let rtc = null;
let share = null;
let shareUserId = '';
let cameraId = '';
let micId = '';
var URL_ = 'https://livet.v114.com/acd/' //http://202.108.60.54:8001/acd/
    //var URL_ = 'http://202.108.60.54:8001/acd/'
var agent_Id = null;
var cusId = null; //客户号
var room_Id = null; //房间id
var token_ = null;
var login_Name = ''
var callInMsg; //收到呼叫信息

function login() {
    if ($('#userId').val() == '') {
        //   alert('用户名不能为空！');
        return;
    }
    if ($('#roomId').val() == '') {
        //   alert('房间号不能为空！');
        return;
    }
    presetting.login(false, options => {

        //  console.log(options)
        rtc = new RtcClient(options);
        join();
    });
    presetting.login(true, options => {

        // console.log(options)
        shareUserId = options.userId;
        share = new ShareClient(options);
    });
}

function join() {
    //console.log(login_Name)
    rtc.join();
    $('#login-root').hide();
    $('#room-root').show();
    $('#header-roomId').html('房间号: ' + $('#roomId').val());
    $('#member-me').find('.member-id').html(login_Name + '(我)');
}

function leave() {
    $('#mask_main').appendTo($('#main-video'));
    rtc.leave();
    share.leave();
}

function publish() {
    rtc.publish();
}

function unpublish() {
    rtc.unpublish();
}

function muteAudio() {
    rtc.muteLocalAudio();
}

function unmuteAudio() {
    rtc.unmuteLocalAudio();
}

function muteVideo() {
    $('#mask_main').show();
    rtc.muteLocalVideo();
}

function unmuteVideo() {
    rtc.unmuteLocalVideo();
    $('#mask_main').hide();
}

function startSharing() {
    share.join();
}

function stopSharing() {
    share.leave();
}

function setBtnClickFuc() {
    //userid roomid规格
    //$('#userId').on('input', function(e) {
    //    e.preventDefault();
    //    console.log('userId input ' + e.target.value);
    //    let val = $('#userId').val().slice(5);
    //    $('#userId').val('user_'+val.replace(/[^\d]/g,''));
    //});
    $('#roomId').on('input', function(e) {
        e.preventDefault();
        console.log('roomId input ' + e.target.value);
        let val = $('#roomId').val();
        $('#roomId').val(val.replace(/[^\d]/g, ''));
    });
    //login
    $('#login-btn').click(() => {
        login();
    });
    //open or close camera
    $('#video-btn').on('click', () => {
        if (isCamOn) {
            $('#video-btn').attr('src', './img/big-camera-off.png');
            $('#video-btn').attr('title', '打开摄像头');
            $('#member-me').find('.member-video-btn').attr('src', 'img/camera-off.png');
            isCamOn = false;
            muteVideo();
        } else {
            $('#video-btn').attr('src', './img/big-camera-on.png');
            $('#video-btn').attr('title', '关闭摄像头');
            $('#member-me').find('.member-video-btn').attr('src', 'img/camera-on.png');
            isCamOn = true;
            unmuteVideo();
        }
    });
    //open or close microphone
    $('#mic-btn').on('click', () => {
        if (isMicOn) {
            $('#mic-btn').attr('src', './img/big-mic-off.png');
            $('#mic-btn').attr('title', '打开麦克风');
            $('#member-me').find('.member-audio-btn').attr('src', 'img/mic-off.png');
            isMicOn = false;
            muteAudio();
        } else {
            $('#mic-btn').attr('src', './img/big-mic-on.png');
            $('#mic-btn').attr('title', '关闭麦克风');
            $('#member-me').find('.member-audio-btn').attr('src', 'img/mic-on.png');
            isMicOn = true;
            unmuteAudio();
        }
    });
    //share screen or not
    $('#screen-btn').on('click',
        throttle(() => {
            if (!TRTC.isScreenShareSupported()) {
                alert('当前浏览器不支持屏幕分享！');
                return;
            }
            if ($('#screen-btn').attr('src') == './img/screen-on.png') {
                $('#screen-btn').attr('src', './img/screen-off.png');
                stopSharing();
                isScreenOn = false;
            } else {
                $('#screen-btn').attr('src', './img/screen-on.png');
                startSharing();
                isScreenOn = true;
            }
        }, 2000)
    );
    //logout
    $('#logout-btn').on('click', () => {
        leaveOut();
        // leave();
        // $('#room-root').hide();
        // $("#freeBox").removeClass("hidden")
        //   $('#login-root').show();
    });
    //switch main video
    $('#main-video').on('click', () => {
        //  changeMainVideo();
        let mainVideo = $('.video-box').first();
        if ($('#main-video').is(mainVideo)) {
            return;
        }
        //释放main-video grid-area
        mainVideo.css('grid-area', 'auto/auto/auto/auto');
        exchangeView($('#main-video'), mainVideo);
        //将video-grid中第一个div设为main-video
        $('.video-box').first().css('grid-area', '1/1/3/4');
        //chromeM71以下会自动暂停，手动唤醒
        if (getBroswer().broswer == 'Chrome' && getBroswer().version < '72') {
            rtc.resumeStreams();
        }
    });
    //切换main video


    //chrome60以下不支持popover，防止error
    if (getBroswer().broswer == 'Chrome' && getBroswer().version < '60')
        return;
    //开启popover
    $(function() {
        $('[data-toggle="popover"]').popover()
    })
    $('#camera').popover({
        html: true,
        content: () => {
            return $('#camera-option').html();
        }
    });
    $('#microphone').popover({
        html: true,
        content: () => {
            return $('#mic-option').html();
        }
    });

    $('#camera').on('click', () => {
        $('#microphone').popover('hide');
        $('.popover-body').find('div').attr('onclick', 'setCameraId(this)');
    });

    $('#microphone').on('click', () => {
        $('#camera').popover('hide');
        $('.popover-body').find('div').attr('onclick', 'setMicId(this)');
    });

    //点击body关闭popover
    $('body').click(() => {
        $('#camera').popover('hide');
        $('#microphone').popover('hide');
    });

    //popover事件
    $('#camera').on('show.bs.popover', () => {
        $('#camera').attr('src', './img/camera-on.png');
    });
    $('#camera').on('hide.bs.popover', () => {
        $('#camera').attr('src', './img/camera.png');
    });

    $('#microphone').on('show.bs.popover', () => {
        $('#microphone').attr('src', './img/mic-on.png');
    });
    $('#microphone').on('hide.bs.popover', () => {
        $('#microphone').attr('src', './img/mic.png');
    });
}
//切换主位置
function changeMainVideo() {
    let mainVideo = $('.video-box').first();
    if ($('#main-video').is(mainVideo)) {
        return;
    }
    //释放main-video grid-area
    mainVideo.css('grid-area', 'auto/auto/auto/auto');
    exchangeView($('#main-video'), mainVideo);
    //将video-grid中第一个div设为main-video
    $('.video-box').first().css('grid-area', '1/1/3/4');
    //chromeM71以下会自动暂停，手动唤醒
    if (getBroswer().broswer == 'Chrome' && getBroswer().version < '72') {
        rtc.resumeStreams();
    }
}

function setCameraId(thisDiv) {
    cameraId = $(thisDiv).attr('id');
    console.log('setCameraId: ' + cameraId);
}

function setMicId(thisDiv) {
    micId = $(thisDiv).attr('id');
    console.log('setMicId: ' + micId);
}

function addVideoView(id, isLocal = false) {
    let div = $('<div/>', {
        id: id,
        class: 'video-box',
        style: 'justify-content: center'
    });
    div.prependTo('#video-grid'); //位置
    //设置监听
    div.click(() => {
        let mainVideo = $('.video-box').first();
        if (div.is(mainVideo)) {
            return;
        }
        //释放main-video grid-area
        mainVideo.css('grid-area', 'auto/auto/auto/auto');
        exchangeView(div, mainVideo);
        //将video-grid中第一个div设为main-video
        $('.video-box').first().css('grid-area', '1/1/3/4');
        //chromeM71以下会自动暂停，手动唤醒
        if (getBroswer().broswer == 'Chrome' && getBroswer().version < '72') {
            rtc.resumeStreams();
        }
    });
}

function addMemberView(id) {
    let memberElm = $('#member-me').clone();
    memberElm.attr('id', id);
    memberElm.find('div.member-id').html(id);
    memberElm.css('display', 'flex');
    memberElm.appendTo($('#member-list'));
}

function removeView(id) {
    if ($('#' + id)[0]) {
        $('#' + id).remove();
        //将video-grid中第一个div设为main-video
        $('.video-box').first().css('grid-area', '1/1/3/4');
    }
}

function exchangeView(a, b) {
    var $div1 = $(a);
    var $div3 = $(b);
    var $temobj1 = $("<div></div>");
    var $temobj2 = $("<div></div>");
    $temobj1.insertBefore($div1);
    $temobj2.insertBefore($div3);
    $div1.insertAfter($temobj2);
    $div3.insertAfter($temobj1);
    $temobj1.remove();
    $temobj2.remove();
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function getCameraId() {
    console.log('selected cameraId: ' + cameraId);
    return cameraId;
}

function getMicrophoneId() {
    console.log('selected microphoneId: ' + micId);
    return micId;
}

function throttle(func, delay) {
    var timer = null;
    var startTime = Date.now();
    return function() {
        var curTime = Date.now();
        var remaining = delay - (curTime - startTime);
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(() => {
                console.log('duplicate click');
            }, remaining);
        }
    };
}

function resetView() {
    isCamOn = true;
    isMicOn = true;
    isScreenOn = false;
    isJoined = true;
    $('#main-video-btns').hide();
    $('#video-btn').attr('src', './img/big-camera-on.png');
    $('#mic-btn').attr('src', './img/big-mic-on.png');
    $('#screen-btn').attr('src', './img/screen-off.png');
    $('#member-me').find('.member-video-btn').attr('src', 'img/camera-on.png');
    $('#member-me').find('.member-audio-btn').attr('src', 'img/mic-on.png');
    $('.mask').hide();
    //清空member-list
    if ($('#member-list')) {
        $('#member-list')
            .find('.member')
            .each((index, element) => {
                if ($(element).parent().attr('id') != 'member-me') {
                    $(element).parent().remove();
                }
            });
    }
}

function getBroswer() {
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1]:
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
        (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;

    if (sys.edge) return { broswer: "Edge", version: sys.edge };
    if (sys.ie) return { broswer: "IE", version: sys.ie };
    if (sys.firefox) return { broswer: "Firefox", version: sys.firefox };
    if (sys.chrome) return { broswer: "Chrome", version: sys.chrome };
    if (sys.opera) return { broswer: "Opera", version: sys.opera };
    if (sys.safari) return { broswer: "Safari", version: sys.safari };

    return { broswer: "", version: "0" };
}

function isHidden() {
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }
    return document[hidden];
}

function showTip(msg) {
    var topTip = $("<div class='tip'><div class='fadeIn'>" + msg + "</div></div>");
    $("body").append(topTip);
    setTimeout(function() {
        topTip.remove();
    }, 2000);
}

//离开退出视频 ui
function leaveOut() {
    leave();
    $('#room-root').hide();
    $("#freeBox").removeClass("hidden")
}

//登入坐席
async function loginAgent() {
    let flag = false;
    let name = $('.nameInp').val();
    let pwd = $('.passInp').val();
    if (name == '') {
        showTip('用户名不能为空！')
        return;
    }
    if (pwd == '') {
        showTip('房间号不能为空！')
        return;
    }
    // return true;
    let params = {
        loginName: name,
        password: md5(pwd).toUpperCase(),
        type: 2,
        deviceId: ''
    }

    let url = 'login'
    console.log(URL_ + url)
    await fetchLogin(url, JSON.stringify(params)).then(res => {
        // console.log(res)
        if (res.code == 0) {
            login_Name = name;
            token_ = res.data;
            localStorage.agentName = name;
            localStorage.agentPass = pwd;
            showTip('登录成功')
            $("#loginContainer").hide()
            $("#freeBox").removeClass("hidden")
            flag = true;
            return flag;
        } else {
            showTip(res.msg)
        }
    }).catch(err => {
        console.log(err)
    })
    return flag;
}

//登出坐席
async function logoutAgent() {
    let flag = false;
    let url = 'logout'
    let params = {
        loginName: login_Name,
        type: 2
    }
    await fetchPost(url, JSON.stringify(params)).then(res => {
        //     console.log(res)
        if (res.code == 0) {
            // $("#loginContainer").show()
            //  $("#freeBox").addClass("hidden")
            flag = true;
            return flag;
        } else {
            showTip(msg)
        }
    }).catch(err => {
        console.log(err)
    })
    return flag;
}

//坐席加入
function joinAgent() {
    let url = 'agent/join'
    let params = {
        agentId: login_Name,
        cusId: cus_Id,
        roomId: room_Id,
        type: 2,
        operationTime: getTime()
    };
    fetchPost(url, JSON.stringify(params)).then(res => {
        //  console.log(res)
        if (res.code == 0) {

        } else {
            showTip(msg)
        }
    }).catch(err => {
        console.log(err)
    })
}
//坐席加入发消息通知
function sendJoinMsg() {
    let message = tim.createTextMessage({
        to: 'b15ad31ad3e958e297d069c795d4dee7',
        conversationType: TIM.TYPES.CONV_GROUP,
        payload: {
            text: JSON.stringify(callInMsg)
        }
    });
    // console.log(callInMsg)
    let res = tim.sendMessage(message);

    res.then(function(imResponse) {
        // 发送成功
        //  console.log(JSON.parse(imResponse))
        // console.log(imResponse + '发送成功');
        // $(".freeBottom").addClass("hidden")
        // $(".answwerBox").removeClass("hidden")
        // login()
        reportLog('26', 'agentJoinRoomOk')
    }).catch(function(imError) {
        // 发送失败
        console.log('发送失败')
        console.warn('sendMessage error:', imError);
    });
}
//坐席离开
function leaveAgent() {
    let url = 'agent/leave'
    let params = {
        agentId: login_Name,
        cusId: cus_Id,
        roomId: room_Id,
        type: 2,
        operationTime: getTime()
    };
    fetchPost(url, JSON.stringify(params)).then(res => {
        //   console.log(res)
        if (res.code == 0) {

        } else {
            showTip(msg)
        }
    }).catch(err => {
        console.log(err)
    })
}

//汇报数据
//AGENT_LEAVE_ROOM(22, "坐席离开房间"),
//,AGENT_JOIN_ROOM(21, "坐席进入房间")
function reportData(type) {
    let url = 'report/send'
    let params = {
        loginName: login_Name,
        roomId: room_Id,
        userType: 2,
        operationTime: getTime(),
        operationType: type
    }
    fetchPost(url, JSON.stringify(params)).then(res => {
        //    console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
//汇报 坐席的日志  不需要roomid 
/* AGENT_IM_LOGIN(25, "坐席登录IM")
AGENT_IM_SEND(26, "坐席发送消息"),
    AGENT_IM_ACCEPT(27, "坐席接收消息"),
    AGENT_LOGIN(28, "坐席登录"),
    AGENT_LOGOUT(29, "坐席登出"),*/
function reportLog(type, remarkLog) {
    let url = 'report/send'
    let params = {
        loginName: login_Name,
        userType: 2,
        operationTime: getTime(),
        operationType: type,
        remark: remarkLog
    }
    fetchPost(url, JSON.stringify(params)).then(res => {
        //    console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
//通知坐席置闲
function setFree() {
    let url = 'agent/free'
    let params = {
        agentId: login_Name
    }
    fetchPost(url, JSON.stringify(params)).then(res => {
        //    console.log(res)
    }).catch(err => {
        console.log(err)
        showTip('坐席置闲失败，请重新登录')
        setTimeout(() => {
            location.reload()
        }, 2500)
    })
}
//页面刷新时
window.addEventListener("beforeunload", () => {
    if (cus_Id) {
        leaveAgent();
        reportData('22');
    }
    logoutAgent()
});


//心跳im
function heartIm() {
    setTimeout(() => {
        let heartMsg = { "agentId": login_Name, "type": "IM_SEND_HEART_OK" };
        let message = tim.createTextMessage({
            to: 'b15ad31ad3e958e297d069c795d4dee7',
            conversationType: TIM.TYPES.CONV_GROUP,
            payload: {
                text: heartMsg
            }
        });
        // console.log(callInMsg)
        let res = tim.sendMessage(message);

        res.then(function(imResponse) {

        }).catch(function(imError) {
            // 发送失败
            reportLog('26', 'agentImHeartFail')
            location.reload()
            console.log('发送失败')
            console.warn('sendMessage error:', imError);
        });
    }, 60000)
}

function getTime() {
    let day = new Date(); //将毫秒转化为当前日期
    console.log(day)
    let year = day.getFullYear();
    let month = day.getMonth() + 1;
    let date = day.getDate();
    let hour = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        minutes = "0" + seconds;
    }
    let newDay = `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`
    console.log(newDay)
    return newDay;
}


//post请求
function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: URL_ + url,
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            headers: { "Authorization": token_ },
            data: params,
            success: function(res) {
                resolve(res)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
}

function fetchLogin(url, params) {

    return new Promise((resolve, reject) => {
        $.ajax({
            url: URL_ + url,
            type: 'post',
            // headers: { "Authorization": token_ },
            //dataType: 'jsonp',
            contentType: 'application/json; charset=utf-8',
            data: params,
            success: function(res) {
                resolve(res)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
}
//get请求
function fetchGet(url, params) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: URL_ + url,
            type: 'get',
            contentType: 'application/json; charset=utf-8',
            data: params,
            success: function(res) {
                resolve(res.data)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
}