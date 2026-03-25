/**
 * script.js - Lógica y Animaciones para NeuroNómada
 * 
 * Este archivo maneja las interacciones del usuario y las animaciones
 * de scroll de forma sencilla y eficiente.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. ANIMACIÓN DE REVELACIÓN AL HACER SCROLL
    // Usamos Intersection Observer para detectar cuando un elemento entra en pantalla
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento es visible al menos un 10%
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Una vez revelado, dejamos de observarlo para mejorar el rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    // Aplicar el observador a cada elemento con la clase .reveal
    revealElements.forEach(el => revealOnScroll.observe(el));


    // 2. EFECTO DE NAVEGACIÓN SUAVE (SMOOTH SCROLL)
    // Hace que al hacer clic en los enlaces internos, la página baje suavemente
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // 3. MANEJO DEL FORMULARIO DE CONTACTO (MOCKUP)
    // Se ha eliminado el controlador manual para permitir que Formspree gestione el envío.


    // 4. ANIMACIÓN EXTRA: EFECTO GLOW DINÁMICO
    // Añade un pequeño rastro de luz si el cursor pasa sobre las tarjetas
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Podemos usar variables CSS para mover efectos si quisiéramos algo más avanzado
            // Para este ejemplo, la transición CSS ya maneja el hover básico.
        });
    });

    // 5. TABS DE SOLUCIONES TECNOLÓGICAS
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover activo de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Agregar activo al seleccionado
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

});
