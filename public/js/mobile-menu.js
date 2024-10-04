document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menumob');

    // Toggle main menu
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle the menu visibility
        menuToggle.classList.toggle('active'); // Change class on the toggle button
    });

    // Function to toggle submenus
    const toggleSubmenu = (submenu) => {
        if (submenu) {
            submenu.classList.toggle('active');
        }
    };

    // Toggle submenus
    const submenuLinks = document.querySelectorAll('.menumob > li > a');

    submenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const submenu = this.nextElementSibling;
            toggleSubmenu(submenu);

            // Close other submenus
            submenuLinks.forEach(otherLink => {
                const otherSubmenu = otherLink.nextElementSibling;
                if (otherLink !== this && otherSubmenu) {
                    otherSubmenu.classList.remove('active');
                }
            });
        });
    });

    // Handle deeper submenus
    const deeperSubmenuLinks = document.querySelectorAll('.submenu > li > a');

    deeperSubmenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const submenu = this.nextElementSibling;
            toggleSubmenu(submenu);

            // Close other deeper submenus
            deeperSubmenuLinks.forEach(otherLink => {
                if (otherLink !== this) {
                    const otherSubmenu = otherLink.nextElementSibling;
                    if (otherSubmenu) {
                        otherSubmenu.classList.remove('active');
                    }
                }
            });
        });
    });
});
