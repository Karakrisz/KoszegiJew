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
        <NuxtLink to="kapcsolat" class="hero__button">Csatlakozz hozzánk</NuxtLink>
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
  <AboutContent />
  <TimelineContent />
  <ContactContent />
</template>
