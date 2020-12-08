<template>
  <div class="home">
    <v-row justify="center" no-gutters class="px-4 px-lg-12 mx-lg-12 pt-6 pb-2">
      <v-col cols="12" align="center">
        <v-slide-y-transition :appear="true">
          <div id="title" class="display-1 font-weight-light">
            {{displayedTitle}}
            <div class="cursor" v-if="indexTyping < title.length"></div>
          </div>
        </v-slide-y-transition>
        <v-slide-y-transition :appear="true">
          <div class="headline font-weight-thin d-sm-flex justify-center">
            <div class="subtitle">
              {{displayedSubTitle.substring(0,22) + '&nbsp'}}
              <div
                class="cursor"
                v-if="indexTyping >= title.length && indexTyping < (title.length + 22)"
              ></div>
            </div>
            <div class="subtitle">
              {{displayedSubTitle.substring(23, displayedSubTitle.length)}}
              <div
                class="cursor"
                v-if="indexTyping >= title.length + 24 && indexTyping < (title.length + subTitle.length)"
              ></div>
            </div>
          </div>
        </v-slide-y-transition>
        <v-slide-y-transition :appear="true">
          <v-divider
            v-if="showOptions" class="mt-4 mb-6 custom-transition"
            style="width:500px;"
          ></v-divider>
        </v-slide-y-transition>
      </v-col>
    </v-row>

    <v-slide-y-transition :appear="true">
      <v-row v-if="showOptions" class="custom-transition" no-gutters justify="center">
        <v-col cols="3" align="right" class="mb-4 hidden-sm-and-down">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="0"
            v-if="showOptions"
          >
            <v-card
              :elevation="!hover ? 2 : 10"
              max-width="260"
              :color="theme.light.primary"
              to="about"
            >
              <v-list-item>
                <v-list-item-content>
                  <div class="body-2 font-weight-light text-left white--text">BACKGROUND</div>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img :src="avatarLink"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <div class="subtitle-1 font-weight-regular pl-2 white--text">
                  Academic & work experience
                </div>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="3" align="center" class="mb-4 hidden-sm-and-down">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="0"
            v-if="showOptions"
          >
            <v-card
              :elevation="!hover ? 2 : 10"
              max-width="260"
              :color="theme.light.secondary"
              to="blog"
            >
              <v-list-item>
                <v-list-item-content>
                  <div class="body-2 font-weight-light text-left">BLOG</div>
                </v-list-item-content>
                <v-list-item-avatar>
                  <font-awesome-icon :icon="['fas', 'stream']" size="lg"/>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <div class="subtitle-1 font-weight-regular pl-2">Projects & initiatives</div>
              </v-card-actions>
            </v-card>
          </v-hover>

        </v-col>
        <v-col cols="3" align="left" class="mb-4 hidden-sm-and-down">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="0"
            v-if="showOptions"
          >
            <div style="max-width:260px;">
              <v-card
                max-width="260"
                :color="theme.light.accent"
                to="projects"
                disabled
              >
                <v-list-item>
                  <v-list-item-content>
                    <div class="body-2 font-weight-light text-left">CATEGORIES</div>
                  </v-list-item-content>
                  <v-list-item-avatar>
                    <font-awesome-icon :icon="['fas', 'search']" size="lg"/>
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <div class="subtitle-1 font-weight-regular pl-2">Search by topic</div>
                </v-card-actions>
              </v-card>
              <v-slide-x-transition>
                <p v-if="hover" class="caption font-weight-light pt-1 pr-1"
                   style="text-align: right;">
                  ... incoming !
                </p>
              </v-slide-x-transition>
            </div>
          </v-hover>
        </v-col>

        <v-col cols="12" align="center" class="mb-4 hidden-md-and-up">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="0"
            v-if="showOptions"
          >
            <v-card
              :elevation="!hover ? 2 : 10"
              max-width="260"
              :color="theme.light.primary"
              to="about"
            >
              <v-list-item>
                <v-list-item-content>
                  <div class="body-2 font-weight-light text-left white--text">BACKGROUND</div>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img :src="avatarLink"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <div class="subtitle-1 font-weight-regular pl-2 white--text">
                  Academic & work experience
                </div>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" align="center" class="mb-4 hidden-md-and-up">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="0"
            v-if="showOptions"
          >
            <v-card
              :elevation="!hover ? 2 : 10"
              max-width="260"
              :color="theme.light.secondary"
              to="blog"
            >
              <v-list-item>
                <v-list-item-content>
                  <div class="body-2 font-weight-light text-left">BLOG</div>
                </v-list-item-content>
                <v-list-item-avatar>
                  <font-awesome-icon :icon="['fas', 'stream']"/>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <div class="subtitle-1 font-weight-regular pl-2">Projects & Initiatives</div>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" align="center" class="mb-4 hidden-md-and-up">
          <v-hover
            v-slot:default="{ hover }"
            open-delay="0"
            v-if="showOptions"
          >
            <div style="max-width:260px;">
              <v-card
                :color="theme.light.accent"
                to="projects"
                disabled
              >
                <v-list-item>
                  <v-list-item-content>
                    <div class="body-2 font-weight-light text-left">CATEGORIES</div>
                  </v-list-item-content>
                  <v-list-item-avatar>
                    <font-awesome-icon :icon="['fas', 'search']"/>
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <div class="subtitle-1 font-weight-regular pl-2">Search by topic</div>
                </v-card-actions>
              </v-card>
              <v-slide-x-transition>
                <p v-if="hover" class="caption font-weight-light pt-1 pr-1"
                   style="text-align: right;">
                  ... incoming !
                </p>
              </v-slide-x-transition>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-slide-y-transition>


  </div>
