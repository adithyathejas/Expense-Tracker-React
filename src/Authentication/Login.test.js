import {render,screen} from '@testing-library/react'
import Login from './Login'

describe('login form test',()=>{
    test('email test',()=>{render(<Login></Login>)
    const emailElement = screen.getByText(/'Email Address'/i)
    expect(emailElement).toBeInTheDocument()})
    
    test('password test',()=>{
        const passwordElement = screen.getByText(/'password'/i)
        expect(passwordElement).toBeInTheDocument() 
    })
    
    test('Button test',()=>{
        const buttonElement = screen.getByText(/'Signin'/i)
    })
})
