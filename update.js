import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://51oelaenef.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://oe1ihmfuwb.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'H8ET47BDuSavGmLEs36dwPZv2V8fcbUzE1pn255LyEbw' ,
    debug: true,
  });

const { entities } = client;

export async function modify(entityID, itemName, quantityAmount, location, boughtStatus, timeAdded, timePurchased) {
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
    return updateEntity;
};
