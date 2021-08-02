videolink1 = "https://ud-video.azureedge.net/h_1080/u/assets/3m14tjoaeataw8rnm5ma.mp4";
videolink2 = "https://ud-video.azureedge.net/h_1080/u/assets/hso0zacj9q8zit17y5ph.mp4";
videolink3 = "https://ud-video.azureedge.net/h_1080/u/assets/mvhhsswr44luaer1psqq.mp4";

  // Loop through all childern of class "addText"
  text1 = document.getElementsByClassName("text1");
  text2 = document.getElementsByClassName("text2");
  text3 = document.getElementsByClassName("text3");

  count =1;
  updateclass();
  setInterval(updateclass,21000);
  function updateclass() {
      updateclass1();
      setTimeout(updateclass2, 5000);
      setTimeout(updateclass3, 15000);
  }

function updateclass3(){

          // add class active in text3
          text3[0].className += " active";
          // remove class active in text1
          text1[0].className = text1[0].className.replace("active", "");
          // remove class active in text2
          text2[0].className = text2[0].className.replace("active", "");
          // select video from id vidplay and change its src to video3
          document.getElementById("vidplay").src = videolink3;

}

function updateclass2(){
          // add class active in text2
          text2[0].className += " active";
          // remove class active in text1
          text1[0].className = text1[0].className.replace("active", "");
          // remove class active in text3
          text3[0].className = text3[0].className.replace("active", "");
          // select video from id vidplay and change its src to video2
          document.getElementById("vidplay").src = videolink2;
      }

function updateclass1(){
          // add class active in text1
          text1[0].className += " active";
          // remove class active in text2
          text2[0].className = text2[0].className.replace("active", "");
          // remove class active in text3
          text3[0].className = text3[0].className.replace("active", "");
          // select video from id vidplay and change its src to video1
          document.getElementById("vidplay").src = videolink1;
      }
