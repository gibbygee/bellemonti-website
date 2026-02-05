// Bellemonti Website JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#"
      if (href === '#') return;

      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });


  // Matrix rain animation
  const matrixCanvas = document.getElementById('matrix-canvas');
  if (matrixCanvas) {
    const ctx = matrixCanvas.getContext('2d');
    let matrixInterval = null;

    function resizeCanvas() {
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
    }

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    let columns, drops;

    function initDrops() {
      columns = Math.floor(matrixCanvas.width / fontSize);
      drops = Array.from({length: columns}, () => Math.floor(Math.random() * matrixCanvas.height / fontSize));
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const opacity = 0.3 + Math.random() * 0.7;
        ctx.fillStyle = 'rgba(0, 255, 65, ' + opacity + ')';
        ctx.fillText(char, x, y);

        if (y > matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    window.addEventListener('resize', function() {
      if (document.body.classList.contains('matrix-active')) {
        resizeCanvas();
        initDrops();
      }
    });

    window.toggleMatrix = function() {
      const btn = document.getElementById('matrix-toggle');
      const active = document.body.classList.toggle('matrix-active');

      if (active) {
        btn.textContent = 'The Story Ends';
        resizeCanvas();
        initDrops();
        matrixInterval = setInterval(draw, 80);
      } else {
        btn.textContent = 'Wake up, Neo';
        clearInterval(matrixInterval);
        matrixInterval = null;
        ctx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      }
    };
  }

  // Copy button for code blocks
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(pre => {
    // Create wrapper for positioning
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
    wrapper.appendChild(copyBtn);

    // Handle click
    copyBtn.addEventListener('click', async () => {
      const code = pre.querySelector('code') ? pre.querySelector('code').textContent : pre.textContent;

      try {
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        copyBtn.textContent = 'Failed';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      }
    });
  });

});
