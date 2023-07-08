import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://51oelaenef.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://oe1ihmfuwb.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'H8ET47BDuSavGmLEs36dwPZv2V8fcbUzE1pn255LyEbw' ,
    debug: true,
  });


const { entities } = client;
export async function remove(entityID){
    const removeEntity = await entities.shoppingList.remove(entityID);
    console.log(removeEntity);
    return null;
};