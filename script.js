console.log("JS")
const nam=document.getElementById('nam');
const age=document.getElementById('age');
const prof=document.getElementById('prof');
const submit=document.getElementById('submit');
const msgb=document.getElementById('msg');
const output =document .getElementById('output')
const table=document.getElementsByTagName('table')[0]
outputarray=[]
count=0

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
       
        count++
        outputarray.push({"id":count,"name":nameval,"age":ageval,"prof":profval, "buttid" :count})
        displayUpdatedTable()    
    }
})

    function displayUpdatedTable(){
        table.innerHTML=''
        for(obj of outputarray){
            console.log(obj)
            row=document.createElement('tr')
           

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
            button=document.createElement('button')
            button.id=obj.id
            button.innerText="Delete User" + button.id
            button.className="delButton"
           
            delrow.appendChild(button)

            row.appendChild(delrow)
            row.className='tr'
            table.appendChild(row)
        }
        
    }


