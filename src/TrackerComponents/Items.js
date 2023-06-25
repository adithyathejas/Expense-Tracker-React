import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Rodal from "rodal";
import EditTracker from "./EditTracker";

const Items = (props) => {
  const [rodalState, toggleRodalStateHandler] = useState(false);

  const rodalHandler = () => {
    toggleRodalStateHandler((prev) => !prev);
  };

  const [visible, setVisible] = useState(true);
  const [item, setItem] = useState(props.item);

  console.log(item)

  const deleteItemHandler = async () => {
    setVisible(false);
    let res = await axios.delete(
      `https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses/${item.name}.json`
    );
    console.log(res.data);
    // props.rerender()
  };

  return (
    <>
      {visible && (
        <tr>
          <td>{props.slno}</td>
          <td>{item.money}</td>
          <td>{item.description}</td>
          <td>{item.category}</td>
          <td>
            <Button onClick={deleteItemHandler}>Delete</Button>
          </td>
          <td>
            <Button onClick={rodalHandler}>Edit</Button>
            <Rodal
        visible={rodalState}
        onClose={rodalHandler}
        width={2000}
        customMaskStyles={{ opacity: "1" }}
      >
        <EditTracker
        visible={rodalState}
          name={item.name}
          money={item.money}
          description={item.description}
          category={item.category}
          setItem={setItem}
          onClose={rodalHandler}
        ></EditTracker>
      </Rodal>
          </td>
        </tr>
      )}
     
    </>
  );
};

export default Items;
