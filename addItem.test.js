import { add } from "./addItem";

/*test('add an item with no other info', async () => {
    const data = await add('test item');
    expect(data.result.item).toBe('test item');
});

test ('add an empty item and quantity should fail', async () => {
    await expect(add(null, '2')).toBeUndefined;
});

test ('add an empty item should fail', async () => {
    await expect(add()).toBeUndefined;
});

test('add an item with a space as item', async() => {
    const data = await add(' ');
    expect(data.result.item).toBe(' ');
});*/

test('add item with space as quantity', async () => {
    const data = await add('space_quantity', ' ');
    expect(data.result.item).toBe('space_quantity');
});

test('add item with space as recommendedLocation', async () => {
    const data = await add('space_recLoc', '', ' ');
    expect(data.result.item).toBe('space_recLoc');
});

test('add item with space as timestampAdded should fail', async () => {
    await expect(add('space_timeAdd', '', '', true, ' ')).toBeUndefined;
});

test('add item with space as timestampPurchased', async () => {
    await expect(add('space_timePur', '', '', true, '', ' ')).toBeUndefined;
});

test('add item with string as bought should fail', async () => {
    await expect(add('stringBuy', '', '', '', 'test')).toBeUndefined;
});

test('add item with int as item should fail', async () => {
    await expect(add(1)).toBeUndefined;
});

test('add item with int as quantity should fail', async () => {
    expect(add('intQuant', 1)).toBeUndefined;
});

test('add item with int as recommendedLocation', async () => {
    expect(add('intRecLoc', '', 1)).toBeUndefined;
});

test('add item with int as bought should fail', async () => {
    await expect(add('intBuy', '', '', '', 1)).toBeUndefined;
});

test('add item with int as timestampAdded should fail', async () => {
    await expect(add('space_timeAdd', '', '', true, 1)).toBeUndefined;
});

test('add item with int as timestampPurchased', async () => {
    await expect(add('space_timePur', '', '', true, '', 1)).toBeUndefined;
});

test('add item with too many fields should fail', async () => {
    await expect(add('someItem', 'a', 'b', true, 'c', 'd', 'e')).toBeUndefined;
})

test('add item with bool as item should fail', async () => {
    await expect(add(true)).toBeUndefined;
});

test('add item with bool as quantity should fail', async () => {
    expect(add('intQuant', true)).toBeUndefined;
});

test('add item with bool as recommendedLocation', async () => {
    expect(add('intRecLoc', '', true)).toBeUndefined;
});

test('add item with bool as timestampAdded should fail', async () => {
    await expect(add('space_timeAdd', '', '', true, true)).toBeUndefined;
});

test('add item with bool as timestampPurchased', async () => {
    await expect(add('space_timePur', '', '', true, '', true)).toBeUndefined;
});