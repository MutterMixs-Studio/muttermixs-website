import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from "./Footer";

describe("Footer component", () => {
    it("renders the footer element", () => {
        render(<Footer />);
        const footerElement = screen.getByRole("contentinfo");
        expect(footerElement).toBeInTheDocument();
    });

    it("displays the correct text", () => {
        render(<Footer />);
        const footerText = screen.getByText("© 2025 MutterMixs Studio");
        expect(footerText).toBeInTheDocument();
    });

    it("has the correct class names", () => {
        render(<Footer />);
        const footerElement = screen.getByRole("contentinfo");
        expect(footerElement).toHaveClass("bg-gray-800", "p-4", "text-center", "text-sm", "text-gray-400");
    });

    it("renders as a footer element", () => {
        render(<Footer />);
        const footerElement = screen.getByRole("contentinfo");
        expect(footerElement.tagName).toBe("FOOTER");
    });

    it("contains copyright symbol and current year", () => {
        render(<Footer />);
        const footerElement = screen.getByRole("contentinfo");
        expect(footerElement).toHaveTextContent("©");
        expect(footerElement).toHaveTextContent("2025");
        expect(footerElement).toHaveTextContent("MutterMixs Studio");
    });
});