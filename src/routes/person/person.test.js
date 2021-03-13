import { render, screen, fireEvent } from '@testing-library/react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { FloatingButton } from '../../shared/uibuttons';

const Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>)
        const handleClick = jest.fn()
        test('calls onClick prop when clicked', handleClick), () => {
        render(<FloatingButton onClick={handleClick}>+</FloatingButton>)
        fireEvent.onClick(screen.getByText(/+/i))
        expect(handleClick).toHaveBeenCalledTimes(1)
    };

