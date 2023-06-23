import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://51oelaenef.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://oe1ihmfuwb.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'H8ET47BDuSavGmLEs36dwPZv2V8fcbUzE1pn255LyEbw',
    debug: true,
  });

const { entities } = client

//add a new shopping list
export async function add(itemName, quantityAmount, location, boughtStatus, timeAdded, timePurchased){
  const addEntity = await entities.shoppingList.add({
      item: itemName,
      quantity: quantityAmount, //string
      recommendedLocation: location,
      bought: boughtStatus,
      timestampAdded: timeAdded,
      timestampPurchased: timePurchased,
  });
  console.log(addEntity);
  return addEntity;
};

/*add('thingy', '2', 'nowhere', true, '2023-06-19T08:42:00.000Z');
add('thingy2', '1', 'somewhere', false, '2023-06-19T09:56:00.000Z', 
  '2023-06-19T09:56:00.000Z');*/