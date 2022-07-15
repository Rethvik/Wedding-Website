const photoDesc = document.querySelector(".photo-desc");
const filmDesc = document.querySelector(".film-desc");
const contactImg = document.querySelector(".contact-btn-image");
const photos = document.querySelector(".photos");
const films = document.querySelector(".films");
const animatingThings = (
  heading,
  animationClassName,
  desc = false,
  tiles = false
) => {
  const observerPhotos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClassName);
        if (desc) {
          desc.classList.add("desc-animation");
        }
        if (tiles) {
          tiles.classList.add("tiles");
        }
      }
    });
  });
  observerPhotos.observe(document.querySelector(heading));
};
animatingThings(".photo-heading", "heading-animation", photoDesc, photos);
animatingThings(".film-heading", "heading-animation", filmDesc, films);
animatingThings(".contact-btn-image", "contact-btn-image-animation");
