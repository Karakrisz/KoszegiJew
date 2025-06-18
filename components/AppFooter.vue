<script setup></script>
<template>
  <footer>
    <div class="spacer">
      <div class="spacer__content">
        <NuxtLink to="/" class="spacer__logo-link">
          <div class="spacer__logo-icon">
            <NuxtImg
              src="/img/logo.svg"
              alt="Kőszegi Hitközség"
              class="spacer__logo-icon__img"
              height="100%"
            />
          </div>
        </NuxtLink>

        <nav class="spacer__nav">
          <ul class="spacer__nav-list">
            <li class="spacer__nav-item">
              <NuxtLink to="/" class="spacer__nav-link">Főoldal</NuxtLink>
            </li>
            <!-- <li class="spacer__nav-item">
              <NuxtLink to="/esemenyek" class="spacer__nav-link"
                >Események</NuxtLink
              >
            </li> -->
            <li class="spacer__nav-item">
              <NuxtLink to="/galeria" class="spacer__nav-link"
                >Galéria</NuxtLink
              >
            </li>
            <li class="spacer__nav-item">
              <NuxtLink to="/rolunk" class="spacer__nav-link">Rólunk</NuxtLink>
            </li>
            <li class="spacer__nav-item">
              <NuxtLink to="/kapcsolat" class="spacer__nav-link"
                >Kapcsolat</NuxtLink
              >
            </li>
            <li class="spacer__nav-item">
              <NuxtLink to="/" class="spacer__nav-link"
                >Adatkezelési Nyilatkozat</NuxtLink
              >
            </li>
            <li class="spacer__nav-item spacer__nav-item--highlight">
              <NuxtLink
                to="/tamogatas"
                class="spacer__nav-link spacer__nav-link--highlight"
                >SZJA 1%</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
