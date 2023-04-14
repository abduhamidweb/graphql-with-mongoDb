import resolvers from "./resolvers.js";
import {
    readFileSync
} from "fs";
import {
    resolve
} from "path";

const schema = readFileSync(resolve( 'modules', 'userModul', 'user.schema.gql'), "utf-8")

export default {
    typeDefs: schema,
    resolvers
} 