import { render, screen } from "@testing-library/react";
import { TestWithMockData } from "../components/TestWithMockData";
import mockData from "../data";

test("List renders successfully", () => {
    render(<TestWithMockData data={mockData} />)
    expect(screen.getByText(/fletcher/i)).toBeInTheDocument()
} )