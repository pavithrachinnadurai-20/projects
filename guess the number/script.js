
        //selecting input box,p tag
        var guessnumber=document.getElementById("guessnumber")
        var result=document.getElementById("result")
        var score=document.getElementById("score")
        var randomNumber=Math.floor(Math.random()*10)+1
        var totalscore=10
        function check()
        {
            var enteredNumber = guessnumber.value
            if (randomNumber==enteredNumber)
        {
            console.log("Right")
            result.textContent ="Right"
            alert("You Won...")
        }
        else{
            totalscore=totalscore-1
            score.textContent="score:"+totalscore
            result.textContent ="Wrong"
            alert("You Guessed Wrong..try again")
            
        }
        }
    