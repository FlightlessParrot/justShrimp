import { render } from "@testing-library/react";
import Page from "./Page";
import { expect } from "vitest";
test('page component render correctly',()=>{
    const page=render(<Page>Strona</Page>)

    expect(page).toMatchSnapshot()
})