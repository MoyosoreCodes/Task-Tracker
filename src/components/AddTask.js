import { useState } from "react";
import FormBody from "./FormBody";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("");
  // handleTextChange
  const submitTask = (e) => {
    e.preventDefault();
    if (!text) {
      alert("You need to provide a Task");
      return;
    }

    onAdd({
      name: text,
      day, 
      reminder
    })
    setText('');
    setDay('');
    setReminder('');
  };
  return (
    <form className="add-form" onSubmit={submitTask}>
      <FormBody
        text="Task"
        type="text"
        placeholder="Add Task"
        formValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <FormBody
        text="Day & Time"
        type="text"
        placeholder="Add Day & Time"
        formValue={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <FormBody
        text="Set Reminder"
        type="checkbox"
        formValue={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
      />
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
