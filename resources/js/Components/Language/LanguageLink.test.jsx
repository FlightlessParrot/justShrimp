import { render } from "@testing-library/react";

import { describe, expect } from "vitest";
import LanguageLink from "./LanguageLink";



describe('test Language Button component',()=>{
test("component renders ", () => {
    const snap = render(<LanguageLink text={"text"}  />);

    expect(snap).toMatchSnapshot();
});

})