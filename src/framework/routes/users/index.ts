import { Router } from "express";

import { deleteUser } from "./deleteUser";
import { getUser } from "./getUser";
import { getUsers } from "./getUsers";
import { postUsers } from "./postUser";
import { putUsers } from "./putUser";

const router = Router();

router.post("/", postUsers);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", putUsers);
router.delete("/:id", deleteUser);

export default router;
