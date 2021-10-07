const app = Vue.createApp({
    data() {
        return {
            cart:0,
            cartEmpty: true,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
            this.cartEmpty = false
        },

        removeFromCart(){
            if (this.cart > 0) {
                this.cart -= 1;
                if (this.cart == 0) this.cartEmpty = true
            }
        },

        changeImage(image){
            this.image = image
        }
    }
})
