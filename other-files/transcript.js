let ictmarks = parseInt(prompt("Enter ICT Marks"));
document.getElementById("ictmarks").innerHTML=ictmarks;

let englishmark =parseInt(prompt("Enter English Marks"));
document.getElementById("englishmarks").innerHTML=englishmark;

let mathmarks = parseInt(prompt("Enter Mathematics for engineering 1 Marks"));
document.getElementById("math1marks").innerHTML=mathmarks;

let math2marks = parseInt(prompt("Enter Mathematics for engineering 2 Marks"));
document.getElementById("math2marks").innerHTML=math2marks;

let Physics1marks =parseInt( prompt("Enter Physics for engineers 1 Marks"));
document.getElementById("Physics1marks").innerHTML=Physics1marks;

let Physics2marks = parseInt(prompt("Enter Physics for engineers 2 Marks"));
document.getElementById("Physics2marks").innerHTML=Physics2marks;

let netmarks = parseInt(prompt("Enter Network analysis Marks"))
document.getElementById("netmarks").innerHTML=netmarks;

let engmarks = parseInt(prompt("Enter Engineering Drawing and CAD Marks"));
document.getElementById("engmarks").innerHTML=engmarks;

let trainingmarks = parseInt(prompt("Enter Training Workshop Marks"));
document.getElementById("trainingmarks").innerHTML=trainingmarks;

let compmarks = parseFloat(prompt("Enter Computer Programming C Marks"));
document.getElementById("compmarks").innerHTML=compmarks;

let anamarks = parseFloat(prompt("Enter Analog Electric Circui Marks"));
document.getElementById("anamarks").innerHTML=anamarks;

let discmarks = parseFloat(prompt("Enter Discrete Structures for Computing Marks"));
document.getElementById("discmarks").innerHTML=discmarks;

let digmarks = parseFloat(prompt("Enter Digital Electronic Circuit Marks"));
document.getElementById("digmarks").innerHTML=digmarks;

let datamarks = parseFloat(prompt("Enter Database System Marks"));
document.getElementById("datamarks").innerHTML=datamarks;

let citmarks = parseFloat(prompt("Enter Citizenship and Transformative Education  Marks"));
document.getElementById("citmarks").innerHTML=citmarks;

let fname=prompt("enter First name");
let lname=prompt("enter Last name");
let reg=prompt("enter ID");
document.getElementById("fname").innerHTML=fname;
document.getElementById("lname").innerHTML=lname;
document.getElementById("regnumber").innerHTML=reg;

if(ictmarks >100)
{
    alert("invalid marks")
}
else if ( ictmarks >= 80){
    document.getElementById("ictgrade").innerHTML="A";

}
else if ( ictmarks >= 60){
    document.getElementById("ictgrade").innerHTML="B";

}

else if ( ictmarks >= 50){
    document.getElementById("ictgrade").innerHTML="C";

}
else if ( ictmarks >= 40){
    document.getElementById("ictgrade").innerHTML="D";

}

else if ( ictmarks >= 20){
    document.getElementById("ictgrade").innerHTML="E";

}
else{
    document.getElementById("ictgrade").innerHTML="F";
}



if(englishmark >100)
{
    alert("invalid marks")
}
else if ( englishmark >= 80){
    document.getElementById("englishgrade").innerHTML="A";

}
else if (  englishmark >= 60){
    document.getElementById("englishgrade").innerHTML="B";

}

else if ( englishmark >= 50){
    document.getElementById("englishgrade").innerHTML="C";

}
else if ( englishmark >= 40){
    document.getElementById("englishgrade").innerHTML="D";

}

else if ( englishmark >= 20){
    document.getElementById("englishgrade").innerHTML="E";

}
else{
    document.getElementById("englishgrade").innerHTML="F";
}



if( mathmarks >100)
{
    alert("invalid marks")
}
else if ( mathmarks >= 80){
    document.getElementById("math1grade").innerHTML="A";

}
else if ( mathmarks >= 60){
    document.getElementById("math1grade").innerHTML="B";

}

