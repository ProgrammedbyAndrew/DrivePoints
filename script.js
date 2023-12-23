document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('acceptTerms').addEventListener('click', function() {
        document.getElementById('termsPage').classList.add('hidden');
        document.getElementById('mainPage').classList.remove('hidden');
    });
});
