import { render, screen, fireEvent } from '@testing-library/react';
import Card from './';

describe('Card', () => {
    test('Should render the picture passed as prop', () => {
        render(<Card title="John Doe" picture="http://example.com/john.jpg" />);
        const cardImage = screen.getByTestId('card-image');
        expect(cardImage).toHaveAttribute('src', 'http://example.com/john.jpg');
        expect(cardImage).toHaveAttribute('alt', 'John Doe');
    });

    test('Should render the title passed as prop', () => {
        render(<Card title="John Doe" picture="http://example.com/john.jpg" />);
        const cardTitle = screen.getByTestId('card-title');
        expect(cardTitle.textContent).toBe('John Doe');
    });

    test('Should add stars around title when clicked to favorite', () => {
        render(<Card title="John Doe" picture="http://example.com/john.jpg" />);
        const card = screen.getByTestId('card');
        const cardTitle = screen.getByTestId('card-title');

        expect(cardTitle.textContent).toBe('John Doe'); // Avant le clic
        fireEvent.click(card);
        expect(cardTitle.textContent).toBe('⭐️ John Doe ⭐️'); // Après le clic
    });
});