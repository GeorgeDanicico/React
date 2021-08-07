// export const App = ({notes}) => {

//   const [addNote, setAddNote] = useState({
//     title:"",
//     content: "",
//   });

//   const [note, setNotes] = useState(notes);

//   function handleChange(e){
//     setAddNote(e);
//   }

//   function handleAdd(e){
//     setNotes((prevState) => [...prevState, e]);
//     setAddNote({
//       title:"",
//       content:"",
//     })
//   }

//   function handleDelete(e){
//     const newNotes = note.filter((note) => note.title !== e.title);

//     setNotes(newNotes);
//   }

//     return (
//       <div>
//         <Header />
//         <AddNote note={addNote}
//         onClick = {(e) => handleAdd(e)}
//         onChange={(e) => handleChange(e)}/>
//         <Notes  notes={note} onDelete={(e) => handleDelete(e)}/>
//         <Footer year={new Date().getFullYear()}/>

//       </div>
//       );
// }