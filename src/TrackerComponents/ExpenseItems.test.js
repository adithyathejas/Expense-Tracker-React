import {render,screen} from '@testing-library/react'
import ExpenseItems from './ExpenseItems'

test('expense items',()=>{
    render(<ExpenseItems/>)
    const TableElement = screen.getByText('Money')
    expect(TableElement).toBeInTheDocument()
})