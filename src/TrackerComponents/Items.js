import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Rodal from "rodal";
import EditTracker from "./EditTracker";
import { expenseActions } from "../Store/ExpenseReducer";
import { useDispatch,useSelector } from "react-redux";
import { deleteItemHandler } from "../Store/expenseFunctions";

const Items = (props) => {
  const [rodalState, toggleRodalStateHandler] = useState(false);
  const Dispatch = useDispatch()
  const user = useSelector(state=>state.auth.user)
  const rodalHandler = () => {
    toggleRodalStateHandler((prev) => !prev);
  };

  const [visible, setVisible] = useState(true);
  const [item, setItem] = useState(props.item);

  console.log(item)

  const deleteHandler = async () => {
    setVisible(false);
    Dispatch(deleteItemHandler(item,user))
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
            <Button onClick={deleteHandler}>Delete</Button>
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
