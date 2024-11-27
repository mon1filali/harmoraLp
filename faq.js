function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const isExpanded = faqItem.getAttribute('aria-expanded') === 'true';

    // Fermer toutes les autres FAQ
    document.querySelectorAll('.faq-item').forEach(item => {
        item.setAttribute('aria-expanded', 'false');
        item.querySelector('.faq-content').classList.add('hidden'); // Cache la réponse
    });

    // Si la question est actuellement fermée, on l'ouvre
    if (!isExpanded) {
        faqItem.setAttribute('aria-expanded', 'true');
        faqItem.querySelector('.faq-content').classList.remove('hidden'); // Affiche la réponse
    }
}