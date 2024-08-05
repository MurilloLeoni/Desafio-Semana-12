import { render } from '@testing-library/react';
import Info from './Info';

describe('Info Component', () => {
  it('renders address, phone, and working time information', () => {
    render(<Info />);
  });
});
