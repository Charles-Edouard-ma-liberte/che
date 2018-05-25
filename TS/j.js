// cette fonction maximise la taille de la fenetre sans gener...
// copyright ACIL Sarl, 1 place de Gaulle , 78400 Chatou, France
// ne pas copier sans autorisation

function maxWindow()
{
window.moveTo(0,0);
isReady=true;

if (document.all)
{
  top.window.resizeTo(screen.availWidth,screen.availHeight);
}

else if (document.layers||document.getElementById)
{
  if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth)
  {
    top.window.outerHeight = screen.availHeight;
    top.window.outerWidth = screen.availWidth;
  }
}
}

// a essayer...
// A HREF= "#" onClick="window.open('examples/sample.htm','Sample','toolbar=no,width=190,height=190,left=500,top=200, status=no,scrollbars=no,resize=no');return false">
// http://msdn.microsoft.com/library/default.asp?url=/library/en-us/htmlhelp/html/vsconOcxscriptsthumbnail.asp

function acwstopError() {
return true;
}

function StartLoad() {
maxWindow();
window.onerror = acwstopError;
if (parseInt(navigator.appVersion) >= 4) {
document.write('<DIV ID="retrievedata" window.onLoad="FinishLoad()" class=c><TABLE><TR><TD>Cette page est longue, veuillez patienter...<\/TD><\/TR><\/TABLE><\/DIV>');
} 
}

function FinishLoad() {
if (parseInt(navigator.appVersion) >= 4) {
if (navigator.appName == "Netscape") {
document.retrievedata.visibility = 'hide';
} else {
document.all.retrievedata.style.visibility = 'hidden';
}
}
}


//popUpTellFriend()
function PUTF() {
	var vars = 'locationbar=no,toolbar=no,titlebar=yes,scrollbars=no,resizeable=no,alwaysRaised=yes,directories=no,menubar=no,location=no,width=440,height=480';
	var RefererPage = 'http://www.granuloshop.com/putf.asp?p=' + location.href
	var newWin = open(RefererPage, 'Friend', vars);
}

// (C) 2000 www.CodeLifter.com

function printWindow(){
   bV = parseInt(navigator.appVersion)
   if (bV >= 4) window.print()
}

// Source: CodeFoot.com

//  var isReady = false;
function doSaveAs(){
if (document.execCommand){
if (isReady){document.execCommand("SaveAs");}
}else{
alert('Fonction disponible uniquement avec Internet Explorer 4.0 et plus.');
}
}

// fonction requise pour trouver les mots de recherche
function findInArray(val, ar)
{
	for(var i=0;i<ar.length;i++)
	{
		if(val.indexOf(ar[i]) != -1) return i;
	}
	return null;
}



function maxWindow(form)
{
window.moveTo(0,0);
isReady=true;

if (document.all)
{
  top.window.resizeTo(screen.availWidth,screen.availHeight);
}

else if (document.layers||document.getElementById)
{
  if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth)
  {
    top.window.outerHeight = screen.availHeight;
    top.window.outerWidth = screen.availWidth;
  }
}
}



function PopWindow()
{
window.moveTo(0,0);
isReady=true;

if (document.all)
{
  top.window.resizeTo(screen.availWidth/2,screen.availHeight*2/3);
}

else if (document.layers||document.getElementById)
{
  if (top.window.outerHeight<screen.availHeight*2/3||top.window.outerWidth<screen.availWidth/2)
  {
    top.window.outerHeight = screen.availHeight*2/3;
    top.window.outerWidth = screen.availWidth/2;
  }
}
}

function HelpWindow(PageName){
	newwin=window.open(PageName,"Help","height=600,width=480, toolbar=no, menubar=no, scrollbars=yes,resizable=yes");
}

// voir compléments sur cette méthode pour mettre en valeur les <TR> dans Highlight_251205.txt
// Copyright 2005 Google Inc.
// All rights reserved.
// Used in CampaignSummary.gxp

var rowWithMouse = null;