</template>

<script>
  import Snackbar from "../components/Snackbar";
  import theme from "../modules/theme";

  export default {
    name: 'home',
    components: {
      Snackbar,
    },
    data() {
      return {
        avatarLink: require('../assets/pp.jpg'),
        typeWritingSpeed: 30,
        indexTyping: 0,
        displayedTitle: '',
        title: 'Hey\nthere,',
        displayedSubTitle: '',
        subTitle: 'you safely reached out my personal website',
        showOptions: false,
        theme: theme
      }
    },
    methods: {
      typeTitle() {
        if (this.$route.name === 'home') {
          this.displayedTitle = this.title;
          this.displayedSubTitle = this.subTitle;
          this.indexTyping = this.subTitle.length + this.title.length;
        }
        if (this.indexTyping < this.title.length) {
          this.displayedTitle += this.title.charAt(this.indexTyping);
          this.indexTyping++;
          setTimeout(this.typeTitle, this.typeWritingSpeed);
        } else {
          this.typeSubtitle();
        }
      },
      typeSubtitle() {
        if (this.indexTyping < this.subTitle.length + this.title.length) {
          this.displayedSubTitle += this.subTitle.charAt(this.indexTyping - this.title.length);
          this.indexTyping++;
          setTimeout(this.typeTitle, this.typeWritingSpeed);
        } else {
          setTimeout(() => {
            this.showOptions = true;
          }, this.typeWritingSpeed);

        }
      }
    },
    mounted() {
      this.typeTitle();
    }


  };
</script>

<style scoped>
  .custom-transition {
    transition-duration: 0.8s;
  }


  #title {
    height: 40px;
    white-space: nowrap;
    position: relative;
    width: min-content;
  }

  .subtitle {
    position: relative;
    white-space: nowrap;
    width: min-content;
  }

  .cursor {
    border-bottom: solid 3px #FF5252;
    position: absolute;
    right: -20px;
    width: 15px;
  }


  .cursor {
    animation: animated-cursor 600ms steps(30, end) infinite;
  }

  /* cursor animations */
  @keyframes animated-cursor {
    from {
      border-bottom-color: #FF5252;
    }
    to {
      border-bottom-color: transparent;
    }

  }

</style>
