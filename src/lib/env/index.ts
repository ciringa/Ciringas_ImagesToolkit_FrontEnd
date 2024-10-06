import "dotenv/config.js"
import { z } from "zod"

export const {API} = z.object({
    API:z.string()
}).parse(process.env)