document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('acceptTerms').addEventListener('click', function() {
        document.querySelector('.modal').style.display = 'none';
        document.getElementById('mainPage').classList.remove('hidden');
    });
});
