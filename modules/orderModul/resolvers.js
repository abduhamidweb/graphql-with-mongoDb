import mongo from "../../db/mongo.js";
const db = mongo();
export default {
    Query: {
        allOrders: async (_, arg) => {
            const orders = (await db).collection('orders');
            return await orders.find().toArray()
        },
    },
    Order: {
        user: async (parent) => {
            const users = (await db).collection('users');
            return (await users.find().toArray()).find(u => u._id == parent.user_id ? u.username : null);
        },
        food: async (parent) => {
            const foods = (await db).collection('foods');
            return (await foods.find().toArray()).find(f => f._id == parent.food_id);
        },
    }
}