const { render, getByText, screen } = require("@testing-library/react")
import Menu from "./Menu"
import { expect } from "vitest"

const testData={
    title: 'title',
    subtitle: 'subtitle',
    links: ['/'],
    linkTexts: ['Klik']
}
it(
    'test Menu component reder correctly',()=>{
         render(<Menu {...testData}  />)
        const title=screen.getByText('title')
        const subtitle=screen.getByText('subtitle')
        const link=screen.getByText('Klik')

        expect(title).toBeDefined()
        expect(subtitle).toBeDefined()
        expect(link).toBeDefined()
    }
)