// src/utils/ScrambleText.js

export class ScrambleText {
  constructor(element) {
    this.element = element;
    this.originalText = element.innerText.trim();
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/[]>_#';
    this.frameRequest = null;
    this.frame = 0;
    this.queue = [];

    // 1. Immediately scramble the text so it is fully encrypted 
    // before the user even sees it fade into the viewport.
    this._scrambleInstantly();
  }

  // --- PUBLIC API ---

  trigger() {
    this._buildQueue();
    this._resetState();
    this.update();
  }

  update() {
    let output = '';
    let completeCount = 0;

    for (let i = 0; i < this.queue.length; i++) {
      const result = this._processCharacter(this.queue[i]);
      output += result.html;
      if (result.isComplete) completeCount++;
    }

    this._paintDOM(output, completeCount);
  }

  // --- INTERNAL HELPERS ---

  _scrambleInstantly() {
    let encrypted = '';
    for (let i = 0; i < this.originalText.length; i++) {
      if (this.originalText[i] === ' ') {
        encrypted += ' ';
      } else {
        encrypted += `<span class="text-secondary-color/70">${this._getRandomChar()}</span>`;
      }
    }
    this.element.innerHTML = encrypted;
  }

  _buildQueue() {
    this.queue = [];
    const length = this.originalText.length;

    for (let i = 0; i < length; i++) {
      // Create a "Decryption Sweep" from left to right.
      // i * 4 ensures the letters on the left lock in first.
      // + 20 adds a baseline delay so the whole word scrambles together for a moment.
      const end = (i * 4) + Math.floor(Math.random() * 15) + 20;

      this.queue.push({
        char: this.originalText[i],
        end,
        charScrambled: this._getRandomChar()
      });
    }
  }

  _resetState() {
    this.frame = 0;
    cancelAnimationFrame(this.frameRequest);
  }

  _processCharacter(item) {
    // 1. Handle Whitespace
    if (item.char === ' ') {
      return { html: ' ', isComplete: true };
    }

    // 2. Handle Decrypted Characters (Locks into true character)
    if (this.frame >= item.end) {
      return { html: item.char, isComplete: true };
    }

    // 3. Handle Encrypted Characters (Actively flipping)
    // Flip the character every 3 frames to make it chaotic but smooth
    if (this.frame % 3 === 0) {
      item.charScrambled = this._getRandomChar();
    }

    return { 
      html: `<span class="text-secondary-color/70">${item.charScrambled}</span>`, 
      isComplete: false 
    };
  }

  _paintDOM(output, completeCount) {
    this.element.innerHTML = output;

    if (completeCount === this.queue.length) {
      // Force exact match at the end to prevent any DOM artifacts
      this.element.innerHTML = this.originalText;
    } else {
      this.frameRequest = requestAnimationFrame(() => this.update());
      this.frame++;
    }
  }

  _getRandomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}