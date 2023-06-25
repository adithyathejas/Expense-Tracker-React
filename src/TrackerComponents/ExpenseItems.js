import { Container, Table } from "react-bootstrap"
import BackgroundCard from "../UI/FormBackground"
import Items from './Items'

const ExpenseItems=(props)=>{
  
  let slno=1
  const items = props.ItemList.map(item=><Items key={item.name} slno={slno++} item={item} rerender={props.rerender}></Items>)

return(
  <BackgroundCard>
    <Table fluid={true}>
       
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