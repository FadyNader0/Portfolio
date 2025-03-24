
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".contact-form"); // Get the form
    let sendMessageBtn = document.getElementById("send_message"); // Submit button

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = new FormData(form); // Get form data

        fetch("https://formspree.io/f/mqapbbrw", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" } // Expect JSON response
        })
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            if (data.ok) { // ✅ If message is sent successfully
                form.reset(); // 🔥 Clear all inputs
                alert("✅ Message sent successfully!");
            } else {
                alert("❌ Error sending message. Please try again.");
            }
        })
    });
});
