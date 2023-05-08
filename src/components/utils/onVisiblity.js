const onVisibility = () => {
  const form = document.querySelector(".movie-form");
  const overlay = document.querySelector(".overlay");
  form.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

export { onVisibility };
