app.component('product-details',{
    props: {
        details: {
            type: Array,
            required: true,
            default: ['Sin datos que mostrar']
        }
    },
    template:
    /*html*/
    `<ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>`
})