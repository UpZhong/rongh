$(document).ready(function () {
if (BrowserDetect.browser == 'Internet Explorer' && BrowserDetect.version < 10) {
	$("#zmodern").css("display","none");
	$("#zie").css("display","block");
}else {
	$("#zmodern").css("display","block");
	$("#zie").css("display","none");
	$("html").css("overflow","hidden");
};
//ie下导航栏点击事件
$(".z-ie-pa1").click(function (){  
  $('html, body').animate({  
      scrollTop: $("#wrapper").offset().top  
  }, 1000);  
});
$(".z-ie-pa2").click(function (){  
  $('html, body').animate({  
      scrollTop: $(".z-ie-p2").offset().top  
  }, 1000);  
});
$(".z-ie-pa3").click(function (){  
  $('html, body').animate({  
      scrollTop: $(".z-ie-p3").offset().top  
  }, 1000);  
});
$(".z-ie-pa4").click(function (){  
  $('html, body').animate({  
      scrollTop: $(".z-ie-p4").offset().top  
  }, 1000);  
});
$(".z-ie-pa5").click(function (){  
  $('html, body').animate({  
      scrollTop: $(".z-ie-p5").offset().top  
  }, 1000);  
});
$(".z-ie-pa6").click(function (){  
  $('html, body').animate({  
      scrollTop: $(".z-ie-p6").offset().top  
  }, 1000);  
});
//ie下css样式控制
var  pmkd = document.documentElement.clientWidth || document.body.clientWidth;
if (pmkd < 1300) {
  $(".z-ie-nav").css("display","none");
} else{
  $(".z-ie-nav").css("display","blick");
};
if(pmkd < 1001){
  $("#wrapper").css("width",1000+"px");
  $("#banner").css("width",1000+"px");
  $(".imgList").css("width",3*1000+"px");
  $(".imgList-Pic").css("width",1000+"px");
  $(".z-ie-p2-Im").css("width",1000+"px");
  $(".z-ie-p3-Im").css("width",1000+"px");
  $(".z-ie-p4-Im").css("width",1000+"px");
  $(".z-ie-p4-Im").css("height",710+"px");
  $(".z-ie-p4").css("height",710+"px");
  $(".z-ie-p5-Im").css("width",1000+"px");
  $(".z-ie-p5-Im").css("height",710+"px");
  $(".z-ie-p5").css("height",710+"px");
  $(".z-ie-p6-Im").css("width",1000+"px");
  $(".z-ie-p2").css("width",1000+"px");
  $(".z-ie-p3").css("width",1000+"px");
  $(".z-ie-p4").css("width",1000+"px");
  $(".z-ie-p5").css("width",1000+"px");
  $(".z-ie-p6").css("width",1000+"px");
} else {
  $("#wrapper").css("width",pmkd+"px");
  $("#banner").css("width",pmkd+"px");
  $(".imgList").css("width",3*pmkd+"px");
  $(".imgList-Pic").css("width",pmkd+"px");
  $(".z-ie-p2-Im").css("width",pmkd+"px");
  $(".z-ie-p3-Im").css("width",pmkd+"px");
  $(".z-ie-p4-Im").css("width",pmkd+"px");
  $(".z-ie-p4-Im").css("min-height",710+"px");
  $(".z-ie-p4").css("min-height",710+"px");
  $(".z-ie-p5-Im").css("width",pmkd+"px");
  $(".z-ie-p5-Im").css("min-height",710+"px");
  $(".z-ie-p5").css("min-height",710+"px");
  $(".z-ie-p6-Im").css("width",pmkd+"px");
  $(".z-ie-p2").css("width",pmkd+"px");
  $(".z-ie-p3").css("width",pmkd+"px");
  $(".z-ie-p4").css("width",pmkd+"px");
  $(".z-ie-p5").css("width",pmkd+"px");
  $(".z-ie-p6").css("width",pmkd+"px");
}
  
//ie下的轮播图
var curIndex = 0, //当前index
      imgLen = $(".imgList li").length; //图片总数
     // 定时器自动变换2.5秒每次
  var autoChange = setInterval(function(){ 
    if(curIndex < imgLen-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
  },3500);
   //左箭头滑入滑出事件处理
  $("#prev").hover(function(){ 
    //滑入清除定时器
    clearInterval(autoChange);
  },function(){ 
    //滑出则重置定时器
    autoChangeAgain();
  });
  //左箭头点击处理
  $("#prev").click(function(){ 
    //根据curIndex进行上一个图片处理
    curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
    changeTo(curIndex);
  });
  //右箭头滑入滑出事件处理
  $("#next").hover(function(){ 
    //滑入清除定时器
    clearInterval(autoChange);
  },function(){ 
    //滑出则重置定时器
    autoChangeAgain();
  });
  //右箭头点击处理
  $("#next").click(function(){ 
    curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
    changeTo(curIndex);
  });
  //清除定时器时候的重置定时器--封装
  function autoChangeAgain(){ 
      autoChange = setInterval(function(){ 
      if(curIndex < imgLen-1){ 
        curIndex ++;
      }else{ 
        curIndex = 0;
      }
    //调用变换处理函数
      changeTo(curIndex); 
    },3500);
    }
  function changeTo(num){ 
    var goLeft = num * pmkd;
    $(".imgList").animate({left: "-" + goLeft + "px"},500);
    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  }	
});





