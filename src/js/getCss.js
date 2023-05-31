import { getCSSTemplate, objectToCSS } from "../public/utilities/index.js";

async function main() {
    let templateID = getTemplateId();
    let rawCSS = await getCSSTemplate(templateID);
    let css = objectToCSS(rawCSS);
    document.getElementById('stylesheet').textContent = css;
}

function getTemplateId() {
    let templateId = localStorage.getItem('templateID');
    return JSON.parse(templateId);
}

main();