import { type CSSTemplate } from "./types.js";
import { getCSSTemplate, objectToCSS } from "./utils.js";

let activeTemplateId = 0;

async function main() {
  try {
    const numTemplatesElement = document.getElementById('numTemplates')!;
    let numTemplates = parseInt(numTemplatesElement.textContent!);
    createTemplateChoices(numTemplates);
    // get initial cssTemplate
    let initialCss: CSSTemplate = await getCSSTemplate(0);
    activeTemplateId = 0;
    createIFrame(initialCss);
    
    for (let i = 0; i < numTemplates; i++) {
      let css: CSSTemplate = await getCSSTemplate(i);
      let aElem = document.getElementById(`choice-anchor-${i}`)!;
      aElem.addEventListener('click', (e) => {
        activeTemplateId = i;
        addCSS(css);
      })
    }
  } catch (ex) {
    console.error(ex);
  }

  document.getElementById('button')!.addEventListener('click', openPortfolio);
}

function createTemplateChoices(numChoices: number) {
  let choicesDiv = document.getElementById('template-choices')!;
  for (let i = 0; i < numChoices; i++) {
    let choiceElem = document.createElement('a');
    choiceElem.id = `choice-anchor-${i}`;
    choiceElem.classList.add('choice-anchor');

    let divElem = document.createElement('div');
    divElem.classList.add('choice-container');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `Template ${(i + 1)}`;

    divElem.append(h2Elem);
    choiceElem.append(divElem);
    choicesDiv.insertBefore(choiceElem, document.getElementById('view-portfolio-btn')! as Node);
  }
}

function createIFrame(cssTemplate: CSSTemplate) {
  const iFrame = document.createElement('iframe');
  iFrame.src = './html/customtemplate.html';
  iFrame.id = `css-template-preview`;
  iFrame.classList.add('content-preview');

  const contentArea = document.getElementById('main-content')!;

  contentArea.insertBefore(iFrame, contentArea.firstChild);

  iFrame.onload = () => {
    addCSS(cssTemplate);
  }
}

function addCSS(css: CSSTemplate) {
  const iFrame = document.getElementById(`css-template-preview`)! as HTMLIFrameElement;
  let doc = iFrame.contentDocument!;

  const cssString = objectToCSS(css);

  const styleTag = doc.getElementById('stylesheet')!;
  styleTag.textContent = cssString;
  doc.body.append(styleTag);
}

function openPortfolio() {
  localStorage.setItem('templateID', JSON.stringify(activeTemplateId));
  window.open('/portfolio', "_self");
}

main();