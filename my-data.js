class myData extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" })
    }

    static get observerdAttributes(){
        return ["date", "value"]
    }

    attributeChangedCallback(attribute, oldVal, newVal){
        if (attribute === "date") {
            this.date = newVal
        }
        if (attribute === "value") {
            this.value = value
        }
    }

    getTemplate(){
        const template = document.createElement("template")

        template.innerHTML = `
            <section>
                <div>
                    <p>
                        <slot name="date"></slot>
                    </p>
                </div>
                <div>
                    <p>
                        <slot name="value"></slot>
                    </p>
                </div>
            </section>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("my-data", myData)