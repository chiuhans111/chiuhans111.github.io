<template>
  <div>
    <background></background>
    <section
      :class="{
        cover: true,
        show: mounted && !showContact,
      }"
    >
      <div class="content">
        <div class="cover-logo"><logo></logo></div>
        <div class="cover-desc">
          <h1>
            My name is <br />
            Hans Chiu.
          </h1>
          <p>Animation, Programming, Physics.</p>
          <p>and everything creative.</p>
        </div>
      </div>
      <div class="cover-menu">
        <div class="content">
          <div class="cover-menu--content">
            <div class="cover-menu--item" @click="showContact = true">
              <div class="cover-menu--title">
                <h2>CONTACT 聯絡</h2>
              </div>
              <div class="cover-menu--arrow cover-menu--arrow-right"></div>
            </div>
            <div
              class="cover-menu--item"
              @click="
                document.getElementById('project').scrollIntoView({
                  behavior: 'smooth',
                })
              "
            >
              <div class="cover-menu--title">
                <h2>PROJECT 專案</h2>
              </div>
              <div class="cover-menu--arrow cover-menu--arrow-down"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="cover-block cover-block--1"></div>
      <div class="cover-block cover-block--2"></div>
      <div class="cover-block cover-block--3"></div>
      <div class="cover-block cover-block--4"></div>

      <div class="cover-contact" :class="{ showContact }">
        <div class="contact-table">
          <div
            class="contact-table--item"
            @click="window.open('https://twitter.com/chiu_hans')"
          >
            <div class="contact-title">TWITTER</div>
            <div class="contact-desc">@chiu_hans</div>
          </div>
          <div
            class="contact-table--item"
            @click="window.open('https://www.behance.net/hanschiu')"
          >
            <div class="contact-title">BEHANCE</div>
            <div class="contact-desc">hanschiu</div>
          </div>
          <div
            class="contact-table--item"
            @click="window.open('https://github.com/chiuhans111')"
          >
            <div class="contact-title">GITHUB</div>
            <div class="contact-desc">chiuhans111</div>
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
    <section>
      <div class="content">
        <h1>ABOUT ME</h1>
        <h2>關於我</h2>
        <br />
        <p>
          A student who loves animation, math, physics, optics, art, music...
          with over 5k followers on twitter.
        </p>

        <p>
          Currently working on machine learning project in optical signal
          processing laboratory at NTUT.
        </p>
      </div>
    </section>

    <br />
    <br />
    <br />
    <!-- <section>
      <div class="content">
        <h1>我是誰</h1>
        <h2>Who am I?</h2>
        <br />
        <p>
          本名邱柏翰，興趣廣泛，橫跨物理、光學、動畫、程式設計、藝術、音樂等。也長期在
          twitter 上分享作品，有超過5千追隨者。
        </p>
        <p>
          I am a student who loves animation, math, physics, optics, art,
          music... with over 5k followers on twitter.
        </p>
        <br />
        <p>
          目前是台北科技大學-光電工程系大四生，在光通訊實驗室進行機器學習相關的專題研究。
        </p>
        <p>
          Currently working on machine learning related project in optical
          communication laboratory at NTUT.
        </p>
      </div>
    </section>
    <hr />
    <section>
      <div class="content">
        <h1>經歷</h1>
        <h2>Experience</h2>
        <br />
        <p>超過6年的應用程式開發，對C#、Python、網頁應用均有涉略。</p>
        <p>
          Over 6 years of programming experience, including C#, Python and web
          development.
        </p>
        <br />
        <p>
          在各大資訊社群製作開幕動畫，熟悉 Blender3D、AfterEffect 以及程式藝術。
        </p>
        <p>
          Creating opening animation for conferences, experience in Blender3D,
          AfterEffect and Generative art.
        </p>
      </div>
    </section>
    <hr /> -->

    <section class="project" id="project">
      <div class="content">
        <h1>PROJECT</h1>
        <h2>專案</h2>
        <br />
        <projects></projects>
        <br />
        <!-- <p>
          Twitter :
          <a href="https://twitter.com/chiu_hans" target="blank">@chiu_hans</a>
        </p>
        <p>
          Behance :
          <a href="https://www.behance.net/hanschiu" target="blank">hanschiu</a>
        </p>
        <p>
          GitHub :
          <a href="https://github.com/chiuhans111" target="blank"
            >chiuhans111</a
          >
        </p> -->
      </div>
    </section>
    <footer>
      <div class="content">
        <p>Design and developed by Hans Chiu.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import logo from "../components/logo";
import background from "../components/background";
import projects from "../components/projects";
export default {
  components: {
    logo,
    background,
    projects,
  },
  data() {
    return {
      mounted: false,
      showContact: false,
      window,
      document,
    };
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true;
    }, 0);
  },
};
</script>

<style>
</style>