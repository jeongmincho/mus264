import React, { Component } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import ReactGA from "react-ga";

ReactGA.initialize("UA-135966055-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  state = {
    weekFlag: null,
    weekToggles: [false, false, false, false, false, false],
    songs: [
      {
        title: "Somewhere Over the Rainbow - Judy Garland (1939)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_wt3e6u3w/flavorIds/1_8klqznfy,1_6r27y9ts/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YmVjYWYxNjQxMmJmOTIxMWUwMTc1OGRiYmJiZDAyMzQ2MTA4MGI5ZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjE5NjIxMjsyOzYzNjg3Njg4NjEyMDgxMDQyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3d0M2U2dTN3Ow==&playSessionId=a98d19f3-95fd-0f03-0f18-fde51db5bcb1&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "All or Nothing at All - Frank Sinatra (1940; 1943)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_kjlm0fi2/flavorIds/1_n4513bs6/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YzIyMDI1Zjc2ZDI1ZGQ0ZDFhZTM1YjFjZDg3NWZjNDVhMDI1MDdiOXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMDU4NTsyOzYzNjg3NjkyOTg1MzQ2NjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2tqbG0wZmkyOw==&playSessionId=a1eb6639-cbe2-bbcd-164b-f64b37346da1&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title:
          "I'm Sitting on Top of the World - Les Paul, guitar; Mary Ford, vocals. (March 1953)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_v5iv4u4f/flavorIds/1_rzwla99y/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MGJjZmZlMTg5MzRiNzlmM2FiNWFjZjliYjczNDZiMGFhMTVjMDkzNnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMDcwNjsyOzYzNjg3NjkzMTA2MjIxNjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Y1aXY0dTRmOw==&playSessionId=7693de99-5f7e-3ef2-926d-c721ac679ab6&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title:
          "How Much is That Doggie in the Window - Patti Page, vocals (March 1953)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_zext5hmn/flavorIds/1_lzytjhbr/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NzliYzRjNDljYWZmMThlMWE0YjdiMTk2NDE0YzJjNjgyZjVjMDEyNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMDcyMTsyOzYzNjg3NjkzMTIxODQ2NjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3pleHQ1aG1uOw==&playSessionId=e839a6df-ce0b-4dd9-b20d-2e1a2c798e51&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "Secret Love - Doris Day (March 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_9vz9u8l7/flavorIds/1_xfcihyun/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ODFiNjgyZjNlM2I0NDk2NWMzMmNlNGU0YTk4ZjMyMjYyZGU0YmMyM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMDc0NDsyOzYzNjg3NjkzMTQ0MjIxNjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzl2ejl1OGw3Ow==&playSessionId=8c3c2830-fc7c-565b-34fb-81c3d89aa7ce&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "April Love - Pat Boone (October 1957)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_zifq9grz/flavorIds/1_6zuyw6l6/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NDBiZDlhNWJjYWNmN2I5ZTk1MDdkMDYzMzJiMWJkOTI1ZWMwN2Q2NXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMzMxMTsyOzYzNjg3Njk1NzExMzQ2NjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3ppZnE5Z3J6Ow==&playSessionId=5f408bd9-d5db-92d4-ca1d-20923e7ab996&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "Future Blues - Willie Brown, vocals, guitar (1930)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_hwkecagw/flavorIds/1_6rclk7k2/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZmE4NzlkMmVmZjhjODNmOTY4MmY0MzZjMTFiN2JlYzJhZWZmODBkZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMDg2MDsyOzYzNjg3NjkzMjYwNDcxNjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2h3a2VjYWd3Ow==&playSessionId=d22cb377-8fd3-42dd-cd28-3315514017b4&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "Cross Road Blues - Robert Johnson (November 1936)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_bzqsl58f/flavorIds/1_6x9uian4/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MjNhZTJkMzUwNTQxMTE3NTAyY2VjMDAyNmI2MjQ2NWVkMTdjZTMzY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMDg3NTsyOzYzNjg3NjkzMjc1MDk2NjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2J6cXNsNThmOw==&playSessionId=04f29e1e-a372-3c46-cfa6-444a612345f3&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "In the Mood - Glenn Miller and his Orchestra (1939)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_1puyextr/flavorIds/1_fo8m0nhb/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MjM0ZGViYjI5MmYxNDY5N2QyMjM0N2MxNzZmOWQxOTljN2ZkMzgxYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMDg5MTsyOzYzNjg3NjkzMjkxMjIxNjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzFwdXlleHRyOw==&playSessionId=3d6a2bd0-cd14-aa4e-27ba-d6d41472b602&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "BeBop - Dizzy Gillespie Quintet ; Charlie Parker, alto sax",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_4fsl2nis/flavorIds/1_u9xsv9ph/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MjVmMzAxZjc2YzY0ZDE3ZGU0ODU5OTMxMTk5ZDhlNmU4YmU3YmZjOHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMzUxNTsyOzYzNjg3Njk1OTE1MjIxNjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzRmc2wybmlzOw==&playSessionId=d6a60003-5420-b850-ff85-f2fda53e7f9b&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "Caldonia - Louis Jordan and His Tympany Five (January 1945)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_j4b67u0i/flavorIds/1_uk1n1mkp/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NjMwMWVmMTEzMWViNjA3NmZkMDRjM2Y4MjZkN2E2M2NkMDg4ZTdhM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMzU5NzsyOzYzNjg3Njk1OTk3NzIxNjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2o0YjY3dTBpOw==&playSessionId=a03a6920-097c-c652-7c8f-c7b57723b14c&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title:
          "Choo Choo Ch'Boogie - Louis Jordan and His Tympany Five (January 1945)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_u5sfigwq/flavorIds/1_yhgrwgg2/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZWU0NzliMTViNWRlMjVkYTNmZDczNTdhY2YyODc2MjA3YTk5ZjkxOXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMzYxMjsyOzYzNjg3Njk2MDEyODQ2NjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3U1c2ZpZ3dxOw==&playSessionId=72c8853c-e21a-5695-cbdd-848ba00baef1&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "Good Rockin' Tonight - Wynonie Harris (December 1947)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_8lzut3tz/flavorIds/1_f265sc2s/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTUwYjIyNjAyN2QwM2EzNzIzMmNmMzcxMmUzOTI3Mzg1ODQzZGM3MHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMzUxODsyOzYzNjg3Njk1OTE4NzIxNjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzhsenV0M3R6Ow==&playSessionId=0b74d197-55e2-156c-ce0a-0ae188d56911&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },
      {
        title: "The Fat Man - Fats Domino, vocals, piano (1949)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_iknw3kdh/flavorIds/1_70sxn2to/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NmZhN2JmODEyYzg0MTU5YzllYWE3Yzg1Mjg1MWIyYzE0ODgwMDI3MnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwMzUxOTsyOzYzNjg3Njk1OTE5NTk2NjY3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2lrbncza2RoOw==&playSessionId=d93a853c-ad54-689e-a8ef-ad397320b5ef&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 0
      },

      {
        title: "Can the Circle Be Unbroken - Carter Family (August 1935)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_gus6hdus/flavorIds/1_3rtrhput/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=N2NjZTEwMzAyYmYyNjU0OGQ2MGUxNmM5MTJlZWFiNGY2YmVjZmIzZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwNzkwODsyOzYzNjg3NzAwMzA4MjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2d1czZoZHVzOw==&playSessionId=1ff1e49e-53d7-e38c-f971-9aa97ac9c335&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Blueberry Hill - Gene Autry (August 1940)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_b5tbwlcv/flavorIds/1_zapdz40h/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTA2YWEwODkzZWM2Y2MwYTcyYmJhZDliNmMxYmUwNGZlMTNiOGI5ZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwNzk0NjsyOzYzNjg3NzAwMzQ2NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2I1dGJ3bGN2Ow==&playSessionId=3159a5a4-9aa5-4c06-39fb-3dff24cb2da9&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Blueberry Hill - Fats Domino (September 1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_3es3ofxl/flavorIds/1_q52ssq5o/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDgzMzJjZmQ3MjFkYjI1YjdjYTg5Mjc4ZDJkMjE5MGEzNWRlNDllM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwNzk3NTsyOzYzNjg3NzAwMzc1NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzNlczNvZnhsOw==&playSessionId=444eba4a-cf78-2a64-3102-2bd5f9560e24&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Faded Love - Bob Wills & His Texas Playboys (April 1946)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_0jlwl0oz/flavorIds/1_rqffgf4y/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTI1N2ZlZGY1YjgzMTVlYTgxNzZkODZiMmNiNjg3ZmQ0OTYzNDJlYXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODAxNjsyOzYzNjg3NzAwNDE2MDAyOTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzBqbHdsMG96Ow==&playSessionId=769c2a95-06cc-66a1-50b3-d7aacd23a9f0&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title:
          "Tennessee Waltz - Pee Wee King & His Golden West Cowboys (February 1948)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_q5ifdigu/flavorIds/1_gc5no686/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Nzk1NDMzMTFhYjkzZmIwNjVlMDk2YTRjYzZmMzc0YzBiMmM1NzVmYXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwNzg5NTsyOzYzNjg3NzAwMjk1ODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3E1aWZkaWd1Ow==&playSessionId=5ed7b9e8-47fa-491f-5264-c49b3df449b9&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Tennessee Waltz - Patti Page (November 1950)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_08inq1fa/flavorIds/1_c9c3d3hc/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTNjMGY2NjBmZjg2MWQ0MTg2MmYwNThmZDE3ZTkyNjM3Zjk1NzgzY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwNzg5NjsyOzYzNjg3NzAwMjk2NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzA4aW5xMWZhOw==&playSessionId=5063201b-6960-3867-b15b-1c4880021d10&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Hey Good Lookin' - Hank Williams (June 1951)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_q5wckjbz/flavorIds/1_q07ykmmn/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NzU0OGI3ZGYyNDA1MGVmYmYzNWQyMjU0ZTJlNjI3MzJlZDQwZjgxNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODEwMTsyOzYzNjg3NzAwNTAxMTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3E1d2NramJ6Ow==&playSessionId=38314604-96cf-5cc7-c130-51905de93899&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Cold, Cold Heart - Hank Williams (1951)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_nmshw9e0/flavorIds/1_52xcazo8/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YjBiZDIzMDBjYjNjNjBjOWU5MjllNTkxNWU0NTNjZGJhOWRiOWRhOXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODEyNDsyOzYzNjg3NzAwNTI0NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX25tc2h3OWUwOw==&playSessionId=32116e23-a969-4b45-44eb-99c325b920cd&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Your Cheatin' Heart - Hank Williams (September 1952)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_t46hukwy/flavorIds/1_cbgux6ob/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjM1OTAzOTBmYjk1OGVhN2Q0MWI0OTcxM2U0NmVkZThiZWUwOTIyYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwNzkwMDsyOzYzNjg3NzAwMzAwMTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Q0Nmh1a3d5Ow==&playSessionId=56fc2cce-b55c-a0e9-26fe-7a741dbc2d31&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Rocket '88 - Jackie Brenston With His Delta Cats (April 1951)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_jacudihi/flavorIds/1_wbe7qvq3/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NWQxNDVlMGQzZWIyZGM1MWM5MDIzMmFlNTBhYmYxZWQwMGExMWJjZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwNzkwMTsyOzYzNjg3NzAwMzAxMTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2phY3VkaWhpOw==&playSessionId=8035cd13-8c4d-ffbe-b263-c95081b2179e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title:
          "Rocket '88 and interview - Bill Haley and The Saddlemen (July 1951)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_xbd1dyl1/flavorIds/1_s0rvy70e/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTk3OGM4ZjkyYjk0MTM1ZWZmNjhlODE3YjllYjk0MTk1MmJkYWMyM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODIxMjsyOzYzNjg3NzAwNjEyNjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3hiZDFkeWwxOw==&playSessionId=362e6455-7ee4-9832-1aea-bf4d1dc9980b&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "We're Gonna Rock This Joint Jimmy Preston (1949)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vj2sabla/flavorIds/1_qmyer378/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTRiODZhNWUwMDY5NGE1ODRlZDA3NDA5NTMyNmFhOGEwYWNiZmI4OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODIxMzsyOzYzNjg3NzAwNjEzODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3ZqMnNhYmxhOw==&playSessionId=658e18a9-27a9-6a92-9880-b92c45264caa&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Rock the Joint - Bill Haley and The Saddlemen (April 1952)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vxnp33tv/flavorIds/1_39ukaumw/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Y2ZhNDgzZTg1MzJhZDI0YzY3ZDIwZjk0N2E5MGE2YzI4NzI4MTgwY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODIxNDsyOzYzNjg3NzAwNjE0NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Z4bnAzM3R2Ow==&playSessionId=e8c5eff3-3b3a-3718-7125-3c4be61b1e7e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title:
          "Shake, Rattle, and Roll - Joe Turner & His Blues Kings (April 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_3wowjhh9/flavorIds/1_al9ec8kc/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Mjg2MWYwZjkyNjgzM2VlMzY0NTNhYjc2MjcwNjc1NDNmMzQ3NGEyZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODI5NDsyOzYzNjg3NzAwNjk0NjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzN3b3dqaGg5Ow==&playSessionId=486e2629-9772-85e6-565f-9aa29f2ff53d&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title:
          "Shake, Rattle and Roll - Bill Haley and His Comets (June, 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_gfv0ofmf/flavorIds/1_24z4x62o/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Y2I5MjcyOGVjNTFjNGUyODVmYTgzMWFiY2ZiYzk4NTAwMDM1M2QxNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODMyNjsyOzYzNjg3NzAwNzI2MjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2dmdjBvZm1mOw==&playSessionId=ae4ff848-8879-bb7f-2625-75cf1340ad7d&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title:
          "Rock Around the Clock (excerpt) - Sunny Dae and his Knights (1953)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_7h946s6l/flavorIds/1_a1r9rs0x/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OWMwZGUxMmJkNzdkNjVlYTMzYTM0NzA2YWQ5MTgyYmE1NjUzMDE3ZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODM0NjsyOzYzNjg3NzAwNzQ2ODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzdoOTQ2czZsOw==&playSessionId=6777c1fe-231c-7d77-30a0-dbd305a822cd&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Rock Around the Clock - Bill Haley and His Comets (May 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_a256sdxo/flavorIds/1_koy7wjvf/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDQ4MWM4OTZlNWVlODFhMDhhYjhiNzhiYWY4MjdiZmZjODRhMjAxOXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODM3OTsyOzYzNjg3NzAwNzc5MzYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2EyNTZzZHhvOw==&playSessionId=a9ccb0af-a1a3-4bb2-288e-e94b62da3161&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Dim, Dim the Lights - Bill Haley and His Comets (1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_3ou1i1dm/flavorIds/1_i6aotk0e/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NWZmNzI0NTAwMDdkNTdhYjE5ODFjZDBhNzgwZjVmMTEwOTc4NTM1ZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODQwMjsyOzYzNjg3NzAwODAyNDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzNvdTFpMWRtOw==&playSessionId=c46ba960-1666-7040-d26f-de084b1b6133&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "Later Alligator - Bobby Charles (November 1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_xywek47f/flavorIds/1_o6w737m1/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjFlMjFmMzIyYTVlY2U3OTJkYzZmMjI2OWU3MjIxMTlkNTE4ZGM5OHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODQxOTsyOzYzNjg3NzAwODE5NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3h5d2VrNDdmOw==&playSessionId=19957070-e154-e436-565a-d781d986c15b&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },
      {
        title: "See You Later, Alligator - Bill Haley and His Comets (1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_4xucd6b4/flavorIds/1_cl0pxt8w/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzFiZWE4MzUxMzdkZTNjMjE4NTBhMWY4MzU4NThlNzdhZWYwOGRjZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwODQ0NDsyOzYzNjg3NzAwODQ0MTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzR4dWNkNmI0Ow==&playSessionId=a39362c6-bc48-a4e1-1f74-93c4e500c54f&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 1
      },

      {
        title: "All I Have to do is Dream - Everly Brothers (April 1958)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_hd2b59wv/flavorIds/1_02yrk2z5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YzZkYWI2MDFhNjdiZGI3NWVhMjA1NzY1YjQzZTY4MmUwMDc4Y2E5MnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTA3NjsyOzYzNjg3NzAxNDc2NTAyOTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2hkMmI1OXd2Ow==&playSessionId=ec4f3e73-7ca1-6ea3-aa9f-009e841f33c0&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: 'That\'s All Right - Arthur "Big Boy" Crudup (September 1946)',
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_5n6yb214/flavorIds/1_1a3vx2ut/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MmRiMzRlNTI1YjRhOGVhMGM2MWYxMzYyODdkNTkyZTM2YWFmNjhlY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTEyMjsyOzYzNjg3NzAxNTIyMjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzVuNnliMjE0Ow==&playSessionId=2a1c6754-ee4f-e4d2-9d4c-a33cbc3ff040&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "That's All Right - Elvis Presley (June 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_6i2n8uie/flavorIds/1_e279s7ws/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YTA2NDU5ZDM3Y2M5MzRkOWUwMjFkNDY1NGMxYzhhYTc2ZDZkODY2NXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTE0NzsyOzYzNjg3NzAxNTQ3MjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzZpMm44dWllOw==&playSessionId=c05f2f05-fd8a-90a0-f8c6-c1c567fc0b69&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title:
          "Blue Moon of Kentucky - Bill Monroe & His Blue Grass Boys (September 1947)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_nmvkpw71/flavorIds/1_w2sfixvo/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NzQwZTMyY2RhZTkwY2ZjMzVhZWNjYjYxNjcyOGVmODc3Mjg0NjFhZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTE2NzsyOzYzNjg3NzAxNTY3NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX25tdmtwdzcxOw==&playSessionId=b0a826fd-b472-ad2e-0716-2616a9e6da00&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: 'Hound Dog - Willie Mae "Big Mama" Thornton (March 1953)',
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_fdrteokv/flavorIds/1_whhntxc0/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NGJiNDA3YmNjODNhMzFjYmU0ZDYwNDJkOTI3NjMyNTYzM2E0OGZlZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTE4OTsyOzYzNjg3NzAxNTg5NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2ZkcnRlb2t2Ow==&playSessionId=538a79de-e162-7d13-c80e-5b37e7525eb0&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title:
          'Bear Cat (The Answer to Hound Dog) - Rufus "Hound Dog" Thomas Jr. (March 1953)',
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_6rwfa0f3/flavorIds/1_bd3ul1r7/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjRkMDViYTY1N2ZkMWRhMzFhMWQ2ZDIzYTIzNzM0OWM4MTFiZTBjNnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTIxNTsyOzYzNjg3NzAxNjE1NjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzZyd2ZhMGYzOw==&playSessionId=a7bfcf27-1976-bc71-08d5-0e9fec7ca439&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Hound Dog - Elvis Presley (July 1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_l4oitoj9/flavorIds/1_hlrptskr/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MmNiNzUyMDU0ZmRmZjYzNTFkMWI0NDA3MTE0ZTg4N2JjOWFjMjVkY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTI1OTsyOzYzNjg3NzAxNjU5MjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2w0b2l0b2o5Ow==&playSessionId=137d21c0-3787-dbff-217a-5462987f3f4f&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Blue Suede Shoes - Carl Perkins (December 1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_8uxhs7n6/flavorIds/1_rf2wh9a0/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTdkZDlhNGI5NmUyNDZmMDBiNjY4ZWE5N2FlZDAyMGU3OGJmMjBlYXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTI4OTsyOzYzNjg3NzAxNjg5OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzh1eGhzN242Ow==&playSessionId=f26a9b76-a461-0b77-42a5-cd69a2ad2612&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Blue Suede Shoes - Elvis Presley (August 1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_nx6mbl7g/flavorIds/1_xi35a2ej/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Zjg4MjA3NTAzMTM4MGQ0MmFiNmUwZWE4Y2EzNTZiYmQyZTQzYmQ0ZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTMxMjsyOzYzNjg3NzAxNzEyMDAyOTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX254Nm1ibDdnOw==&playSessionId=b0137a89-bfb6-c643-d5b4-0a178224d355&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Blue Moon of Kentucky - Elvis Presley (July 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_0rrjtnd2/flavorIds/1_ipcs3xsd/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YmYzMjQ4NDllMjJjOTkwZjE0ZjQxZGEwNmVhNzIwYjkxYzFkYTYwYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTAwNTsyOzYzNjg3NzAxNDA1MTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzBycmp0bmQyOw==&playSessionId=87081e98-8d03-b4d5-e260-32fd96ff5e2d&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Honey, Don't! - Carl Perkins (December 1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_zfw5batp/flavorIds/1_dop3m9tc/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YTExYmM1YzVmOTIxOThiOTI4YzM1MTY1Y2MyZjk2NjViNzFmNDVkM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTM0NDsyOzYzNjg3NzAxNzQ0MzYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3pmdzViYXRwOw==&playSessionId=ff3ea544-f8f6-5a2c-43c1-404942bd0eb0&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Heartbreak Hotel - Elvis Presley (January 1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_wy5kkjn3/flavorIds/1_cf91nvfs,1_yp1aba2s/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzIzNGZkYjE0MGU1ZDc0NzUzMWZiNGQ2YTYwMmZlZDIzM2UzMTY1MXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTQwMjsyOzYzNjg3NzAxODAyNjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3d5NWtram4zOw==&playSessionId=2c69b145-e306-46a2-ae80-6e4a4cfa3638&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Be-bop-a-lua - Gene Vincent & His Blue Caps (June 1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_oke9cmbe/flavorIds/1_oiskxiv1/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MGI5ZDE2MGFmYzIyYTU0Zjc4OThjNzhhMTQyZTdkYTYzNjI5NzEzM3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTQyNjsyOzYzNjg3NzAxODI2OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX29rZTljbWJlOw==&playSessionId=4dd07fdb-53ef-16cd-dd95-34baca368a75&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Only the Lonely - Roy Orbison (March 1960)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_dv8fnnsf/flavorIds/1_p9t4fi7n/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzkzNWRhN2E4ZDlmZWY1MTQwNDFiYmNlYmZkNDcxNDZhMzMyYzkyZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTQ0ODsyOzYzNjg3NzAxODQ4MzYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2R2OGZubnNmOw==&playSessionId=9b792474-1eb1-f6fc-e3c5-3ed12ebf653e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Bo Diddley - Bo Diddley (March 1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_ojkunkxp/flavorIds/1_a8gh4w8i/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDk2OTA4Nzc4ZmE2NGMwN2UxNTE2ZThkN2QyYjhlOTE4NDA3YjZiNXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTQ3MDsyOzYzNjg3NzAxODcwNzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX29qa3Vua3hwOw==&playSessionId=d6ff91f2-b966-eb46-20ea-c5d08065f85e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Tutti Frutti - Little Richard (December 1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_ha2ulmhb/flavorIds/1_uypgcw4l/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzIxZmMzNTg5ZTAyMDAwZjRkMTJkMzkxN2UyZjIwMjJlNjc4NWU4MnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTQ4NjsyOzYzNjg3NzAxODg2NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2hhMnVsbWhiOw==&playSessionId=85cf643a-d549-1438-e7d6-7659ad7558ca&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Tutti Frutti - Pat Boone (January 1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_qelb31sp/flavorIds/1_l5jvch6v/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZWQzM2QzNGY3ZDExZGE4MmY4MDZlOTMyOTZjOGYyOTk0YzZiMWIyMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTUwNzsyOzYzNjg3NzAxOTA3NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3FlbGIzMXNwOw==&playSessionId=29ffe738-c67b-9654-1ffd-1e61110a7789&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Ain't That A Shame - Pat Boone (July 1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_5dthr3zv/flavorIds/1_v222jct5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=M2ZkODU0Yjc0YjA0ZjJjYjljNGQ4NjkxYjQ2YTQ0OGQxNjgzYzI5YXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTUyOTsyOzYzNjg3NzAxOTI5MjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzVkdGhyM3p2Ow==&playSessionId=a6369f6f-1226-ac2b-8cd7-7ca3a25b99b6&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Whole Lotta Shakin' Goin' On - Jerry Lee Lewis (March 1957)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_0ldowzse/flavorIds/1_6lbm6y66/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OGI2NGU4YWNlNjdiMzU3ODMzMDkxNjE4OTQ3MTgyYTJhYWQ1NTk1MXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTU0NzsyOzYzNjg3NzAxOTQ3ODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzBsZG93enNlOw==&playSessionId=ff674623-f8e1-54d6-97ad-3813ff8fcd8c&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Not Fade Away - Buddy Holly (October 1957)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_sryj3pym/flavorIds/1_36rpypy5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YTAxMTdmZWZiOTFlMTg4ZTAzYzE1ZTJhNmE0NTcxNjZmNzYwNTQ4MHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTU2NDsyOzYzNjg3NzAxOTY0NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3NyeWozcHltOw==&playSessionId=d6c57a2e-8b0b-6ee2-a9fd-2984778d0083&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Not Fade Away - The Rolling Stones (May 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_nvs9rhig/flavorIds/1_ldyc98fk/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YWUxMzc3MTU1YzdjNzI3NGJhMDYyNDY3ZWYzNGVjNjY5ZjdkNTgwZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTU5NDsyOzYzNjg3NzAxOTk0OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX252czlyaGlnOw==&playSessionId=da8bce47-924f-7968-6f50-f93e18c33f38&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "That'll Be The Day - Buddy Holly and the Crickets (May 1957)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_jjzvxut6/flavorIds/1_5pk32ezm/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTU0NmQ2NjA5ZDg3NWFjMmFmNmQxOGMwODZhNjE1YWYzMzQxZmEzMnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTYxNTsyOzYzNjg3NzAyMDE1NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2pqenZ4dXQ2Ow==&playSessionId=d89aaf6f-c998-7950-f208-bdf9ca4eba25&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "That'll Be The Day - The Quarry Men (1958)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_qsn49q5e/flavorIds/1_xxzv5dtr/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MmRmNWJjZjVmNDljYWU5MzYwMTM1ZTRiNzljYWM1YTBjY2E2ODY3MnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTYzNTsyOzYzNjg3NzAyMDM1ODc3OTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3FzbjQ5cTVlOw==&playSessionId=3c8c60c1-7306-e6fc-b0f9-5d6e34b8979e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title:
          "Great Balls of Fire - Jerry Lee Lewis, vocals, piano (November 1957)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_4owx1kjp/flavorIds/1_7bjjysyt/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MmQ3ZjMzOWIwMTlhNjkyOTlhMjhiY2FhZTNmZGQ4MGE2ZWQ4ZGNlYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTY1NzsyOzYzNjg3NzAyMDU3OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzRvd3gxa2pwOw==&playSessionId=2f011624-fb6f-2697-5da9-352fe7376478&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Johnny B. Goode - Chuck Berry (April 1958)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vnphlhxv/flavorIds/1_6g14guyt,1_sdrjls8x/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NzgyYjNhMDliNDVkMDg2ZGZiZWMyMGIyOTlhOGJkZmM0YTQ5YTg3M3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTY3NzsyOzYzNjg3NzAyMDc3NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3ZucGhsaHh2Ow==&playSessionId=a21db4a3-c899-e576-7ca0-bbe65a72293f&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Johnny B. Goode - The Beatles (January 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_xxgeqcop/flavorIds/1_7m54h2e1/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YzRlNzI1ZWJhODQxZjgxYjdkMGM1ZDNhMWQ1ZTkzMzI5MWY5Y2UwMXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTY5NDsyOzYzNjg3NzAyMDk0NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3h4Z2VxY29wOw==&playSessionId=d639533a-112e-0f27-0fb9-c34ccb4d8056&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Carol - Chuck Berry (May 1958)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_qqclocjf/flavorIds/1_5s9mf0w5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzM3ZmE0MTFiMzZhODU1N2Q3NTdjNjJiZGQ0Y2EyYjQ1MWFmOTM5MHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTcxMjsyOzYzNjg3NzAyMTEyNDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3FxY2xvY2pmOw==&playSessionId=9ea36fcb-2108-8d2f-89dd-aa683523e93e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },
      {
        title: "Carol - The Rolling Stones (May 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_y9hjc5v6/flavorIds/1_giv8elmj/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Yjc2ZWZiN2MxZmQ4NDlkMTYyMDhiMTAyOTkwMWRiNjM3M2U5MmIyOXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTcyODsyOzYzNjg3NzAyMTI4NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3k5aGpjNXY2Ow==&playSessionId=7ec9204f-7d1d-dda0-de9d-00dafa6b1b93&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 2
      },

      {
        title: "It's Too Soon To Know - The Orioles (July 1948)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_06j24l65/flavorIds/1_t08zpo58/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZWNjNWFiNTA1NDhlZjdjMjcyZGQ2MGUwNjc0ODY2YjRlOGQ2NWJmZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk2ODsyOzYzNjg3NzAyMzY4OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzA2ajI0bDY1Ow==&playSessionId=60958d4d-28b7-3cfc-1269-10681edcfc79&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Gee - The Crows (June 1953)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_wbjhpvco/flavorIds/1_gxok27cw/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OWIyOTA0MmEyMzYxMTFlZjdhYjJhZjhhMWQyYzY4MjA2YjMwNWJiZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk5MjsyOzYzNjg3NzAyMzkyOTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3diamhwdmNvOw==&playSessionId=c561c558-f830-ec5e-f318-a5542da2a248&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Sh-Boom - The Chords (April 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_13jikr3f/flavorIds/1_0j8fawlt/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDc3ZDgyMTc3ZmYxYjQ5ZmEyMzU1OTcyYWE4ZDYyMzFiMzNjYTY1ZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDAwOTsyOzYzNjg3NzAyNDA5MzYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzEzamlrcjNmOw==&playSessionId=020c7e9d-901f-41e7-899a-b3d5e7586939&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Sh-Boom - The Crew-Cuts (July 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_j7u8ptch/flavorIds/1_89iru4ik/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZmYwNjgyZjMyNzgwY2YyMDc2MDc0ZWVjMjFhNWI5OTk4YjcwYTg0YXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDAyNzsyOzYzNjg3NzAyNDI3MTI3OTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2o3dThwdGNoOw==&playSessionId=d7fa8158-b9a8-9aaf-4f3a-bc501b7dc0e4&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Earth Angel (Will You Be Mine) - The Penguins (September 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_pmqzz7yq/flavorIds/1_tdu1vbz8/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=M2MyNzg2Yjk4YWYzNGJhYjI3OGI3OWI2ODg2YTg2OGRkNzZhYmM1ZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDA0NTsyOzYzNjg3NzAyNDQ1NzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3BtcXp6N3lxOw==&playSessionId=f3c53374-13ef-3e00-ae35-8f0ef050bc73&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Mr. Sandman - The Four Acres (December 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_h6mv271h/flavorIds/1_ryhhfq7b/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Y2VjMzI3ZTA5MGZlODFiMGQyZTAzOTgyYjY3N2FkNjA0YTU5YjA1OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDA2MzsyOzYzNjg3NzAyNDYzMjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2g2bXYyNzFoOw==&playSessionId=0f202b76-15e0-efb4-fc7f-0c5386b3ffe8&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Mr. Sandman - The Chordettes (December 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_idk0wzt3/flavorIds/1_q4s9aeb3/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MGZiMWIyMDBmYzcxYTMyMzkzNzc4YTYyYjJhYjJjYzEzM2E5MzY3M3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDA3OTsyOzYzNjg3NzAyNDc5NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2lkazB3enQzOw==&playSessionId=789669a7-35d3-96d8-60af-5802035795d4&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "The Great Pretender - The Platters (November 1955)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_tqw4r3la/flavorIds/1_zdhly5vx/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YzQzYjUxNTU5Zjg0ZmZkZGM0ZDBkZDRiOTYyNTgwOWZmN2Y4OTNkOXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDA5ODsyOzYzNjg3NzAyNDk4OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3RxdzRyM2xhOw==&playSessionId=5b53c54f-d1c7-dd76-1ade-a811593e0679&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Little Star - The Elegants (June 1958)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_fs0jobjo/flavorIds/1_35wbp2gf/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Y2EwMDFmNzdjZTlhOTZhZTczMWRiYjg0ZjZiMTEzY2JkMjgxMWJjZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDExNTsyOzYzNjg3NzAyNTE1MTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2ZzMGpvYmpvOw==&playSessionId=144c6911-d01e-9d43-6585-ce15110f6ace&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Hushabye - The Mystics (April 1959)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_40d37g9z/flavorIds/1_a6mm67mu/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZTQ1ODg0NzMyZWIyODg0ZTUwMmU1NTY0OTJmMzY1OTc3NjZkMjA3MHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDEzMTsyOzYzNjg3NzAyNTMxOTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzQwZDM3Zzl6Ow==&playSessionId=7ccfcf17-cc26-3e6b-befa-cfb709baa8ed&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Hushabye - The Beach Boys (July 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_ut9c1323/flavorIds/1_27fs2pp2/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YzUzNjgwYjA5Y2NiNTU3NTA5YTM1NGExNmI1MTBmZGE1YjhmZmI3ZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDE0ODsyOzYzNjg3NzAyNTQ4MTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3V0OWMxMzIzOw==&playSessionId=6d5f0ea3-c591-5738-9cf7-0ea3cfe21f16&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Big Girls Don't Cry -The Four Seasons (October 1962)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_odn6nl6c/flavorIds/1_0y6ogoij/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTY0YmRmNTg3NzIwOWQ5NmE1NjJiYzQyOTUwNzZhNzFlNGZkOTg4MXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTkzNzsyOzYzNjg3NzAyMzM3Mzc3OTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX29kbjZubDZjOw==&playSessionId=195400b1-d264-aed4-8c01-667c74f5b4e0&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Diana - Paul Anka (August 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_seu39i27/flavorIds/1_cd6obp2l/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Yzc1MjRjMDhlMDk1OTU3NzhlNDViZmM4YmY4M2RhMzIxYWQzZDU0YXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk0MDsyOzYzNjg3NzAyMzQwMzYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3NldTM5aTI3Ow==&playSessionId=8d71b437-6565-0ad5-718e-2be8c6ede836&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Dream Lover - Bobby Darin (March 1959)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_uhxbndrn/flavorIds/1_xld6rb3w/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MGY0YzQ3M2E0NzdkYTkzNTQ1Y2YwYWI3OTk0M2JmYTEyZjJmMzg0NnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk0MDsyOzYzNjg3NzAyMzQwOTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3VoeGJuZHJuOw==&playSessionId=c9698640-9f66-2395-2a06-aba3cbbf0415&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "The Twist - Chubby Checker (June 1960)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_7cajw2jf/flavorIds/1_cuw0rcdb/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTc1MjA4ZjJjYjhmYzcwMjg4OWE5NGQwOTE2ZDQ2OWNhNGMyNWNkMXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDE5NzsyOzYzNjg3NzAyNTk3MjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzdjYWp3MmpmOw==&playSessionId=95b15e56-1502-3cce-5c01-b5ac9ea4db1e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Miserlou - Dick Dale and The Del-Tones (September 1962)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_i0a6lqss/flavorIds/1_qolpacsm/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ODFhNTBmOTkyYzA5MWI4ZTBmOWQxYWVlNGVmZTUwZmJjYjJlMzc3NHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk0MjsyOzYzNjg3NzAyMzQyMjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2kwYTZscXNzOw==&playSessionId=8e3394a5-5b53-709b-4d93-1c024850631e&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Miserlou - The Beach Boys (March 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_n8kjfbwr/flavorIds/1_lluzdxtx/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzQ2MjFmOWFkMTc1NGY1ZDRjMTZmYmJhODg2ZjVhMDRmZWRkMDljYXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk0MjsyOzYzNjg3NzAyMzQyODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX244a2pmYndyOw==&playSessionId=ecea8a0d-f451-e584-7ab0-788541eba6a4&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Surfer Girl (vocal track) The Beach Boys (June 12, 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_4xrt7bpm/flavorIds/1_lg9e7jhk/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NTM3N2NlNGUzZTQ5OTI2ODIyZWEzMjE1NmY0NjIzZTdhN2MyYjk3OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk0MzsyOzYzNjg3NzAyMzQzNDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzR4cnQ3YnBtOw==&playSessionId=38e1b125-b8ba-cbf9-6478-cd4ae6d1e824&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Surfer Girl (backing track) - (August 1968)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_4odjlnzc/flavorIds/1_13sb6td4/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Yzg0NWI5MmU1M2I4NDJkN2U1ZjkwZGQxYjY0ZmFkMTZmM2U1ZWY1NHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk0NDsyOzYzNjg3NzAyMzQ0NjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzRvZGpsbnpjOw==&playSessionId=aa813413-dee4-c4a4-675e-da003fcf7d77&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Surfer Girl (released version) - The Beach Boys (June 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_omwptw0w/flavorIds/1_gjm73ekb/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTczZGZiODlhYzExZmQ0ZmYzOWJkZmUzNDlkNDlkOGYyN2NhMTQzNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDI1MDsyOzYzNjg3NzAyNjUwNDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX29td3B0dzB3Ow==&playSessionId=8557e246-cc65-02ec-3d85-a7b8cd6c56af&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title:
          "Sweet Little Sixteen - Chuck Berry, guitar, vocals (February 1958)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_upa6gprz/flavorIds/1_7idd73qk/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTM2NzM1ZmZhNmM0NWE5MzczMmI3MDg4MzM2ZmQ5YjcxYjkyMzFlYXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIwOTk0ODsyOzYzNjg3NzAyMzQ4NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3VwYTZncHJ6Ow==&playSessionId=a35d963d-2c1a-be6a-73d1-19cd7f547f63&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Surfin' USA - The Beach Boys (March 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_sa1ql0sf/flavorIds/1_qlfnl1bf/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTA4ZWFiZDYzZTI4NzQ5YzM1ZTMxM2FmYTQxOGU3YzUxZGE5ZTAzN3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDI3OTsyOzYzNjg3NzAyNjc5ODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3NhMXFsMHNmOw==&playSessionId=b1ac8b98-92e6-52b8-6400-139b7c8e97f2&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Graduation Day - The Four Freshmen (April 1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_c2aj7pfp/flavorIds/1_ma6214jy/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NmUxNjE5NDM1ZGM1MjE2NDc0NTJjYjhhYzYwMWE3NjM4YTJiNTk4OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDI5NTsyOzYzNjg3NzAyNjk1OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2MyYWo3cGZwOw==&playSessionId=0cc756d7-aa8a-4280-db7f-a81043f3c7cb&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Graduation Day - The Beach Boys (Live 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_rwsu2hfk/flavorIds/1_ipowqyz9/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTFkOWM3YzNiMzMwYTI0NjY5YzIzZTFlNzk5NTM1NjdiOTY1NjQ5N3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDMxMzsyOzYzNjg3NzAyNzEzODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3J3c3UyaGZrOw==&playSessionId=68885733-187e-6ef2-e5fd-0c68a3b272e3&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },
      {
        title: "Fun, Fun. Fun - The Beach Boys (February 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_mzuqn50b/flavorIds/1_mfadw4az/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NjNhODdkZmM0NjQwN2YzZmVmNDE1NDNjMjhlMTBjMDg5ZWE3ZDNjMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDQzNzsyOzYzNjg3NzAyODM3OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX216dXFuNTBiOw==&playSessionId=d8ed6f6e-19df-0491-0d47-596abe2831ce&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 3
      },

      {
        title: "Down in Mexico - The Coasters (1956)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_eva7ih62/flavorIds/1_qcas5aq4/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YWYyNTgwN2JhYzQ3YThkMDQ5OTE5YzE3ZmM4ZTdhZDliMWNkMmJiNXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDY0NjsyOzYzNjg3NzAzMDQ2NjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2V2YTdpaDYyOw==&playSessionId=33933de1-8a81-c939-0b5c-ab7d2dcc004d&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Da Doo Ron Ron - The Crystals (March 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_2kv617r6/flavorIds/1_nw9w3umv/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZTc4NWEyNWFiYmUyMWJjYWE0OGFmYTA5YmVhZmE5YmQzY2NkOTUxNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDY2NjsyOzYzNjg3NzAzMDY2NjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzJrdjYxN3I2Ow==&playSessionId=be7a4f1c-caa4-ae06-e154-32198d6dc6a0&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Be My Baby - The Ronnettes (July 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_11d38feu/flavorIds/1_ppcza2us/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjdmZDVmNTAyMzgzMzQ5MDk2NWI4MTk1NjI0Mjc3MTE5MDBkM2Y1OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDcxMTsyOzYzNjg3NzAzMTExMTI3OTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzExZDM4ZmV1Ow==&playSessionId=61b73ddc-5d88-98ec-7957-31c68037abd1&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Then He Kissed Me - The Crystals (July 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_1y9yft2r/flavorIds/1_cyt7qpdd/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDdjMDI5MDU5YTMxOTc3NDUyYTgxODg0NzYxOWU2YjllNjEyZGI3N3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUyNDsyOzYzNjg3NzAyOTI0ODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzF5OXlmdDJyOw==&playSessionId=59d886a4-6a0d-33a7-5d1e-8684fc0669a2&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Then I Kissed Her - The Beach Boys (June 1965)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_zw79jgrk/flavorIds/1_cecazpxx/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZDEwNDU2YWMzODE3NzdiODIxNDQ1YmE0YzQyNDA4NjViYTU0MmEzMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUyNTsyOzYzNjg3NzAyOTI1NDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3p3NzlqZ3JrOw==&playSessionId=2ef6378f-9b75-7a2f-7fb7-8a5ac30f930b&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title:
          "You've Lost That Lovin' Feeling - The Righteous Brothers (August-November 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_7ewcije2/flavorIds/1_svxo0d7q/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzYyNDhjZGY3NjZlZmRmMzU0YmVlYjliZjg5MTUzNjFmMzdhZWM2ZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUyNjsyOzYzNjg3NzAyOTI2MjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzdld2NpamUyOw==&playSessionId=1560bac4-1a53-dd58-73a3-ea769178acd1&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "California Girls - Beach Boys (July 1965)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_uy0ir8el/flavorIds/1_eklgaeud/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjkwNGZkZDM2MjE3ZDBiOTMyZmI4M2Y4ZGU0YmRjNTViODczNTU2MHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUyNjsyOzYzNjg3NzAyOTI2ODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3V5MGlyOGVsOw==&playSessionId=26c0fe7b-40ad-d984-c217-0f5eaece2ca8&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "River Deep- Mountain High - Ike and Tina Turner (March 1966)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_g2g9g0qq/flavorIds/1_2ed4ai5w/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MjkzYzdjNGMwODJmYTI2Yjg1MjNmMWJmYzk5OGNjMmM0ODAwYTA3OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUyOTsyOzYzNjg3NzAyOTI5OTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2cyZzlnMHFxOw==&playSessionId=0a113287-d295-16b3-06da-098f18d4e077&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "God Only Knows (backing track) - The Beach Boys (1966)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_savm5tfc/flavorIds/1_pttofm4t/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZDZjOWI1ZWUyYjJiOWFlYjUzODJhNzZjYzU2NTQ2ODJkZTM5OTgzZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUzMDsyOzYzNjg3NzAyOTMwNzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Nhdm01dGZjOw==&playSessionId=e929f7ce-a863-d673-9c36-fa502755842a&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "God Only Knows (vocal track) The Beach Boys (1966)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_kp0w6xw8/flavorIds/1_h7qit13y/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZGQ4ZmNiZjI1NDQ3OWU5Nzk1YmY1NDQxMzAyNmFiM2RlNTA3ZjFhY3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUzMTsyOzYzNjg3NzAyOTMxNTAyOTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2twMHc2eHc4Ow==&playSessionId=9c3202f7-0671-e02a-2c30-88a05b6a847d&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "God Only Knows - The Beach Boys (July 1966)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_irglr6gy/flavorIds/1_jneh44oy/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NzNkNmYyOGZiYzhjMTJhMGUwNGE1ZmRmY2NmM2YzMzk5OGU2YzRmNHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUzMjsyOzYzNjg3NzAyOTMyMTEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2lyZ2xyNmd5Ow==&playSessionId=9ef18b9a-b3eb-0650-2675-b16051908d63&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title:
          "The Long and Winding Road (original track) - Beatles (recorded January 31, 1969)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_49e54ymq/flavorIds/1_1qhcbdr5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NmU1YWZiNjhhMjcyOWIxMmVhMzNmNDVjMjdkYWM5ZGVmMWY4YmIxNXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUzMjsyOzYzNjg3NzAyOTMyODYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzQ5ZTU0eW1xOw==&playSessionId=1e8e7362-de61-2c2b-4afd-cad5b2cf2d34&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "The Long and Winding Road - Beatles (May 1970)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_1sn8fmfi/flavorIds/1_6grcxbi3,1_6yfe9k4l/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=YTU5ODI1NTQ3ZDFlMDM0NDNkYjRmNWVlNmVhYWE5NjNmMDAzNTJiYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUzMzsyOzYzNjg3NzAyOTMzNzM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzFzbjhmbWZpOw==&playSessionId=91451a66-ed51-84ea-a8f5-36a3274fe0ca&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "I got a woman - Ray Charles (November 1954)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_stkqp9b0/flavorIds/1_uo5f9w0t/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDBmZmMyZTQ2OTMxZGY2YWNiMjE3NmQ2ZTFiNmQzY2FlMGE1OWJmOHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDUzNzsyOzYzNjg3NzAyOTM3MzYyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3N0a3FwOWIwOw==&playSessionId=c6e1837f-2c2d-2c4b-b63f-c2fb9c43237c&clientTag=html5:v2.74.4&uiConfId=16552211,",
        week: 4
      },
      {
        title: "There goes my Baby - The Drifters (1959)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_stkqp9b0/flavorIds/1_uo5f9w0t/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NTY2OGYyZGI2YzNhZjQ5ZDQwMDg3NjUzZDdjYzgyOWNlYzEyNWVkYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMTI0NjsyOzYzNjg3NzAzNjQ2MzU1NzQzOTtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3N0a3FwOWIwOw==&playSessionId=1212d616-115e-7fb3-6dbd-9cf58a4a2420&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Wonderful World - Sam Cooke (April 1960)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_x2h0kp95/flavorIds/1_4cj1irle/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NjU0YzI0YTUzYjllNDI3OTE2N2ZhOTFjYWYwZDA3ZTFiMzNmZTE4OHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDgyODsyOzYzNjg3NzAzMjI4NjEyMTg3MTtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3gyaDBrcDk1Ow==&playSessionId=78bf3a0a-17fd-9685-c9ea-38c806afc749&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Papa’s Got A Brand New Bag",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_50r58lc6/flavorIds/1_1uexmrt6/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTM3NzJmNzk3NjI2MmMxYjM0ZWJiMmZlMWVkN2NjMDI2MmFmYTAxNXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDg0MzsyOzYzNjg3NzAzMjQzNzM2ODk2NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzUwcjU4bGM2Ow==&playSessionId=05426e96-ff10-e6e3-496d-1b5c9d095be1&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "In the Midnight Hour - Wilson Pickett (May 1965)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vq5iwdxb/flavorIds/1_7rm7akf1/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=Mzk0YmUzOGYwOTBiZmI2NmQ0ZDVhNmYwNWVlN2U4OWUwM2RlOGIwZnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDg2MDsyOzYzNjg3NzAzMjYwMzYxNTc3NTtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3ZxNWl3ZHhiOw==&playSessionId=76ac1ca3-40a4-ed47-09bb-b515125d121f&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Respect - Otis Redding (August 1965)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vrewf01a/flavorIds/1_hsd4gqcr/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OTY5NzIzZmJkMzc1NjBmM2U4MDIyODAwNGJlOTA5YjFlZGY2MWZkZXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDU0MDsyOzYzNjg3NzAyOTQwMjM3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3ZyZXdmMDFhOw==&playSessionId=02c45745-5183-e5bc-f209-4d2bdce5ee3f&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "Respect - Aretha Franklin (February 1967)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_67s0f9xy/flavorIds/1_tziqp98b/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MDE5ZWMyNDQzYThiYjQyZDQ1MmZlZWZhMmJhNWExNzE1Yzg5Zjg5MXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDU0MDsyOzYzNjg3NzAyOTQwOTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzY3czBmOXh5Ow==&playSessionId=d67e8f25-294d-0810-6361-576e6d5e891a&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title: "People get ready - The Impressions (1965)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_2qiac6sa/flavorIds/1_cdgpzu0o/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZTQzMmRhOTgzZTUzMDQ4YWE4N2NhNTdmODBlYWE5YWU4YjBlY2Y3ZHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDU0MTsyOzYzNjg3NzAyOTQxNjEyMjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzJxaWFjNnNhOw==&playSessionId=b655e7c0-98c0-8197-1dec-ad129bd44e4c&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },
      {
        title:
          "Say It Loud- I'm Black and I'm Proud - James Brown (August 1968)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_vym8f2l8/flavorIds/1_m46fqpny/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NGEyZDRlMzM4MDg3MTc3NmI1Nzk4ZjdmMjhhYmI5YmQ5OGM1Mzg5YXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDU0MjsyOzYzNjg3NzAyOTQyNDg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Z5bThmMmw4Ow==&playSessionId=1fbe35c6-35f4-dfaa-0628-2a6066965644&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 4
      },

      {
        title: "Please Mr. Postman - The Marvelettes (August 1961)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_w17sv2fe/flavorIds/1_ta3xtjgv/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ODVmYjA5NDUxNjg1ZmMzMmZlNTc5MzRhNDVmZGE5MWY3ZjdmZjc3OXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDYxOTsyOzYzNjg3NzAzMDE5NjI3OTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3cxN3N2MmZlOw==&playSessionId=e1ff016e-b45b-0892-7843-ccb34c73c1a7&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title: "Please Mr. Postman - Beatles (November 1963)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_j7jshbsn/flavorIds/1_e4lra506/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=NGZhYmFhZjg1NzU3NmIwN2ZhY2I4ZTM5NGIxM2FjOGM4MGU1NGUyMXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDkzMzsyOzYzNjg3NzAzMzMzMTEwMTgwNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2o3anNoYnNuOw==&playSessionId=0c7e899b-0d6a-775b-b8bb-742f243aa3a4&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title:
          "The Way You do the Things You do - The Temptations (January 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_5n8tcy1a/flavorIds/1_acokl0mv/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MzJiZjk2NmJiYTkxODhlOGJkYmNhMjJhMTNmZGE1N2M0OTIzNzA0MnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDk1MjsyOzYzNjg3NzAzMzUyODc1NDI2MjtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxXzVuOHRjeTFhOw==&playSessionId=55c2a09e-0944-f7fb-5b86-e88007133faf&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title:
          "Dancing in the Street - Martha Reeves and the Vandellas (August 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_a8dsdcya/flavorIds/1_erlwgtpt/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZjQ0ODkwY2E1NDEyZDY4MjViMjJjYzAxMDYzYmYyNzlkNzMwYjJkYnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDYyMTsyOzYzNjg3NzAzMDIxOTg3MjkyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2E4ZHNkY3lhOw==&playSessionId=dab096d9-f995-22c8-25d4-bf1b544a03e9&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title: "Baby Love - The Supremes (September 1964)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_azqpv4gz/flavorIds/1_akuzxfwf/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZGFlY2EwNTRhZTY5MTEyNmFkNTNkNGI3NWQ3ZTA1ZGZiYmMzY2MwMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMTQ2NDsyOzYzNjg3NzAzODY0ODU0NjEyNztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2F6cXB2NGd6Ow==&playSessionId=4f816159-555b-3f66-769c-94ab12ff0f7d&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title: "Ain't to Proud to Beg - The Temptations (May 1966)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_iq5ahaft/flavorIds/1_p25j113l/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MWMxNmNjMDA0OGVlMTNlNDdiZmMxNjFkYjNlOTA5MjhlY2FkZGQ0M3wxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDk4MjsyOzYzNjg3NzAzMzgyNzM0MjI3OTtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2lxNWFoYWZ0Ow==&playSessionId=0186c526-38bd-86ef-cd50-0923d08d6ef3&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title:
          "What Becomes of the Brokenhearted - Jimmy Ruffin (September 1966)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_t51qsqjw/flavorIds/1_ndf8d69e/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=OGQ0ZmNlMjM0MzNkZTgyMjllZWJhZGExOTU1N2Q5OTE5M2VjNzJhOXwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMDYyNzsyOzYzNjg3NzAzMDI3MTI3OTE3NztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX3Q1MXFzcWp3Ow==&playSessionId=e721d3c7-7bb1-131a-6c45-f2018a83f133&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title: "Reach Out, I'll Be There - The Four Tops (October 1966)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_lbao897p/flavorIds/1_519pmjd5/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=ZWI5NzUxZWMzYzBmYTQ0ZmJiNGRlYjYxMzkxYjcwMmUzMjNmYjRiMHwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMTAxNjsyOzYzNjg3NzAzNDE2OTgzNTcwMztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2xiYW84OTdwOw==&playSessionId=a5e5e459-77d3-edda-377d-92f3a78a4889&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title: "I Heard It Through The Grapevine - Marvin Gaye (November 1968)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_g1jrj4m1/flavorIds/1_rimf9f43/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MWVkZTU2NjhiZGE4YjhkN2M3ZDI4NTk5ZmZmMGRmMWQ1ZGUzYzU1NnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMTAzOTsyOzYzNjg3NzAzNDM5NzMzMTMzNTtidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2cxanJqNG0xOw==&playSessionId=878fb962-09d7-d8ed-d324-b1db63a9148c&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      },
      {
        title:
          "Tears of A Clown - Smokey Robinson and The Bandits (October 1970)",
        link:
          "https://cdnapisec.kaltura.com/p/1536481/sp/153648100/playManifest/entryId/1_chozo2hc/flavorIds/1_dfv4svmy/format/applehttp/protocol/https/a.m3u8?referrer=aHR0cHM6Ly9saWJ3ZWIxMC5wcmluY2V0b24uZWR1&ks=MTk3OTQ0OTBmNmYwODdkZmQwNWUwMjY2MDM4ZmYzYzE1NzM0NmQ2MnwxNTM2NDgxOzE1MzY0ODE7MTU1MjIxMTA1NTsyOzYzNjg3NzAzNDU1NzMyODI2MztidXNlckBwcmluY2V0b24uZWR1O3N2aWV3OiAxX2Nob3pvMmhjOw==&playSessionId=d3b7603d-bfb0-86c5-25a9-0c7f333665e8&clientTag=html5:v2.74.4&uiConfId=16552211",
        week: 5
      }
    ]
  };

  createElements = event => {
    let table = [];
    var flag = this.state.weekFlag;
    this.state.songs.forEach(function(tune) {
      if (flag === tune.week) {
        table.push(<p>{tune.title}</p>);
        table.push(
          <ReactPlayer
            className="player"
            width={"100%"}
            height={50}
            url={tune.link}
            onStart
            controls
          />
        );
      }
    });
    return table;
  };

  toggleWeekHandler = num => {
    var flag = this.state.weekFlag;
    if (flag === num) {
      this.setState({
        weekFlag: null
      });
    } else {
      this.setState({
        weekFlag: num
      });
    }
  };

  render() {
    return (
      <div>
        <div className="buttons">
          <button onClick={this.toggleWeekHandler.bind(this, 0)}>Week 1</button>
          <button onClick={this.toggleWeekHandler.bind(this, 1)}>Week 2</button>
          <button onClick={this.toggleWeekHandler.bind(this, 2)}>Week 3</button>
          <button onClick={this.toggleWeekHandler.bind(this, 3)}>Week 4</button>
          <button onClick={this.toggleWeekHandler.bind(this, 4)}>Week 5</button>
          <button onClick={this.toggleWeekHandler.bind(this, 5)}>Week 6</button>
        </div>
        <div className="content">{this.createElements()}</div>
        <div className="disclaimer">
          Works only on web, best on Chrome or Firefox
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
