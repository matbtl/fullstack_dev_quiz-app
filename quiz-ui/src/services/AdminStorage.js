export default {
    clear() {
          window.localStorage.clear();
    },
      saveToken(token) {
            window.localStorage.setItem("token", token);
    },
    clearToken(){
      window.localStorage.setItem("token",'');
    },
    setQuestionToDetail(position){
      window.localStorage.setItem("positionQuestionEditor", position)
    },
    getQuestionToDetail(){
      return window.localStorage.getItem("positionQuestionEditor")
    },
    getToken() {
          var token = window.localStorage.getItem("token");
          if (token == undefined || token == null)
            token = "";
          return token;
    },
  };