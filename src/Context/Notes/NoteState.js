import NoteContext from "./noteContext";

const NoteState = () => {
  const state = {
    name: "Abd",
    class: "25",
  };
  return (
    <NoteContext.provider value={state}>{props.children}</NoteContext.provider>
  );
};
export default NoteState;
