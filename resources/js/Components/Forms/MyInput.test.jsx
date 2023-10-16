import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import MyInput from "./MyInput";

describe('test My Input component',()=>{
    it('test component render correctly', ()=>{

    render(<MyInput name='name' label='label' type='email' />)
    const input = screen.getByLabelText('label');
    const label = screen.getByText('label')
    expect(input).toBeDefined();
    expect(input).toHaveProperty('name','name');
    expect(input).toHaveProperty('type','email');
    expect(label).toBeDefined();
    })
})