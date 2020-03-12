/*
    Subject: COMP-125
    Project Name: Assignment 4 
    Author: Peitong Liu 
    ID: 300913117
*/
"use strict";
//Regex for fields.
//None of the regex works so far, had to go primitive. --2020/03/12 
var regexForPhone = /^[0-9]{10}$/;
var regexCdnZip = /^([A-Z]\d[A-Z]\s?\d[A-Z]\d)$/;
var regexUsaZip = /^[0-9]{5}$/;
var regexEmail = /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-z]{2,6})$/;
var regexPwd = /"^[a-zA-Z0-9]{8,12}$/;
var regexName = /^[A-Z][a-z]{3,19}$/;
function checkFName(){
    var fnInput = document.getElementById("inputFN");
    var fnLabel = document.getElementById("lblFN");
	var fnCell = document.getElementById("cellFN");
    try{
        if (fnInput.value.length < 3 || fnInput.value.length > 19){
            throw "Invalid first name!";
        }
        fnCell.style.background = "";                
        fnLabel.innerHTML = "First Name";        
    }
    catch(msg){
        fnLabel.innerHTML = msg;
        fnCell.style.background = "rgb(255,233,233)";
    }
}
function checkLName(){
    var lnInput = document.getElementById("inputLN");    
    var lnLabel = document.getElementById("lblLN");
	var lnCell = document.getElementById("cellLN");
    try{
        if (lnInput.value.length < 3 || lnInput.value.length > 19){
            throw "Invalid last name!";
        }
        lnCell.style.background = "";                
        lnLabel.innerHTML = "Last Name";        
    }
    catch(msg){
        lnLabel.innerHTML = msg;
        lnCell.style.background = "rgb(255,233,233)";
    }
}
function checkPassword1(){
	var pw1Input = document.getElementById("inputPW1");
	var pw1Label = document.getElementById("lblPW1");
	var pw1Cell = document.getElementById("cellPW1");
	try{
		if (pw1Input.value.length < 8 || 
			pw1Input.value.length > 12 || 
			pw1Input.value.search(".") === -1 || 
			pw1Input.value.search("/") === -1){
			throw "Invalid Password!";
		}
		pw1Cell.style.background = "";
		pw1Label.innerHTML = "Password";
	}
	catch(msg){
		pw1Label.innerHTML = msg;
		pw1Cell.style.background = "rgb(255,233,233)";
	}
}
function checkPassword2(){
	var pw1Input = document.getElementById("inputPW1");
	var pw2Input = document.getElementById("inputPW2");
	var pw2Label = document.getElementById("lblPW2");
	var pw2Cell = document.getElementById("lblPW2");
	try{
		if(pw2Input.value !== pw1Input.value){
			throw "Password does not match!";
		}
		pw2Cell.style.background = "";
		pw2Label.innerHTML = "Confirm Password"
	}
	catch(msg){
		pw2Label.innerHTML = msg;
		pw2Cell.style.background = "rgb(255,233,233)";
	}
}
function checkEmail(){
    var emInput = document.getElementById("inputEM");
	var emLabel = document.getElementById("lblEM");
	var emCell = document.getElementById("cellEM");
	try{
		if (emInput.value.length < 8 || 
			emInput.value.length > 12 || 
			emInput.search("@") === -1 || 
			emInput.search(".") === -1){
			throw "Invalid E-mail";
		}
		emCell.style.background = "";
		emLabel.innerHTML = "E-mail"
	}
	catch(msg){
		emLabel.innerHTML = msg;
		emCell.style.background = "rgb(255,233,233)";
	}
}
function checkPhone(){
    var pnInput = document.getElementById("inputPN");
	var pnLabel = document.getElementById("lblPN");
	var pnCell = document.getElementById("cellPN");
	try{
		if (isNaN(pnInput) === true || pnInput.value.length !== 10){
			throw "Invalid phone number!";
		}
		pnCell.style.background = "";
		pnLabel.innerHTML = "Phone Number&#40;Numbers Only&#41;";
	}
	catch(msg){
		pnLabel.innerHTML = msg;
		pnCell.style.background = "rgb(255,233,233)";
	}
}
function checkPost(){
	var pcInput = document.getElementById("inputPC");
	var pcInputChar = toString(pcInput);
	var pcLabel = document.getElementById("lblPC");
	var pcCell = document.getElementById("cellPC");
	var cdnPost = regexCdnZip.test(pcInput);
	var usaPost = regexUsaZip.test(pcInput);
	try{
		if(isNaN(pcInput) === false && pcInput.value.length !== 5){
			if(isNaN(pcInputChar.charAt(0)) === true || isNaN(pcInputChar.charAt(2)) === true || isNaN(pcInputChar.charAt(4)) === true){
				throw "Invalid Canada postal code!";
			}
			continue;
			throw "Invalid US postal code!";
		} else 
		pcCell.style.background = "";
		pcLabel.innerHTML = "Postal Code/Zip Code&#40;No space&#41;";
	}
	catch(msg){
		pcLabel.innerHTML = msg;
		pcCell.style.background = "rgb(255,233,233)"
	}
}
function createEventListeners(){
    var fn = document.getElementById("inputFN");
    var ln = document.getElementById("inputLN");
    var em = document.getElementById("inputEM");
	var pwd1 = document.getElementById("inputPW1");
	var pwd2 = document.getElementById("inputPW2");
	var pn = document.getElementById("inputPN");
	var pc = document.getElementById("inputPC");
    if (fn.addEventListener){
        fn.addEventListener("change", checkFName, false);
        ln.addEventListener("change", checkLName, false);
        em.addEventListener("change", checkEmail, false);
		pwd1.addEventListener("change", checkPassword1, false);
		pwd2.addEventListener("change", checkPassword2, false);
		pn.addEventListener("change", checkPhone, false);
		pc.addEventListener("change", checkPost, false);
    }
	else if(fn.attachEvent){
        fn.attachEvent("onchange", checkFName);
        ln.attachEvent("onchange", checkNames);
        em.attachEvenet("onchange", checkEmail);
		pwd1.attachEvenet("onchange", checkPassword1);
		pwd2.attachEvenet("onchange", checkPassword2);
		pn.attachEvenet("onchange", checkPhone);
		pc.attachEvenet("onchange", checkPost);
    }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}




















