import { remove } from "./remove";

//REMOVE ITEM
test('remove item from list through ID', async () => {
  //to retest, look on vendia for another entityID to use
  const entityId = '01891747-188e-fc1b-3f1f-b425dff6fd8d'; 
  const result = await remove(entityId);
  expect(result).toBe(null); 
});

//REMOVE NON-EXISTENT/ALREADY DELETED ITEM
test('remove item from list through ID', async () => {
  //to retest, look on vendia for another entityID to use
  const entityId = '01891747-188e-fc1b-3f1f-b425dff6fd8d'; 
  const result = await remove(entityId);
  expect(result).toBe(null); 
  });

//REMOVE EMPTY INPUT
test('remove empty item from list', async () => {
  const entityId = '';
  const result = await remove(entityId);
  expect(result).toBe(null);
});