else if ( mathmarks >= 50){
    document.getElementById("math1grade").innerHTML="C";

}
else if ( mathmarks >= 40){
    document.getElementById("math1grade").innerHTML="D";

}

else if ( mathmarks >= 20){
    document.getElementById("math1grade").innerHTML="E";

}
else{
    document.getElementById("math1grade").innerHTML="F";
}




if(math2marks >100)
{
    alert("invalid marks")
}
else if ( math2marks>= 80){
    document.getElementById("math2grade").innerHTML="A";

}
else if ( math2marks >= 60){
    document.getElementById("math2grade").innerHTML="B";

}

else if ( math2marks >= 50){
    document.getElementById("math2grade").innerHTML="C";

}
else if ( math2marks >= 40){
    document.getElementById("math2grade").innerHTML="D";

}

else if ( math2marks >= 20){
    document.getElementById("math2grade").innerHTML="E";

}
else{
    document.getElementById("math2grade").innerHTML="F";
}


if( Physics1marks>100)
{
    alert("invalid marks")
}
else if ( Physics1marks >= 80){
    document.getElementById("Physics1grade").innerHTML="A";

}
else if ( Physics1marks >= 60){
    document.getElementById("Physics1grade").innerHTML="B";

}

else if ( Physics1marks >= 50){
    document.getElementById("Physics1grade").innerHTML="C";

}
else if ( Physics1marks >= 40){
    document.getElementById("Physics1grade").innerHTML="D";

}

else if ( Physics1marks >= 20){
    document.getElementById("Physics1grade").innerHTML="E";

}
else{
    document.getElementById("Physics1grade").innerHTML="F";
}


if(Physics2marks >100)
{
    alert("invalid marks")
}
else if ( Physics2marks >= 80){
    document.getElementById("Physics2grade").innerHTML="A";

}
else if ( Physics2marks >= 60){
    document.getElementById("Physics2grade").innerHTML="B";

}

else if ( Physics2marks >= 50){
    document.getElementById("Physics2grade").innerHTML="C";

}
else if (Physics2marks >= 40){
    document.getElementById("Physics2grade").innerHTML="D";

}

else if ( Physics2marks >= 20){
    document.getElementById("Physics2grade").innerHTML="E";

}
else{
    document.getElementById("Physics2grade").innerHTML="F";
}


if(netmarks >100)
{
    alert("invalid marks")
}
else if ( netmarks  >= 80){
    document.getElementById("netgrade").innerHTML="A";

}
else if ( netmarks  >= 60){
    document.getElementById("netgrade").innerHTML="B";

}

else if ( netmarks  >= 50){
    document.getElementById("netgrade").innerHTML="C";

}
else if ( netmarks  >= 40){
    document.getElementById("netgrade").innerHTML="D";

}

else if ( netmarks  >= 20){
    document.getElementById("netgrade").innerHTML="E";

}
else{
    document.getElementById("netgrade").innerHTML="F";
}




if(engmarks >100)
{
    alert("invalid marks")
}
else if ( engmarks >= 80){
    document.getElementById("enggrade").innerHTML="A";

}
else if ( engmarks >= 60){
    document.getElementById("enggrade").innerHTML="B";

}

else if ( engmarks >= 50){
    document.getElementById("enggrade").innerHTML="C";

}
else if ( engmarks >= 40){
    document.getElementById("enggrade").innerHTML="D";

}

else if ( engmarks >= 20){
    document.getElementById("enggrade").innerHTML="E";

}
else{
    document.getElementById("enggrade").innerHTML="F";
}



if(trainingmarks >100)
{
    alert("invalid marks")
}
else if ( trainingmarks >= 80){
    document.getElementById("traininggrade").innerHTML="A";

}
else if ( trainingmarks >= 60){
    document.getElementById("traininggrade").innerHTML="B";

}

else if ( trainingmarks >= 50){
    document.getElementById("traininggrade").innerHTML="C";

}
else if ( trainingmarks >= 40){
    document.getElementById("traininggrade").innerHTML="D";

}

else if ( trainingmarks >= 20){
    document.getElementById("traininggrade").innerHTML="E";

}
else{
    document.getElementById("traininggrade").innerHTML="F";
}


