export default function TitleSection() {
    return (
        <div class="title-section">
            <SubTitle />
            <Title />
        </div>
    )
}

function SubTitle() {
    return (
        <div class="subtitle">
            <span>HI! I AM DISHA :)</span>
        </div>
    )
}

function Title() {
    return (
        <div class="title">
            code is my <span class="title-alt-1">canvas</span> for creating with <span class="title-alt-2">intention.</span>
        </div>
    )
}