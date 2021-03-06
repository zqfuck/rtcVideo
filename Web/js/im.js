//init初始化
var tim;
initIm()

function initIm() {
    var options = {
        SDKAppID: 1400047237 // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
    };
    // 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
    tim = TIM.create(options);
    // 设置 SDK 日志输出级别，详细分级请参见 setLogLevel 接口的说明
    //tim.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
    tim.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用

    // 注册 COS SDK 插件
    tim.registerPlugin({ 'cos-js-sdk': COS });

    // 接下来可以通过 tim 进行事件绑定和构建 IM 应用
    let onKickedOut = function(event) {
        // console.log(event.data.type); // mutipleAccount(同一设备，同一帐号，多页面登录被踢)
    };
    tim.on(TIM.EVENT.KICKED_OUT, onKickedOut);

    let onSdkReady = function(event) {
        // console.log('sdkready')

    };
    tim.on(TIM.EVENT.SDK_READY, onSdkReady);
}

//getUserSig()
//获取usersig

function getUserSig(userName) {
    let data_ = {
        "account": userName
    }
    $.ajax({
        url: 'https://liveapi.v114.com/internal/usergroup/getusersig',
        type: 'Post',
        data: JSON.stringify(data_),
        success: function(e) {
            //console.log(e)
            let sig_ = e.result.userSig
            let userId = e.result.userId
            loginIm(userName, sig_)
        },
        error: function(e) {
            console.log(e)
            showTip('坐席异常，请重新登录')
        }

    })

}

//登录
function loginIm(userName, sig_) {
    let promise = tim.login({ userID: userName, userSig: sig_ });
    promise.then(function(imResponse) {
        //console.log(imResponse.data + '登录成功'); // 登录成功
        let promise = tim.joinGroup({ groupID: 'b15ad31ad3e958e297d069c795d4dee7', type: TIM.TYPES.GRP_CHATROOM });
        promise.then(function(imResponse) {
            switch (imResponse.data.status) {
                case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL: // 等待管理员同意
                    break;
                case TIM.TYPES.JOIN_STATUS_SUCCESS: // 加群成功
                    console.log(imResponse.data.group); // 加入的群组资料
                    //    setFree();
                    //     heartIm();
                    //   reportLog('25', 'imSuccess')
                    break;
                case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP: // 已经在群中
                    break;
                default:
                    break;
            }
        }).catch(function(imError) {
            console.warn('joinGroup error:', imError); // 申请加群失败的相关信息
            showTip('坐席异常，请重新登录')
        });
    }).catch(function(imError) {
        console.warn('login error:', imError); // 登录失败的相关信息
        console.log('登录失败')
        showTip('坐席异常，请重新登录')
    });
}

//发消息
function onSendMsg() {
    let message = tim.createTextMessage({
        to: 'b15ad31ad3e958e297d069c795d4dee7',
        conversationType: TIM.TYPES.CONV_GROUP,
        payload: {
            text: 'Hello world!'
        }
    });


    // 2. 发送消息
    let promise2 = tim.sendMessage(message);
    promise2.then(function(imResponse) {
        // 发送成功
        //  console.log(JSON.parse(imResponse))
        // console.log(imResponse + '发送成功');
    }).catch(function(imError) {
        // 发送失败
        //   console.log('发送失败')
        console.warn('sendMessage error:', imError);
    });

}


//收到消息
let onMessageReceived = function(event) {
    // event.data - 存储 Message 对象的数组 - [Message]
    //  console.log('的点点滴滴多')
    //  console.log(event)
    let txt = event.data[0].payload.text
    console.log(txt)


    if (txt && txt.indexOf('IM_REQ_CALL') > -1) {
        txt = JSON.parse(txt)
            //console.log(txt)
        let roomId = txt.roomId;
        let userId = txt.userId;
        let agentId = txt.agentId;

        if (agentId != login_Name) {
            return;
        }
        room_Id = roomId;
        cus_Id = userId;
        $('#roomId').val(roomId);
        $('#userId').val(login_Name);
        txt.type = ' IM_SEND_CALL_OK'
        callInMsg = txt;
        $(".freeBottom").addClass("hidden")
        $(".answwerBox").removeClass("hidden")
        reportLog('27', JSON.stringify(txt))

        /* let message = tim.createTextMessage({
            to: 'b15ad31ad3e958e297d069c795d4dee7',
            conversationType: TIM.TYPES.CONV_GROUP,
            payload: {
                text: JSON.stringify(txt)
            }
        });

        let res = tim.sendMessage(message);

        res.then(function(imResponse) {
            // 发送成功
            //  console.log(JSON.parse(imResponse))
            console.log(imResponse + '发送成功');
            $(".freeBottom").addClass("hidden")
            $(".answwerBox").removeClass("hidden")
                // login()
        }).catch(function(imError) {
            // 发送失败
            console.log('发送失败')
            console.warn('sendMessage error:', imError);
        });*/

    } else if (txt && txt.indexOf('IM_SEND_CALL_FAIL') > -1) {
        $(".freeBottom").removeClass("hidden")
        $(".answwerBox").addClass("hidden")
        if (cus_Id) {
            leaveAgent();
        }
    }
};
tim.on(TIM.EVENT.MESSAGE_RECEIVED, onMessageReceived);