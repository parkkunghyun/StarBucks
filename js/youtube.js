// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
//외부에서 가져올때는 함수이름 바꿀수가 없다!!!!!!

    //<div>id=player를 뜻함
   new YT.Player('player', {
    //height: '360', 굳이지정 안해도 됨
    //width: '640',
    videoId: 'An6LvWQuj_8', //최초재상할 유튜부 영상 ID
    //url에서 =뒤에 있는게 id임
    playerVars: {
        autoplay: true,
        loop:true, //반복재생
        playList: 'An6LvWQuj_8',//이래야 반복재생됨
    },
    events: {
        onReady: function(event){
            //메소드임 event는동영상플레이어가 준배되면 함수 실행 
            //그때 인수로 이동영상이 플레이 되는 상황을 데이터로 넘긴다
            //event의 매게변수로 

            event.target.mute(); //이 영상의 옵션에서 음소거 선택

        }
    }
  });
}