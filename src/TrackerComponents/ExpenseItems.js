import { Container, Table } from "react-bootstrap"
import BackgroundCard from "../UI/FormBackground"
import Items from './Items'
import  {useDispatch, useSelector}  from "react-redux"
import { useEffect } from "react"
import { expenseActions } from "../Store/ExpenseReducer"


const ExpenseItems=(props)=>{
  const ItemList = useSelector(state=>state.expense.Items)
  const theme = useSelector(state=>state.theme.theme)
  let slno=1
  const items = ItemList.map(item=><Items key={item.name} slno={slno++} item={item} rerender={props.rerender}></Items>)
  const Dispatch=useDispatch()

return(
  <BackgroundCard>
    <Table fluid={true} striped bordered hover variant={theme==="light"?"light":"dark"}>
       
            <thead>
                <tr>
                  <th>No.</th>
                <th>Money</th><th>Description</th><th>Category</th>
                </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
        
    </Table>
    </BackgroundCard>
)
}

export default ExpenseItems