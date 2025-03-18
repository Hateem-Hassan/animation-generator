function generateAnimation() {
    const prompt = document.getElementById('prompt').value.toLowerCase();
    const container = document.getElementById('animation-container');
    container.innerHTML = ''; // Clear previous animation

    // Example: If user types "rock dance", add a bouncing rock emoji
    if (prompt.includes('rock') && prompt.includes('dance')) {
        const rock = document.createElement('div');
        rock.innerHTML = '🪨';
        rock.style.fontSize = '50px';
        rock.classList.add('animate-rock'); // Use custom CSS animation
        container.appendChild(rock);
    } else {
        // Default: Use animate.css library
        const box = document.createElement('div');
        box.innerHTML = '🎁'; // Default emoji
        box.style.fontSize = '50px';
        box.classList.add('animate__animated', 'animate__bounce'); // Pre-built animation
        container.appendChild(box);
    }
}