"use strict";var arr=[5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13],rightLine=document.querySelectorAll(".value-right"),left=15;function rightValue(){for(var r=Array.from(rightLine),e=0;e<r.length;e++)addStyle(r[e],e),e===r.length-1&&(left=15)}function addStyle(r,e){r.style.left=left+"px",left+=15,r.style.height=10*arr[e]+"px",arr[e]>=0&&arr[e]<=5?r.style.background="green":arr[e]>=6&&arr[e]<=10?r.style.background="yellow":arr[e]>=11&&(r.style.background="red")}rightValue();