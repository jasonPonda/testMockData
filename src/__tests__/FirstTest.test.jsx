import {render, screen } from '@testing-library/react'
import { FirstTest } from '../components/FirstTest'

test("Exemple 1 renders successfully", () => {
    render(<FirstTest />)

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})