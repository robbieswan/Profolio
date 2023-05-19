type CSSTemplate = {
  [key: string]: {
      [key: string]: string;
  };
};

const CSS_URL = 'http://localhost:7777/css/';

async function main() {
  try {
    const numTemplatesElement = document.getElementById('numTemplates')!;
    let numTemplates = parseInt(numTemplatesElement.textContent!);
    createTemplateChoices(numTemplates);
    // get initial cssTemplate
    let initialCss: CSSTemplate = await getCSSTemplate(0);
    createIFrame(initialCss);

    for (let i = 0; i < numTemplates; i++) {
      let css: CSSTemplate = await getCSSTemplate(i);
      let aElem = document.getElementById(`choice-anchor-${i}`)!;
      aElem.addEventListener('click', (e) => {
        addCSS(css);
      })
    }
  } catch (ex) {
    console.log(ex);
  }
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
    choicesDiv.append(choiceElem);
  }
}

async function getCSSTemplate(templateId: number) {
  const url = CSS_URL + templateId;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.cssTemplate as CSSTemplate;
  } else {
    throw new Error(`Unable to retreive css for ${templateId}`);
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

function objectToCSS(cssObject: CSSTemplate): string {
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

main();