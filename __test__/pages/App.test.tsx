/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("Home", () => {
    it("renders a heading", () => {
        render(<App />);

        const heading = screen.getByText("Vite + React");

        expect(heading).toBeInTheDocument();
    });
});
