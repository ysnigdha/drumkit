for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //    var audio = new Audio('sounds/tom-1.mp3');
        //    audio.play();

        var buttonhtml = this.innerHTML;

        makeSound(buttonhtml);
        animationDrum(buttonhtml);

    });


    document.addEventListener("keydown",function(event)
    {
        makeSound(event.key);
        animationDrum(event.key);
    });

    function makeSound(keyvalue)
    {

        switch (keyvalue) {
            case 'w':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case 'a':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case 'j':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case 'k':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case 'l':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
           

                default:
                    console.log(this.innerHTML);

        }
    }

    function animationDrum(currentpresskey)
    {
        var activeButton = document.querySelector("."+currentpresskey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },108);
    }


}