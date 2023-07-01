export default function StylingPreview() {
    return (
        <div>
            <h1>Select your style</h1>
            <section >
                <div>
                    <button type="button">Style 1</button>
                </div>
                <div>
                    <button type="button">Style 2</button>
                </div>
                <div>
                    <button type="button">Style 3</button>
                </div>
                <div>
                    <iframe src="/src/template.html" ></iframe>
                </div>
            </section>
        </div>
    )
}