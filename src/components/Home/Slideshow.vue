<template>
  <Splide :options="{ type: 'loop', autoplay: true }">
    <SplideSlide>
      <img src="/public/slide/Profesi.jpg" alt="Slide 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="/public/slide/S2.jpg" alt="Slide 2" />
    </SplideSlide>
    <SplideSlide>
      <img src="/public/slide/S3.jpg" alt="Slide 3" />
    </SplideSlide>
    <SplideSlide>
      <img src="/public/slide/Spesialis.jpg" alt="Slide 3" />
    </SplideSlide>
  </Splide>
</template>

<script setup>
const Splide = (await import("@splidejs/vue-splide")).Splide;
const SplideSlide = (await import("@splidejs/vue-splide")).SplideSlide;

import "@splidejs/splide/dist/css/splide.min.css";
</script>
