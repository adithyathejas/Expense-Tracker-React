import {getByPlaceholderText, render,screen} from '@testing-library/react'
import Signup from './Signup'

describe('signup Tese',()=>{
    render(<Signup/>)
    test('confirm password test',()=>{
        const confirmPassword = screen.getByText(/'confirm password'/i) 
        expect(confirmPassword).toBeInTheDocument()
    })
    
    test('signup text',()=>{
        const signupText = screen.getByText(/'Signup'/i)
        expect(signupText).toBeInTheDocument()
    
    })
})
