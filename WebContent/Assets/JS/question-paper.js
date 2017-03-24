$("#appear").fadeOut(0);
$("#submit").fadeOut(0);
$("#next").fadeOut(0);
$("#qnappear").fadeOut(0);
$("#qtappear").fadeOut(0);

var qun_count=0;
var Ans =[];
var rand = 0;
var correct=0;
var temp="";
var count;
var counter=0;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	$("#start").on("click",function(){
    		session();
    		$("#next").fadeIn(0);
    		$("#start").fadeOut(0);
    		$("#MSG").fadeOut(0);
    		$("#qnappear").fadeIn(0);
    		$("#qtappear").fadeIn(0);
       	
    	});
    }
}

xmlhttp.open("GET", "question-paper.xml", true);
xmlhttp.send();

function session(){
	
	   $('input[type="radio"]').attr('checked',false);
	  if(qun_count<=3){
		  $("#qno").text(qun_count+1);
		  count=60;
			counter=setInterval(timer, 1000); //1000 will  run it every 1 second
			//console.log(counter);
		  myFunction(xmlhttp,Math.floor(Math.random()*22));
		 qun_count++;
	
	}
	  else{
		$("#next").fadeOut(0);
		$("#appear").fadeOut(0);
		$("#submit").fadeIn(0);
	  
	  }
}
	
function myFunction(xml, i) {
	rand =i;
	//console.log(i,rand);
   	var xmlDoc = xml.responseXML; 
   question = xmlDoc.getElementsByTagName("question");
   ch1 = xmlDoc.getElementsByTagName("choice1");
   ch2 = xmlDoc.getElementsByTagName("choice2");
   ch3 = xmlDoc.getElementsByTagName("choice3");
   ch4 = xmlDoc.getElementsByTagName("choice4");
   Ans = xmlDoc.getElementsByTagName("answer");
   var qun = document.getElementById("qun");
   var A =document.getElementById("one");
   var B =document.getElementById("two");
   var C =document.getElementById("three");
   var D =document.getElementById("four");
    qun.textContent = question[i].textContent;
    A.textContent = ch1[i].textContent;
    B.textContent = ch2[i].textContent;
    C.textContent = ch3[i].textContent;
    D.textContent = ch4[i].textContent;
    $("input[id='A']").val(ch1[i].textContent);
    $("input[id='B']").val(ch2[i].textContent);
    $("input[id='C']").val(ch3[i].textContent);
    $("input[id='D']").val(ch4[i].textContent);
    
	$("#appear").fadeIn(0);
	
	
}

function timer()
{
  count=count-1;
 // console.log(count);
  if (count <= 0)
  {
     clearInterval(counter);
     session();
  }
  //console.log($("#timer").text());
  $("#timer").text(count);
  //console.log($("#timer").text());
}

$('ul').on("click","input",function(event){
	temp=$(this).val();

	//console.log(Ans[rand].textContent);
	//console.log(temp);
});		
$("#next").on("click",function(){

	 clearInterval(counter);
	if(temp === Ans[rand].textContent){
		//alert("HURRAYYYYYYYYY");
	   correct++;
	   session();
	}
	else{
		//alert("SORRY");
	session();
	}
	});
$("#submit").on("click",function(){
	alert("Your Score is: "+correct);
});



