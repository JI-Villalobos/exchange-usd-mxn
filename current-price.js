const CURRENT_DOLLAR_INDEX = "https://sidofqa.segob.gob.mx/dof/sidof/indicadores/158/"
let date = new Date()
const formatedDate = (date) => {
    let formated = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    
    return formated
}


class CurrentPrice extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: "open" })
    }

     getTemplate(){
        const template = document.createElement('template')

        template.innerHTML = `
            <div class="current-price">
                <p class="current-symbol">$</p>
                <p class="current-price-update">USD-MXN <slot name="price"></slot></p>
            </div>
            ${this.getStyles()}
        `

        return template
    }

    getStyles(){
        return `
            <style>
            .current-price {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-items: center;
                height: 40px;
            }
            
            .current-price .current-symbol {
                height: 27px;
                width: 27px;
                background-color: #207899;
                color: #F4F3F3;
                border-radius: 5px 0 0 5px;
                text-align: center;
                font-size: 18px;
            }
            
            .current-price .current-price-update {
                height: 27px;
                width: 140px;
                background-color: #FFFCFC;
                border-radius: 5px;
                font-weight: bold;
            }
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render()
    }

}

customElements.define("current-price", CurrentPrice)