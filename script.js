document.addEventListener('DOMContentLoaded', function() {
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Terms and Conditions</h2>
            <p>Please read and accept our terms and conditions to use the Drive Rewards app.</p>
            <button id="acceptTerms" class="btn">Accept</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('acceptTerms').addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
