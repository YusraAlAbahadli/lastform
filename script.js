function submitForm() {
    const form = document.getElementById('registrationForm');
    const data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbx3kYFLORnj4KPRzaCpoOJplGMOLnIJjUO2G7T2kLWebP7TjBmt1H7S9LICkMP1-uqc5w/exec', {
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(result => {
        alert('تم تسجيل الطالب بنجاح!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء التسجيل.');
    });
}
