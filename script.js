// Einfaches Beispiel, um bei der Formularübermittlung eine Bestätigung anzuzeigen
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Danke für deine Nachricht! Wir werden uns bald bei dir melden.");
});
