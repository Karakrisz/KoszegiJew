<script setup>
const links = [
  { name: 'Főoldal', path: '/' },
  { name: 'Események', path: '/esemenyek' },
  { name: 'Galéria', path: '/galeria' },
  { name: 'Rólunk', path: '/rolunk' },
  { name: 'Kapcsolat', path: '/kapcsolat' },
  { name: 'SZJA 1%', path: '/' },
]

const isMenuOpen = ref(false)
const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 992
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const route = useRoute()

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  }
)

watch(isMenuOpen, (newVal) => {
  if (isMobile.value && newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="header-content d-flex">
      <div class="logo-box header-content__logo-box">
        <NuxtLink to="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/logo.svg"
            alt="Kőszegi Hitközség"
            class="header-content__logo-box__link__img"
            height="100%"
          />
        </NuxtLink>
      </div>
      <div class="nav-box header-content__nav-box d-flex">
        <!-- Csak mobilon jelenjen meg a hamburger -->
        <button
          v-if="isMobile"
          @click="toggleMenu"
          class="hamburger"
          :class="{ open: isMenuOpen }"
          aria-label="Menü"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <!-- Csak mobilon jelenjen meg az overlay -->
        <div
          v-if="isMobile && isMenuOpen"
          class="menu-overlay"
          @click="isMenuOpen = false"
        ></div>

        <!-- A mobilmenü csak mobilon jelenjen meg -->
        <div v-if="isMobile" class="mobile-menu-container">
          <nav class="mobile-menu" :class="{ 'menu-open': isMenuOpen }">
            <div class="menu-header">
              <button @click="isMenuOpen = false" class="menu-close">
                <span>&times;</span>
              </button>
            </div>

            <ul class="menu-list">
              <li
                v-for="(link, index) in links"
                :key="link.path"
                class="menu-item"
                :style="isMenuOpen ? `--i: ${index + 1}` : ''"
              >
                <NuxtLink
                  :to="link.path"
                  class="menu-link"
                  @click="isMenuOpen = false"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Az eredeti menü csak desktopnál jelenjen meg -->
        <nav v-if="!isMobile" id="menu">
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink :to="link.path" :class="['menu__item text-color']">
                <template v-if="link.imagePath">
                  <NuxtImg
                    class="menu__list__li__img"
                    height="100%"
                    :src="link.imagePath"
                    :alt="link.name"
                  />
                </template>
                <template v-else>
                  {{ link.name }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Alapstílusok mobilnézethez - csak 1199px alatt érvényesek */
@media (max-width: 992px) {
  /* Hamburger gomb */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 40px;
    background-color: #4a6da7;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1002;
  }

  .hamburger-line {
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  .hamburger.open .hamburger-line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.open .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open .hamburger-line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  /* Overlay */
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    z-index: 1000;
  }

  /* Mobilmenü konténer */
  .mobile-menu-container {
    position: relative;
    z-index: 1001;
  }

  /* Mobilmenü */
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 270px;
    height: 100vh;
    background-color: white;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    padding: 60px 20px 20px;
    transition: right 0.3s ease;
  }

  .menu-open {
    right: 0;
  }

  /* Menü fejléc bezárás gombbal */
  .menu-header {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .menu-close {
    background: none;
    border: none;
    font-size: 30px;
    color: #333;
    cursor: pointer;
  }

  /* Menü elemek */
  .menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .menu-item {
    opacity: 0;
    transform: translateX(20px);
    border-bottom: 1px solid #eee;
    margin: 0;
    padding: 0;
  }

  .menu-open .menu-item {
    animation: slideIn 0.3s forwards;
    animation-delay: calc(0.08s * var(--i));
  }

  @keyframes slideIn {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .menu-link {
    padding: 15px 0;
    display: block;
    width: 100%;
    position: relative;
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
  }

  .menu-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #4a6da7;
    transition: width 0.3s ease;
  }

  .menu-link:hover {
    color: #4a6da7;
  }

  .menu-link:hover::after {
    width: 100%;
  }
  .header-content__nav-box {
    justify-content: unset;
  }
}

/* Tablet specifikus stílusok */
@media (min-width: 768px) and (max-width: 992px) {
  .mobile-menu {
    width: 300px;
  }
}

/* Kis képernyős mobileszközök */
@media (max-width: 480px) {
  .mobile-menu {
    width: 250px;
  }
}

/* 1199px felett itt nem definiálunk semmilyen stílust! */
</style>
