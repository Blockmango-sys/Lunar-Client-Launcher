function showLoading() {
  const button = document.querySelector('.launch-button');
  const loader = document.getElementById('loader');

  button.innerText = 'Launching...';
  button.disabled = true;
  loader.style.display = 'inline-block';

  setTimeout(() => {
    window.location.href = 'launch.html'; // redirect after loading
  }, 2000);
}

function copyIP(ip) {
  navigator.clipboard.writeText(ip).then(() => {
    showToast(`Copied ${ip} to clipboard!`);
  }).catch(err => {
    showToast('Failed to copy IP.');
    console.error(err);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

