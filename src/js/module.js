class Countdown extends HTMLElement {
    constructor() {
      super();
  
      this.interval = false;
      this.textEl = this.querySelector('[data-text]');
  
      this.setupCountdown();
    }
  
    setupCountdown() {
      this.updateCountdown();
  
      this.textEl.classList.remove('opacity-0');
  
      this.interval = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    }
  
    updateCountdown() {
      const now = new Date().getTime() / 1000;
      const expiry = this.dataset.time;
      const remaining = expiry - now;
  
      const day = Math.floor(remaining / (60 * 60 * 24));
      const hour = Math.floor((remaining - day * (60 * 60 * 24)) / (60 * 60));
      const minute = Math.floor(
        (remaining - day * (60 * 60 * 24) - hour * (60 * 60)) / 60
      );
      const second = Math.floor(
        remaining - day * (60 * 60 * 24) - hour * (60 * 60) - minute * 60
      );
  
      if (this.dataset < now) {
        clearInterval(this.interval);
      } else if (day < 1) {
        this.textEl.textContent = `${hour}h ${minute}m ${second}s`;
      } else {
        this.textEl.textContent = `${day}days ${hour}hours ${minute}mins ${second}seconds`;
      }
    }
  }
  
  customElements.define('datetime-countdown', Countdown);
  

  class CoolHeading extends HTMLElement {
    constructor() {
      super();

      this.addEventListener('click', () => {
        this.style.color = 'red';
      });
    }

    connectedCallback() {
      this.style.color = 'blue';
    }
  }

  customElements.define('cool-heading', CoolHeading);