import React, { Component } from "react";
import "./App.css";
import ReactGA from "react-ga";

import w1_0 from "./media/w1/0.mp3";
import w1_1 from "./media/w1/1.mp3";
import w1_2 from "./media/w1/2.mp3";
import w1_3 from "./media/w1/3.mp3";
import w1_4 from "./media/w1/4.mp3";
import w1_5 from "./media/w1/5.mp3";
import w1_6 from "./media/w1/6.mp3";
import w1_7 from "./media/w1/7.mp3";
import w1_8 from "./media/w1/8.mp3";
import w1_9 from "./media/w1/9.mp3";
import w1_10 from "./media/w1/10.mp3";
import w1_11 from "./media/w1/11.mp3";
import w1_12 from "./media/w1/12.mp3";
import w1_13 from "./media/w1/13.mp3";

import w2_0 from "./media/w2/0.mp3";
import w2_1 from "./media/w2/1.mp3";
import w2_2 from "./media/w2/2.mp3";
import w2_3 from "./media/w2/3.mp3";
import w2_4 from "./media/w2/4.mp3";
import w2_5 from "./media/w2/5.mp3";
import w2_6 from "./media/w2/6.mp3";
import w2_7 from "./media/w2/7.mp3";
import w2_8 from "./media/w2/8.mp3";
import w2_9 from "./media/w2/9.mp3";
import w2_10 from "./media/w2/10.mp3";
import w2_11 from "./media/w2/11.mp3";
import w2_12 from "./media/w2/12.mp3";
import w2_13 from "./media/w2/13.mp3";
import w2_14 from "./media/w2/14.mp3";
import w2_15 from "./media/w2/15.mp3";
import w2_16 from "./media/w2/16.mp3";
import w2_17 from "./media/w2/17.mp3";
import w2_18 from "./media/w2/18.mp3";
import w2_19 from "./media/w2/19.mp3";

import w3_0 from "./media/w3/0.mp3";
import w3_1 from "./media/w3/1.mp3";
import w3_2 from "./media/w3/2.mp3";
import w3_3 from "./media/w3/3.mp3";
import w3_4 from "./media/w3/4.mp3";
import w3_5 from "./media/w3/5.mp3";
import w3_6 from "./media/w3/6.mp3";
import w3_7 from "./media/w3/7.mp3";
import w3_8 from "./media/w3/8.mp3";
import w3_9 from "./media/w3/9.mp3";
import w3_10 from "./media/w3/10.mp3";
import w3_11 from "./media/w3/11.mp3";
import w3_12 from "./media/w3/12.mp3";
import w3_13 from "./media/w3/13.mp3";
import w3_14 from "./media/w3/14.mp3";
import w3_15 from "./media/w3/15.mp3";
import w3_16 from "./media/w3/16.mp3";
import w3_17 from "./media/w3/17.mp3";
import w3_18 from "./media/w3/18.mp3";
import w3_19 from "./media/w3/19.mp3";
import w3_20 from "./media/w3/20.mp3";
import w3_21 from "./media/w3/21.mp3";
import w3_22 from "./media/w3/22.mp3";
import w3_23 from "./media/w3/23.mp3";
import w3_24 from "./media/w3/24.mp3";
import w3_25 from "./media/w3/25.mp3";
import w3_26 from "./media/w3/26.mp3";
import w3_27 from "./media/w3/27.mp3";
import w3_28 from "./media/w3/28.mp3";

