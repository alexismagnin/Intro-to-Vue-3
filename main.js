const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id, cant){
            var auxIndex = this.cart.findIndex(item => item.id == id)
            console.log(auxIndex)
            if (auxIndex >= 0) {
                console.log(this.cart[auxIndex])
                this.cart[auxIndex].cant += cant
                console.log(this.cart[auxIndex])
            } else this.cart.push({id, cant})
        },
        remFromCart (id, cant){
            var auxIndex = this.cart.findIndex(item => item.id == id)
            console.log(auxIndex)
            if (auxIndex >= 0) {
                console.log(this.cart[auxIndex])
                this.cart[auxIndex].cant -= cant
                console.log(this.cart[auxIndex])
                if (this.cart[auxIndex].cant <= 0) this.cart.splice(auxIndex, 1)
            }
        }
    }
})
