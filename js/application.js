window.onload = function() {
  const checkAgeForm = document.getElementById('check-age-form');

  checkAgeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);

    const result = document.querySelector('#result');

    result.classList.add('mt-3');

    result.classList.remove('text-success');
    result.classList.remove('text-danger');

    if(age > 18) {
      result.classList.add('text-success');

      result.innerText = 'You are adult enough';
    } else {
      result.classList.add('text-danger');

      result.innerText = 'You are not adult enough';
    }
  });
}