ReactGA.initialize("UA-135966055-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  state = {
    weekFlag: null,
    lucky: null,
    query: "",
    songs: [
      {
        title: "Somewhere Over the Rainbow - Judy Garland (1939)",
        link: w1_0,
        week: 0
      },
      {
        title: "All or Nothing at All - Frank Sinatra (1940; 1943)",
        link: w1_1,
        week: 0
      },
      {
        title:
          "I'm Sitting on Top of the World - Les Paul, guitar; Mary Ford, vocals. (March 1953)",
        link: w1_2,
        week: 0
      },
      {
        title:
          "How Much is That Doggie in the Window - Patti Page, vocals (March 1953)",
        link: w1_3,
        week: 0
      },
      {
        title: "Secret Love - Doris Day (March 1954)",
        link: w1_4,
        week: 0
      },
      {
        title: "April Love - Pat Boone (October 1957)",
        link: w1_5,
        week: 0
      },
      {
        title: "Future Blues - Willie Brown, vocals, guitar (1930)",
        link: w1_6,
        week: 0
      },
      {
        title: "Cross Road Blues - Robert Johnson (November 1936)",
        link: w1_7,
        week: 0
      },
      {
        title: "In the Mood - Glenn Miller and his Orchestra (1939)",
        link: w1_8,
        week: 0
      },
      {
        title: "BeBop - Dizzy Gillespie Quintet ; Charlie Parker, alto sax",
        link: w1_9,
        week: 0
      },
      {
        title: "Caldonia - Louis Jordan and His Tympany Five (January 1945)",
        link: w1_10,
        week: 0
      },
      {
        title:
          "Choo Choo Ch'Boogie - Louis Jordan and His Tympany Five (January 1945)",
        link: w1_11,
        week: 0
      },
      {
        title: "Good Rockin' Tonight - Wynonie Harris (December 1947)",
        link: w1_12,
        week: 0
      },
      {
        title: "The Fat Man - Fats Domino, vocals, piano (1949)",
        link: w1_13,
        week: 0
      },

      {
        title: "Can the Circle Be Unbroken - Carter Family (August 1935)",
        link: w2_0,
        week: 1
      },
      {
        title: "Blueberry Hill - Gene Autry (August 1940)",
        link: w2_1,
        week: 1
      },
      {
        title: "Blueberry Hill - Fats Domino (September 1956)",
        link: w2_2,
        week: 1
      },
      {
        title: "Faded Love - Bob Wills & His Texas Playboys (April 1946)",
        link: w2_3,
        week: 1
      },
      {
        title:
          "Tennessee Waltz - Pee Wee King & His Golden West Cowboys (February 1948)",
        link: w2_4,
        week: 1
      },
      {
        title: "Tennessee Waltz - Patti Page (November 1950)",
        link: w2_5,
        week: 1
      },
      {
        title: "Hey Good Lookin' - Hank Williams (June 1951)",
        link: w2_6,
        week: 1
      },
      {
        title: "Cold, Cold Heart - Hank Williams (1951)",
        link: w2_7,
        week: 1
      },
      {
        title: "Your Cheatin' Heart - Hank Williams (September 1952)",
        link: w2_8,
        week: 1
      },
      {
        title: "Rocket '88 - Jackie Brenston With His Delta Cats (April 1951)",
        link: w2_9,
        week: 1
      },
      {
        title:
          "Rocket '88 and interview - Bill Haley and The Saddlemen (July 1951)",
        link: w2_10,
        week: 1
      },
      {
        title: "We're Gonna Rock This Joint Jimmy Preston (1949)",
        link: w2_11,
        week: 1
      },
      {
        title: "Rock the Joint - Bill Haley and The Saddlemen (April 1952)",
        link: w2_12,
        week: 1
      },
      {
        title:
          "Shake, Rattle, and Roll - Joe Turner & His Blues Kings (April 1954)",
        link: w2_13,
        week: 1
      },
      {
        title:
          "Shake, Rattle and Roll - Bill Haley and His Comets (June, 1954)",
        link: w2_14,
        week: 1
      },
      {
        title:
          "Rock Around the Clock (excerpt) - Sunny Dae and his Knights (1953)",
        link: w2_15,
        week: 1
      },
      {
        title: "Rock Around the Clock - Bill Haley and His Comets (May 1954)",
        link: w2_16,
        week: 1
      },
      {
        title: "Dim, Dim the Lights - Bill Haley and His Comets (1955)",
        link: w2_17,
        week: 1
      },
      {
        title: "Later Alligator - Bobby Charles (November 1955)",
        link: w2_18,
        week: 1
      },
      {
        title: "See You Later, Alligator - Bill Haley and His Comets (1954)",
        link: w2_19,
        week: 1
      },

      {
        title: "All I Have to do is Dream - Everly Brothers (April 1958)",
        link: w3_0,
        week: 2
      },
      {
        title: 'That\'s All Right - Arthur "Big Boy" Crudup (September 1946)',
        link: w3_1,
        week: 2
      },
      {
        title: "That's All Right - Elvis Presley (June 1954)",
        link: w3_2,
        week: 2
      },
      {
        title:
          "Blue Moon of Kentucky - Bill Monroe & His Blue Grass Boys (September 1947)",
        link: w3_3,
        week: 2
      },
      {
        title: 'Hound Dog - Willie Mae "Big Mama" Thornton (March 1953)',
        link: w3_4,
        week: 2
      },
      {
        title:
          'Bear Cat (The Answer to Hound Dog) - Rufus "Hound Dog" Thomas Jr. (March 1953)',
        link: w3_5,
        week: 2
      },
      {
        title: "Hound Dog - Elvis Presley (July 1956)",
        link: w3_6,
        week: 2
      },
      {
        title: "Blue Suede Shoes - Carl Perkins (December 1955)",
        link: w3_7,
        week: 2
      },
      {
        title: "Blue Suede Shoes - Elvis Presley (August 1956)",
        link: w3_8,
        week: 2
      },
      {
        title: "Blue Moon of Kentucky - Elvis Presley (July 1954)",
        link: w3_9,
        week: 2
      },
      {
        title: "Honey, Don't! - Carl Perkins (December 1955)",
        link: w3_10,
        week: 2
      },
      {
        title: "Heartbreak Hotel - Elvis Presley (January 1956)",
        link: w3_11,
        week: 2
      },
      {
        title: "Be-bop-a-lua - Gene Vincent & His Blue Caps (June 1956)",
        link: w3_12,
        week: 2
      },
      {
        title: "Only the Lonely - Roy Orbison (March 1960)",
        link: w3_13,
        week: 2
      },
      {
        title: "Bo Diddley - Bo Diddley (March 1955)",
        link: w3_14,
        week: 2
      },
      {
        title: "Tutti Frutti - Little Richard (December 1955)",
        link: w3_15,
        week: 2
      },
      {
        title: "Tutti Frutti - Pat Boone (January 1956)",
        link: w3_16,
        week: 2
      },
      {
        title: "Ain't That A Shame - Fats Domino (April 1955)",
        link: w3_17,
        week: 2
      },
      {
        title: "Ain't That A Shame - Pat Boone (July 1955)",
        link: w3_18,
        week: 2
      },
      {
        title: "Whole Lotta Shakin' Goin' On - Jerry Lee Lewis (March 1957)",
        link: w3_19,
        week: 2
      },
      {
        title: "Not Fade Away - Buddy Holly (October 1957)",
        link: w3_20,
        week: 2
      },
      {
        title: "Not Fade Away - The Rolling Stones (May 1964)",
        link: w3_21,
        week: 2
      },
      {
        title: "That'll Be The Day - Buddy Holly and the Crickets (May 1957)",
        link: w3_22,
        week: 2
      },
      {
        title: "That'll Be The Day - The Quarry Men (1958)",
        link: w3_23,
        week: 2
      },
      {
        title:
          "Great Balls of Fire - Jerry Lee Lewis, vocals, piano (November 1957)",
        link: w3_24,
        week: 2
      },
      {
        title: "Johnny B. Goode - Chuck Berry (April 1958)",
        link: w3_25,
        week: 2
      },
      {
        title: "Johnny B. Goode - The Beatles (January 1964)",
        link: w3_26,
        week: 2
      },
      {
        title: "Carol - Chuck Berry (May 1958)",
        link: w3_27,
        week: 2
      },
      {
        title: "Carol - The Rolling Stones (May 1964)",
        link: w3_28,
        week: 2
      }

      // {
      //   title: "It's Too Soon To Know - The Orioles (July 1948)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_06j24l65/flavorIds/1_t08zpo58/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MGE3NGQ2OGI4MGJhNDYxMGMwNWFiMDA0YzQ1NDBmZjY4NjAxNzAxZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTI3NzsyOzYzNjg3ODE3Mjc3OTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzA2ajI0bDY1Ow==&playSessionId=75066c0a-3da8-c638-fe2c-ee8c242335e4&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Gee - The Crows (June 1953)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_wbjhpvco/flavorIds/1_gxok27cw/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NDFjZDQwNTA4OTMyN2MwN2UyYWUyNjU0NTQ0N2U1MzBmZTgwZGMyMXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTMyNjsyOzYzNjg3ODE3MzI2NDQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3diamhwdmNvOw==&playSessionId=268dac10-8d9c-d8ad-435b-b0aa3b4c2d2e&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Sh-Boom - The Chords (April 1954)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_13jikr3f/flavorIds/1_0j8fawlt/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Y2JjMTU3NmMyYjRiMzM1ODJkYTg5MjUwMzc2MzIxOTlhNGQ3OWVmZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTMzODsyOzYzNjg3ODE3MzM4MzMzMjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzEzamlrcjNmOw==&playSessionId=04d43fef-e6be-c203-eaa8-5a2076ff878b&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Sh-Boom - The Crew-Cuts (July 1954)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_j7u8ptch/flavorIds/1_89iru4ik/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZTVlNDlhM2I5MTg0NGFjM2VkY2Y3ZTBiMTJiYjk3MjJiMzQxOGQxY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTI4MTsyOzYzNjg3ODE3MjgxMzMzMjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2o3dThwdGNoOw==&playSessionId=13a37bd3-163f-bb0a-2fc9-136bf44b7fff&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Earth Angel (Will You Be Mine) - The Penguins (September 1954)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_pmqzz7yq/flavorIds/1_tdu1vbz8/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MjkyNjE0OTllY2QyMTAxY2NhN2Q2NTlmNDVmZjU4NjkwYTY4NWVhY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTM2MzsyOzYzNjg3ODE3MzYzNjkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3BtcXp6N3lxOw==&playSessionId=0fcbc522-ac5f-0bf5-0694-161135f4e0e3&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Mr. Sandman - The Four Acres (December 1954)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_h6mv271h/flavorIds/1_ryhhfq7b/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NGM2YjZjZDllYWM4MjZjNGM4ZDRjMGQ0NTQyY2E3MDk4OWI3NTY5NXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTI4MzsyOzYzNjg3ODE3MjgzMDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2g2bXYyNzFoOw==&playSessionId=3dce6ffc-eb76-54ef-f6e0-8a2f89cc23c2&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Mr. Sandman - The Chordettes (December 1954)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_idk0wzt3/flavorIds/1_q4s9aeb3/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDhiZGFjNmM0ZmQxMTBjMGY5NTMzZDMzNzRhNDhlYzdkNWRjNWJkNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTI4NDsyOzYzNjg3ODE3Mjg0MDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2lkazB3enQzOw==&playSessionId=815a3930-6046-6374-369b-a0c46c25f7fa&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "The Great Pretender - The Platters (November 1955)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_tqw4r3la/flavorIds/1_zdhly5vx/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZDNkZmU5NGI5ZjY5MThjODBiZThhNzU3MzNkMTY2ZDlmM2Y4ZmJlY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTM5NTsyOzYzNjg3ODE3Mzk1MDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3RxdzRyM2xhOw==&playSessionId=4fea2564-1b63-1568-5ef2-7a8bcc3e1085&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Little Star - The Elegants (June 1958)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_fs0jobjo/flavorIds/1_35wbp2gf/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTE5NGZlNjYyYjAwMWRkMDYyMmNhOWY1MzBjYzg5MGVlNTRhYmFhZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQwNTsyOzYzNjg3ODE3NDA1OTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2ZzMGpvYmpvOw==&playSessionId=1af9e5b4-3d5c-4cb3-5fea-92fd65caf1d9&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Hushabye - The Mystics (April 1959)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_40d37g9z/flavorIds/1_a6mm67mu/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZTQ1ODg0NzMyZWIyODg0ZTUwMmU1NTY0OTJmMzY1OTc3NjZkMjA3MHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDEzMTsyOzYzNjg3NzAyNTMxOTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzQwZDM3Zzl6Ow==&playSessionId=7ccfcf17-cc26-3e6b-befa-cfb709baa8ed&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Hushabye - The Beach Boys (July 1964)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_40d37g9z/flavorIds/1_a6mm67mu/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=N2VhMTBiMzNiMzhlMDkxMmE5MjlkMmFmYjQwNWYyODI1YjQwN2U5NHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQxODsyOzYzNjg3ODE3NDE4MTkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzQwZDM3Zzl6Ow==&playSessionId=aed83179-ff5e-4039-f5d3-e47bfa953c8c&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Big Girls Don't Cry -The Four Seasons (October 1962)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_odn6nl6c/flavorIds/1_0y6ogoij/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZGRiYjQwZWZkZGI0NTMwNjE3ZGYwMTZlNjkwNzhlMDVlYmI0NTY2YnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQzNjsyOzYzNjg3ODE3NDM2MDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX29kbjZubDZjOw==&playSessionId=94491880-9177-e12c-2a88-a225aa7b3fb5&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Diana - Paul Anka (August 1954)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_seu39i27/flavorIds/1_cd6obp2l/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NmNmMTJmMjA2YzlkNzA5OTE2MWIxYjYyOWY0YmMyZjU0ZjQyZGFlM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQ0NTsyOzYzNjg3ODE3NDQ1OTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3NldTM5aTI3Ow==&playSessionId=61c7d859-6249-1c50-ea48-6d8ca58d83f6&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Dream Lover - Bobby Darin (March 1959)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_uhxbndrn/flavorIds/1_xld6rb3w/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZGYyMzJjMTM1NWY2NmI5MTkwNWI2NWEwNTkzMGRmNmY5ODc1MzU5YnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQ1NjsyOzYzNjg3ODE3NDU2NTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3VoeGJuZHJuOw==&playSessionId=77a83ac0-1e51-5815-6293-c2b36ddb0d0e&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "The Twist - Chubby Checker (June 1960)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_7cajw2jf/flavorIds/1_cuw0rcdb/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDVjYzJiMmQzMmJjZmE2NGMwN2E4YWE3Y2QwM2I4YjVmNDRmNWE4Y3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQ2NjsyOzYzNjg3ODE3NDY2OTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzdjYWp3MmpmOw==&playSessionId=b90f16d3-4310-451d-84d7-ed5454e64958&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Miserlou - Dick Dale and The Del-Tones (September 1962)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_i0a6lqss/flavorIds/1_qolpacsm/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzgyMGZhMmJiYmNkZWY1Yjg0YWJmMzVmYTlkMTRkNDlhODMwODNiNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQ3ODsyOzYzNjg3ODE3NDc4MDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2kwYTZscXNzOw==&playSessionId=cd285c3a-677d-30a4-25b3-4a751dfe35ee&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Miserlou - The Beach Boys (March 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_n8kjfbwr/flavorIds/1_lluzdxtx/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZWE0MzI2YmJkYWNjMTM3NzNiMDcyYzNlYjdlZjBhOTk0MGJiZjcyNXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQ4NjsyOzYzNjg3ODE3NDg2NjkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX244a2pmYndyOw==&playSessionId=2c54cbb7-ee2a-f494-fd15-a0b91a6eecab&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Surfer Girl (vocal track) The Beach Boys (June 12, 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_4xrt7bpm/flavorIds/1_lg9e7jhk/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NDk2YzlmYzE2NjI0OWU3ZjRiMzlkZWM5NzY3M2U2NzQzNTAwYTRhZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTQ5NjsyOzYzNjg3ODE3NDk2OTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzR4cnQ3YnBtOw==&playSessionId=fe141f9b-3d39-ea3e-0cdc-9142f72aeb3e&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Surfer Girl (backing track) - (August 1968)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_4odjlnzc/flavorIds/1_13sb6td4/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZGMyZWMzY2JhYzBmYTU5ZGI3NjA5Y2FlMGUzYzIzZDI1ZjA2ZGY1N3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTUwNzsyOzYzNjg3ODE3NTA3ODMzMjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzRvZGpsbnpjOw==&playSessionId=17406912-9f68-b48a-d4ca-cb4efd77a226&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Surfer Girl (released version) - The Beach Boys (June 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_omwptw0w/flavorIds/1_gjm73ekb/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Zjg0MGE0ODg0Y2FjZmU4NDZhZjVhNTA5NTA0Y2ZiNjY5OWExN2ZiZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTUxODsyOzYzNjg3ODE3NTE4NjkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX29td3B0dzB3Ow==&playSessionId=8947dcc9-ccee-da33-4932-25b9bc1bc961&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title:
      //     "Sweet Little Sixteen - Chuck Berry, guitar, vocals (February 1958)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_upa6gprz/flavorIds/1_7idd73qk/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ODFmZWZhNzc3MDQ0MDJmZmRjMjZhNTYzMjhiMDE2OGUyNTJlYzQzYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTUyODsyOzYzNjg3ODE3NTI4MzE3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3VwYTZncHJ6Ow==&playSessionId=a66c9547-1244-0cb2-532d-2d83981e5c69&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Surfin' USA - The Beach Boys (March 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_sa1ql0sf/flavorIds/1_qlfnl1bf/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjlmNjdmNGQzNGM3NmQwOWVjYjQxMWQwN2E1MzBmODljMGI3YWI1NXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTUzOTsyOzYzNjg3ODE3NTM5ODE3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3NhMXFsMHNmOw==&playSessionId=5f204336-6709-e9fd-f52c-37ae3f34575f&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Graduation Day - The Four Freshmen (April 1956)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_c2aj7pfp/flavorIds/1_ma6214jy/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZmE1MDI5Y2U1ZDVkZmZjMDViZTg5MGRhNjNlZDIwZjQ5MTExMGI3YXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTU0ODsyOzYzNjg3ODE3NTQ4ODMzMjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2MyYWo3cGZwOw==&playSessionId=f0dfdf15-4a1d-1699-78f3-070b88bf00a5&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Graduation Day - The Beach Boys (Live 1964)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_rwsu2hfk/flavorIds/1_ipowqyz9/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZTVkNTNhYThjMTc4ZWRjYzk3NTE5ZmYzYjRlZDgyODNkNjk2NTFkZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTU1ODsyOzYzNjg3ODE3NTU4NDQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3J3c3UyaGZrOw==&playSessionId=066024be-e4a7-01b6-b11f-272489d18149&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },
      // {
      //   title: "Fun, Fun. Fun - The Beach Boys (February 1964)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_mzuqn50b/flavorIds/1_mfadw4az/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NGEzMjc2MmMwMzE0NzM0OThkMWU3ZjM3OTUwMmY3ZWU1ZGJlMzE5M3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTU3MDsyOzYzNjg3ODE3NTcwNTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX216dXFuNTBiOw==&playSessionId=05a74753-1c3c-c08b-d337-b42c63309cbb&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 3
      // },

      // {
      //   title: "Down in Mexico - The Coasters (1956)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_eva7ih62/flavorIds/1_qcas5aq4/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OGJhN2Y2NjI5ZDM1NjA4OWE4MDYzNWM1YWNjOTk4MzVhYjI1NGZiYXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTYxMzsyOzYzNjg3ODE3NjEzOTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2V2YTdpaDYyOw==&playSessionId=4e1194a4-f8d5-93d2-3e8e-6cb13f33f513&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Da Doo Ron Ron - The Crystals (March 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_2kv617r6/flavorIds/1_nw9w3umv/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZmY1MTkxYmQ4YmI3NmRhNzQ5NDBlZWRmZmM0OGNlZjVkN2M1ZGQzZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTYyNDsyOzYzNjg3ODE3NjI0NTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzJrdjYxN3I2Ow==&playSessionId=e0b64133-3241-9907-c2b3-be11de23db1e&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Be My Baby - The Ronnettes (July 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_11d38feu/flavorIds/1_ppcza2us/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDhmMTY5ZmQxZGQ1OGIwMWNjOThkNGU2YmRhMzMwZDJkZjk2OTViMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTYzNTsyOzYzNjg3ODE3NjM1MDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzExZDM4ZmV1Ow==&playSessionId=5b3c1b37-183d-a18b-94e2-a4d97b8311ab&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Then He Kissed Me - The Crystals (July 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_1y9yft2r/flavorIds/1_cyt7qpdd/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Zjc1MTQxMmQ4MDY3ZWE0MmYxNWM1NjMyYWI2YTY5ZGU0OTNhNjUxYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTY0NjsyOzYzNjg3ODE3NjQ2OTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzF5OXlmdDJyOw==&playSessionId=dbe83938-49b7-cb82-ccc9-e16cd265ab13&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Then I Kissed Her - The Beach Boys (June 1965)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_zw79jgrk/flavorIds/1_cecazpxx/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ODUwZWM2ZjQ0ODk5ZDg5OWI2MDAyMjdlZWM1ZDUxMjQwM2IyNWU2ZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTY1NjsyOzYzNjg3ODE3NjU2NjkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3p3NzlqZ3JrOw==&playSessionId=29348a7d-cb79-1ddd-7f35-8335e27e3824&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title:
      //     "You've Lost That Lovin' Feeling - The Righteous Brothers (August-November 1964)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_7ewcije2/flavorIds/1_svxo0d7q/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YzE0MmQ0Mzc0YTBjNjRiMGNkYTA5YmI2ODZhYTA0MDNjNjFlNjA0M3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTY2NjsyOzYzNjg3ODE3NjY2ODE3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzdld2NpamUyOw==&playSessionId=3feaf755-9d3b-2299-450a-2f356131a12f&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "California Girls - Beach Boys (July 1965)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_uy0ir8el/flavorIds/1_eklgaeud/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OWE0YWNmMWFhYTc3MzUxNTg2NzYxYTQ1NTRjNTk3YTEyM2Q4ODc5NnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTY3NjsyOzYzNjg3ODE3Njc2ODE3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3V5MGlyOGVsOw==&playSessionId=7f8c89a0-e6af-059d-3752-f31d0f39cd97&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "River Deep- Mountain High - Ike and Tina Turner (March 1966)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_g2g9g0qq/flavorIds/1_2ed4ai5w/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MjU4MmVjYzc5MjY0YjNlM2Q4ZjIyYmY5Mzg0YzkwMjA0MDI1OTM2OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTY4NjsyOzYzNjg3ODE3Njg2NDU4MjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2cyZzlnMHFxOw==&playSessionId=6aaeaa97-341c-dcbc-7ca0-c6a91ed9c05b&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "God Only Knows (backing track) - The Beach Boys (1966)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_savm5tfc/flavorIds/1_pttofm4t/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ODE0OTAyODk3ZjJkNTI2ZTY0M2Y5ZmE3MGYxODAxMjQ2NDA0YmZjY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTY5ODsyOzYzNjg3ODE3Njk4NTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Nhdm01dGZjOw==&playSessionId=cd4fb548-8742-1997-fa90-152b8437c71f&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "God Only Knows (vocal track) The Beach Boys (1966)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_kp0w6xw8/flavorIds/1_h7qit13y/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MWQwYWZhY2E3YTI2ZWNkYjBlMmZjZDQwNTJhNjhjMWFjODkxMzRmZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTcxMDsyOzYzNjg3ODE3NzEwMTkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2twMHc2eHc4Ow==&playSessionId=ccef8143-a8b1-7fb7-3c9d-14b9089883df&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "God Only Knows - The Beach Boys (July 1966)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_irglr6gy/flavorIds/1_jneh44oy/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTY5OGEyNzU4NDM3NGI1ZTgzZGVkYzc3ZWVlNGIyZjg4M2JlMWI0MHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTcyMjsyOzYzNjg3ODE3NzIyNDQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2lyZ2xyNmd5Ow==&playSessionId=058daa2f-754b-2248-7135-492141e276ca&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title:
      //     "The Long and Winding Road (original track) - Beatles (recorded January 31, 1969)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_49e54ymq/flavorIds/1_1qhcbdr5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZDc5NWMwNWVmMGQ4ZjYyZWJmYTgxNTM0MTg5YmY1ZTIwYWNmYTU4N3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTczMzsyOzYzNjg3ODE3NzMzMzE3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzQ5ZTU0eW1xOw==&playSessionId=e9e26dc2-6b4f-81ef-a10b-dd335bfb0bdb&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "The Long and Winding Road - Beatles (May 1970)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_1sn8fmfi/flavorIds/1_6grcxbi3,1_6yfe9k4l/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Zjc4ZTVmMDhhYzFmOWVlZDZmNzY3N2NjNTNjYjE5ZDA4ODk1MDEwMnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTc0NzsyOzYzNjg3ODE3NzQ3NTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzFzbjhmbWZpOw==&playSessionId=9cd8db5f-2f95-d530-d2ac-2cfd678b3877&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "I got a woman - Ray Charles (November 1954)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_ot6yvo9v/flavorIds/1_urja6b62/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NmZiNmUxMzVhODJjMWViNjU4ZjI1NTJlM2FkNDM3MGVmNGRlODEwMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTc2MDsyOzYzNjg3ODE3NzYwNTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX290Nnl2bzl2Ow==&playSessionId=3a890abd-d9b6-14a0-afd0-730e4ca14f05&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "There goes my Baby - The Drifters (1959)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_stkqp9b0/flavorIds/1_uo5f9w0t/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZDFlMWY2MDcxM2RkMGI4NjFkMzVkNjBkZTk5NWMwZjA3M2YxNWZmYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTc3MTsyOzYzNjg3ODE3NzcxMjA4MjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3N0a3FwOWIwOw==&playSessionId=6a0182a5-8c79-0ac4-a2ec-f42d20969d8e&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Wonderful World - Sam Cooke (April 1960)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_x2h0kp95/flavorIds/1_4cj1irle/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTA4MTY1NjhjM2ViNmI1NzQ4NzIyZDhiYmE3OTg4ZDk1Njg1MzExM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTc4MDsyOzYzNjg3ODE3NzgwNDQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3gyaDBrcDk1Ow==&playSessionId=3274daec-de3a-8523-5ac0-9d089a9c5154&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Papa’s Got A Brand New Bag",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_50r58lc6/flavorIds/1_1uexmrt6/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NjU5NmM5NDg0YWZmYTVhMDY5MmZhYjg1MWEwYzY3M2Q4M2NlNzJlZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTc5MDsyOzYzNjg3ODE3NzkwMjA4MjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzUwcjU4bGM2Ow==&playSessionId=d522fc07-06d4-5251-1bf3-627ebf177441&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "In the Midnight Hour - Wilson Pickett (May 1965)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vq5iwdxb/flavorIds/1_7rm7akf1/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjU0NThhYWZhZjFmMDQ2MzE3ZjI5Nzg3OTMwYWJiZWI2Yjc5M2E0OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTgwNTsyOzYzNjg3ODE3ODA1MDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3ZxNWl3ZHhiOw==&playSessionId=e6a61cfa-93c2-acbd-9c6e-92a180d827dc&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Respect - Otis Redding (August 1965)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vrewf01a/flavorIds/1_hsd4gqcr/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YzQ0ODc4YmQ4YTQ4MWZkY2NhZmI0NzRhYjFmODFiNmE0MTFiN2MwZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTgxNTsyOzYzNjg3ODE3ODE1NTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3ZyZXdmMDFhOw==&playSessionId=97f993fe-a8b8-c9dc-b110-5e242007d8c9&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "Respect - Aretha Franklin (February 1967)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_67s0f9xy/flavorIds/1_tziqp98b/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YWE3YzkxMzQ5OTFiZTY5OWJlZmY1OGIyMjIxYjUyNWEwODYzMTc1NXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTgyNjsyOzYzNjg3ODE3ODI2MTkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzY3czBmOXh5Ow==&playSessionId=aa39c5cc-e383-7eec-3212-fd27d182bc9f&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title: "People get ready - The Impressions (1965)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_2qiac6sa/flavorIds/1_cdgpzu0o/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZmRiOTkwMzI0YWQ1MzNmMjUzYzcwOWFjNzlmMjkwNWJiYmY0ZDA1OHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTgzNjsyOzYzNjg3ODE3ODM2MDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzJxaWFjNnNhOw==&playSessionId=c718991f-ae2f-13b2-d95e-dd7587c1360d&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },
      // {
      //   title:
      //     "Say It Loud- I'm Black and I'm Proud - James Brown (August 1968)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vym8f2l8/flavorIds/1_m46fqpny/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ODk4OTZlNmMwYWIyYWI0OWMxNzdmNjNkYTliMGQyZTJkYzlhODkwZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTg1MDsyOzYzNjg3ODE3ODUwMTkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Z5bThmMmw4Ow==&playSessionId=49b06463-2f9d-e6aa-ef4f-6fe462a72790&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 4
      // },

      // {
      //   title: "Please Mr. Postman - The Marvelettes (August 1961)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_w17sv2fe/flavorIds/1_ta3xtjgv/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NDEyOWIyN2MzM2Y4M2QzNGNhNThmMDFlYjdhZDBlMTNmZjllMTIxZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTg3OTsyOzYzNjg3ODE3ODc5NTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3cxN3N2MmZlOw==&playSessionId=cf641fb3-d5cd-70f3-70c9-8605bf6e451c&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title: "Please Mr. Postman - Beatles (November 1963)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_j7jshbsn/flavorIds/1_e4lra506/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzBiYjg2YjA5NjBmYWE3Y2ZmN2ZmNGQ4ZGJkNDA1M2IyYzgwYTNhZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTg5MTsyOzYzNjg3ODE3ODkxMzE3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2o3anNoYnNuOw==&playSessionId=eb28f9f5-32cb-c489-3fe2-8e8dfc3f0266&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title:
      //     "The Way You do the Things You do - The Temptations (January 1964)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_5n8tcy1a/flavorIds/1_acokl0mv/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzY4NWZlM2U1YjkyMDI2NDdkNzc1OTk3MWY0NmQ3NjUyY2EyNjc2MXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTkwMzsyOzYzNjg3ODE3OTAzMzMzMjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzVuOHRjeTFhOw==&playSessionId=c446fbc4-ae58-f377-5ebd-cdcf0987261f&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title:
      //     "Dancing in the Street - Martha Reeves and the Vandellas (August 1964)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_a8dsdcya/flavorIds/1_erlwgtpt/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZGJiZjY5YTNkYzIyYWJhOTI3NjUxNmRhZjlkODBiZjQ4YjkwZTYxNnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTkxNDsyOzYzNjg3ODE3OTE0NDQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2E4ZHNkY3lhOw==&playSessionId=b8fb905a-6e6d-a333-8673-ba04d5a86e35&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title: "Baby Love - The Supremes (September 1964)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_azqpv4gz/flavorIds/1_akuzxfwf/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZDhiZTM2MjQ4YTRmNmIxYjFhOWY4ZjRiMzIwNzNjMGEzZTQyMTVlYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTkyNTsyOzYzNjg3ODE3OTI1NDQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2F6cXB2NGd6Ow==&playSessionId=e7b6206b-5e81-fac3-f34d-1ebaa86ea693&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title: "Ain't to Proud to Beg - The Temptations (May 1966)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_iq5ahaft/flavorIds/1_p25j113l/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDc4MDkyM2ZjNWM1NWEwNjljOTMyMjY2ODM0YTI3NDNjZDAxMTk1YXwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTkzOTsyOzYzNjg3ODE3OTM5NzA4MjI2NjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2lxNWFoYWZ0Ow==&playSessionId=c635ffeb-cef1-c516-3eb9-8c2dd1c269d6&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title:
      //     "What Becomes of the Brokenhearted - Jimmy Ruffin (September 1966)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_t51qsqjw/flavorIds/1_ndf8d69e/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NDhmOTMwZGI4ZTc5NjJhYzRlNmU4OTBmNzQ3ZmM4N2VkMDU0ODE4N3wxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTk1MTsyOzYzNjg3ODE3OTUxNjkyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Q1MXFzcWp3Ow==&playSessionId=806447c0-e98e-87f9-82f0-f14ad35021d5&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title: "Reach Out, I'll Be There - The Four Tops (October 1966)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_lbao897p/flavorIds/1_519pmjd5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZmIwYzA4ZTZkODIxNjIyYTQzZDA4YzE0NDk4OTU4MTE2MDI0YjA3OHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTk2MjsyOzYzNjg3ODE3OTYyNTY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2xiYW84OTdwOw==&playSessionId=8074d68c-5ebd-0c39-3f35-23fb22096c2a&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title: "I Heard It Through The Grapevine - Marvin Gaye (November 1968)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_g1jrj4m1/flavorIds/1_rimf9f43/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NDQ2MTJlNjNiNjY3N2NhZDliNjdjZWZjZGUzMGMwNDNlZmRhOGNjMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTk3MzsyOzYzNjg3ODE3OTczMDY3NjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2cxanJqNG0xOw==&playSessionId=bd50c703-72b8-c604-404c-5529bddeb14a&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // },
      // {
      //   title:
      //     "Tears of A Clown - Smokey Robinson and The Bandits (October 1970)",
      //   link:
      //     "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_chozo2hc/flavorIds/1_dfv4svmy/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZTJhZjAxZTgwMjQ2YmU3M2ExYzFkODdjNGQyZTdjYzJiNjJhNGRkZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjMyMTk4NzsyOzYzNjg3ODE3OTg3OTQyNjAxNjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2Nob3pvMmhjOw==&playSessionId=306ba218-cfd3-bfe1-c36d-25f2fb271bbd&clientTag=html5:v2.74.4&uiConfId=16552211",
      //   week: 5
      // }
    ]
  };

  createElements = () => {
    let table = [];
    var flag = this.state.weekFlag;
    var query = this.state.query;
    var lucky = this.state.lucky;
    this.state.songs.forEach(function(tune, index) {
      if (flag === null && query === "" && index === lucky) {
        table.push(
          <audio className="player" controls>
            <source src={tune.link} type="audio/mpeg" />
          </audio>
        );
        table.push(<p className="luckyTitle">{tune.title}</p>);
      }
      if (
        query.length > 3 &&
        flag === null &&
        tune.title.toLowerCase().includes(query.toLowerCase())
      ) {
        table.push(<p>{tune.title}</p>);
        table.push(
          <audio className="player" controls>
            <source src={tune.link} type="audio/mpeg" />
          </audio>
        );
      }
      if (flag === tune.week) {
        table.push(<p>{tune.title}</p>);
        table.push(
          <audio className="player" controls>
            <source src={tune.link} type="audio/mpeg" />
          </audio>
        );
      }
    });
    return table;
  };

  toggleLuckyHandler = () => {
    var max = this.state.songs.length;
    this.search.value = "";
    this.setState({
      query: "",
      weekFlag: null,
      lucky: Math.floor(Math.random() * max)
    });
  };

  toggleWeekHandler = num => {
    var flag = this.state.weekFlag;
    this.search.value = "";
    if (flag === num) {
      this.setState({
        query: "",
        lucky: null,
        weekFlag: null
      });
    } else {
      this.setState({
        query: "",
        lucky: null,
        weekFlag: num
      });
    }
  };

  handleInputChange = () => {
    this.setState({
      weekFlag: null,
      lucky: null,
      query: this.search.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="buttons">
          <button onClick={this.toggleWeekHandler.bind(this, 0)}>Week 1</button>
          <button onClick={this.toggleWeekHandler.bind(this, 1)}>Week 2</button>
          <button onClick={this.toggleWeekHandler.bind(this, 2)}>Week 3</button>
          <button onClick={this.toggleWeekHandler.bind(this, 3)}>Week 4</button>
          <button onClick={this.toggleWeekHandler.bind(this, 4)}>Week 5</button>
          <button onClick={this.toggleWeekHandler.bind(this, 5)}>Week 6</button>
        </div>
        <div className="query">
          <input
            type="text"
            className="box"
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <button id="button">
            <i className="fa fa-search" />
          </button>
        </div>
        <div className="luckyBox">
          <button className="lucky" onClick={this.toggleLuckyHandler}>
            I'm feeling lucky today?
          </button>
        </div>
        <div className="content">{this.createElements()}</div>
        <div className="disclaimer">
          Works only on web, best on Chrome or Firefox
        </div>
        <div className="disclaimer">
          Probably taken down soon after midterms due to questionable legality
        </div>
        <div className="footer">
          <span id="heart">&#169;</span> because blackboard is an absolute pain
          in the derrière
        </div>
      </div>
    );
  }
}

export default App;
