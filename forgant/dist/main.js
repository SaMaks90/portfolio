"use strict";var object={currency:{usd:["ETHUSD","LTCUSD","BTCUSD"],eur:["ETHEUR","LTCEUR","BTCEUR"],rub:["ETHRUB","LTCRUB","BTCRUB"],gbp:["ETHGBP","LTCGBP","BTCGBP"]},defaultCurrency:"usd",selectCurrency:null,unit:["percent","price"],symbol:{usd:"36",eur:"8364",rub:"8381",gbp:"163",percent:"37"},period:["hour","day","week","month"],api:"https://apiv2.bitcoinaverage.com/indices/global/ticker/"},select={selectDefault:document.querySelector(".currency-usd__label"),checked:"usd",lastClick:null},dataObj=void 0,header=document.querySelector(".select__item"),switchPrecent=document.querySelector(".block-coin"),switchPrecentAll=Array.from(document.querySelectorAll(".switch input"));function show_hide(){var e=document.querySelector(".select__item").style;"none"===e.display||""===e.display?e.display="flex":e.display="none"}function hide(e){null===select.lastClick&&select.checked===e.target.value||(select.lastClick=e.target.value,document.querySelector(".currency-usd__label").textContent=e.target.value,document.querySelector(".select__item").style.display="none",object.selectCurrency=e.target.value,void 0!==e.target.value&&inquiry(object,e.target.value))}function startInquiry(e){inquiry(e,e.defaultCurrency||e.selectCurrency)}function inquiry(e,t){e.currency[t].map(function(c){fetch(e.api+c).then(function(e){if(e.ok)return e.json();throw new Error("Error fetching data")}).then(function(r){var n=c.toLowerCase().slice(0,3);document.querySelector("."+n+"-price__value").textContent=""+String.fromCharCode(e.symbol[t])+r.last.toFixed(2),document.querySelector('.switch input[value="'+n+'"]').checked?periodChange(e,n,r,e.unit[1]):periodChange(e,n,r,e.unit[0])}).catch(function(e){console.log("Error:"+e)})})}function switchChange(e){switchPrecentAll.find(function(t){return t===e.target})&&startInquiry(object)}function periodChange(e,t,c,r){var n=void 0;e.period.map(function(u){n=c.changes[r][u].toFixed(2),r===e.unit[0]?document.querySelector("."+t+"-"+u+"-change__value").textContent=""+(n+String.fromCharCode(e.symbol[r])):document.querySelector("."+t+"-"+u+"-change__value").textContent=""+(n+String.fromCharCode(e.symbol[e.selectCurrency||e.defaultCurrency])),+n>0?document.querySelector("."+t+"-"+u+"-change__value").classList.add("plus"):+n<0&&document.querySelector("."+t+"-"+u+"-change__value").classList.add("minus")})}select.selectDefault.addEventListener("click",show_hide),header.addEventListener("click",hide),switchPrecent.addEventListener("click",switchChange),startInquiry(object);