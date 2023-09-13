import { fireEvent, render, screen } from "@testing-library/react"
import { ListProduct } from "../../../src/components/admin/ListProduct"
import { dataProducts } from "../../fixtures/products"

describe('TEST -COMPONENT <ListProduct />', () => { 

    const data = dataProducts;
    const onDeleteProduct  = jest.fn();

    test('CONTROL - Validar que los datos lleguen a la grilla', () => {
        render (<ListProduct products={data} onDeleteProduct={() => {}}/>);
        const td =  screen.getAllByRole('cell');
        const th =  screen.getByRole('rowheader', { name: data[0].id });
        const values = td.map( cell => cell.textContent);
       
        expect(values).toContain(data[0].title);
        expect(values).toContain(data[0].price);
        expect(th.textContent).toBe(data[0].id.toString());
       
        // screen.debug();
    });

    test('EXECUTE EVENT - Validar el  LLamado a la accion Elmimar', () => {
        render (<ListProduct products={data} onDeleteProduct={onDeleteProduct}/>);
        const buttonDelete = screen.getByRole('button');
        fireEvent.click(buttonDelete, {value: data[0].id});

        expect( onDeleteProduct ).toHaveBeenCalled();
        expect( onDeleteProduct ).toHaveBeenCalledTimes(1);
        expect( onDeleteProduct ).toHaveBeenCalledWith(data[0].id);
    });
})