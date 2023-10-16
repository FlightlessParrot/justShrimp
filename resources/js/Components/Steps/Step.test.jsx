import { render, screen } from "@testing-library/react"
import Step  from "./Step"
import { expect } from "vitest"

test('test Step component render correctly',()=>{
    render(<Step number={1} title='title' description={'description'}/>)
    expect(screen.getByText('title')).toBeDefined()
    expect(screen.getByText(1)).toBeDefined()
    expect(screen.getByText('description')).toBeDefined()
})