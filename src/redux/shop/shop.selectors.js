import { createSelector } from "reselect";

// // map string values to ids
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

/*selectCollection is a function that returns a function*/
export const selectCollection = (collectionUrlParam) /*this is a string*/ =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
