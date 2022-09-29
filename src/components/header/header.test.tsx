import {render, screen} from '@testing-library/react';
import Header from './Header';
test('Testar Renderização do Header', async ()=>{
    render(<Header/>);
    const title = screen.queryByText('Eletronicos');
    expect(title).toBeInTheDocument();
});