import express from "express";
import controller from "../controllers/controller"

const router = new express.Router();

router.get('/input', (req: Request, res: Response) => {
   res.render('input', {});
})

router.get('/styling', (req: Request, res: Response) => {
   res.render('styling', {
       numTemplates: Object.keys(CUSTOM_CSS_TEMPLATES).length || 0,
   });
});

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

export default router;