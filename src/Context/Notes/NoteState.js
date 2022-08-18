import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "Abd",
    class: "25",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
