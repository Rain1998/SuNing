window.onload = function(){
	
	
	//search的下拉列表
	let inputD = document.querySelector(".sousuo .sousuo3-d1 input");
	let texts = document.querySelector(".sousuo .sousuo3-d1 span");
	let xiala = document.querySelector(".rec_results");
	inputD.onfocus = function(){
		xiala.style.display = "block";
		texts.style.display = "none";
	}
	inputD.onblur = function(){
		xiala.style.display = "none";
		texts.style.display = "block";
	}
	
	
	//大轮播图
	let lis= document.querySelectorAll(".banner .banner2-d1 ul li");                   //轮播图
	let left= document.querySelector(".banner .btn-left");                  //左按钮
	let right= document.querySelector(".banner .btn-right");                  //右按钮
	let movebtn = document.querySelectorAll(".banner2-d2 .banner-yuan i")                  //轮播点
	let box =document.querySelector(".banner2")                    //大盒子
	let n = 0;
	let size = movebtn.length-1; 
	function move(){                                                //封装move函数
		if(n>size){
			n = 0;                                                 //判断n>size时，n=0
		}
		if(n<0){
			n=size;                                                //判断n<0时，n=size
		}
		lis.forEach(function(val,index){                            //遍历轮播图
			val.classList.remove("dongtu")                          //去掉轮播图所有的选中
			movebtn[index].classList.remove("on")               //去掉轮播点所有的选中
		})
		lis[n].classList.add("dongtu")                              //添加轮播图某一个的选中
		movebtn[n].classList.add("on")                          //添加轮播图某一个的选中
	}
	box.onmouseover = function(){
		clearInterval(time);                                       //鼠标移入时给大盒子停止setInterval()的设置的定时器
	}
	box.onmouseout = function(){
		time = setInterval(function(){
			n++;                                                   //鼠标移出时给大盒子设置再一次n++次循环轮播图赋值给time变量
			move();
		},2000)
	}
	let time = setInterval(function(){
		n++;                                                       //给大盒子设置2秒后执行回调函数，执行n++次
		move();
	},2000)
	right.onclick = function(){
		n++;                                                       //给右箭头设置它的单击事件
		move();
	}
	left.onclick = function(){
		n--;                                                       //给右箭头设置它的单击事件
		move();
	}
	movebtn.forEach(function(val,index){
		val.onclick = function(){
			n = index;                                             //遍历轮播点，给轮播点设置它每一个的单击事件
			move();
		}
	})
	
	
	//限时抢购
	let flasbtnleft = document.querySelector(".djh2  .btn-left");
	let flasbtnright = document.querySelector(".djh2  .btn-right");
	let flasbigbox = document.querySelector(".djh2 .djh-img1 ul");
	let flaslis = document.querySelectorAll(".djh2 .djh-img1 ul li");
	let flasn = 0;
	let flaswidth = (199)*5;
	let flassize = flaslis.length-5;
	function flasmove(){
		if(flasn>flassize){
			flasn = flassize;
		}
		if(flasn<0){
			flasn = 0;
		}
		if(flasn==flassize){
			flasbtnright.style.cursor = "default"
			flasbtnright.style.color = "#e9e9e9"
		}else{
			flasbtnright.style.cursor = "pointer"
			flasbtnright.style.color = "#333"
		} 
		if(flasn==0){
			flasbtnleft.style.cursor = "default"
			flasbtnleft.style.color = "#e9e9e9"
		}else{
			flasbtnleft.style.cursor = "pointer"
			flasbtnleft.style.color = "#333"
		}
		flasbigbox.style.left =-199*flasn+"px";
	}
	flasbtnright.onclick = function(){
		flasn = flasn +5;
		flasmove();
	}
	flasbtnleft.onclick = function(){
		flasn = flasn - 4;
		flasmove();
	} 
	
	// 必抢清单轮播
	let bigbox = document.querySelector(".haohuo3 .content ul");
	let boxC = document.querySelector(".haohuo3 .content")
	let nC = 1;
	let timeC;                         //移动的定时器
	let flag = true;                  //开关
	let leftBtn = document.querySelector(".haohuo3 .btn-left")
	let rightBtn = document.querySelector(".haohuo3 .btn-right")
	let colorYuan = document.querySelectorAll(".haohuo3 .yuan a")
	timeC = setInterval(function(){
		nC++;
		moveB();
	},1000)
	function moveB(){
		bigbox.style.left = -nC*390+"px";
		bigbox.style.transition = "all 0.5s";
// 		colorYuan.forEach(function(val){
// 			val.classList.remove("color");
// 		})
// 		colorYuan[nC].classList.add("color");
	}
	bigbox.addEventListener("transitionend",function(){            //动画结束之后执行以下条件
		flag = true;
		if(nC>=4){
			bigbox.style.transition = "none";
			bigbox.style.left = "-100%";
			nC=1;
		}else if(nC<=0){
			bigbox.style.transition = "none";
			bigbox.style.left = "-400%";
			nC=5;
		}
	})
	boxC.onmouseover = function(){
		clearInterval(timeC)
	}
	boxC.onmouseout = function(){
		timeC = setInterval(function(){
			nC++;
			moveB()
		},1000)
	}
	rightBtn.onclick = function(){
		if(flag){
			flag = false;
			nC++;
			moveB();
		}
	}
	leftBtn.onclick = function(){
		if(flag){
			flag= false;
			nC--;
			moveB();
		}
	}
	
	
	// 排行榜轮播
		let paibox = document.querySelector(".haohuo1 .content .comm-list-wrapper .jx-wrapper");
		let paiBig = document.querySelector(".haohuo1 .content .comm-list-wrapper .comm-list-cur")
		let nP = 1;
		let timeP;                         //移动的定时器
		let flagP = true;                  //开关
		let leftBtnPai = document.querySelector(".haohuo1 .content .comm-list-wrapper .btn-left")
		let rightBtnPai = document.querySelector(".haohuo1 .content .comm-list-wrapper .btn-right")
		let paiYuan = document.querySelectorAll(".haohuo1 .content .comm-list-wrapper .pager-wrapper .banner-pager .pager a")
		timeP = setInterval(function(){
			nP++;
			moveP();
		},1000)
		function moveP(){
			paibox.style.left = -nP*390+"px";
			paibox.style.transition = "all 0.5s";
		}
		paibox.addEventListener("transitionend",function(){            //动画结束之后执行以下条件
			flagP = true;
			if(nP>=3){
				paibox.style.transition = "none";
				paibox.style.left = "-100%";
				nP=1;
			}else if(nP<=0){
				paibox.style.transition = "none";
				paibox.style.left = "-200%";
				nP=5;
			}
		})
		paiBig.onmouseover = function(){
			clearInterval(timeP)
		}
		paiBig.onmouseout = function(){
			timeP = setInterval(function(){
				nP++;
				moveP()
			},1000)
		}
		rightBtnPai.onclick = function(){
			if(flagP){
				flagP = false;
				nP++;
				moveP();
			}
		}
		leftBtnPai.onclick = function(){
			if(flagP){
				flagP= false;
				nP--;
				moveP();
			}
		}
		
		
		
		//排行榜选项卡
		let paiXuan = document.querySelectorAll(".haohuo1 .content .tab-list ul li");
		let xiaXuan = document.querySelectorAll(".haohuo1 .content .comm-list-wrapper .comm-list");
		paiXuan.forEach(function(val,index){
			val.onclick = function(){
				xiaXuan.forEach(function(ele,key){
					ele.classList.remove("cur");
					xiaxuan[key].classList.remove("comm-list-cur");
				})
				paiXuan[index].classList.add("cur");
				xiaxuan[index].classList.add("comm-list-cur");
			}
		})
		
		
		//左侧边栏的隐藏显示
// 		let barx = document.querySelector(".aside-left");
// 		let lc1 = document.querySelector(".lcx");
// 		let root = document.documentElement;
// 		if(root.scrollTop >= lc1.offsetTop){
// 			barx.style.display = "block";
// 		}
// 		window.onscroll = function(){
// 			if(root.scrollTop >= lc1.offsetTop){
// 				setTimeout(function(){
// 					if(root === document.documentElement&&root.scrollTop != 0){
// 						barx.style.display = "block";
// 					}
// 				},1000)
// 			}else if(root.scrollTop == 0){
// 				barx.style.display = "none";
// 			}
// 		}
		
		
		//苏宁极物选项卡
		let smallXuan = document.querySelectorAll(".enter-v7 .video-area .small-show ul li");
		let bigXuan = document.querySelectorAll(".enter-v7 .video-area .big-show ul li");
		smallXuan.forEach(function(val,index){
			val.onmouseover = function(){
				bigXuan[index].classList.add("cur")
			}
			val.onmouseout = function(){
				bigXuan[index].classList.remove("cur")
			}
		})
}