document.addEventListener('DOMContentLoaded', function() {
    // Listen for click on the 'Accept Terms' button
    document.getElementById('acceptTerms').addEventListener('click', function() {
        // Hide the terms page
        document.getElementById('termsPage').classList.add('hidden');
        // Show the main page
        document.getElementById('mainPage').classList.remove('hidden');
    });

    // Add any additional JavaScript for the main page here
});
