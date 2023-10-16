import { render, screen } from "@testing-library/react"
import AgentText from "./AgentText"
import { expect } from "vitest"
import { ParallaxProvider } from "react-scroll-parallax"

describe(
    'test Agent Test component',()=>{
     it('test if component render correctly',()=>{
     render(<ParallaxProvider><AgentText imageVideo={<p>image</p>} title={'title'} text={'Some text.Some text.Some text.'}><p>children</p></AgentText></ParallaxProvider>)

     const text=screen.queryByText('Some text.')
     const img=screen.getByText('image')
     const title=screen.getByText('title')
     const children=screen.getByText('children')

     expect(text).toBeNull()
     expect(img).toBeDefined()
     expect(title).toBeDefined()
     expect(children).toBeDefined()


     })
    }
)