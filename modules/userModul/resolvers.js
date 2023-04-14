import mongo from "../../db/mongo.js";
const db = mongo();
export default {
    Query: {
        allUsers: async (_, arg) => {
            const users = (await db).collection('users');
            return await users.find().toArray()
        },
    },
    User: {
        userName: (parent) => {
            return parent.username
        },
        order: async (parent) => {
            const foods = (await db).collection('orders');
            return (await foods.find().toArray()).find((u) => u.user_id == parent._id);
        },
    }
}