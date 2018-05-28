let getClass = function (a, b) {
    return document.getElementsByClassName(a)[b];
}

let getId = function (a) {
    return document.getElementById(a);
}
//main variables 

let container1 = getId('container1');
let container2 = getId('container2');

// made backgrounds to boxes

let colors = ['red', 'blue', 'green', 'black', 'white', 'gray', 'yellow', 'blueviolet', 'aquamarine'];
let pictures = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/51.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg'];


for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
    getClass('box', i).style.backgroundColor = colors[i];
}

for (let i = 0; i < document.getElementsByClassName('box1').length; i++) {
    getClass('box1', i).style.backgroundColor = colors[i];
}
for (let i = 0; i < document.getElementsByClassName('box2').length; i++) {
    getClass('box2', i).style.background = 'url('+ pictures[i] +')';
    getClass('box2', i).style.backgroundSize = '100% 100%';
}

getId('buttonBold').addEventListener('click', () => {
    container1.style.fontWeight = 'bold';
    getId('buttonBold').style.backgroundColor = 'white';
    getId('buttonBold').style.color = 'green';
}, true);
// getId('buttonBold').addEventListener('click', () => {
//     container1.style.fontWeight = 'normal';
//     getId('buttonBold').style.backgroundColor = 'green';
//     getId('buttonBold').style.color = 'white';
// }, false);
getId('buttomItalic').addEventListener('click', () => {
    container1.style.fontStyle = 'italic';
    getId('buttomItalic').style.backgroundColor = 'white';
    getId('buttomItalic').style.color = 'green';
}, true);

getId('buttonUnderline').addEventListener('click', () => {
    container1.style.textDecoration = 'underline';
    getId('buttonUnderline').style.backgroundColor = 'white';
    getId('buttonUnderline').style.color = 'green';
}, true);



getId('selectFontFamily').addEventListener('change', () => {
    for (let i = 0; i < getId('selectFontFamily').options.length; i++) {
        if (getId('selectFontFamily').options[i].selected) {
            container1.style.fontFamily = getId('selectFontFamily').options[i].value;
        }
    }
});

getId('selectFontSize').addEventListener('change', () => {
    for (let i = 0; i < getId('selectFontSize').options.length; i++) {
        if (getId('selectFontSize').options[i].selected) {
            container1.style.fontSize = getId('selectFontSize').options[i].value;
        }
    }
});

for (let i = 0; i < document.getElementsByClassName('radioTextAlign').length; i++) {
    document.getElementsByClassName('radioTextAlign')[i].addEventListener('click', ()=> {
        container1.style.textAlign =  document.getElementsByClassName('radioTextAlign')[i].value;
    });
}

getId('buttonTextColor').addEventListener('click', () => {
    getId('boxes').style.display = 'block';
    getId('boxColor').style.display = 'flex';
    getId('buttonTextColor').style.backgroundColor = 'white';
    getId('buttonTextColor').style.color = 'green';
});

for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
    document.getElementsByClassName('box')[i].addEventListener('click', () => {
        container1.style.color = document.getElementsByClassName('box')[i].style.backgroundColor;
        getId('boxes').style.display = 'none';
        getId('boxColor').style.display = 'none';
        getId('buttonTextColor').style.backgroundColor = 'green';
        getId('buttonTextColor').style.color = 'white';
    });
}

getId('buttonTextBGC').addEventListener('click', () => {
    getId('boxes').style.display = 'block';
    getId('boxBgColor').style.display = 'flex';
    getId('buttonTextBGC').style.backgroundColor = 'white';
    getId('buttonTextBGC').style.color = 'green';
}, );

for (let i = 0; i < document.getElementsByClassName('box1').length; i++) {
    document.getElementsByClassName('box1')[i].addEventListener('click', () => {
        container1.style.backgroundColor = document.getElementsByClassName('box1')[i].style.backgroundColor;
        getId('boxes').style.display = 'none';
        getId('boxBgColor').style.display = 'none';
        getId('buttonTextBGC').style.backgroundColor = 'green';
        getId('buttonTextBGC').style.color = 'white';
    });
}

getId('buttonImg').addEventListener('click', () => {
    getId('boxBgColor').style.display = 'none';
    getId('boxIMG').style.display = 'flex';
    getId('buttonImg').style.backgroundColor = 'white';
    getId('buttonImg').style.color = 'green';
});

for (let i = 0; i < document.getElementsByClassName('box2').length; i++) {
    document.getElementsByClassName('box2')[i].addEventListener('click', () => {
        container1.style.background = document.getElementsByClassName('box2')[i].style.background;
    });
}


getId('file').addEventListener('change', () => {
    container1.style.background = 'url(' + getId('file').selected  + ')';
});

