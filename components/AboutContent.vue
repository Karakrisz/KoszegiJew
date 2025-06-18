<template>
  <section class="about">
    <div class="about__container">
      <div class="about__header">
        <h2 class="about__title">Rólunk</h2>
        <p class="about__subtitle">A kőszegi zsidó közösség múltja és jelene</p>
      </div>

      <div class="about__content">
        <div class="about__image-container">
          <img
            src="/img/about.webp"
            alt="Kőszegi zsinagóga esti megvilágításban"
            class="about__image"
          />
          <p class="about__image-caption">Forrás: Gulyás Attila Fotográfus</p>
        </div>

        <div class="about__text-container">
          <div class="about__paragraph">
            <p>
              A kőszegi zsidó közösség története több mint másfél évszázadra
              nyúlik vissza. Az 1840-es évektől kezdve egyre több zsidó család
              telepedett le a városban, és hamarosan virágzó közösséget
              alkottak. A hitközség központja az 1859-ben épült impozáns
              zsinagóga lett, amely Schey Fülöp báró nagylekű támogatásával
              valósult meg.
            </p>
          </div>

          <div class="about__paragraph">
            <p>
              A 20. század első felében a közösség létszáma csökkent, majd a
              második világháború tragikusan megtörte a város zsidó életét.
              1944-ben a kőszegi zsidókat a szombathelyi gettóba, majd
              Auschwitzba deportálták, és a háború után mindössze néhány túlélő
              tért vissza. Az egykori hitközség 1951-ben hivatalosan megszűnt.
            </p>
          </div>

          <div class="about__paragraph">
            <p>
              A 2010-es években újra felmerült a kőszegi zsidó hagyományok
              ápolásának igénye. 2015-ben egy maroknyi elkötelezett ember
              megalapította a Kőszegi Zsidó Hitközséget, és azóta azon
              dolgozunk, hogy kulturális és vallási programokkal életet
              leheljünk a város zsidó múltjába. A közösségünk nyitott mindenki
              számára, és célunk, hogy a múlt emlékezetén túl egy élő és aktív
              közösségi térként is működjünk.
            </p>
          </div>

          <div class="about__button-container">
            <NuxtLink to="kapcsolat" class="about__button">Kapcsolat</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
