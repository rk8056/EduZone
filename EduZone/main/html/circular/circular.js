function storeData() {
    var subject = document.getElementById("sub").value;
    var date = document.getElementById("date").value;

    // Store data in local storage
    localStorage.setItem("subject", subject);
    localStorage.setItem("date", date);
}

    var subject = localStorage.getItem("subject");
    var date = localStorage.getItem("date");

    if (subject && date) {
        document.getElementById("displaySubject").textContent = subject;
        document.getElementById("displayDate").textContent = date;
    }
