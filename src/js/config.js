angular.module("Tmai").constant("config", {
    url: "http://120.25.225.14:8080",
    imageUrl: "http://120.25.225.14:8080/admin/FileUpload/file?name=",
    message: {
        register: {
            "1": "提交成功",
            "2": "手机号码已经注册",
        },
        login: {
            "1":"手机号未注册",
            "2":"登录密码错误",
            "3":"登录成功"
        },
        authen: {
            "1":"未认证",
            "2":"已认证通过",
            "3":"认证未通过"
        },
        repeater:{
            "0":"每天",
            "1":"每周",
            "2":"每月"
        },
        role:{
            "1":"学生",
            "2":"培训方"
        }
    },
    common_params: {},
});