if(compmarks >100)
{
    alert("invalid marks")
}
else if ( compmarks >= 80){
    document.getElementById("compgrade").innerHTML="A";

}
else if (compmarks >= 60){
    document.getElementById("compgrade").innerHTML="B";

}

else if ( compmarks >= 50){
    document.getElementById("compgrade").innerHTML="C";

}
else if ( compmarks >= 40){
    document.getElementById("compgrade").innerHTML="D";

}

else if ( compmarks >= 20){
    document.getElementById("compgrade").innerHTML="E";

}
else{
    document.getElementById("compgrade").innerHTML="F";
}


if(anamarks >100)
{
    alert("invalid marks")
}
else if ( anamarks >= 80){
    document.getElementById("anagrade").innerHTML="A";

}
else if ( anamarks >= 60){
    document.getElementById("anagrade").innerHTML="B";

}

else if ( anamarks >= 50){
    document.getElementById("anagrade").innerHTML="C";

}
else if ( anamarks >= 40){
    document.getElementById("anagrade").innerHTML="D";

}

else if (anamarks >= 20){
    document.getElementById("anagrade").innerHTML="E";

}
else{
    document.getElementById("anagrade").innerHTML="F";
}



if(discmarks >100)
{
    alert("invalid marks")
}
else if ( discmarks  >= 80){
    document.getElementById("discgrade").innerHTML="A";

}
else if ( discmarks  >= 60){
    document.getElementById("discgrade").innerHTML="B";

}

else if ( discmarks  >= 50){
    document.getElementById("discgrade").innerHTML="C";

}
else if (discmarks  >= 40){
    document.getElementById("discgrade").innerHTML="D";

}

else if ( discmarks  >= 20){
    document.getElementById("discgrade").innerHTML="E";

}
else{
    document.getElementById("discgrade").innerHTML="F";
}


if(digmarks > 100)
{
    alert("invalid marks")
}
else if ( digmarks >= 80){
    document.getElementById("diggrade").innerHTML="A";

}
else if ( digmarks >= 60){
    document.getElementById("diggrade").innerHTML="B";

}

else if ( digmarks >= 50){
    document.getElementById("diggrade").innerHTML="C";

}
else if ( digmarks >= 40){
    document.getElementById("diggrade").innerHTML="D";

}

else if (digmarks >= 20){
    document.getElementById("diggrade").innerHTML="E";

}
else{
    document.getElementById("diggrade").innerHTML="F";
}


if(datamarks >100)
{
    alert("invalid marks")
}
else if ( datamarks >= 80){
    document.getElementById("datagrade").innerHTML="A";

}
else if ( datamarks >= 60){
    document.getElementById("datagrade").innerHTML="B";

}

else if ( datamarks >= 50){
    document.getElementById("datagrade").innerHTML="C";

}
else if ( datamarks >= 40){
    document.getElementById("datagrade").innerHTML="D";

}

else if ( datamarks >= 20){
    document.getElementById("datagrade").innerHTML="E";

}
else{
    document.getElementById("datagrade").innerHTML="F";
}

if(citmarks >100)
{
    alert("invalid marks")
}
else if ( citmarks >= 80){
    document.getElementById("citgrade").innerHTML="A";

}
else if ( citmarks >= 60){
    document.getElementById("citgrade").innerHTML="B";

}

else if ( citmarks >= 50){
    document.getElementById("citgrade").innerHTML="C";

}
else if ( citmarks >= 40){
    document.getElementById("citgrade").innerHTML="D";

}

else if ( citmarks >= 20){
    document.getElementById("citgrade").innerHTML="E";

}
else{
    document.getElementById("citgrade").innerHTML="F";
}

var average =  (ictmarks + datamarks + mathmarks + math2marks + englishmark + Physics1marks + Physics2marks +netmarks + engmarks + trainingmarks + compmarks +citmarks + anamarks + discmarks + digmarks) /15;
document.getElementById("Annually").innerHTML=average;


let  totalcredit = "140";
document.getElementById("totcredit").innerHTML = totalcredit;

