<template>
  <section class="contact" id="contact">
    <div class="contact__container">
      <div class="contact__form-wrapper">
        <div class="contact__form-container">
          <h2 class="contact__title">Kapcsolat</h2>
          <p class="contact__subtitle">
            Írjon nekünk e-mailt, hamar válaszolunk.
          </p>

          <form class="contact__form" id="contactForm" method="post">
            <div class="contact__form-group">
              <input
                type="email"
                id="email"
                name="email"
                class="contact__input"
                placeholder="E-mail cím*"
                required
              />
            </div>

            <div class="contact__form-group">
              <input
                type="text"
                id="name"
                name="name"
                class="contact__input"
                placeholder="Név*"
                required
              />
            </div>

            <div class="contact__form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                class="contact__input"
                placeholder="Tárgy"
              />
            </div>

            <div class="contact__form-group">
              <textarea
                id="message"
                name="message"
                class="contact__textarea"
                placeholder="Üzenet"
                rows="5"
              ></textarea>
            </div>

            <div class="contact__form-footer">
              <button type="submit" class="contact__submit">
                Küldés
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="contact__submit-icon"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>

              <div class="contact__gdpr-notice">
                A küldés gombra kattintva elfogadja az
                <a href="#" class="contact__gdpr-link"
                  >Adatkezelési Nyilatkozatot</a
                >.
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="contact__donate-wrapper">
        <div class="contact__donate-container">
          <div class="contact__star-image">
            <img
              src="../images/star-of-david-3d.png"
              alt="Dávid csillag 3D"
              class="contact__star"
            />
          </div>

          <div class="contact__donate-content">
            <h2 class="contact__donate-title">
              Kérjük támogassa
              <span class="contact__donate-highlight">adója 1%</span>-ával a
              Kőszegi Zsidó Hitközösség munkásságát
            </h2>

            <div class="contact__donate-info">
              <div class="contact__donate-row">
                <span class="contact__donate-label">Adószám:</span>
                <span class="contact__donate-value">18975099-1-18</span>
              </div>

              <div class="contact__donate-row">
                <span class="contact__donate-label">Technikai szám:</span>
                <span class="contact__donate-value">2484</span>
              </div>
            </div>

            <p class="contact__donate-thanks">Hálásan köszönjük!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
