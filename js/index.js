const noteapp=document.getElementById('noteapp');
const addnote=document.getElementById('addnote');
const writeingboard=document.getElementById('writeingboard');
const closing=document.getElementById('closing');
const createnote=document.getElementById('createnote');
const noteinput=document.getElementById('noteinput');


// Add note functionality
addnote.addEventListener('click',function(){
    writeingboard.style.display="block"
    noteinput.focus();
    createnote.textContent='Create Note'
})

 
closing.addEventListener('click',function(){
    writeingboard.style.display="none"
    noteinput.value=''
})

// Create note functionality
createnote.addEventListener('click',function(){
    const notevalue=noteinput.value;
    const note= document.createElement('div')
    note.className="note"
    note.id="creatednote"
    note.textContent=notevalue
    noteapp.appendChild(note) 


// edit and delete functionality
    let edit=document.createElement('button')
    edit.textContent='Edit'
    let deleterr=document.createElement('button')
    deleterr.textContent='Delete'
    let notebutton=document.createElement('div');
    notebutton.className="notebutton"
    edit.className='edit'
    deleterr.className='deleterr'
    notebutton.appendChild(edit)
    notebutton.appendChild(deleterr)
    note.appendChild(notebutton)
    
    edit.addEventListener('click',function(event){
        event.stopPropagation()
        note.remove()
        writeingboard.style.display="block"
        noteinput.value=notevalue
        createnote.textContent='Save'
    })
    deleterr.addEventListener('click',function(event){
        event.stopPropagation()
        note.remove()
    })
    note.addEventListener('click',function(){
        const reading=document.createElement('div')
        const closenote=document.createElement('button')
        closenote.className='edit noteclose'
        closenote.textContent='close' 
        reading.className='reading'
        reading.textContent=notevalue
        reading.appendChild(closenote)
        noteapp.appendChild(reading)
        closenote.addEventListener('click',function(){
            reading.remove()
        })
    })
    noteinput.value=''
    writeingboard.style.display='none'
})