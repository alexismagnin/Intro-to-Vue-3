app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <br><div class="group">
    <label class ="item" for="recommend">Would you recommend this product?</label>
    <input class ="item" type="checkbox" id="recommend" v-model="isRecommended">
    <label class ="item" for="recommend"> Yes</label>
    </div>

    <input class="button" type="submit" value="Submit">
  </form>`,

  data() {
    return {
      name: '',
      review: '',
      rating: null,
      isRecommended: false
    }
  },
  methods: {
    onSubmit(){
      console.log(this.isRecommended)
        let newReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            isRecommended: this.isRecommended
        }
        this.$emit('review-submitted', newReview)

        this.name = ''
        this.review = ''
        this.rating = null
        this.isRecommended = false
    }
  }
})