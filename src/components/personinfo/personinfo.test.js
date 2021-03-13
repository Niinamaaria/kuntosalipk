import { render, screen } from '@testing-library/react';
import PersonInfo from './personinfo';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders personinfo from props data', () => {
    
    render(<Router><PersonInfo data={{
            id: "123",
            name:"Niina",
            age: "29",
            height: "160",
            weight: "59"
    }}/>
    </Router> );
    const name = screen.getByText(/Niina/i);
    expect(name).toBeInTheDocument();
    const age = screen.getByText(/29/i);
    expect(age).toBeInTheDocument();
    const height = screen.getByText(/160/i);
    expect(height).toBeInTheDocument();
    const weight = screen.getByText(/59/i);
    expect(weight).toBeInTheDocument();
            
});