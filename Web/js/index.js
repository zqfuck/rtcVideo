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
TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG);
TRTC.Logger.enableUploadLog();

TRTC.getDevices()
    .then(devices => {
        devices.forEach(item => {
            console.log('device: ' + item.kind + ' ' + item.label + ' ' + item.deviceId);
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



$(".interRoom").click(function() {
    loginAgent()
    $("#loginContainer").hide()
    $("#freeBox").removeClass("hidden")
    let promise = tim.joinGroup({ groupID: 'b15ad31ad3e958e297d069c795d4dee7', type: TIM.TYPES.GRP_CHATROOM });
    promise.then(function(imResponse) {
        switch (imResponse.data.status) {
            case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL: // 等待管理员同意
                break;
            case TIM.TYPES.JOIN_STATUS_SUCCESS: // 加群成功
                console.log(imResponse.data.group); // 加入的群组资料
                break;
            case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP: // 已经在群中
                break;
            default:
                break;
        }
    }).catch(function(imError) {
        console.warn('joinGroup error:', imError); // 申请加群失败的相关信息
    });
})
$(".newCall").click(function() {
    login()
})
$('.out').click(function() {
    // logoutAgent()
    let promise = tim.quitGroup('b15ad31ad3e958e297d069c795d4dee7');
    promise.then(function(imResponse) {
        console.log(imResponse.data.groupID); // 退出成功的群 ID
    }).catch(function(imError) {
        console.warn('quitGroup error:', imError); // 退出群组失败的相关信息
    });
    $("#loginContainer").show()
    $("#freeBox").addClass("hidden")
})