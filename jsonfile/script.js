function copyText(textAreaId) {
    const textArea = document.getElementById(textAreaId);
    textArea.select();
    textArea.setSelectionRange(0, 99999); // Untuk perangkat mobile
    document.execCommand("copy");
    alert("Teks berhasil disalin!");
}
