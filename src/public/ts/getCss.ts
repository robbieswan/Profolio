import { type CSSTemplate } from "./types";
import { getCSSTemplate, objectToCSS } from "./utils.js";

async function main() {
    let templateID: number = getTemplateId();
    let rawCSS: CSSTemplate = await getCSSTemplate(templateID);
    let css: string = objectToCSS(rawCSS);
    document.getElementById('stylesheet')!.textContent = css;
}

function getTemplateId(): number {
    let templateId: string = localStorage.getItem('templateID')!;
    return JSON.parse(templateId) as number;
}

main();