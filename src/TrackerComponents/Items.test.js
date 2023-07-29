import {render,screen} from '@testing-library/react'
import Items from './Items'

describe('rendering Items ',()=>{
    render(<Items/>)
    test('edit Button rendered',()=>{
        const editButton = screen.getByText('Edit')
        expect(editButton).toBeInTheDocument()
    })
    test('edit Button rendered',()=>{
        const DeleteButton = screen.getByText('Delete')
        expect(DeleteButton).toBeInTheDocument()
    })
})