import { Router } from "express";

import { deleteUser } from "./deleteUser";
import { getUser } from "./getUser";
import { getUsers } from "./getUsers";
import { postUsers } from "./postUser";
import { putUsers } from "./putUser";

const router = Router();

router.use("/", postUsers);
router.use("/", getUsers);
router.use("/:id", getUser);
router.use("/:id", putUsers);
router.use("/:id", deleteUser);

export default router;
