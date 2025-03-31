import "./index.css";

function MenuList(props) {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>{props[0]}</li>
        <li>{props[1]}</li>
        <li>{props[2]}</li>
      </ul>
    </div>
  );
}
