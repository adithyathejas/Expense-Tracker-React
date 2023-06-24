const Items = (props) => {
  const item=props.Item
  return (
    <tr>
      <td>{props.slno}</td>
      <td>{item.money}</td>
      <td>{item.description}</td>
      <td>{item.category}</td>
    </tr>
  );
};

export default Items;
