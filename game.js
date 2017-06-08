var app=angular.module("hangmanApp",[]);//name/id of app
app.controller("GameController",['$scope','$timeout',function($scope,$timeout)
{  //function


var words=["hello","morning","welcome","beginning"]; 
$scope.incorrectLetterChoosen=[];
$scope.correctLetterChoosen=[];
$scope.guesses=6;
$scope.displayWord='';
$scope.input= 
{

	letter : ''

}

var selectRandomWord = function()
{

var index=Math.round(Math.random()*words.length);
return words[index];

}


var newGame= function()
{


$scope.incorrectLetterChoosen=[];
$scope.correctLetterChoosen=[];
$scope.guesses=6;
$scope.displayWord='';


selectedWord= selectRandomWord();
console.log(selectedWord);

var tempDisplayWord='';

for(var i=0;i<selectedWord.length;i++)
{
	tempDisplayWord+='*';
	
}
$scope.displayWord=tempDisplayWord;
console.log(tempDisplayWord);

}

$scope.letterChoosen= function()
{
	for (var i = 0;i<$scope.incorrectLetterChoosen.length; i++) 
	{
		if($scope.incorrectLetterChoosen[i].toLowerCase()==$scope.input.letter.toLowerCase())
		{
			$scope.input.letter="";
			return;

		}

	}

	for (var i = 0;i<$scope.correctLetterChoosen.length; i++) 
	{
		if($scope.correctLetterChoosen[i].toLowerCase()==$scope.input.letter.toLowerCase())
		{
			$scope.input.letter="";
			return;

		}

	}
	var correct = false;

	for(var i=0;i<selectedWord.length;i++)
	{
			if (selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase())
			{

				$scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
				correct=true;

			}
	}

	if (correct)
    {

    	$scope.correctLetterChoosen.push($scope.input.letter.toLowerCase());
    }
    else
    {
    	$scope.guesses--;
    	$scope.incorrectLetterChoosen.push($scope.input.letter.toLowerCase());
    }

    $scope.input.letter="";//clear input

    if ($scope.guesses==0) 
    {
    	alert("you lost ");
    	$setTimeout(function() { newGame(); }, 50);;

    }

    if($scope.displayWord.indexOf('*')==-1)
    {

    	alert("You win");
    	$setTimeout(function() { newGame(); }, 50);;

    }	


}





newGame();

}])
