import { useState } from "react";
// If we use props we can add multiple list elements
interface Props {
  items: string[];
  heading: string;
  SelectItem: (item: String) => void;
}
function List({ items, heading, SelectItem }: Props) {
  const [SelectedItems, setSelectedItems] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No items</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectedItems === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItems(index);
              SelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
