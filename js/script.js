$(function(){
   var banner=$(".left_banner1>li");
   var leftBtn=$(".pop_ctrl .prev");
   var rightBtn=$(".pop_ctrl .next");
   var banners=$(".right_banner1>li");
   var leftBtns=$(".pop_ctrl2 .prev2");
   var rightBtns=$(".pop_ctrl2 .next2");
   var num=$('.count > span');
   var num2=$('.page > span');
   var box5=$(".box5_img>li")
   var boxleft=$(".control .prev")
   var boxright=$(".control .next")
   var current=0;
   var current1=0;
   var current2=0;
   var setIntervalId;
   var setIntervalId2;
    
	/* left_banner */
    function move(tg, start, end){
      tg.css("left",start).stop().animate({left:end});
    }
    timer();
   function timer(){
      setIntervalId=setInterval(function(){
        var prev=banner.eq(current);
		var prevNum=num.eq(current);

        move(prev,0,"-100%");
		prevNum.removeClass('on');
        current++;  
        if(current==banner.size()){current=0;}
        var next=banner.eq(current);
		var nextNum=num.eq(current);
   
        move(next,'100%',0);
		nextNum.addClass('on');
      },2000);
    }
	var btn=true;
	var play=$('.pop_ctrl .stop');
	play.click(function(){
		if(btn==true){
            clearInterval(setIntervalId);
			$(this).attr('Class','start')
			btn=false;
		}else{
			timer();
			$(this).attr('Class','stop')
			btn=true;
		}
    });
	
	$(".pop_ctrl .prev, .pop_ctrl .next ").hover(function(){
		 clearInterval(setIntervalId);
	},function(){
		 timer();
	});
	
    rightBtn.click(function(){
		var prev=banner.eq(current);
		var prevNum=num.eq(current);

        move(prev,0,"-100%");
		prevNum.removeClass('on');
        current++;  
        if(current==banner.size()){current=0;}
        var next=banner.eq(current);
		var nextNum=num.eq(current);
   
        move(next,'100%',0);
		nextNum.addClass('on');
   });
   
   leftBtn.click(function(){
		var prev=banner.eq(current);
		var prevNum=num.eq(current);
		move(prev,0,'100%');
		prevNum.removeClass('on');
		current--;
      
		if(current==-banner.size()){current=0;}
		var next=banner.eq(current);
		var nextNum=num.eq(current);
		move(next,'-100%',0);  
		nextNum.addClass('on');
    });
	
	/* right_banner */
    var btn=true;
    var play2=$('.pop_ctrl2 .stop2');
    play2.click(function(){
       if(btn==true){
             clearInterval(setIntervalId2);
          
          $(this).attr('Class','start2')
          btn=false;
       }else{
          timer1();
          $(this).attr('Class','stop2')
          btn=true;
       }
     });
	 
	 $(".pop_ctrl2 .prev2, .pop_ctrl2 .next2 ").hover(function(){
		 clearInterval(setIntervalId2);
	},function(){
		 timer1();
	});
	 
	 timer1();
	function timer1(){
      setIntervalId2=setInterval(function(){
        var prev2=banners.eq(current1);

        move1(prev2,0,"-100%");
        current1++;  
        if(current1==banners.size()){current1=0;}
        var next2=banners.eq(current1);
   
        move1(next2,'100%',0);
      },2000);
    }
	function move1(tg, start, end){
      tg.css("left",start).stop().animate({left:end});
    }
    rightBtns.click(function(){
       var prev2=banners.eq(current1);

        move1(prev2,0,"-100%");
        current1++;  
        if(current1==banners.size()){current1=0;}
        var next2=banners.eq(current1);
   
        move1(next2,'100%',0);
    });
    leftBtns.click(function(){
       var prev2=banners.eq(current1);

		move1(prev2,0,'100%');
		current1--;
      
		if(current1==-banners.size()){current1=0;}
		var next2=banners.eq(current1);
		move1(next2,'-100%',0);  
     });

     function move1(tg, start, end){
      tg.css("left",start).stop().animate({left:end});
    }
    rightBtns.click(function(){
       var prev2=banners.eq(current1);

        move1(prev2,0,"-100%");
        current1++;  
        if(current1==banners.size()){current1=0;}
        var next2=banners.eq(current1);
   
        move1(next2,'100%',0);
    });
    leftBtns.click(function(){
       var prev2=banners.eq(current1);

		move1(prev2,0,'100%');
		current1--;
      
		if(current1==-banners.size()){current1=0;}
		var next2=banners.eq(current1);
		move1(next2,'-100%',0);  
     });


     function move2(tg, start, end){
      tg.css("left",start).stop().animate({left:end});
    }
    boxleft.click(function(){
       var prev3=box5.eq(current2);
       var prevNum=num2.eq(current2);
        move2(prev3,0,"100%");
        prevNum.removeClass('on');
        current2--;
 

        if(current2==-box5.size()){current2=0;}
        var next3=box5.eq(current2);
        var nextNum=num2.eq(current2);
        
      
        move2(next3,'100%',0);
        nextNum.addClass('on');
    });
    boxright.click(function(){
       var prev3=box5.eq(current2);
       var prevNum=num2.eq(current2);
		move2(prev3,0,'-100%');
    prevNum.removeClass('on');
    current2++; 
      
		if(current2==box5.size()){current2=0;}
    var next3=box5.eq(current2);
    var nextNum=num2.eq(current2);
    move2(next3,'100%',0);  
    nextNum.addClass('on');
     }); 
});