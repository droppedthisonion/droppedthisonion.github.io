document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('p');

    function typeEffect(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    setTimeout(() => {
        typeEffect(heading, "How was your first class today?", 100);
    }, 500);

    setTimeout(() => {
        typeEffect(paragraph, "Hey love, I hope your first class went well today. I can't wait to hear all about it! I'm sure you rocked it, as always. Let me know how it went when you have a chance. Love you!", 50);
    }, 2000);
});