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


// to understand if we login
let loginer = false;

// if user write correct name: Nazar, password: 1111
getId('enter').addEventListener('click', () => {
    let name = getId('userName').value;
    let password = getId('userPassword').value;
    if(name === 'Nazar'&& password === '1111'){
        getId('containerBoxes').style.backgroundColor = '#00000061';
        getId('containerBoxes').style.display = 'none';
        getId('userEnter').style.display = 'none';
        getId('userName').value = '';
        getId('userPassword').value= '';
        loginer = true;
    } else {
        getId('containerBoxes').style.backgroundColor = '#ff0000c7';
        alert('PUT CORRECT NAME and PASSWORD');
        
    }
})




getId('buttonBlock').addEventListener('click', () => {
    getId('boxes').style.display = 'block';
    getId('containerBoxes').style.display = 'block';
    getId('userEnter').style.display = 'block';
    getId('containerTable').style.display = 'none';
    getId('containerList').style.display = 'none';
    getId('boxBgColor').style.display = 'none';
    getId('boxColor').style.display = 'none';
    getId('boxIMG').style.display = 'none';
    getId('userName').value = '';
    getId('userPassword').value= '';
    loginer = false;
});


getId('containerBoxes').addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.id == 'containerBoxes' && e.target.id != 'boxes' && loginer) {
        getId('boxes').style.display = 'none';
        getId('containerBoxes').style.display = 'none';
    }
})



// switch text to bold and back
getId('buttonBold').addEventListener('click', () => {
    getId('buttonBold').classList.toggle('btnGreen');
    container1.classList.toggle('bold');
})
getId('buttonItalic').addEventListener('click', () => {
    getId('buttonItalic').classList.toggle('btnGreen');
    container1.classList.toggle('italic');
})
getId('buttonUnderline').addEventListener('click', () => {
    getId('buttonUnderline').classList.toggle('btnGreen');
    container1.classList.toggle('underline');
})



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
    getId('containerBoxes').style.display = 'block';
    getId('userEnter').style.display = 'none';
    getId('boxColor').style.display = 'flex';
    getId('boxBgColor').style.display = 'none';
    getId('containerTable').style.display = 'none';
    getId('containerList').style.display = 'none';
    getId('boxIMG').style.display = 'none';
});

for (let i = 0; i < document.getElementsByClassName('box').length; i++) {
    document.getElementsByClassName('box')[i].addEventListener('click', () => {
        container1.style.color = document.getElementsByClassName('box')[i].style.backgroundColor;
        getId('boxes').style.display = 'none';
        getId('boxColor').style.display = 'none';
        getId('buttonTextColor').style.backgroundColor = 'green';
        getId('buttonTextColor').style.color = 'white';
        getId('containerBoxes').style.display = 'none';
    });
}

getId('buttonTextBGC').addEventListener('click', () => {
    getId('userEnter').style.display = 'none';
    getId('containerBoxes').style.display = 'block';
    getId('boxes').style.display = 'block';
    getId('boxBgColor').style.display = 'flex';
    getId('boxColor').style.display = 'none';
    getId('containerTable').style.display = 'none';
    getId('containerList').style.display = 'none';
    getId('boxIMG').style.display = 'none';
}, );

for (let i = 0; i < document.getElementsByClassName('box1').length; i++) {
    document.getElementsByClassName('box1')[i].addEventListener('click', () => {
        container1.style.background = 'url()';
        container1.style.backgroundColor = document.getElementsByClassName('box1')[i].style.backgroundColor;
        getId('boxes').style.display = 'none';
        getId('boxBgColor').style.display = 'none';
        getId('buttonTextBGC').style.backgroundColor = 'green';
        getId('buttonTextBGC').style.color = 'white';
        getId('containerBoxes').style.display = 'none';
    });
}

getId('buttonImg').addEventListener('click', () => {
    getId('userEnter').style.display = 'none';
    getId('containerBoxes').style.display = 'block';
    getId('boxBgColor').style.display = 'none';
    getId('boxIMG').style.display = 'flex';
    getId('buttonImg').classList.toggle('btnGreen');
    getId('containerTable').style.display = 'none';
    getId('containerList').style.display = 'none';
});

for (let i = 0; i < document.getElementsByClassName('box2').length; i++) {
    document.getElementsByClassName('box2')[i].addEventListener('click', () => {
        container1.style.background = document.getElementsByClassName('box2')[i].style.background;
        getId('containerBoxes').style.display = 'none';
    });
}




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
    getId('containerBoxes').style.display = 'block';
    getId('userEnter').style.display = 'none';
    getId('boxes').style.display = 'block';
    getId('containerTable').style.display = 'flex';
    getId('containerList').style.display = 'none';
    getId('boxBgColor').style.display = 'none';
    getId('boxColor').style.display = 'none';
    getId('boxIMG').style.display = 'none';
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
    getId('containerBoxes').style.display = 'none';
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
    getId('containerBoxes').style.display = 'block';
    getId('userEnter').style.display = 'none';
    getId('boxes').style.display = 'block';
    getId('containerTable').style.display = 'none';
    getId('containerList').style.display = 'block';
    getId('selectMarkUl').style.display = 'block';
    getId('selectMarkOl').style.display = 'none';
    getId('boxBgColor').style.display = 'none';
    getId('boxColor').style.display = 'none';
    getId('boxIMG').style.display = 'none';
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
    getId('containerBoxes').style.display = 'none';
});

getId('resetList').addEventListener('click',()=>{
    getId('listNumber').value = '';
    getId('selectMarkUl').value = 'disc' ;
    getId('selectMarkOl').value = 'decimal';
});




// Upload img from computer to page

var files;
var reader = new FileReader();

getId('file').onchange = function () {
    files = getId('file').files;
    reader.readAsDataURL(files[0]);
};

reader.onload = function (e) {
    container1.style.background = 'url(' + reader.result + ')';
    getId('containerBoxes').style.display = 'none';
};



// && getId('userEnter').style.display === 'block' &&  getId('boxColor').style.display == 'none'











































