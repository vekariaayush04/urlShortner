import { Router } from "express";
import { shortenUrl, redirectUrl } from "../controllers/urlController";

const router = Router();

router.post("/short", shortenUrl);
router.get("/:code", redirectUrl);

export default router;