function isElemBox(elem) {
  // true if element is a relevant checkbox
  return (elem.id.indexOf("box_") == 0);
}

function getRowFromBox(box) {
  var row = null;
  if (box.parentNode && box.parentNode.parentNode) {
	row = box.parentNode.parentNode;
  } else if (box.parentElement && box.parentElement.parentElement) {
	row = box.parentElement.parentElement;
  }
  if (row != null && row.id.indexOf('tr_') == 0) {
	return row;
  }
  return document.getElementById('tr_' + box.id.substr(4));
}

function rowUpdateBg(row, box) {
  if (box && box.checked) {
	row.style.backgroundColor = "#DDE4F2";
  } else {
	row.style.backgroundColor = (row == rowWithMouse) ? '#FFFFD9' : '#FFFFFF';
  }
}

function rowSelect(row, box) {
  box.checked = true;
  if(row) { 
	rowUpdateBg(row, box); 
  }
}

function rowUnselect(row, box) {
  box.checked = false;
  if(row) { 
	rowUpdateBg(row, box);
  }
}

function rowRollover(myId, isInRow) {
  // myId is our own integer id, not the DOM id
  // isInRow is 1 for onmouseover, 0 for onmouseout
  var row = document.getElementById('tr_' + myId);
  var box = document.getElementById('box_' + myId);
  rowWithMouse = (isInRow) ? row : null;
  rowUpdateBg(row, box);
}

//shorter functions for rollover on and rollover out
function ron(myId) {
  rowRollover(myId, 1);
}

function roff(myId) {
  rowRollover(myId, 0);
}

function isAllSelected(f) {
  for (var i=0; i < f.elements.length; i++) {
	var box = f.elements[i];
	if (isElemBox(box) && box.checked == false) {
	  return false;
	}
  }
  return true;
}

function toggleRow(element) {
  rowToggle(element.value);
}

function rowToggle(myId) {
  var row = document.getElementById('tr_' + myId);
  var box = document.getElementById('box_' + myId);
  var f = box.form;
  if (box.checked == false) {
	rowSelect(row, box);
	f.toggleAll.checked = isAllSelected(f);
  } else {
	rowUnselect(row, box);
	f.toggleAll.checked = false;
  }
}

function rowToggleAll(tabox) {
  var f = tabox.form;
  for (var i=0; i < f.elements.length; i++) {
	var box = f.elements[i];
	if (isElemBox(box) && box.checked != tabox.checked) {
	  var row = getRowFromBox(box);
	  if (tabox.checked) {
		rowSelect(row, box);
	  } else {
		rowUnselect(row, box);
	  }
	}
  }
}

function initRolloverTables() {
  for (var i=0; i < document.forms.length; i++) {
	var f = document.forms[i];
	if (f.className == 'rollover' && f.toggleAll) {
	  for (var j=0; j < f.elements.length; j++) {
		var box = f.elements[j];
		if (isElemBox(box) && box.checked == true) {
		  var row = getRowFromBox(box);
		  rowUpdateBg(row, box);
		}
	  }
	  f.toggleAll.checked = isAllSelected(f);
	}
  }
}

var rolloverWarning = null;
function beforeRolloverSubmit(f, msg) {
  var numElemBoxes = 0;
  for (var i=0; i < f.elements.length; i++) {
	var box = f.elements[i];
	if (isElemBox(box)) {
	  numElemBoxes++;
	  if (box.checked == true) {
		if (rolloverWarning) {
		  var r = confirm(rolloverWarning);
		  rolloverWarning = null;
		  return r;
		}
		return true;
	  }
	}
  }
  if (numElemBoxes == 1) {
	<!-- If the table has only one row, automatically selects the row. -->
	  f.toggleAll.checked = true;
	rowToggleAll(f.toggleAll);
	if (rolloverWarning) {
	  var r = confirm(rolloverWarning);
	  rolloverWarning = null;
	  return r;
	}        
	return true;
  }
  alert(msg);
  rolloverWarning = null;
  return false;
}

