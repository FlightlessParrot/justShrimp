import { render, screen } from "@testing-library/react"
import ReturnButton from "./ReturnButton"
import { expect } from "vitest"

test(
    'test component Return Button render correctly',()=>{
        const dummyData={
            link:{
                name: 'buttonName',
                url:'https://main.pl'
            }
        }
        render(<ReturnButton lang={dummyData}  />)
        const button = screen.getByRole('link');
        expect(button).toBeDefined();
        console.log(button)
        expect(button.href).toBe('https://main.pl/')
        expect(button.textContent).toBe('<< buttonName')
    }
)