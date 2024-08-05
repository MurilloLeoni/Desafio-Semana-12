import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Descriptions from './Descriptions';
import mockProduct from '../../__mocks__/mockProduct';

const mock = mockProduct;

describe('<Descriptions />', () => {
  it('should render and switch between description and additional information tabs', async () => {
    render(<Descriptions description={mock.description} id={0} sku={''} title={''} category={''} tags={[]} normalPrice={''} salePrice={0} discountPercentage={0} new={false} slug={''} colors={[]} sizes={[]} rating={0} images={{
        mainImage: '',
        gallery: []
    }} />);

    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Additional Information')).toBeInTheDocument();
    expect(screen.getByText(mock.description.short)).toBeInTheDocument();
    
    expect(screen.getByText(mock.description.short)).toBeInTheDocument();
    expect(screen.queryByText(mock.description.long)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Additional Information'));

    expect(screen.getByText(mock.description.long)).toBeInTheDocument();
    expect(screen.queryByText(mock.description.short)).not.toBeInTheDocument();

    expect(screen.getByText('Description')).toHaveClass('text-#9F9F9F');
    expect(screen.getByText('Additional Information')).toHaveClass('text-black');
  });
});
