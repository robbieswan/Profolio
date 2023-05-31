import express from 'express';
import { CUSTOM_CSS_TEMPLATES } from './models/css-templates.js';
import profile from './models/profile.js';

const app = express();
const port = process.env.PORT || 5361;


app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/css/:templateId', (req, res) => {
    const templateId = parseInt(req.params.templateId);
    const cssTemplate = CUSTOM_CSS_TEMPLATES[templateId];

    res.status(200).send({cssTemplate});
});

app.get('/', (req, res) => {
    res.render('home', {});
})

app.get('/input', (req, res) => {
    res.render('input', {});
});

app.get('/profile', (req, res) => {
    res.status(200).send({ profile });
});

app.get('/styling', (req, res) => {
    res.render('styling', {
        numTemplates: Object.keys(CUSTOM_CSS_TEMPLATES).length || 0,
    });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', {});
});


app.listen(port, () => {
    console.log(`Listening on port: http://localhost:${port}`);
});