import {getByText, render,screen} from '@testing-library/react'
import Navigation from './Navbar'

describe('rendering Navbar',()=>{
    render(<Navigation/>)
    test('heading',()=>{
        const ExpenseTrackerText = getByText('Expense Tracker')
        expect(ExpenseTrackerText).toBeInTheDocument()

    })
    test('ActivePremium',()=>{
        const ActivePremiumElement = getByText('ActivePremium')
        expect(ActivePremiumElement).toBeInTheDocument()
    })
})