getId('buttonMutate').addEventListener('click',()=>{
    container1.style.display = 'none';
    container2.style.display = 'block';
    getId('formMain').style.display = 'none';
    getId('formEdit').style.display = 'flex';
    getId('textArea').value = container1.innerHTML;
});
getId('buttonSave').addEventListener('click',()=>{
    container1.innerHTML = '';
    container1.innerHTML += getId('textArea').value;
    getId('textArea').value = '';
    container1.style.display = 'block';
    container2.style.display = 'none';
    getId('formMain').style.display = 'flex';
    getId('formEdit').style.display = 'none';
});

getId('buttonCreateBoxTable').addEventListener('click',()=>{
    getId('boxes').style.display = 'block';
    getId('containerTable').style.display = 'flex';
});
let tableNumberRows;
let tableNumberColumns;
let tableWidth;
let tabletHight;
let tableCellspacing;
let tableWidthBorder;
let tableColorBorder;
let listNumber;
let a = 0;
let mark;

getId('buttonCreateTable').addEventListener('click',()=>{
    getId('boxes').style.display = 'none';
    getId('containerTable').style.display = 'none';
    tableNumberRows = +getId('TableNumberRows').value;
    tableNumberColumns = +getId('TableNumberColumns').value;
    tableWidth = +getId('TableWidth').value;
    tabletHight = +getId('TabletHight').value;
    tableCellspacing = +getId('TableCellspacing').value;
    tableWidthBorder = +getId('TableWidthBorder').value;
    tableColorBorder = getId('TableColorBorder').value;
    getId('textArea').value = getId('container1').innerHTML;   
    getId('textArea').value += '<table cellspacing="'+ tableCellspacing +'">';
    for (let i = 0; i < tableNumberRows; i++) {
        getId('textArea').value += '<tr>';
        for (let j = 0; j < tableNumberColumns; j++) {
            getId('textArea').value += '<td style="height:' + tabletHight + 'px;' + ' width:' + tableWidth + 'px; ' + 'border: ' + tableWidthBorder + 'px ' + 'solid ' + ' ' + tableColorBorder + '">' + "</td>";
        }
        getId('textArea').value += "</tr>";
    }
    getId('textArea').value += '</table>';
});

getId('resetTable').addEventListener('click',()=>{
    getId('TableNumberRows').value = '';
    getId('TableNumberColumns').value = '';
    getId('TableWidth').value = '';
    getId('TabletHight').value = '';
    getId('TableCellspacing').value = '';
    getId('TableWidthBorder').value = '';
    getId('TableColorBorder').value = '';
});


getId('buttonCreateBoxList').addEventListener('click',()=>{
    getId('boxes').style.display = 'block';
    getId('containerList').style.display = 'block';
    getId('selectMarkUl').style.display = 'block';
    getId('selectMarkOl').style.display = 'none';
});


for (let i = 0; i < document.getElementsByClassName('radioTextAlign').length; i++) {
    document.getElementsByClassName('radioTextAlign')[i].addEventListener('click', ()=> {
        container1.style.textAlign =  document.getElementsByClassName('radioTextAlign')[i].value;
    });
}

getClass('Ol', 0).addEventListener('click',() => {
    getId('selectMarkOl').style.display = 'block';
    getId('selectMarkUl').style.display = 'none';
    a = 1;
});
getClass('Ul', 0).addEventListener('click',() => {
    getId('selectMarkOl').style.display = 'none';
    getId('selectMarkUl').style.display = 'block';
    a = 0;
});


getId('buttonCreateList').addEventListener('click',()=>{
    getId('boxes').style.display = 'none';
    getId('containerList').style.display = 'none';
    getId('textArea').value = getId('container1').innerHTML;
    listNumber = +getId('listNumber').value;

    if(a === 0){
        mark = getId('selectMarkUl').value;
        getId('textArea').value += '<ul type="' + mark + '">';
        for (let i = 0; i < listNumber; i++) {
            getId('textArea').value += ' <li>';
            getId('textArea').value += ' <p> Text <p/>';
            getId('textArea').value += " </li> ";
        }
        getId('textArea').value += '</ul>'; 
    }
    if(a === 1){
        mark = getId('selectMarkOl').value;
        getId('textArea').value += '<ol type="' + mark + '">';
        for (let i = 0; i < listNumber; i++) {
            getId('textArea').value += ' <li>';
            getId('textArea').value += ' <p> Text <p/>';
            getId('textArea').value += " /li>";
        }
        getId('textArea').value += '</ol>'; 
    }
});

getId('resetList').addEventListener('click',()=>{
    getId('listNumber').value = '';
    getId('selectMarkUl').value = 'disc' ;
    getId('selectMarkOl').value = 'decimal';
});










































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