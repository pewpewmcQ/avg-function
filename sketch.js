var marks = [35,38,42,45,43,34,36,41,48,32];
function marks_avg (){
var sum = 0;
for (var i=0; i<marks.length; i=i+1){
  sum = sum + marks[i];
}
var avg = sum/marks.length
console.log(avg);
}




function setup() {
  createCanvas(400,400);
  marks_avg ();
}

function draw() 
{
  background(30);
}

 

