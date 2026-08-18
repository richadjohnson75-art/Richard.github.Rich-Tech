const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Adjust canvas dimensions on window resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});
console.log("Glow background started");

// Floating Code Symbols Configuration
const charSet = '</>{}[]$=+*#;';
const particles = [];
const particleCount = 45;

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.char = charSet[Math.floor(Math.random() * charSet.length)];
        this.speed = 0.3 + Math.random() * 0.7;z
        this.fontSize = 12 + Math.random() * 16;
    }

    update() {
        this.y -= this.speed;
        if (this.y < -20) {
            this.y = height + 20;
            this.x = Math.random() * width;
        }
    }

    draw() {
        ctx.fillStyle = '#f7f9f5';
        ctx.font = `${this.fontSize}10px monospace`;
        ctx.fillText(this.char, this.x, this.y);
    }
}

// Instantiate particle array
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}
