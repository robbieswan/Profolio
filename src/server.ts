import express from 'express';
import path from 'path';

import CUSTOM_CSS_TEMPLATES, { CSSTemplate } from './models/css-templates.js';
import profile from './models/profile.js';

const app = express();
const port = process.env.PORT || 7777;


app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/css/:templateId', (req: any, res: any) => {
    const templateId: number = req.params.templateId;
    const cssTemplate: CSSTemplate = CUSTOM_CSS_TEMPLATES[templateId];

    res.status(200).send({cssTemplate});
});

app.get('/profile', (req: any, res: any) => {
    res.status(200).send({ profile });
});

app.get('/', (req: any, res: any) => {
    res.render('index', {
        numTemplates: Object.keys(CUSTOM_CSS_TEMPLATES).length || 0,
    });
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});