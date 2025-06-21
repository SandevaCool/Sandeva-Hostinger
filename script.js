window.addEventListener('DOMContentLoaded', () => {
    fetch('bagian.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('konten').innerHTML = data;
      })
      .catch(error => {
        console.error('Gagal load bagian.html:', error);
      });
  });
  