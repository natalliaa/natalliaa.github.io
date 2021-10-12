//playing mode
var playing=false;
//score
var score;
//right answer
var correctAnswer;
//next element in the countries array 
var nextindex;
//for displaying a green or red map depending on the correct answer
var questionNumber;
//array of countries with their capitals    
var countries = [
    ["Argentina", "Buenos Aires"],
    ["Bolivia", "Sucre"],
    ["Brazil", "Brasilia"],
    ["Chile", "Santiago"],
    ["Colombia", "Bogotá"],
    ["Ecuador", "Quito"],
    ["Guyana", "Georgetown"],
    ["Paraguay", "Asunción"],
    ["Peru", "Lima"],
    ["Suriname", "Paramaribo"],
    ["Uruguay", "Montevideo"],
    ["Venezuela", "Caracas"]
];

$(function(){

    //click on Start/Reset
    $("#startresume").click(function(){
        //if playing
        if (playing==true){
            location.reload();
        }
        //if not playing
        else{
            playing=true;
            //set the beginning of the game
            //change button to Reset
            $("#startresume").text("Reset");
            //show score
            $("#scorenumber").show();
            //set score to 0
            score = 0;
            $("#testscore").html(score);
            //set the question number to 0
            questionNumber=0;

            //display gray maps as unanswered questions
            for(var m=0; m<12; m++){
                $("#map"+m).removeClass("redmap greenmap");
            }            
            //hide gameover
            $("#gameover").hide();
            $("#wrong").hide();
            $("#true").hide();
            $("#exit").hide();
            //generate new question and answers
            shuffle();
            nextindex=0;
            generateQA();                         
        }
    });

    //shuffle countries 
    function shuffle(){       
        var l = countries.length, temp, index;  
        while (l > 0) {  
            index = Math.floor(Math.random() * l);  
            l--;  
            temp = countries[l];          
            countries[l] = countries[index];          
            countries[index] = temp;       
        }     
        return countries;    
    }     

    //click on an answer box (1 out of 4)    
    for(var n=1; n<5; n++){
        var answerid = "answer" + n;
        $("#answer" + n).click(function(){   

            var clickedAnswer = $(this).text();  
            if(playing==true)
            {   //if the answer is correct

                if (clickedAnswer == correctAnswer)
                { //correct answer
                    score++;               
                    $("#testscore").text(score);
                    //display a green map as a correct answer
                    $("#map" + questionNumber).addClass("greenmap");
                    questionNumber++;
                    //play sound
                    $("#rightsound")[0].play();
                    $("#true").show();
                    //show for 1 sec
                    setTimeout(function(){
                        $("#true").hide();
                    },1000);    
                    $("#wrong").hide();
                    //generate new answer and question
                    nextindex++;
                    generateQA();
                }
                else
                {  //play sound
                    $("#wrongsound")[0].play();
                    //wrong answer
                    $("#wrong").show();
                    //display a red map as a correct answer
                    $("#map" + questionNumber).addClass("redmap");
                    questionNumber++;                   

                    //show for 1 sec
                    setTimeout(function(){
                        $("#wrong").hide();
                    }, 1000);
                    $("#true").hide();
                    //generate new answer and question
                    nextindex++;
                    generateQA();                   
                }               
            }
        });
    }

    //generate question and answers 
    function generateQA(){

        //check if all 12 countries are already asked
        if(questionNumber >= 12)
        {  
            //show game over after a short delay
            setTimeout(gameOver, 400);
        }

        else{         
            $("#country").text(countries[nextindex][0]);       
            correctAnswer =countries[nextindex][1];
            //get a random box to put the answer
            var answerBox= (Math.round(Math.random()*3))+1;
            $("#answer" + answerBox).text(correctAnswer);   

            //store answer choices;    
            var answers=[correctAnswer];    

            //fill the other answer boxes with the wrong answers   
            //make sure to exclude the box with the right answer
            for (var i=1; i<5; i++)
            {if (i!==answerBox)
            { 
                var wrongAnswer;
                var randomindex;
                //check that the wrong answer is not equal to the right answer or another taken wrong answer
                //do: at least one possible answer, while: generate then a new possible answer, if the previous answer is not ok
                do{
                    randomindex = Math.floor(Math.random()*12);//from 0 to 11 for 12 countries
                    wrongAnswer = countries[randomindex][1];
                }            
                while(answers.indexOf(wrongAnswer)>-1) //wrongAnswer is already in the answer list, we countinue do loop 

                    $("#answer"+i).text(wrongAnswer);
                //add wrong answer to answer choices
                answers.push(wrongAnswer);
            }
            }
        }
    }

    //show game over window with the score    
    function gameOver(){
        $("#gameoversound")[0].play(); 
        //play music
        $("#gameover").show("slow");
        if (score >10)
        {
            $("#gameover").html("<p>Game over!</p><p>Your score: <span>" + score+ "</span> out of <span>12</span>.</p><p>Amazing!</p>"); 
        }
        else if ( score <11 && score>7)
        {
            $("#gameover").html("<p>Game over!</p><p>Your score: <span>" + score+ "</span> out of <span>12</span>.</p><p>Good job!</p>"); 
        }
        else
        {
            $("#gameover").html("<p>Game over!</p><p>Your score: <span>" + score+ "</span> out of <span>12</span>.</p><p>Try again!</p>"); 
        }

        $("#scorenumber").hide();        
        $("#wrong").hide();
        $("#true").hide();
        $("#exit").show();
        $("#startresume").text("Try Again");
        //hide answers text
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        //hide country text
        $("#country").text("");

        //change playing mode
        playing=false;                
    }

    //user clicks on Exit
    $("#exit").click(function(){
        location.reload();
    });

});