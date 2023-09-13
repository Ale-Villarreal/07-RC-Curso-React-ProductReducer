import { render, screen } from "@testing-library/react";
import { Product } from "../../../src/components/products/Product";
import { dataProducts } from "../../fixtures/products";

describe('TEST - COMPONENT <Product />', () => {

    const data = dataProducts;

    test('CONTROL - Validar la  estructura del componente', () => {

        const snapshot = render(<Product products={data}/>);
        expect(snapshot).toMatchSnapshot();
        // screen.debug();
    });

    test('CONTROL - Validar las props data  recibidas', () => {
        render(<Product products={data}/>);
        expect(screen.getByText(data[0].title));
        // screen.debug();
    });

    test('CONTROL - Validar el tag src de la imagen tenga info', () => {
        render(<Product products={data}/>);
        const img = screen.getByRole('img');
        const price = screen.getByRole('heading', { name: data[0].price});
        expect(img.src).toContain(data[0].image);
        expect(price.textContent).toBe(data[0].price);
    });
})