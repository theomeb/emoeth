<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/bee.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-col>

      <v-col class="mb-2">
        <v-btn rounded outlined color="error" class="test"> Vuetify</v-btn>
        <vs-button danger @click="testActive = !testActive">Check</vs-button>

        <transition name="menu-popover">
          <vs-button v-if="testActive" danger class="MenuPopover">Test</vs-button>

        </transition>
        <v-slide-y-transition
        >
          <div v-show="testActive">
            <vs-button danger>Test3</vs-button>
            <vs-button danger>Test4</vs-button>
          </div>

        </v-slide-y-transition>


        <h1 class="display-2 font-weight-thin mb-3">
          Welcome to Emoeth
        </h1>


        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      testActive: false,
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
    mounted() {
      this.testActive = true;
    }
  }
</script>

<style scoped>
  .menu-popover-enter,
  .menu-popover-leave-to {
    opacity: 0;
    transform: rotateX(50deg) rotateY(50deg);
  }

  .menu-popover-enter-to,
  .menu-popover-leave {
    opacity: 1;
    transform: rotateX(0deg) rotateY(0deg);
  }

  .menu-popover-enter-active,
  .menu-popover-leave-active {
    transition: opacity, transform 800ms ease-out;
  }

  .test {
    text-transform: none !important
  ;
  }

</style>
