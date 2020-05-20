const presetting = new Presetting();
presetting.init();
// check if browser is compatible with TRTC
TRTC.checkSystemRequirements().then(result => {
    if (!result) {
        alert('您的浏览器不兼容此应用！\n建议下载最新版Chrome浏览器');
        window.location.href = 'http://www.google.cn/chrome/';
    }
});

// setup logging stuffs
//TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG);
TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.WARN);
TRTC.Logger.enableUploadLog();

TRTC.getDevices()
    .then(devices => {
        devices.forEach(item => {
            //  console.log('device: ' + item.kind + ' ' + item.label + ' ' + item.deviceId);
        });
    })
    .catch(error => console.error('getDevices error observed ' + error));

// populate camera options
TRTC.getCameras().then(devices => {
    devices.forEach(device => {
        if (!cameraId) {
            cameraId = device.deviceId;
        }
        let div = $('<div></div>');
        div.attr('id', device.deviceId);
        div.html(device.label);
        div.appendTo('#camera-option');
    });
});

// populate microphone options
TRTC.getMicrophones().then(devices => {
    devices.forEach(device => {
        if (!micId) {
            micId = device.deviceId;
        }
        let div = $('<div></div>');
        div.attr('id', device.deviceId);
        div.html(device.label);
        div.appendTo('#mic-option');
    });
});


if (localStorage.agentName) {
    $('.nameInp').val(localStorage.agentName)
}
if (localStorage.agentPass) {
    $('.passInp').val(localStorage.agentPass)
}
$(".interRoom").click(async function() {
    let res = await loginAgent()
    console.log(login_Name)
    getUserSig(login_Name)
    console.log(res)
    if (!res) {
        return;
    }
    $("#loginContainer").hide()
    $("#freeBox").removeClass("hidden")
    $(".agentName").html(login_Name)
    reportLog('28', 'agentLogin')
})
$(".newCall").click(function() {
    login()

})
$('.out').click(async function() {
    let res = await logoutAgent();
    // console.log(res)
    if (!res) {
        return;
    }
    let promise = tim.quitGroup('b15ad31ad3e958e297d069c795d4dee7');
    promise.then(function(imResponse) {
        console.log(imResponse.data.groupID); // 退出成功的群 ID
        tim.logout();
    }).catch(function(imError) {
        console.warn('quitGroup error:', imError); // 退出群组失败的相关信息
    });
    $("#loginContainer").show()
    $("#freeBox").addClass("hidden")
    reportLog('29', 'agentLogout')
})