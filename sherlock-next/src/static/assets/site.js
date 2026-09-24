// Hero line: the draw-in runs once (CSS, gated by .js), then .drawn removes it for good.
document.querySelectorAll('.device').forEach(function (d) { setTimeout(function () { d.classList.add('drawn'); }, 1000); });

// Preview forms send nothing (preview-sites README, rule 1). On submit, after the browser's own validation,
// show the preview notice instead. No network request is made.
document.querySelectorAll('form[data-preview-form]').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var status = form.querySelector('.form-status');
    if (!status) return;
    status.textContent = status.getAttribute('data-message');
    status.classList.add('on');
    status.focus();
  });
});
