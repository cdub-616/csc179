import { modify } from "./update";

test('Updating quantity to 7 ', async () => {
    const data = await modify('0188e71a-3862-b59c-9ddc-5c128b3b5702', 
    'test item', '7', null, null, null, null);
    expect(data.result.quantity).toBe('7');
});

test('Updating quantity to non-string ', async () => {
    const data = await modify('0188e71a-3862-b59c-9ddc-5c128b3b5702', 
    'test item', 4, null, null, null, null);
    expect(data.result.quantity).toBe('4');
});

test('Updating quantity to 5 ', async () => {
    const data = await modify('0188e71a-3862-b59c-9ddc-5c128b3b5702', 
    'test item', '5', null, null, null, null);
    expect(data.result.quantity).toBe('5');
});