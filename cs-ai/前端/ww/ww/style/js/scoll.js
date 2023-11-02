//  实现图片滚动和轮播

var Speed_1 = 100; //速度(毫秒)
var Space_1 = 20; //每次移动(px)

/*
    如果可视宽度大于 1500 像素，那么将 PageWidth_1 的值设置为 366。
    如果可视宽度介于 1150 像素和 1500 像素之间,那么将 PageWidth_1 的值设置为 326。
    如果可视宽度小于等于 1150 像素，那么将 PageWidth_1 的值设置为 366。
*/
if (document.documentElement.clientWidth>1500)
{
var PageWidth_1 = 366 * 1; //翻页宽度
}
else if (document.documentElement.clientWidth>1150) 
{
var PageWidth_1 = 326 * 1; //翻页宽度
}
else 
{
var PageWidth_1 = 366 * 1; //翻页宽度
}


var interval_1 = 3000; //翻页间隔时间
var fill_1 = 0; //整体移位
var MoveLock_1 = false;
var MoveTimeObj_1;
var MoveWay_1="right";
var Comp_1 = 0;
var AutoPlayObj_1=null;


function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay_1(){clearInterval(AutoPlayObj_1);AutoPlayObj_1=setInterval('ISL_GoDown_1();ISL_StopDown_1();',interval_1)}
function ISL_GoUp_1(){if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="left";MoveTimeObj_1=setInterval('ISL_ScrUp_1();',Speed_1);}
function ISL_StopUp_1(){if(MoveWay_1 == "right"){return};clearInterval(MoveTimeObj_1);if((GetObj('ISL_Cont_11').scrollLeft-fill_1)%PageWidth_1!=0){Comp_1=fill_1-(GetObj('ISL_Cont_11').scrollLeft%PageWidth_1);CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrUp_1(){if(GetObj('ISL_Cont_11').scrollLeft<=0){GetObj('ISL_Cont_11').scrollLeft=GetObj('ISL_Cont_11').scrollLeft+GetObj('List1_1').offsetWidth}
GetObj('ISL_Cont_11').scrollLeft-=Space_1}
function ISL_GoDown_1(){clearInterval(MoveTimeObj_1);if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="right";ISL_ScrDown_1();MoveTimeObj_1=setInterval('ISL_ScrDown_1()',Speed_1)}
function ISL_StopDown_1(){if(MoveWay_1 == "left"){return};clearInterval(MoveTimeObj_1);if(GetObj('ISL_Cont_11').scrollLeft%PageWidth_1-(fill_1>=0?fill_1:fill_1+1)!=0){Comp_1=PageWidth_1-GetObj('ISL_Cont_11').scrollLeft%PageWidth_1+fill_1;CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrDown_1(){if(GetObj('ISL_Cont_11').scrollLeft>=GetObj('List1_1').scrollWidth){GetObj('ISL_Cont_11').scrollLeft=GetObj('ISL_Cont_11').scrollLeft-GetObj('List1_1').scrollWidth}
GetObj('ISL_Cont_11').scrollLeft+=Space_1}
function CompScr_1(){if(Comp_1==0){MoveLock_1=false;return}
var num,TempSpeed=Speed_1,TempSpace=Space_1;if(Math.abs(Comp_1)<PageWidth_1/2){TempSpace=Math.round(Math.abs(Comp_1/Space_1));if(TempSpace<1){TempSpace=1}}
if(Comp_1<0){if(Comp_1<-TempSpace){Comp_1+=TempSpace;num=TempSpace}else{num=-Comp_1;Comp_1=0}
GetObj('ISL_Cont_11').scrollLeft-=num;setTimeout('CompScr_1()',TempSpeed)}else{if(Comp_1>TempSpace){Comp_1-=TempSpace;num=TempSpace}else{num=Comp_1;Comp_1=0}
GetObj('ISL_Cont_11').scrollLeft+=num;setTimeout('CompScr_1()',TempSpeed)}}
function picrun_ini(){
GetObj("List2_1").innerHTML=GetObj("List1_1").innerHTML;
GetObj('ISL_Cont_11').scrollLeft=fill_1>=0?fill_1:GetObj('List1_1').scrollWidth-Math.abs(fill_1);
GetObj("ISL_Cont_11").onmouseover=function(){clearInterval(AutoPlayObj_1)}
GetObj("ISL_Cont_11").onmouseout=function(){AutoPlay_1()}
AutoPlay_1();

}