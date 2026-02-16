<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">Közösség, emlékezet, hagyomány</h1>
        <p class="hero__description">
          A Kőszegi Zsidó Hitközség a múlt tisztelete és a jövő építése jegyében
          működik. Közösségünk célja, hogy megőrizze és bemutassa a kőszegi
          zsidóság gazdag örökségét, valamint nyitott és befogadó közösségi
          teret biztosítson mindazok számára, akik érdeklődnek kultúránk,
          vallásunk és történelmünk iránt. Legyen szó ünnepekről,
          megemlékezésekről vagy közös programokról, mindenkit szeretettel
          várunk, hogy együtt éljük meg hagyományainkat és erősítsük a közösségi
          összetartozást.
        </p>
        <NuxtLink to="kapcsolat" class="hero__button"
          >Csatlakozz hozzánk</NuxtLink
        >
      </div>
      <div class="hero__opening-hours">
        <div class="hero__hours-container">
          <span class="hero__hours-label">Zsinagóga nyitvatartása:</span>
          <span class="hero__hours-time">H: 14:00-18:00</span>
          <span class="hero__hours-time">K-Sz: Zárva</span>
          <span class="hero__hours-time">Cs-V: 14:00-18:00</span>
        </div>
      </div>
    </div>
  </section>
  <section class="gratitude">
    <div class="gratitude__container">
      <div class="gratitude__card">
        <div class="gratitude__media">
          <NuxtImg
            class="gratitude__img"
            src="/img/koszonet.jpg"
            alt="Köszönet"
            loading="lazy"
            format="jpg"
          />
        </div>
        <div class="gratitude__content">
          <h2 class="gratitude__title">Köszönet</h2>
          <p class="gratitude__text">
            Hálásan köszönjük mindenkinek a támogatást és a bizalmat.
          </p>
        </div>
      </div>
    </div>
  </section>
  <AboutContent />
  <TimelineContent />
  <ContactContent />
</template>

<style scoped lang="scss">
.gratitude {
  background: #fff9f4;
  padding: 3.5rem 0;
}

.gratitude__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.gratitude__card {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.gratitude__media {
  border-radius: 12px;
  overflow: hidden;
}

.gratitude__img {
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  display: block;
}

.gratitude__title {
  font-size: 2rem;
  font-weight: 500;
  color: #333;
  margin: 0 0 1rem 0;
}

.gratitude__text {
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin: 0;
}

@media screen and (max-width: 767px) {
  .gratitude {
    padding: 2.5rem 0;
  }

  .gratitude__card {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .gratitude__img {
    max-height: 320px;
  }
}
</style>
