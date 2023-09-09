import List from "./Components/List";
import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  let items = ["Bangalore", "Chennai", "Coimbatore", "Erode"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <List items={items} heading="Cities" SelectItem={handleSelectItem} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
