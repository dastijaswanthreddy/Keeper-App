import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){

    const [notes,setNotes]=React.useState([]);

    function addNote(newNote){
        if(newNote.title==="")
        {
            return alert("The Title feild is required.");
        }
        else if(newNote.content==="")
        {
            return alert("The Content feild is required.");
        }
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem,index)=>{
                return id!==index;
            });
        })
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem,index)=>{
            return <Note 
                        key={index} 
                        id={index} 
                        title={noteItem.title} 
                        content={noteItem.content}
                        onDelete={deleteNote}
                     />
        })}
        <Footer />
    </div>;
}
 
export default App;