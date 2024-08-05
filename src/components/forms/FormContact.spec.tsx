import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormSchemaContact } from '../../schemas/formSchemaContact';
import FormContact from './FormContact';


jest.mock('../hooks/useFormsContact', () => ({
  useFormsContact: jest.fn().mockReturnValue({
    register: jest.fn(),
    handleSubmit: (cb: (data: FormSchemaContact) => void) => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      cb({
        name: 'Murillo',
        email: 'murillo@example.com',
        subject: 'Teste',
        message: 'Mnesagem',
      });
    },
    errors: {},
  }),
}));

describe('<FormContact />', () => {
  it('should render the form and handle submission', async () => {
    render(<FormContact />);

    expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();

    expect(screen.getByText(/Submit/i)).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText(/Your name/i), 'Murillo');
    await userEvent.type(screen.getByLabelText(/Email address/i), 'murillo@example.com');
    await userEvent.type(screen.getByLabelText(/Subject/i), 'Teste');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Mnesagem');

    await userEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.queryByText('Name is required')).toBeNull();
      expect(screen.queryByText('Email is required')).toBeNull();
      expect(screen.queryByText('Subject is required')).toBeNull();
      expect(screen.queryByText('Message is required')).toBeNull();
    });
  });
});
