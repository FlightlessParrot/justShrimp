
import { render } from "@testing-library/react";
import Languages from "./Languages";
import { it } from "vitest";


it('component render correctly',()=>{
    const snap=render(<Languages />)

    expect(snap).toMatchSnapshot()
})