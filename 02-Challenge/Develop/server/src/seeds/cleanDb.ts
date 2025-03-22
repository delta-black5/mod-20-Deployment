import models from "../models/index.js";
import db from "../config/connection.js";

export default async (modelName: "Question", collectionName: string) => {
  try {
    let modelExists = await models[modelName];
    if (!modelExists) return;
    let a = db;
    if (!a) return;
    let b = a.db;
    if (!b) return;
    b.listCollections({
      name: collectionName,
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
