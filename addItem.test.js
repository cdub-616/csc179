import { add } from "./addItem";

describe("my test suite", () => {
    //for June 23
    /*it('add item with no other info', async () => {
        const data = await add('test item');
        expect(data.result.item).toBe('test item');
    });

    it('add empty item and quantity should fail', async () => {
        await expect(add(null, '2')).toBeUndefined;
    });

    it('add empty item should fail', async () => {
        await expect(add()).toBeUndefined;
    });

    it('add item with space as item', async() => {
        const data = await add(' ');
        expect(data.result.item).toBe(' ');
    });*/

    //for June 30
    /*it('add item with space as quantity', async () => {
        const data = await add('space_quantity', ' ');
        expect(data.result.item).toBe('space_quantity');
    });

    it('add item with space as recommendedLocation', async () => {
        const data = await add('space_recLoc', '', ' ');
        expect(data.result.item).toBe('space_recLoc');
    });

    it('add item with space as timestampAdded should fail', async () => {
        await expect(add('space_timeAdd', '', '', true, ' ')).toBeUndefined;
    });

    it('add item with space as timestampPurchased should fail', async () => {
        await expect(add('space_timePur', '', '', true, '', ' ')).toBeUndefined;
    });

    it('add item with string as bought should fail', async () => {
        await expect(add('stringBuy', '', '', '', 'test')).toBeUndefined;
    });

    it('add item with int as item should fail', async () => {
        await expect(add(1)).toBeUndefined;
    });

    it('add item with int as quantity should fail', async () => {
        expect(add('intQuant', 1)).toBeUndefined;
    });

    it('add item with int as recommendedLocation should fail', async () => {
        expect(add('intRecLoc', '', 1)).toBeUndefined;
    });

    it('add item with int as bought should fail', async () => {
        await expect(add('intBuy', '', '', '', 1)).toBeUndefined;
    });

    it('add item with int as timestampAdded should fail', async () => {
        await expect(add('space_timeAdd', '', '', true, 1)).toBeUndefined;
    });

    it('add item with int as timestampPurchased should fail', async () => {
        await expect(add('space_timePur', '', '', true, '', 1)).toBeUndefined;
    });

    it('add item with too many fields should fail', async () => {
        await expect(add('someItem', 'a', 'b', true, 'c', 'd', 'e'))
        .toBeUndefined;
    })

    it('add item with bool as item should fail', async () => {
        await expect(add(true)).toBeUndefined;
    });

    it('add item with bool as quantity should fail', async () => {
        expect(add('intQuant', true)).toBeUndefined;
    });

    it('add item with bool as recommendedLocation should fail', async () => {
        expect(add('intRecLoc', '', true)).toBeUndefined;
    });

    it('add item with bool as timestampAdded should fail', async () => {
        await expect(add('space_timeAdd', '', '', true, true)).toBeUndefined;
    });

    it('add item with bool as timestampPurchased should fail', async () => {
        await expect(add('space_timePur', '', '', true, '', true))
        .toBeUndefined;
    });

    it('add item with illegal timestampAdded should fail', async () => {
        await expect(add('item', '', '', true, '20230619T08:42:00.000Z'))
        .toBeUndefined;
    })

    it('add item with illegal timestampAdded should fail', async () => {
        await expect(add('item', '', '', true, '23-06-19T08:42:00.000Z'))
        .toBeUndefined;
    })

    it('add item with illegal timestampAdded should fail', async () => {
        await expect(add('item', '', '', true, '2023-19T08:42:00.000Z'))
        .toBeUndefined;
    })*/
});