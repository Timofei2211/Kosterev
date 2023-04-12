    const rooms = {
    223:1,
    224:1,
    225:1,
    226:1,
    227:1,
    228:1,
    229:1,
    230:1,
    101:2,
    102:2,
    103:2,
    104:2,
    105:2,
    106:2,
    107:2,
    108:2,
    109:2,
    110:2,
    111:2,
    202:2,
    203:2,
    204:2,
    205:2,
    206:2,
    207:2,
    208:2,
    209:2,
    210:2,
    212:2,
    214:2,
    215:2,
    216:2,
    217:2,
    218:2,
    219:2,
    220:2,
    221:2,
    301:2,
    302:2,
    303:2,
    304:2,
    305:2,
    306:2,
    307:2,
    308:2,
    309:2,
    310:2,
    311:2,
    312:2,
    313:2,
    314:2,
    315:2,
    316:2,
    201:4,
    211:4,
    213:4,
    }
    
    /* let checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
    function getCheckedCheckBoxes() {
        let checkboxes = document.querySelectorAll('input:checked');
        for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
            //alert(checkboxes[index].value); // делайте что нужно - это для наглядности
        }
    } */

    let checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
    let checkboxesUnChecked = []; // можно в массиве их хранить, если нужно использовать 

    function makeUL(array) {
        // Create the list element:
        let list = document.createElement('li');
    
        for (let i = 0; i < array.length; i++) {
            // Create the list item:
            let item = document.createElement('ul');
    
            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));
    
            // Add it to the list:
            list.appendChild(item);
        }
    
        // Finally, return the constructed list:
        return list;
    }

    function getCheckedCheckBoxes() {
        for (const checkbox of document.getElementsByClassName('medium')) {
            //iterating over all matched elements
            
           if(checkbox.checked == true)
           {
                checkboxesChecked.push(checkbox.value); // положим в массив выбранный
              //  alert(checkboxesChecked.value); // делайте что нужно - это для наглядности
            
           } //for selection
           else if (checkbox.checked == false)//for unselection
           {
            checkboxesUnChecked.push(checkbox.value);
           // alert(checkboxesUnChecked.value); 
            }
        }
        console.log("Номера выездов : " + checkboxesChecked);
        console.log("Номера текущей уборки : " + checkboxesUnChecked);
        
        let maid1 = checkboxesChecked.filter(item=>item[0]=="1");
        let maid2 = checkboxesChecked.filter(item=>item[0]=="2");
        let maid3 = checkboxesChecked.filter(item=>item[0]=="3");
        
        while(maid1.length>maid2.length){
            maid2.push(maid1[maid1.length-1]);
            maid1.pop();
        } 
        while(maid2.length>maid3.length){
            maid3.push(maid2[maid2.length-1]);
            maid2.pop();
        } 
        while(maid3.length>maid1.length){
            maid1.push(maid3[maid3.length-1]);
            maid3.pop();
        } 
        while(maid1.length>maid2.length){
            maid2.push(maid1[maid1.length-1]);
            maid1.pop();
        } 
        while(maid2.length>maid3.length){
            maid3.push(maid2[maid2.length-1]);
            maid2.pop();
        } 
        while(maid3.length>maid1.length){
            maid1.push(maid3[maid3.length-1]);
            maid3.pop();
        } 

        console.log("1-я горничная : " + maid1);
        console.log("2-я горничная : " + maid2);
        console.log("3-я горничная : " + maid3);
        let textNode1 = document.createTextNode('1-я горничная : ');
        let textNode2 = document.createTextNode('2-я горничная : ');
        let textNode3 = document.createTextNode('3-я горничная : ');
        let textNode4 = document.createTextNode('4-я горничная : ');
        document.getElementById('newArray').append(textNode1);
        document.getElementById('newArray').appendChild(makeUL(maid1));
        document.getElementById('newArray').append(textNode2);
        document.getElementById('newArray').appendChild(makeUL(maid2));
        document.getElementById('newArray').append(textNode3);
        document.getElementById('newArray').appendChild(makeUL(maid3));
        document.getElementById('newArray').append(textNode4);

        //раздели номера на классы .ыаи
    }

