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

    it('add item with illegal timestampAdded no dashes should fail', async () =>
        { await expect(add('item', '', '', true, '20230619T08:42:00.000Z'))
        .toBeUndefined;
    })

    it('add item with illegal timestampAdded year should fail', async () => {
        await expect(add('item', '', '', true, '23-06-19T08:42:00.000Z'))
        .toBeUndefined;
    })

    it('add item with illegal timestampAdded no month should fail', async () => 
        { await expect(add('item', '', '', true, '2023-19T08:42:00.000Z'))
        .toBeUndefined;
    })*/

    //for July 8
    it('add item timestampAdded no year should fail', async () => {
        await expect(add('item', '', '', true, '07-04T10:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded alpha year should fail', async () => { 
        await expect(add('item', '', '', true, 'abcd-07-04T10:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded alpha month should fail', async () => { 
        await expect(add('item', '', '', true, '2023-ab-04T10:20:00.000Z'))
        .toBeUndefined;
    });
    
    it('add item timestampAdded short month should fail', async () => { 
        await expect(add('item', '', '', true, '2023-7-04T10:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded illegal month should fail', async () => {
        await expect(add('item', '', '', true, '2023-20-04T10:20:00.00Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded no day should fail', async () => {
        await expect(add('item', '', '', true, '23-07T10:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded alpha day should fail', async () => {
        await expect(add('item', '', '', true, '23-07-abT10:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded short day should fail', async () => {
        await expect(add('item', '', '', true, '23-07-4T10:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded illegal day should fail', async () => {
        await expect(add('item', '', '', true, '23-07-63T10:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded no hour should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded alpha hour should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04Tab:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded short hour should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T1:20:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded illegal hour should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T32:20:000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded no minute should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded alpha minute should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:ab:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded short minute should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:2:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded illegal minute should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:62:00.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded no second should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:20.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded alpha second should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:20:ab.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded short second should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:20:7.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded illegal second should fail', async () => {
        await expect(add('item', '', '', true, '23-07-04T10:20:70.000Z'))
        .toBeUndefined;
    });

    it('add item timestampAdded alpha millisecond should fail', async () =>
    { await expect(add('item', '', '', true, '23-07-04T10:20:00.abcZ'))
        .toBeUndefined;
    });

    it('add item illegal timestampPurchased no dashes should fail', async () =>
        { await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z', 
        '20230619T08:42:00.000Z')).toBeUndefined;
    })

    it('add item illegal timestampPurchased year should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-06-19T08:42:00.000Z')).toBeUndefined;
    })

    it('add item illegal timestampPurchased no month should fail', async () => 
        { await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '2023-19T08:42:00.000Z')).toBeUndefined;
    })

    it('add item timestampPurchased no year should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '07-04T10:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased alpha year should fail', async () => { 
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        'abcd-07-04T10:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased alpha month should fail', async () => { 
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '2023-ab-04T10:20:00.000Z')).toBeUndefined;
    });
    
    it('add item timestampPurchased short month should fail', async () => { 
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '2023-7-04T10:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased illegal month should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '2023-20-04T10:20:00.00Z')).toBeUndefined;
    });

    it('add item timestampPurchased no day should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07T10:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased alpha day should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-abT10:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased short day should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-4T10:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased illegal day should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-63T10:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased no hour should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased alpha hour should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04Tab:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased short hour should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T1:20:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased illegal hour should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T32:20:000Z')).toBeUndefined;
    });

    it('add item timestampPurchased no minute should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased alpha minute should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:ab:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased short minute should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:2:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased illegal minute should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:62:00.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased no second should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:20.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased alpha second should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:20:ab.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased short second should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:20:7.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased illegal second should fail', async () => {
        await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:20:70.000Z')).toBeUndefined;
    });

    it('add item timestampPurchased alpha millisecond should fail', async () =>
        { await expect(add('item', '', '', true, '2023-07-04T10:20:00.000Z',
        '23-07-04T10:20:00.abcZ')).toBeUndefined;
    });

    //performance testing
    for (var x = 0; x < 20; x++){
        it('add item for performance test', async() => {
            await expect(add('widget1', '100000', 'Sacramento', true,
            '2023-07-04T10:14:00.000Z', '2023-07-04T10:14:00.000Z'))
            .toBeDefined;
        })
    }

    for (var x = 0; x < 30; x++){
        it('add item for performance test', async() => {
            await expect(add('widget2', '100000', 'Sacramento', true,
            '2023-07-04T10:14:00.000Z', '2023-07-04T10:14:00.000Z'))
            .toBeDefined;
        })
    }

    for (var x = 0; x < 50; x++){
        it('add item for performance test', async() => {
            await expect(add('widget3', '100000', 'Sacramento', true,
            '2023-07-04T10:14:00.000Z', '2023-07-04T10:14:00.000Z'))
            .toBeDefined;
        })
    }

    for (var x = 0; x < 100; x++){
        it('add item for performance test', async() => {
            await expect(add('widget4', '100000', 'Sacramento', true,
            '2023-07-04T10:14:00.000Z', '2023-07-04T10:14:00.000Z'))
            .toBeDefined;
        })
    }
    
    for (var x = 0; x < 250; x++){
        it('add item for performance test', async() => {
            await expect(add('widget5', '100000', 'Sacramento', true,
            '2023-07-04T10:14:00.000Z', '2023-07-04T10:14:00.000Z'))
            .toBeDefined;
        })
    }

    for (var x = 0; x < 500; x++){
        it('add item for performance test', async() => {
            await expect(add('widget6', '100000', 'Sacramento', true,
            '2023-07-04T10:14:00.000Z', '2023-07-04T10:14:00.000Z'))
            .toBeDefined;
        })
    }

    for (var x = 0; x < 1000; x++){ 
        it('add item for performance test', async () => {
            await expect(add('widget7', '1000000', 'Sacramento', true, 
            '2023-07-04T10:14:00.000Z', '2023-07-04T10:14:00.000Z'))
            .toBeDefined;
        });
    };

});