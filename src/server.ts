import express, { Request, Response } from 'express';
import path from 'path';

import CUSTOM_CSS_TEMPLATES, { CSSTemplate } from './models/css-templates';
import profile from './models/profile';

const app = express();
const port = process.env.PORT || 7777;


app.set('views', 'src/public/views');
app.set('view engine', 'ejs');

app.get('/css/:templateId', (req: Request, res: Response) => {
    const templateId: number = parseInt(req.params.templateId);
    const cssTemplate: CSSTemplate = CUSTOM_CSS_TEMPLATES[templateId];

    res.status(200).send({cssTemplate});
});

app.get('/profile', (req: Request, res: Response) => {
    res.status(200).send({ profile });
});

app.get('/styling', (req: Request, res: Response) => {
    res.render('styling', {
        numTemplates: Object.keys(CUSTOM_CSS_TEMPLATES).length || 0,
    });
});

app.get('/portfolio', (req: Request, res: Response) => {
    res.render('portfolio', {});
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});