/**
 * Created by liangxiansong on 2017/3/24.
 */
var editor,statusLine,savButton,idletimer

window.onload = function () {

    //第一次载入，初始化本地存储
    if (localStorage.note == null) localStorage.note = "";
    if (localStorage.lastModified == null) localStorage.lastModified = 0;
    if (localStorage.lastSaved == null) localStorage.lastSaved = 0;

    editor = $("#editor");
    statusLine = $("#statusline");
    savButton = $("#savebutton");


    editor.val(localStorage.note);
    editor.attr("disabled",true);

    //监听文本区内容
    editor.bind("input", function (e) {
        //保存新值
        localStorage.note = editor.val();
        localStorage.lastModified = Date.now();
        //重置闲置计时器
        if (idletimer) clearTimeout(idletimer);
        idletimer = setTimeout(save, 5000);//5秒触发一次保存时间
        //启用保存按钮
        savButton.disabled = false;
    })

    //每一次载入，尝试同步服务器
    sync();
}

window.onbeforeunload = function () {

    console.log('onbeforeunload');
    if(localStorage.lastModified > localStorage.lastSaved){
        save();
    }
}


window.onoffline = function () {
    console.log('onoffline');

    status("offline");
}

window.ononline = function () {
    console.log('ononline');

    sync();
}

window.applicationCache.onnoupdate = function () {
    console.log('onnoupdate');

    status("You are running lasted version of the app");
}

function status(msg) {
    statusLine.text = msg;
}

function save() {
    if (idletimer) clearTimeout(idletimer);
    idletimer = null;
    if (navigator.onLine){
        // $.ajax(
        //     {
        //         type:"PUT",
        //         url:"/note",
        //         data:editor.text(),
        //         success:function (data) {
        //             localStorage.lastSaved = Date.now();
        //             savButton.disabled = true;
        //         }
        //
        //     }
        // )

        var xhr = new XMLHttpRequest();
        xhr.open('PUT', '/learnJS/本地存储/note');
        xhr.send();
        xhr.onload = function () {
            localStorage.lastSaved = Date.now();
            savButton.disabled = true;
        }
    }
}

function sync() {
    if (navigator.onLine){
        // $.ajax(
        //     {
        //         type:'GET',
        //         url:'/learnJS/本地存储/note',
        //         success:function (data) {
        //             var remoteModTime = 0;
        //             console.log(data.status);
        //         },
        //         error:function (data) {
        //             console.log(data.status);
        //         }
        //     }
        // )
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/note');
        xhr.send();
        xhr.onload = function () {
            var remoteModTime = 0;
            if (xhr.status == 200){
                var remoteModTime = xhr.getResponseHeader("Last-Modified");
                remoteModTime = new Date(remoteModTime).getTime();
            }

            if (remoteModTime > localStorage.lastModified){
                status("发现更新的笔记");

                var useit = confirm("发现更新的笔记");
                var now = Date.now();
                if (useit){
                    localStorage.note = xhr.responseText;
                    editor.text(localStorage.note);
                    status("更新成功");
                }else
                {
                    status("忽略新版本笔记");
                }
                localStorage.lastModified = now;
            }else
            {
                status("当前笔记是最新的笔记");
            }

            if (localStorage.lastModified > localStorage.lastSaved){
                save();
            }
            editor.removeAttr("disabled");
            editor.focus();
        }
    }else
    {
        status("无法再离线状态下同步");
        editor.removeAttr("disabled");
        editor.focus();
    }
}