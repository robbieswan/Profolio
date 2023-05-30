import path from "path";
import CUSTOM_CSS_TEMPLATES, { CSSTemplate } from "../models/css-templates";
import profile from "../models/profile";
import { Template } from "ejs";

export function buildPortfolioPage(req: Request, res: Response) : void {
   res.render("/views/input.ejs");
}
export function buildInputPage(req: Request, res: Response) {
   
}
export function buildStylingPage(req: Request, res: Response) {
   
}
export function buildProfile(req: Request, res: Response) {

}
export function parseTemplate(req: Request, res: Response) {

}

// previous routes reference
// router.get('/input', (req: Request, res: Response) => {
//    res.render('input', {});
// })

// router.get('/styling', (req: Request, res: Response) => {
//    res.render('styling', {
//        numTemplates: Object.keys(CUSTOM_CSS_TEMPLATES).length || 0,
//    });
// });

// router.get('/css/:templateId', (req: Request, res: Response) => {
//    const templateId: number = parseInt(req.params.templateId);
//    const cssTemplate: CSSTemplate = CUSTOM_CSS_TEMPLATES[templateId];

//    res.status(200).send({cssTemplate});
// });

// router.get('/profile', (req: Request, res: Response) => {
//    res.status(200).send({ profile });
// });


// router.get('/portfolio', (req: Request, res: Response) => {
//    res.render('portfolio', {});
// })
