import { render, screen } from "@testing-library/react"
import Qualities from "./Qualities"

describe('<Qualities />', () => {
    const qualities = ['High Quality', 'Warranty Protection', 'Free Shipping', '24 / 7 Support']

    qualities.forEach((quality) => {
        it(`should render ${quality}`, () => {
            render(<Qualities />)
            expect(screen.getByText(quality)).toBeInTheDocument()
        })
    })
})