for (var i=0;i<3; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function () {
var text = this.innerHTML;
console.log(text);

switch(text){
        case "A":
            var audio = new Audio("audio/A.mp3.mp3");
            audio.play();
            break;

            case "B":
                var audio = new Audio("audio/b.mp3");
                audio.play();
                break;

                case "C":
                    var audio = new Audio("audio/");
                    audio.play();
                    break;
                    
    }
    });
}
