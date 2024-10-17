<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
</script>

<template>
  <div class="slideshow">
    <Splide :options="{ type: 'loop', autoplay: true }">
      <SplideSlide>
        <img src="/slide/Profesi.jpg" alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="/slide/S2.jpg" alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="/slide/S3.jpg" alt="Slide 3" />
      </SplideSlide>
      <SplideSlide>
        <img src="/slide/Spesialis.jpg" alt="Slide 3" />
      </SplideSlide>
    </Splide>
  </div>
</template>
<style scoped>
.slideshow {
  padding: 50px;
  padding-top: 0;
}
</style>
