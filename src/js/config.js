angular.module("Tmai").constant("config", {
    url: "http://211.149.222.151:8080",
    imageUrl: "http://211.149.222.151:8080/files/image?name=",
    request:{
    	"SUCCESS":200,
        "TOKEN_INVALID":405
    },
    response:{
    	"SUCCESS":1
    },
    common_params: {
    	invoke:"h5"
    },
});
