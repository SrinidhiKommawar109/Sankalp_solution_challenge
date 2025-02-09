document.addEventListener("DOMContentLoaded", function () {
    function confirmOrder(event) {
        event.preventDefault(); // Prevent actual form submission
        alert("Your order has been confirmed! Thank you for your purchase.");
    }

    document.querySelector("#paymentForm").addEventListener("submit", confirmOrder);
});
