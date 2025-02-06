import "../style/Taskbar.css";

function Taskbar() {
  const handleKeyDown = (event) => {
    event.target.style.minWidth = ((event.target.value.length + 1) * 7) + 'px';
  };

  return (
    <input
      type="text"
      placeholder="Add in a task..."
      onKeyDown={handleKeyDown}
    ></input>
  );
}

export default Taskbar;
