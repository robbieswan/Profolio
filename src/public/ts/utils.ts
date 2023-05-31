import { type CSSTemplate } from "./types";

const CSS_URL = `http://localhost:7777/css/`;

export async function getCSSTemplate(templateId: number): Promise<CSSTemplate> {
    const url = CSS_URL + templateId;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data.cssTemplate as CSSTemplate;
    } else {
      throw new Error(`Unable to retreive css for ${templateId}`);
    }
  }

export function objectToCSS(cssObject: CSSTemplate): string {
    let css = '';
    for (let key in cssObject) {
      css += key + ' {\n';
      for (let property in cssObject[key]) {
        css += '  ' + property + ': ' + cssObject[key][property] + ';\n';
      }
      css += '}\n';
    }
    return css;
  }