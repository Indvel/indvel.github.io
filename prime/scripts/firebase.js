const firebaseConfig = {
    apiKey: "AIzaSyDmHh2-XKkoDuLEQMgcCUOJg7gepTtfJA8",
    authDomain: "primemanagement-6cc89.firebaseapp.com",
    databaseURL: "https://primemanagement-6cc89-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "primemanagement-6cc89",
    storageBucket: "primemanagement-6cc89.firebasestorage.app",
    messagingSenderId: "212921341422",
    appId: "1:212921341422:web:a38e388004028d90732aff"
  };

  var app = firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var auth = firebase.auth();

  const authSignOut = function() {
    return auth.signOut();
  }

  function checkSessionAvailable() { //세션이 존재하는지 확인 (sessionStorage)
    var keys = Object.keys(sessionStorage);
    var result = null;
    keys.forEach((e) => {
        if(e.includes("firebase:authUser")) {
            result = e;
        } else {
            result = null;
        }
    });
    return result;
  }

  function normalLogin() { //일반 로그인
    const id = $('.inputId').val().replace(/ /g, "");
    const pw = $('.inputPw').val().replace(/ /g, "");

    if(id.length == 0 || pw.length == 0) {
        alert("아이디/비밀번호를 입력해 주세요.");
        return;
    }
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION) //세션에 저장
        .then(() => {
        auth.signInWithEmailAndPassword(id, pw).then(result => { //이메일과 비밀번호로 로그인
            if(result.user) {
                location.href="https://indvel.github.io/prime/primeDashboard";
                //location.href="http://127.0.0.1:5500/indvel.github.io/prime/primeDashboard";
            }
        }).catch(error => {
            switch (error.code) {
                case "auth/user-not-found" || "auth/wrong-password" || "auth/internal-error":
                alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
                break;
                case "auth/network-request-failed":
                alert("네트워크 연결에 실패 하였습니다.");
                break;
                case "auth/invalid-email":
                alert("잘못된 이메일 형식입니다.");
                break;
                case "auth/internal-error":
                alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
                break;
                default:
                alert("로그인에 실패 하였습니다.");
                break;
            }
        })
    });
  }

   function createAccount(name, email, password) { //회원가입
    auth.createUserWithEmailAndPassword(email, password).then(result => {
      auth.currentUser.updateProfile({
        displayName: name
      });
      alert("회원가입 완료");
    }).catch(error => { //오류 코드별로 팝업 띄우기
      switch (error.code) {
        case "auth/user-not-found" || "auth/wrong-password":
          alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
          break;
        case "auth/email-already-in-use":
          alert("이미 사용 중인 이메일입니다.");
          break;
        case "auth/weak-password":
          alert("비밀번호는 6글자 이상이어야 합니다.");
          break;
        case "auth/network-request-failed":
          alert("네트워크 연결에 실패 하였습니다.");
          break;
        case "auth/invalid-email":
          alert("잘못된 이메일 형식입니다.");
          break;
        case "auth/internal-error":
          alert("잘못된 요청입니다.");
          break;
        default:
          alert("로그인에 실패 하였습니다.");
          break;
      }
    })
  }

async function getClanData() {
  return database.ref("prime_data/").once("value").then((snapshot) => {
      if(snapshot.exists()) {
          return snapshot.val();
      }
  });
}

async function updateClanData(key, content) {
  return database.ref("prime_data/").child(key).update(content);
}

async function deleteClanData(key) {
  return database.ref("prime_data/").child(key).remove();
}

async function addClanData(key, data) {
  return database.ref("prime_data/" + key).set(data);
}