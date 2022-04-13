    function towel() {
     var answer = window.prompt("Enter your answer: ")

        if (answer == "towel" || answer == "a towel" || answer == "A Towel") {
            window.location.replace("https://dwsantos.github.io/gsbc-intro-web/hw3/room1.html");
        }
        else{
            alert("Wrong answer. Try again. ");
    }
}