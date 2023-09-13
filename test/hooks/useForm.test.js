import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe( 'TEST HOOK useForm', () => {

    const initialValues = {
        id: 1, 
        title: 'SAMSUNG A13',
        category: 'Celulares',
        price: '$120.000',
        description: 'Nuevo dispositivo con dos procesadores y camara de 13 mpx',
        image: 'https://i.imgur.com/KFojDGa.jpg'
    }

    test('CONTROL HOOK Validar Valores iniciales', () => {

        const { result } = renderHook(() => useForm(initialValues));
        // const { form, onChangeForm } = result.current;

        expect(result.current).toEqual({
            form:{
                id: initialValues.id,
                title: initialValues.title,
                category: initialValues.category,
                price: initialValues.price,
                description: initialValues.description,
                image: initialValues.image,
            },
            onChangeForm: expect.any(Function)
        })
    });

    test( 'CONTROL EVENT  HOOKS , Validar Cambio del title', () => {

        const newTitle = 'Motorola A45';
        const fieldTitle = 'title';

        const { result } = renderHook(() =>useForm(initialValues));
        const { onChangeForm }  =  result.current;

        act( () => {
            onChangeForm(newTitle,  fieldTitle);
        });

        expect(result.current.form.title).toBe(newTitle);
    })
})