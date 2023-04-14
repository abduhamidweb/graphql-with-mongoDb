import resolvers from "./resolvers.js";
import {
    readFileSync
} from "fs";
import {
    resolve
} from "path";

const schema = readFileSync(resolve("modules", 'orderModul', 'order.schema.gql'), "utf-8")

export default {
    typeDefs: schema,
    resolvers
}