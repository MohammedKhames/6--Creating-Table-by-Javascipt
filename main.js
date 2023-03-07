

let rowInput = document.getElementById("rows");
let colInput = document.getElementById("cols");
let btn = document.getElementById("btn");




btn.addEventListener("click",CreateTable);

function CreateTable(){
  
  
  // creating table in body
  let body=document.body;
  let table = document.createElement("table");
  body.appendChild(table);
  
  
  //creating tr in table
  for(var i=0; i< +rowInput.value; i++){
    let tr = document.createElement("tr");
    table.appendChild(tr);
 
    
    //creating td in tr
    for(var j=0; j< +colInput.value; j++){
    let td = document.createElement("td");
    tr.appendChild(td);
    
    
    // creating txt in td
    let txt= document.createTextNode(`item`);
    td.appendChild(txt);

    
  
    }
    
    
    
  }
  

  
  
}


  


