<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-transparent">
      <div class="container">
        <div class="logo float-left">
          <h1 class="text-light">
            <a href="index.html"><span>Moderna</span></a>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav class="nav-menu float-right d-none d-lg-block">
          <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Preview</a></li>
            <li><a href="#">Details</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Demo</a></li>
            <li>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            </li>
          </ul>
        </nav>
        <!-- .nav-menu -->
      </div>
    </header>
    <section id="hero" class="d-flex justify-cntent-center align-items-center">
      <div
        id="heroCarousel"
        class="container carousel carousel-fade"
        data-ride="carousel"
      >
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Welcome to <span>Moderna</span>
            </h2>
            <p class="animate__animated animate__fadeInUp">
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <a
              href=""
              class="btn-get-started animate__animated animate__fadeInUp"
              >Read More</a
            >
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Lorem Ipsum Dolor
            </h2>
            <p class="animate__animated animate__fadeInUp">
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <a
              href=""
              class="btn-get-started animate__animated animate__fadeInUp"
              >Read More</a
            >
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Sequi ea ut et est quaerat
            </h2>
            <p class="animate__animated animate__fadeInUp">
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <a
              href=""
              class="btn-get-started animate__animated animate__fadeInUp"
              >Read More</a
            >
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bx bx-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>

        <a
          class="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon bx bx-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  </div>
  <!-- End Header -->
</template>
<script>
import $ from "jquery";

export default {
  created() {
    this.addClass();
  },
  methods: {
    addClass() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $("#header").addClass("header-scrolled");
        } else {
          $("#header").removeClass("header-scrolled");
        }
      });
    },
  },
};
</script>

<style>
#header.header-scrolled {
  background: rgba(30, 67, 86, 0.8);
  height: 60px;
  padding: 10px 0;
}
</style>
