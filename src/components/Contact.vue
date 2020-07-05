<template>
  <section class="page-section" id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Contact Us</h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <form id="contactForm" name="sentMessage" novalidate="novalidate">
        <div class="row align-items-stretch mb-5">
          <div class="col-md-6">
            <div class="form-group">
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Your Name *"
                required="required"
                data-validation-required-message="Please enter your name."
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <input
                class="form-control"
                id="email"
                type="email"
                placeholder="Your Email *"
                required="required"
                data-validation-required-message="Please enter your email address."
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group mb-md-0">
              <input
                class="form-control"
                id="phone"
                type="tel"
                placeholder="Your Phone *"
                required="required"
                data-validation-required-message="Please enter your phone number."
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group form-group-textarea mb-md-0">
              <textarea
                class="form-control"
                id="message"
                placeholder="Your Message *"
                required="required"
                data-validation-required-message="Please enter a message."
              ></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div id="success"></div>
          <button
            class="btn btn-primary btn-xl text-uppercase"
            id="sendMessageButton"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<style>
section#contact {
  background-color: #212529;
  background-image: url("../assets/img/map-image.png");
  background-repeat: no-repeat;
  background-position: center;
}
section#contact .section-heading {
  color: #fff;
}
section#contact form#contactForm .form-group {
  margin-bottom: 1.5rem;
}
section#contact form#contactForm .form-group input,
section#contact form#contactForm .form-group textarea {
  padding: 1.25rem;
}
section#contact form#contactForm .form-group input.form-control {
  height: auto;
}
section#contact form#contactForm .form-group-textarea {
  height: 100%;
}
section#contact form#contactForm .form-group-textarea textarea {
  height: 100%;
  min-height: 10rem;
}
section#contact form#contactForm p.help-block {
  margin: 0;
}
section#contact form#contactForm .form-control:focus {
  border-color: #fed136;
  box-shadow: none;
}
section#contact form#contactForm ::-webkit-input-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}
section#contact form#contactForm :-moz-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}
section#contact form#contactForm ::-moz-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}
section#contact form#contactForm :-ms-input-placeholder {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  color: #ced4da;
}
</style>
