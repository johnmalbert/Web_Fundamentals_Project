$(document).ready(function(){
    //function to run when start is clicked:
    $('#start').click(function(){
        //start the timer 
        $('#start').hide();
        var score = 0;
        game_play();               
        var timer; 
        var count = 60;
        var user_answer = 0;
        

        $('#clock').text(count);//set clock to 60 seconds
        timer = setTimeout(update, 1000);//don't fully understand this one yet...
        // $('#start').html('#stop');   come back to this - so that you can't click start x1
        function update(){
            if(count > 0)
            {
                $('#clock').text(--count);
                timer = setTimeout(update, 1000);
            }else{
                alert("Time's up, nice work! Your final score was " + score);
                $('#start').show();
                $('#correct').hide();
                $('#wrong').hide();

            }
        }
        function game_play(){
            $('#score').html(score);
            var x = Math.floor(100 * Math.random(100));                        
            var y = Math.floor(100 * Math.random(100));                        
            var temp = x;
            var del = Math.floor(4 * Math.random(1));
            var answer = 0;
            var score_value = 0;
            if(x < y){//put bigger number on top
                x = y;
                y = temp;
            }
            $('#x_val').html(x);
            $('#y_val').html(y);
            if(del == 0){
                $('#delimiter').html("+");
                answer = x + y;
                score_value = 1;
            }else if(del == 1){
                $('#delimiter').html("-");
                answer = x - y;
                score_value = 2;
            }else if(del == 2){
                $('#delimiter').html("x");
                answer = x * y;
                score_value = 10;
            }else{
                $('#delimiter').html('%');
                answer = x % y;
                score_value = 5;
            }
            console.log("answer: " + answer);

            //get the user input:
            $('#enter').click(function(){
                user_answer = $('#num').val();
                console.log("user answer: " + user_answer);

                if(user_answer == answer){
                    score += score_value;
                    $('#wrong').hide();
                    $('#correct').show();
                }else{
                    $('#wrong').show();
                    $('#correct').hide();
                }
                //$('#num').val("");
                game_play();
            })
            $(document).keydown
        }//end of game play function.
    })//end of game (start clicked)
})//end of document.ready
