<template>
  <div>
    <div class="carousel">
      <Carousel class="carousel" autoplay loop>
          <CarouselItem>
            <router-link to="/exchange">
              <img :src="banner[0]" class="carouselImage">
            </router-link>
          </CarouselItem>
          <CarouselItem>
            <router-link to="/exchange">
              <img :src="banner[1]" class="carouselImage">
            </router-link>
          </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExchangeNav',
  data () {
    return {
      banner: [
        '/static/images/telecom/exchange-banner.png',
        '/static/images/telecom/banner-2.jpg',
      ]
    }
  }
}
</script>
<style scoped>
.banner {
  width: 1200px;
  display: block;
  margin: 0 auto;
}
.carousel {
  width: 1200px;
  padding-left: 10px;
}
.carouselImage {
  height: 480px;
}

</style>

