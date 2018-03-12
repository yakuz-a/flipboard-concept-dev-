

$(document).ready(function(){
var pages=[];

var contentarray=[];
var ur='http://typophile.tumblr.com/';
var max=5;
    $.ajax({
        url: ur + 'api/read/json?',
        dataType: 'script',
        success:  function(data) {
            handleResponse(tumblr_api_read);
        }
    });
 var   handleResponse = function(response) {

    
    var feed = response['posts'],
        i    = 0;
    
    for ( var post in feed ) {
        if ( i === max ) {
            break;
        }
        
        var obj= feed[post],type= obj['type'];
        
        if(type=="photo")
      {  pages[i] = obj['photo-url-400'];
        
        i++;
      }
    }
  


   
}

flip.onmousemove=flip.onmouseup= flip.onmousedown=flip.onmouseleave=handler; 
var width1 =($( window ).width())/2;
  
  $(window).resize(function(){
   
    width1=($( window ).width())/2;
   
  });





 let type,oldx,loc=0,dir='',turncount=0,olda=180,t1,angle=0,poslock , poslock1,qw=0,co,bo,i=0,w;
 w=$("#flip").width(); 
 $(".content div").each(function(){
    contentarray[i]=  $(this).html();
    i++;
    
 });

$(".front #box1").html(contentarray[0]);
$(".front2 #box2").html(contentarray[0]);


 $(".front2").css("background-image","url("+pages[0]+")");
 $(".front").css("background-image","url("+pages[0]+")");

 function handler(even){

var x = $(this).offset();
var loc = (even.pageX - x.left);
 if(width1<300)
 {
  loc = (even.pageY - x.top);
 }
type=even.type;
var max=pages.length;
if(type=="mousemove")
if(even.buttons==1){
angle = Math.round(loc/(w/180));



$(".front1--base").css("background-image","url("+pages[turncount-1]+")");
 $(".front2--base").css("background-image","url("+pages[turncount+1]+")");
 $(".back2").css("background-image","url("+pages[turncount+1]+")");
 $(".back").css("background-image","url("+pages[turncount-1]+")");
$(".front1--base #box1").html(contentarray[turncount-1]);
$(".front2--base #box2").html(contentarray[turncount+1]);
$(".back #box2").html(contentarray[turncount-1]);
$(".back2 #box1").html(contentarray[turncount+1]);

if (loc< oldx) {
            dir = "left";
           
        } else if (loc > oldx) {
            dir= "right";
           
        }
 oldx = loc;

      if(poslock==1&&turncount<max-1){

           $(".front2--container").css("z-index","auto");
           if(width1<300)
         $(".page2").css({"transform": "rotateX(" + (-angle+180) + "deg)"}); 
        
     
           else
            $(".page2").css({"transform": "rotateY(" + (angle-180 ) + "deg)"});
                }
      if(poslock==0&&turncount>0){
         $(".front2--container").css("z-index",-1);
        
        if(width1<300)
          $(".page1").css({"transform": "rotateX(" + (-angle) + "deg)"});
          else
           $(".page1").css({"transform": "rotateY(" + (angle) + "deg)"});         
         }  
        
}

  if(type=="mousedown")

{ 
   t1=turncount;
   dir='';
   angle = Math.round(loc/(w/180));
if(angle>90)
poslock=1;
else 
poslock=0;
}       
 if(type=="mouseup")
{
if(angle>90)
poslock1=1;
else if(angle<90)
poslock1=0;
} 

if(dir=="left"&&type=="mouseup"&&turncount>=0&&turncount<max)
{ 
 console.log("execqw");
t1=turncount;

if(poslock==0&&poslock1==1&&turncount>0)
--turncount;
else if(poslock==1&&poslock1==0&&turncount<max-1)
++turncount;
else if(poslock==1&&poslock1==1&&turncount<max-1)
++turncount;
console.log(turncount);


}


if(dir=="right"&&(type=="mouseup")&&turncount>0)
{ 
t1=turncount;


if(poslock==1&&poslock1==0&&turncount<max-1)
turncount++;

else if(poslock==0&&poslock1==0&&turncount>0)
turncount--;

else if(poslock==0&&poslock1==1&&turncount>0)
turncount--;

console.log(turncount);


}

        
      $(".coor").text("angle: " + (angle) + " loc: " + loc);
       

      if(poslock==0&&type=="mouseup")
 { if(t1>turncount)

 angle=180;
  else 
angle=0;

}
else if(poslock==1&&type=="mouseup"){
if(t1<turncount)
{console.log("exec");
  angle=0;
}

else 
{console.log("exec");
angle=180;
 }

}


   if(type=="mouseup"&&dir!='')
     {    
         
           setTimeout(function(){
            $(".front").css("background-image","url("+pages[turncount]+")");
            $(".front2").css("background-image","url("+pages[turncount]+")");
            $(".front #box1").html(contentarray[turncount]);
            $(".front2 #box2").html(contentarray[turncount]);
 
            },400);
      if(poslock==1)
       {  console.log("executor");
          if(width1<300)
          $(".page2").css({"transform": "rotateX(" + (-angle+180) + "deg)","transition":"0.6s"}); 
           else
           $(".page2").css({"transform":"rotateY(" + (angle-180) + "deg)","transition":"0.6s"});                   
           setTimeout(function(){
            if(width1<300)
          $(".page2").css({"transform": "rotateX(" + (0) + "deg)","transition":"none"});
        else 
          $(".page2").css({"transform":"rotateY(" + (0) + "deg)","transition":"none"});
            if(t1<turncount){
             $(".front #box1").html(bo); 
             $(".front2 #box2").html(bo);          
            }
            }, 400);
                
        
       }
       if(poslock==0) 
       {    if(width1<300)
          $(".page1").css({"transform": "rotateX(" + (-angle) + "deg)","transition":"0.6s"}); 
           else
           $(".page1").css({"transform":"rotateY(" + (angle) + "deg)","transition":"0.6s"}); 
                                         
            setTimeout(function(){
             if(width1<300)
          $(".page1").css({"transform": "rotateX(" + (0) + "deg)","transition":"none"});
        else 
          $(".page1").css({"transform":"rotateY(" + (0) + "deg)","transition":"none"});
            if(t1>turncount){
               $(".front #box1").html(co);
               $(".front2 #box2").html(co);
             }
            }, 400);
     }

     
     } 


    }
   

  
});