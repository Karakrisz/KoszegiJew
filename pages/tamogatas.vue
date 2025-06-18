<script setup lang="ts">
useHead({ title: 'SZJA - 1%' })

// Build-time glob import az assets mappából
const modules = import.meta.glob(
  '~/assets/gallery/szja/*.{jpg,jpeg,png,webp,gif}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  }
)
const images = Object.values(modules) as string[]
</script>

<template>
  <section class="gallery-content">
    <div class="subpage-content">
      <h3>SZJA - 1%</h3>

      <div class="gallery-grid" v-if="images.length">
        <div v-for="(src, idx) in images" :key="idx" class="gallery-item">
          <img :src="src" :alt="`Kép ${idx + 1}`" />
        </div>
      </div>
      <p v-else>Feltöltés alatt...</p>

      <!-- Két link gömbként egymás mellett -->
      <div class="gallery-footer">
        <NuxtLink to="/kapcsolat" class="circle">Kapcsolat felvétel</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery-content {
  background: #fff9f5;
}

.subpage-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.subpage-content h3 {
  font-size: 2rem;
  font-weight: 500;
  margin: 1em 0 1.5em;
}

/* Egyoszlopos grid minden nézetben */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.gallery-footer {
  display: flex;
  flex-direction: row; /* Igény szerint: elemek egymás mellett */
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2em 0 1em 0;

  .circle {
    border-radius: 6px;
    background: var(--Primary, #479dd0);
    display: flex;
    padding: 1em 2em;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    width: -moz-max-content;
    width: max-content;
    transition: background 0.3s ease;
  }
}
</style>
