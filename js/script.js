// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
    
    
 $("#a").click(function(){ 
   
    sentenceToPigLatin();
});


 function sentenceToPigLatin() {
 	    var message=$("#input1").val();
 	    var split= message.split(' ');
 	 $("#message").empty();
 	 for(var count=0; count<split.length; count=count+1){
 	   $("#message").append(ay(split[count]));
 	    
 
   }
}
    
function ay(word){
  var lowerWord = word.toLowerCase();
  var fl=word.slice(0,1);
  var ll=word.slice(1,word.length);
    if(fl==="a"||fl==="e"||fl==="i"||fl==="o"||fl==="u"){
      return(word +"yay ")
    }else{
      return(ll+fl+ "ay ")
 }

 
 return word + "ay";    
}


      
      



 


});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


