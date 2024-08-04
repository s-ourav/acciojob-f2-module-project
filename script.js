console.log("JS")
const nam=document.getElementById('nam');
const age=document.getElementById('age');
const prof=document.getElementById('prof');
const submit=document.getElementById('submit');
const msgb=document.getElementById('msg');
const output =document .getElementById('output')
const table=document.getElementsByTagName('table')[0]
const tableId=document.getElementById('table')

outputarray=[]
count=0
window.addEventListener('load',()=>{
    row= document.createElement('row')
    td=document.createElement('td')
    td.innerText="You have 0 employees added"
    row.appendChild(td)
    if(outputarray.length==0){
        table.innerHTML=''
        table.appendChild(row)
    }
})
submit.addEventListener("click", () =>
{   console.log("submitted");
    nameval= nam.value 
    ageval=age.value
    profval=prof.value

    if(nameval.trim()=="" || ageval.trim()=="" || profval.trim()==""){
        const msg=document.createElement('h3')
        msg.innerText="Error ! Please make sure all the fields are filled before adding an employee";
        msg.className="error"
        msgb.innerHTML=''
        msgb.appendChild(msg)
    }
    else{
        const msg=document.createElement('h3')
        msg.innerText="Success : Employee Added";
        msg.className="success"
        msgb.innerHTML=''
        msgb.appendChild(msg)
        
        count++
        outputarray.push({"id":count,"name":nameval,"age":ageval,"prof":profval})
        button=document.createElement('button')
        button.id=outputarray[count-1].id
        button.innerText="Delete User" + button.id
        button.className="delButton"
        outputarray[count-1].button = button
        button.addEventListener( "click" ,deleteRow )
        displayUpdatedTable()    
    }
})
    function deleteRow (e){
        curRowId=e.target.id
        outputarray = outputarray.filter((obj) => Number(obj.id) != Number(e.target.id));
        displayUpdatedTable()
    }

    function displayUpdatedTable(){
        table.innerHTML=''
        for(obj of outputarray){
            console.log(obj)
            row=document.createElement('tr')
            row.id=obj.id

            idd=document.createElement('td')
            idd.innerText=obj.id
            row.appendChild(idd)

            namd=document.createElement('td')
            namd.innerText=obj.name
            row.appendChild(namd)

            aged=document.createElement('td')
            aged.innerText=obj.age
            row.appendChild(aged)

            profd=document.createElement('td')
            profd.innerText=obj.prof
            row.appendChild(profd)
            
            delrow=document.createElement('td')
            // button=document.createElement('button')
            // button.id=obj.id
            // button.innerText="Delete User" + button.id
            // button.className="delButton"
            delrow.appendChild(obj.button)

            row.appendChild(delrow)
            row.className='tr'
            
            table.appendChild(row)
            // console.log(row)
        }
        
    }


