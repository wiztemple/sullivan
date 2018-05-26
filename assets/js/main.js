const footer = document.getElementById('footer')
window.onscroll = function() {
    if(window.pageYOffset >= 500){
        footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
    
}