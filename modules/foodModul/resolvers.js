import mongo from "../../db/mongo.js";
const db = mongo();
export default {
    Query: {
        allFoods: async (_, arg) => {
            const foods = (await db).collection('foods');
            return await foods.find().toArray()
        },
    },
}