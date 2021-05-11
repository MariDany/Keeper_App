import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });
  const [expand, setExpand] = useState(false);

  function updateNote(event) {
    const { name, value } = event.target;
    setNewNote((prevVal) => ({
      ...prevVal,
      [name]: value
    }));
  }

  function addNote(event) {
    props.addNote(newNote);
    setNewNote({
      title: "",
      content: ""
    });
    setExpand(false);
    event.preventDefault();
  }

  function expandOnclick() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={updateNote}
          value={newNote.title}
          name="title"
          placeholder="Title"
          style={expand ? null : { display: "none" }}
        />
        <textarea
          value={newNote.content}
          onChange={updateNote}
          onClick={expandOnclick}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        <Zoom in={expand}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
