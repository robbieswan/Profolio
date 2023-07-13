import { useState } from "react";
import Preview from "./Preview";

export default function StyleSelection() {
    const [templateId, setTemplateId] = useState();
    
    function onClick(event) {
        setTemplateId(event.target.dataset.id)
    }
    return (
        <div style={{"maxWidth": "1098px", width:"100vw "}}>
            <h1>Select your style</h1>
            <section className="grid grid-cols-4 grid-rows-3 bg-white p-4">
                <div className="col-start-1 row-start-1 bg-slate-400 text-black">
                    <button type="button" data-id={1} onClick={onClick}>Style 1</button>
                </div>
                <div className="col-start-1 row-start-2 bg-slate-400 text-black">
                    <button type="button" data-id={2} onClick={onClick}>Style 2</button>
                </div>
                <div className="col-start-1 row-start-3 bg-slate-400 text-black">
                    <button type="button" data-id={3}onClick={onClick}>Style 3</button>
                </div>
                <div className="col-start-2 col-end-5 row-start-1 row-end-4">
                    {templateId == undefined && <Preview />}
                    {templateId == 1 && <Preview template={1}/>}
                    {templateId == 2 && <Preview template={2}/>}
                    {templateId == 3 && <Preview template={3}/>}
                </div>
            </section>
        </div>
    )
}