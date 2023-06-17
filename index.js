import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://51oelaenef.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://oe1ihmfuwb.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'H8ET47BDuSavGmLEs36dwPZv2V8fcbUzE1pn255LyEbw' ,
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

//add('test item 2', '3', 'whatever', false, '2023-02-14T09:23:22.000Z'); <---- example add
//remove('0188c74d-fc66-3ccd-eeca-2339c43b8cb3'); <---- example remove