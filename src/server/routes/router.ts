import express, { Request, Response, Router } from "express";
import * as cont from "../controllers/controller"

const router: Router = express.Router();

// Static Routes
router.use("/css", express.static(__dirname  + "src/client/css"));
router.use("/ts", express.static(__dirname + "src/client/ts"));
router.use("/views", express.static(__dirname + "src/client/views"));
// End Static Routes

// Page Delivery Routes
router.get('/input', (req: Request, res: Response))

router.get('/styling', cont.deliverStyling);

router.get('/css/:templateId', (req: Request, res: Response) => {
   const templateId: number = parseInt(req.params.templateId);
   const cssTemplate: CSSTemplate = CUSTOM_CSS_TEMPLATES[templateId];

   res.status(200).send({cssTemplate});
});

router.get('/profile', (req: Request, res: Response) => {
   res.status(200).send({ profile });
});


router.get('/portfolio', (req: Request, res: Response) => {
   res.render('portfolio', {});
})
// End Page Delivery Routes

export default router;