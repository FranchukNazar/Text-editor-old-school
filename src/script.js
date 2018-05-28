let getClass = function (a, b) {
    return document.getElementsByClassName(a)[b];
}

let getId = function (a) {
    return document.getElementById(a);
}

let colors = ['red', 'blue', 'green', 'black', 'yellow', 'gray', 'white', 'blueviolet', 'aquamarine'];
let pictures = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/8.jpg'];


for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
    getClass('box', i).style.backgroundColor = colors[i];
}

for (let i = 0; i < document.getElementsByClassName('box1').length; i++) {
    getClass('box1', i).style.backgroundColor = colors[i];
}






































































// let screenText = getId('screen');
// let radioFS = document.getElementsByName('radioFS');
// let fontFamily = getId('fontFamily');
// let buttonTextColor = getId('buttonTextColor');
// let buttonTextBGC = getId('buttonTextBGC');
// let radioTL = document.getElementsByName('radioTL');
// let textNumberLines;
// let textNumberColumns;
// let textWidthColumns;
// let textHightLines;
// let textWidthBorder;
// let borderType = getId('borderType');
// let borderColor = getId('borderColor');
// let borCol = 'black';
// var borderStyle = 'solid';
// let textNumList;
// let markType = getId('markType');
// let mark = 'circle';
// let switchColorScreen = 0;
// let onWindow = 0;
// getId('buttonMutate').onclick = function () {
//     getId('textArea').value = getId('screen').innerHTML;
//     getId('formArea').style.display = 'block';
//     getId('formStyle').style.display = 'none';
// }
// getId('buttonStyle').onclick = function () {
//     getId('formArea').style.display = 'none';
//     getId('formStyle').style.display = 'block';
// }
// getId('buttonSave').onclick = function () {
//     getId('screen').innerHTML = '';
//     getId('screen').innerHTML += getId('textArea').value;
//     getId('textArea').value = '';
//     getId('formArea').style.display = 'none';
// }
// for (let i = 0; i < radioFS.length; i++) {
//     radioFS[i].onclick = function () {
//         screenText.style.fontSize = radioFS[i].value;
//     }
// }
// fontFamily.onchange = function () {
//     for (let i = 0; i < fontFamily.options.length; i++) {
//         if (fontFamily.options[i].selected) {
//             screenText.style.fontFamily = fontFamily.options[i].value;
//         }
//     }
// }
// buttonTextColor.onclick = function () {
//     getId('boxColor').style.display = 'flex';
// }
// buttonTextBGC.onclick = function () {
//     getId('boxBgColor').style.display = 'flex';
// }

// for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
//     document.getElementsByClassName('box')[i].onclick = function () {
//         screenText.style.color = document.getElementsByClassName('box')[i].style.backgroundColor;
//         getId('boxColor').style.display = 'none';
//     }
// }
// for (let i = 0; i < document.getElementsByClassName('box1').length; i++) {
//     document.getElementsByClassName('box1')[i].onclick = function () {
//         getId('container1').style.backgroundColor = document.getElementsByClassName('box1')[i].style.backgroundColor;
//         getId('boxBgColor').style.display = 'none';
//     }
// }

// getId('checkboxCursive').onclick = function () {
//     if (getId('checkboxCursive').checked) {
//         screenText.style.fontStyle = 'italic';
//     }
//     else {
//         screenText.style.fontStyle = 'normal';
//     }
// }
// getId('checkboxBold').onclick = function () {
//     if (getId('checkboxBold').checked == true) {
//         screenText.style.fontWeight = 'bold';
//     }
//     else {
//         screenText.style.fontWeight = 'normal';
//     }
// }
// getId('buttonAdd').onclick = function () {
//     getId('container1').style.display = 'none';
//     getId('container2').style.display = 'none';
//     getId('formStyleMutate').style.display = 'none';
//     getId('container3').style.display = 'block';
// }
// console.log(radioTL[0]);
// radioTL[0].onclick = function () {
//     getId('formTable').style.display = 'block';
//     getId('formList').style.display = 'none';
// }
// radioTL[1].onclick = function () {
//     getId('formTable').style.display = 'none';
//     getId('formList').style.display = 'block';
// }

// getId('buttonCreateTable').onclick = function () {
//     getId('textArea').value = getId('screen').innerHTML;
//     borderStyle = borderType.value || 'solid';
//     borCol = borderColor.value || 'black';
//     textNumberLines = +document.getElementsByName('textNumberLines')[0].value;
//     textNumberColumns = +document.getElementsByName('textNumberColumns')[0].value;
//     textWidthColumns = +document.getElementsByName('textWidthColumns')[0].value;
//     textHightLines = +document.getElementsByName('textHightLines')[0].value;
//     textWidthBorder = +document.getElementsByName('textWidthBorder')[0].value;
//     getId('textArea').value += '<table>';
//     for (let i = 0; i < textNumberLines; i++) {
//         getId('textArea').value += '<tr>';
//         for (let j = 0; j < textNumberColumns; j++) {
//             getId('textArea').value += '<td style="height:' + textHightLines + 'px;' + ' width:' + textWidthColumns + 'px; ' + 'border: ' + textWidthBorder + 'px ' + borderStyle + ' ' + borCol + '">' + "</td>";
//         }
//         getId('textArea').value += "</tr>";
//     }
//     getId('textArea').value += '</table>';
//     getId('container1').style.display = 'block';
//     getId('container2').style.display = 'block';
//     getId('formStyleMutate').style.display = 'flex';
//     getId('container3').style.display = 'none';
// }
// getId('buttonCreateList').onclick = function () {
//     getId('textArea').value = getId('screen').innerHTML;
//     mark = markType.value || 'circle';
//     textNumberList = +document.getElementsByName('textNumberList')[0].value;
//     getId('textArea').value += '<ul type="' + mark + '">';
//     for (let i = 0; i < textNumberList; i++) {
//         getId('textArea').value += '<li>';
//         getId('textArea').value += '<p>Text<p/>';
//         getId('textArea').value += "</li>";
//     }
//     getId('textArea').value += '</ul>';
//     getId('container1').style.display = 'block';
//     getId('container2').style.display = 'block';
//     getId('formStyleMutate').style.display = 'flex';
//     getId('container3').style.display = 'none';
// }

// document.body.onclick = function (e) {
//     e = e || window.event;
//     target = e.target || e.srcElement;
//     if (target.id == "buttonTextColor") {
//         getId('boxColor').style.display = 'flex';
//     } else {
//         getId('boxColor').style.display = 'none';
//     }
//     if (target.id == "buttonTextBGC") {
//         getId('boxBgColor').style.display = 'flex';
//     } else {
//         getId('boxBgColor').style.display = 'none';
//     }
// }