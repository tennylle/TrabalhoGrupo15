document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function () {
        let phone = phoneInput.value.replace(/\D/g, "");

        if (phone.length > 0) {
            phone = "(" + phone;
        }
        if (phone.length > 3) {
            phone = phone.slice(0, 3) + ") " + phone.slice(3);
        }
        if (phone.length >= 10) {
            phone = phone.slice(0, 10) + "-" + phone.slice(10, 14);
        }
        phoneInput.value = phone;
    });
});