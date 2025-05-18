<script setup></script>
<template>
  <footer>
    <div class="spacer">
      <div class="spacer__content">
        <a href="/" class="spacer__logo-link">
          <div class="spacer__logo-icon">
            <NuxtImg
              src="/img/logo.svg"
              alt="Kőszegi Hitközség"
              class="spacer__logo-icon__img"
              height="100%"
            />
          </div>
          <div class="spacer__logo-text">
            <span class="spacer__site-name">KŐSZEGI ZSIDÓ HITKÖZSÉG</span>
          </div>
        </a>

        <nav class="spacer__nav">
          <ul class="spacer__nav-list">
            <li class="spacer__nav-item">
              <a href="/" class="spacer__nav-link">Főoldal</a>
            </li>
            <li class="spacer__nav-item">
              <a href="/esemenyek" class="spacer__nav-link">Események</a>
            </li>
            <li class="spacer__nav-item">
              <a href="/galeria" class="spacer__nav-link">Galéria</a>
            </li>
            <li class="spacer__nav-item">
              <a href="/rolunk" class="spacer__nav-link">Rólunk</a>
            </li>
            <li class="spacer__nav-item">
              <a href="/kapcsolat" class="spacer__nav-link">Kapcsolat</a>
            </li>
            <li class="spacer__nav-item">
              <a href="/adatkezeles" class="spacer__nav-link"
                >Adatkezelési Nyilatkozat</a
              >
            </li>
            <li class="spacer__nav-item spacer__nav-item--highlight">
              <a
                href="/tamogatas"
                class="spacer__nav-link spacer__nav-link--highlight"
                >SZJA 1%</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
