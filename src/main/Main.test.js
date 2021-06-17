import { render, screen } from "@testing-library/react"
import Main from './Main'
import { act } from "react-dom/test-utils";
import * as fetchDataMock from '../fetchData'

test('Should show "loading" as part of initial load', () => {
    render(<Main />);
    const myElement = screen.getByText('loading', { exact: false })
    expect(myElement).toBeInTheDocument();
});


test('Should show part of mocked json after data is fetched', async () => {
    fetchDataMock.fetchData = jest.fn().mockResolvedValue({name: "Foo", familyName: 'BAR'})// mocking a returned promise Promise<({ data: 'FOO'}>
    render(<Main />);

    await act(async () => {
    
    })
    const myElement = screen.getByText('{"name":"Foo","familyName":"BAR"}', { exact: false })      
    expect(myElement).toBeInTheDocument();
});
