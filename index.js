import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://51oelaenef.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://oe1ihmfuwb.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'H8ET47BDuSavGmLEs36dwPZv2V8fcbUzE1pn255LyEbw' ,
    debug: true,
  });

const { entities } = client;

// async function add(itemName){
//     const addEntity = await entities.shoppingList.add({
//         item: itemName,
//     });
//     console.log(addEntity);
// };

async function add(itemName, quantityAmount, location, boughtStatus, timeAdded, timePurchased){
    const addEntity = await entities.shoppingList.add({
        item: itemName,
        quantity: quantityAmount, //string
        recommendedLocation: location,
        bought: boughtStatus,
        timestampAdded: timeAdded,
        timestampPurchased: timePurchased,
    });
    console.log(addEntity);
};

async function remove(entityID){
    const removeEntity = await entities.shoppingList.remove(entityID);
    console.log(removeEntity);
};

async function modify(entityID, itemName, quantityAmount, location, boughtStatus, timeAdded, timePurchased) {
    const updateEntity = await entities.shoppingList.update({
        _id: entityID,
        item: itemName,
        quantity: quantityAmount,
        recommendedLocation: location,
        bought: boughtStatus,
        timestampAdded: timeAdded,
        timestampPurchased: timePurchased,
    });
    console.log(updateEntity);
};

//add('test item 2', '3', 'whatever', false, '2023-02-14T09:23:22.000Z'); <---- example add
//remove('0188c748-f034-5493-c3cf-600089870ba4');
//modify('0188e71a-3862-b59c-9ddc-5c128b3b5702', 'test item', '5', null, null, null, null);