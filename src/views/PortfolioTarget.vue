<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Logo from '@/components/Logo.vue'
import Projects from '@/components/projects.vue'

const mounted = ref(false)
const showContact = ref(false)

function openLink(url: string) {
  window.open(url, '_blank', 'noreferrer')
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function initTextAnimate() {
  const textAnimate = document.querySelectorAll('.text-animate')
  for (const element of Array.from(textAnimate)) {
    const proxy = document.createElement('span')
    let delay = +(element.getAttribute('data-delay') || '0')
    const nodes = Array.from(element.childNodes)
    for (const node of nodes) {
      element.removeChild(node)
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const lineElement = document.createElement('span')
        lineElement.classList.add('text-animate-line')
        for (const char of node.textContent) {
          const charwrap = document.createElement('span')
          const charElement1 = document.createElement('span')
          const charElement2 = document.createElement('span')
          charwrap.classList.add('text-animate-wrap')

          charElement1.classList.add('text-animate-item1')
          charElement2.classList.add('text-animate-item2')
          charElement2.style.transitionDelay = delay + 's'

          charElement1.textContent = char
          charElement2.textContent = char

          charwrap.appendChild(charElement2)
          charwrap.appendChild(charElement1)
          lineElement.appendChild(charwrap)
          delay += 0.02
        }
        proxy.appendChild(lineElement)
      } else {
        proxy.appendChild(node)
      }
    }
    element.appendChild(proxy)
  }
}

onMounted(async () => {
  await nextTick()
  initTextAnimate()
  setTimeout(() => {
    mounted.value = true
  }, 50)
})
</script>

<template>
  <div class="portfolio-container">
    <!-- COVER SECTION (Faithfully matching Hans Chiu portfolio2020 composition) -->
    <section :class="{ cover: true, show: mounted && !showContact }">
      <div class="content">
        <div class="cover-logo">
          <Logo />
        </div>
        <div class="cover-desc">
          <h1 class="text-animate" data-delay="0.4">
            Hi, I am<br />
            Hans Chiu.
          </h1>
          <p class="text-animate" data-delay="0.6">Animation, Programming, Physics.</p>
          <p class="text-animate" data-delay="0.8">and everything creative.</p>
        </div>
      </div>

      <!-- AUTHENTIC CIRCULAR ARROW MENU -->
      <div class="cover-menu">
        <div class="content">
          <div class="cover-menu--content">
            <div class="cover-menu--item" @click="openLink('https://chiuhans111.github.io/resume/')">
              <div class="cover-menu--title">
                <h2>RESUME 履歷</h2>
              </div>
              <div class="cover-menu--arrow cover-menu--arrow-right"></div>
            </div>

            <div class="cover-menu--item" @click="showContact = true">
              <div class="cover-menu--title">
                <h2>CONTACT 聯絡</h2>
              </div>
              <div class="cover-menu--arrow cover-menu--arrow-right"></div>
            </div>

            <div class="cover-menu--item" @click="scrollTo('project')">
              <div class="cover-menu--title">
                <h2>PROJECT 專案</h2>
              </div>
              <div class="cover-menu--arrow cover-menu--arrow-down"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- THE 4 AUTHENTIC GEOMETRIC FRAMING BLOCKS -->
      <div class="cover-block cover-block--1"></div>
      <div class="cover-block cover-block--2"></div>
      <div class="cover-block cover-block--3"></div>
      <div class="cover-block cover-block--4"></div>

      <!-- FULL-SCREEN INTERACTIVE CONTACT TABLE (ONLY ACTIVE WHEN OPEN) -->
      <div
        class="cover-contact"
        :class="{ showContact }"
        :style="{ display: showContact ? 'block' : 'none' }"
      >
        <div class="contact-table">
          <div class="contact-table--item" @click="openLink('https://www.linkedin.com/in/chiuhans/')">
            <div class="contact-title">LinkedIn</div>
            <div class="contact-desc">@chiuhans</div>
          </div>
          <div class="contact-table--item" @click="openLink('https://twitter.com/chiu_hans')">
            <div class="contact-title">TWITTER</div>
            <div class="contact-desc">@chiu_hans</div>
          </div>
          <div class="contact-table--item" @click="openLink('https://www.behance.net/hanschiu')">
            <div class="contact-title">BEHANCE</div>
            <div class="contact-desc">hanschiu</div>
          </div>
          <div class="contact-table--item" @click="openLink('https://github.com/chiuhans111')">
            <div class="contact-title">GITHUB</div>
            <div class="contact-desc">chiuhans111</div>
          </div>
          <div class="contact-table--item" @click="openLink('https://www.youtube.com/channel/UCYI-hDchBq61kY9RLCD7vzw')">
            <div class="contact-title">YOUTUBE</div>
            <div class="contact-desc">Hans Chiu</div>
          </div>
          <div class="contact-table--item" @click="showContact = false">
            <div class="contact-title">
              <div class="cover-menu--arrow cover-menu--arrow-left"></div>
            </div>
            <div class="contact-desc">BACK</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about">
      <div class="content">
        <h1>ABOUT ME</h1>
        <h2>關於我</h2>
        <br />
        <p>
          Optical engineer, Programmer, 3D Artist. Blender3D enthusiast.
        </p>
      </div>
    </section>

    <br />
    <br />
    <br />

    <!-- PROJECT SECTION -->
    <section class="project" id="project">
      <div class="content">
        <h1>PROJECT</h1>
        <h2>專案</h2>
        <br />
        <Projects />
        <br />
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="content">
        <p>Design and developed by Hans Chiu.</p>
        <br />
        <p>
          Twitter :
          <a href="https://twitter.com/chiu_hans" target="_blank" rel="noreferrer">@chiu_hans</a>
        </p>
        <p>
          Behance :
          <a href="https://www.behance.net/hanschiu" target="_blank" rel="noreferrer">hanschiu</a>
        </p>
        <p>
          GitHub :
          <a href="https://github.com/chiuhans111" target="_blank" rel="noreferrer">chiuhans111</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-container {
  position: relative;
  z-index: 1;
}
</style>
