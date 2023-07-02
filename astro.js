
import { Head } from '@astrojs/helmet';

export function meta() {
  return {
    title: 'FinEdge - Transforming Cross-Border Payments',
  };
}


<astro-viewport>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home">
      <h1>Transforming Cross-Border Payments</h1>
      <p>FinEdge - Making seamless transactions without boundaries</p>
    </section>

    <section id="about">
      <h2>About Us</h2>
      <p>
        FinEdge is a cutting-edge fintech startup focused on transforming cross-border payments. We believe in a world where geographic boundaries should not limit individuals and businesses from making seamless transactions.
      </p>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <div class="service">
        <img src="/assets/money-transfer.png" alt="Money Transfer" />
        <h3>Individual Money Transfers</h3>
        <p>Secure and fast money transfers for individuals.</p>
      </div>
      <div class="service">
        <img src="/assets/business-payments.png" alt="Business Payments" />
        <h3>Business Payments</h3>
        <p>Efficient payment solutions for businesses.</p>
      </div>
      <div class="service">
        <img src="/assets/payment-tracking.png" alt="Payment Tracking" />
        <h3>Real-time Payment Tracking</h3>
        <p>Track your payments in real-time with our advanced tracking system.</p>
      </div>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 FinEdge. All rights reserved.</p>
  </footer>
</astro-viewport>
