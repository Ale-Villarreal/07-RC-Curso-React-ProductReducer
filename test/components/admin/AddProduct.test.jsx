import { render, screen } from "@testing-library/react";
import { useForm } from "../../../src/hooks/useForm"
import { AddProduct } from "../../../src/components/admin/AddProduct";
import { dataProducts } from "../../fixtures/products";

jest.mock("../../../src/hooks/useForm");

describe( 'TEST - HOOK useForm', () => {


    useForm.mockReturnValue({
        form:{},
        onChangeForm: () => {}
    })

    test('CONTROL - HOOK Validar que devuelva correctamente los datos', () => {

        useForm.mockReturnValue({
            form: dataProducts[0],
            onChangeForm: () =>  {}
        });

        render(<AddProduct onClickAddProduct={() => {}}/>);
        const inputs  = screen.getAllByRole('textbox');
        const data = inputs.map( item => item.value);
        const name = inputs.map( item => item.name);

        expect(name[0]).toBe('title');
        expect(name[1]).toBe('category');
        expect(name[2]).toBe('price');
        expect(name[3]).toBe('description');

        expect(data[0]).toBe(dataProducts[0].title);
        expect(data[1]).toBe(dataProducts[0].category);
        expect(data[2]).toBe(dataProducts[0].price);
        expect(data[3]).toBe(dataProducts[0].description);
    });
})