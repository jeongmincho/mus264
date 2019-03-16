import React, { Component } from "react";
import ReactGA from "react-ga";
import ReactPlayer from "react-player";
import "./App.css";

var w1 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_wt3e6u3w/v/1/flavorId/1_8klqznfy/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_kjlm0fi2/v/1/flavorId/1_n4513bs6/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_v5iv4u4f/v/1/flavorId/1_rzwla99y/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_zext5hmn/v/1/flavorId/1_lzytjhbr/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_9vz9u8l7/v/1/flavorId/1_xfcihyun/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_zifq9grz/v/1/flavorId/1_6zuyw6l6/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_hwkecagw/v/1/flavorId/1_6rclk7k2/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_bzqsl58f/v/1/flavorId/1_6x9uian4/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_1puyextr/v/1/flavorId/1_fo8m0nhb/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4fsl2nis/v/1/flavorId/1_u9xsv9ph/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_j4b67u0i/v/1/flavorId/1_uk1n1mkp/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_u5sfigwq/v/1/flavorId/1_yhgrwgg2/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_8lzut3tz/v/1/flavorId/1_f265sc2s/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_iknw3kdh/v/1/flavorId/1_70sxn2to/name/a.mp4/index.m3u8"
];

var w2 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_gus6hdus/v/1/flavorId/1_3rtrhput/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_b5tbwlcv/v/1/flavorId/1_zapdz40h/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_3es3ofxl/v/1/flavorId/1_q52ssq5o/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_0jlwl0oz/v/1/flavorId/1_rqffgf4y/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_q5ifdigu/v/1/flavorId/1_gc5no686/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_08inq1fa/v/1/flavorId/1_c9c3d3hc/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_q5wckjbz/v/1/flavorId/1_q07ykmmn/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_nmshw9e0/v/1/flavorId/1_52xcazo8/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_t46hukwy/v/1/flavorId/1_cbgux6ob/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_jacudihi/v/1/flavorId/1_wbe7qvq3/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_xbd1dyl1/v/1/flavorId/1_s0rvy70e/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_vj2sabla/v/1/flavorId/1_qmyer378/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_vxnp33tv/v/1/flavorId/1_39ukaumw/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_3wowjhh9/v/1/flavorId/1_al9ec8kc/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_gfv0ofmf/v/1/flavorId/1_24z4x62o/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_7h946s6l/v/1/flavorId/1_a1r9rs0x/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_a256sdxo/v/1/flavorId/1_koy7wjvf/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_3ou1i1dm/v/1/flavorId/1_i6aotk0e/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_xywek47f/v/1/flavorId/1_o6w737m1/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4xucd6b4/v/1/flavorId/1_cl0pxt8w/name/a.mp4/index.m3u8"
];

var w3 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_5n6yb214/v/1/flavorId/1_1a3vx2ut/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_6i2n8uie/v/1/flavorId/1_e279s7ws/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_nmvkpw71/v/1/flavorId/1_w2sfixvo/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_0rrjtnd2/v/1/flavorId/1_ipcs3xsd/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_fdrteokv/v/1/flavorId/1_whhntxc0/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_6rwfa0f3/v/1/flavorId/1_bd3ul1r7/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_l4oitoj9/v/1/flavorId/1_hlrptskr/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_8uxhs7n6/v/1/flavorId/1_rf2wh9a0/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_nx6mbl7g/v/1/flavorId/1_xi35a2ej/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_zfw5batp/v/1/flavorId/1_dop3m9tc/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_wy5kkjn3/v/1/flavorId/1_cf91nvfs/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_oke9cmbe/v/1/flavorId/1_oiskxiv1/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_hd2b59wv/v/1/flavorId/1_02yrk2z5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_dv8fnnsf/v/1/flavorId/1_p9t4fi7n/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ojkunkxp/v/1/flavorId/1_a8gh4w8i/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ha2ulmhb/v/1/flavorId/1_uypgcw4l/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_qelb31sp/v/1/flavorId/1_l5jvch6v/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4dd4g2qj/v/1/flavorId/1_ticnfmp2/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_5dthr3zv/v/1/flavorId/1_v222jct5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_0ldowzse/v/1/flavorId/1_6lbm6y66/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_jjzvxut6/v/1/flavorId/1_5pk32ezm/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_qsn49q5e/v/1/flavorId/1_xxzv5dtr/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_sryj3pym/v/1/flavorId/1_36rpypy5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_nvs9rhig/v/1/flavorId/1_ldyc98fk/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4owx1kjp/v/1/flavorId/1_7bjjysyt/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_vnphlhxv/v/1/flavorId/1_6g14guyt/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_xxgeqcop/v/1/flavorId/1_7m54h2e1/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_qqclocjf/v/1/flavorId/1_5s9mf0w5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_y9hjc5v6/v/1/flavorId/1_giv8elmj/name/a.mp4/index.m3u8"
];

var w4 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_06j24l65/v/1/flavorId/1_t08zpo58/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_wbjhpvco/v/1/flavorId/1_gxok27cw/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_13jikr3f/v/1/flavorId/1_0j8fawlt/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_j7u8ptch/v/1/flavorId/1_89iru4ik/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_pmqzz7yq/v/1/flavorId/1_tdu1vbz8/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_h6mv271h/v/1/flavorId/1_ryhhfq7b/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_idk0wzt3/v/1/flavorId/1_q4s9aeb3/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_tqw4r3la/v/1/flavorId/1_zdhly5vx/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_fs0jobjo/v/1/flavorId/1_35wbp2gf/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_40d37g9z/v/1/flavorId/1_a6mm67mu/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ut9c1323/v/1/flavorId/1_27fs2pp2/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_odn6nl6c/v/1/flavorId/1_0y6ogoij/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_seu39i27/v/1/flavorId/1_cd6obp2l/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_uhxbndrn/v/1/flavorId/1_xld6rb3w/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_7cajw2jf/v/1/flavorId/1_cuw0rcdb/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_i0a6lqss/v/1/flavorId/1_qolpacsm/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_n8kjfbwr/v/1/flavorId/1_lluzdxtx/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4xrt7bpm/v/1/flavorId/1_lg9e7jhk/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4odjlnzc/v/1/flavorId/1_13sb6td4/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_omwptw0w/v/1/flavorId/1_gjm73ekb/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_upa6gprz/v/1/flavorId/1_7idd73qk/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_sa1ql0sf/v/1/flavorId/1_qlfnl1bf/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_c2aj7pfp/v/1/flavorId/1_ma6214jy/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_rwsu2hfk/v/1/flavorId/1_ipowqyz9/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_mzuqn50b/v/1/flavorId/1_mfadw4az/name/a.mp4/index.m3u8"
];

var w5 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_eva7ih62/v/1/flavorId/1_qcas5aq4/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_2kv617r6/v/1/flavorId/1_nw9w3umv/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_11d38feu/v/1/flavorId/1_ppcza2us/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_1y9yft2r/v/1/flavorId/1_cyt7qpdd/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_zw79jgrk/v/1/flavorId/1_cecazpxx/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_7ewcije2/v/1/flavorId/1_svxo0d7q/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_uy0ir8el/v/1/flavorId/1_eklgaeud/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_g2g9g0qq/v/1/flavorId/1_2ed4ai5w/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_savm5tfc/v/1/flavorId/1_pttofm4t/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_kp0w6xw8/v/1/flavorId/1_h7qit13y/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_irglr6gy/v/1/flavorId/1_jneh44oy/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_49e54ymq/v/1/flavorId/1_1qhcbdr5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_1sn8fmfi/v/1/flavorId/1_6grcxbi3/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ot6yvo9v/v/1/flavorId/1_urja6b62/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_stkqp9b0/v/1/flavorId/1_uo5f9w0t/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_x2h0kp95/v/1/flavorId/1_4cj1irle/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_50r58lc6/v/1/flavorId/1_1uexmrt6/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_vq5iwdxb/v/1/flavorId/1_7rm7akf1/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_vrewf01a/v/1/flavorId/1_hsd4gqcr/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_67s0f9xy/v/1/flavorId/1_tziqp98b/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_2qiac6sa/v/1/flavorId/1_cdgpzu0o/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_vym8f2l8/v/1/flavorId/1_m46fqpny/name/a.mp4/index.m3u8"
];

var w6 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_w17sv2fe/v/1/flavorId/1_ta3xtjgv/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_j7jshbsn/v/1/flavorId/1_e4lra506/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_5n8tcy1a/v/1/flavorId/1_acokl0mv/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_a8dsdcya/v/1/flavorId/1_erlwgtpt/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_azqpv4gz/v/1/flavorId/1_akuzxfwf/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_iq5ahaft/v/1/flavorId/1_p25j113l/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_t51qsqjw/v/1/flavorId/1_ndf8d69e/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_lbao897p/v/1/flavorId/1_519pmjd5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_g1jrj4m1/v/1/flavorId/1_rimf9f43/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_chozo2hc/v/1/flavorId/1_dfv4svmy/name/a.mp4/index.m3u8"
];

var w7 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_10o3pwdz/v/1/flavorId/1_x31bybwp/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_mozkkb1k/v/1/flavorId/1_zmzjgwdl/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_d5wfeitv/v/1/flavorId/1_gqhwe9z5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_cb3uo2nd/v/1/flavorId/1_7jw9m85v/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_v60b4jkp/v/1/flavorId/1_aoprpgwt/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_7g11qvbv/v/1/flavorId/1_cz35m2l0/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_7hpjy344/v/1/flavorId/1_revgk92p/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_tac1gw3k/v/1/flavorId/1_w8lltcu1/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_nnc0k9gs/v/1/flavorId/1_nlacysxf/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_3418d2tt/v/1/flavorId/1_9jr211qq/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_xt0z7jzs/v/1/flavorId/1_x487oxnm/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_f5v9bnse/v/1/flavorId/1_6g8kczqd/name/a.mp4/index.m3u8",
  "https://www.youtube.com/watch?v=5yhuIs08TUE",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_29fuzu8d/v/1/flavorId/1_nzuxlkh7/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_lawczgj1/v/1/flavorId/1_lvlu922q/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ljgkolyz/v/1/flavorId/1_npclms7p/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_d13gzstc/v/1/flavorId/1_trwrr82f/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_hte3za40/v/1/flavorId/1_6fmjswl6/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_15llcyue/v/1/flavorId/1_b5g5zo36/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_l3c1lfrv/v/1/flavorId/1_c0g9lywu/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_m4e9jrbc/v/1/flavorId/1_lscn83op/name/a.mp4/index.m3u8"
];

var w8 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ldhvbzb4/v/1/flavorId/1_qrotlwx7/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_kyxw75g6/v/1/flavorId/1_pnibb33j/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_qn19g56x/v/1/ev/3/flavorId/1_vd1hjcwg/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_qw42r7bh/v/1/flavorId/1_fan3tqko/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4i8rth3w/v/1/flavorId/1_i0gng6sw/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_xi5rxwvp/v/1/flavorId/1_59nxob7e/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_y8rogyi8/v/1/flavorId/1_ou91qbl9/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_02xoy8q3/v/1/flavorId/1_bkkpwd2f/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_z48baj8m/v/1/flavorId/1_us1j4msm/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ntxx4quo/v/1/flavorId/1_wue3vrz1/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_00eos698/v/1/flavorId/1_x5cyed3j/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_e8agj0yw/v/1/flavorId/1_42utlcys/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_po7h7dx7/v/1/flavorId/1_wdcyjgfz/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_h4vtjr7q/v/1/flavorId/1_5ap4b9ja/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_mzs8fuh3/v/1/flavorId/1_0yrpau0g/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_fthttcew/v/1/flavorId/1_lovoreml/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_xx4j7b2g/v/1/flavorId/1_g1mhl71u/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_3m6vd5oo/v/1/flavorId/1_9r78sf03/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_umuxix34/v/1/flavorId/1_rep8i7zv/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_2u29w5m7/v/1/flavorId/1_06zv2w05/name/a.mp4/index.m3u8"
];

var w1_t = [
  "Somewhere Over the Rainbow - Judy Garland (1939)",
  "All or Nothing at All - Frank Sinatra (1940; 1943)",
  "I'm Sitting on Top of the World - Les Paul, guitar; Mary Ford, vocals. (March 1953)",
  "How Much is That Doggie in the Window - Patti Page, vocals (March 1953)",
  "Secret Love - Doris Day (March 1954)",
  "April Love - Pat Boone (October 1957)",
  "Future Blues - Willie Brown, vocals, guitar (1930)",
  "Cross Road Blues - Robert Johnson (November 1936)",
  "In the Mood - Glenn Miller and his Orchestra (1939)",
  "BeBop - Dizzy Gillespie Quintet ; Charlie Parker, alto sax",
  "Caldonia - Louis Jordan and His Tympany Five (January 1945)",
  "Choo Choo Ch'Boogie - Louis Jordan and His Tympany Five (January 1945)",
  "Good Rockin' Tonight - Wynonie Harris (December 1947)",
  "The Fat Man - Fats Domino, vocals, piano (1949)"
];

var w2_t = [
  "Can the Circle Be Unbroken - Carter Family (August 1935)",
  "Blueberry Hill - Gene Autry (August 1940)",
  "Blueberry Hill - Fats Domino (September 1956)",
  "Faded Love - Bob Wills & His Texas Playboys (April 1946)",
  "Tennessee Waltz - Pee Wee King & His Golden West Cowboys (February 1948)",
  "Tennessee Waltz - Patti Page (November 1950)",
  "Hey Good Lookin' - Hank Williams (June 1951)",
  "Cold, Cold Heart - Hank Williams (1951)",
  "Your Cheatin' Heart - Hank Williams (September 1952)",
  "Rocket '88 - Jackie Brenston With His Delta Cats (April 1951)",
  "Rocket '88 and interview - Bill Haley and The Saddlemen (July 1951)",
  "We're Gonna Rock This Joint Jimmy Preston (1949)",
  "Rock the Joint - Bill Haley and The Saddlemen (April 1952)",
  "Shake, Rattle, and Roll - Joe Turner & His Blues Kings (April 1954)",
  "Shake, Rattle and Roll - Bill Haley and His Comets (June, 1954)",
  "Rock Around the Clock (excerpt) - Sunny Dae and his Knights (1953)",
  "Rock Around the Clock - Bill Haley and His Comets (May 1954)",
  "Dim, Dim the Lights - Bill Haley and His Comets (1955)",
  "Later Alligator - Bobby Charles (November 1955)",
  "See You Later, Alligator - Bill Haley and His Comets (1954)"
];

var w3_t = [
  'That\'s All Right - Arthur "Big Boy" Crudup (September 1946)',
  "That's All Right - Elvis Presley (June 1954)",
  "Blue Moon of Kentucky - Bill Monroe & His Blue Grass Boys (September 1947)",
  "Blue Moon of Kentucky - Elvis Presley (July 1954)",
  'Hound Dog - Willie Mae "Big Mama" Thornton (March 1953)',
  'Bear Cat (The Answer to Hound Dog) - Rufus "Hound Dog" Thomas Jr. (March 1953)',
  "Hound Dog - Elvis Presley (July 1956)",
  "Blue Suede Shoes - Carl Perkins (December 1955)",
  "Blue Suede Shoes - Elvis Presley (August 1956)",
  "Honey, Don't! - Carl Perkins (December 1955)",
  "Heartbreak Hotel - Elvis Presley (January 1956)",
  "All I Have to do is Dream - Everly Brothers (April 1958)",
  "Be-bop-a-lua - Gene Vincent & His Blue Caps (June 1956)",
  "Only the Lonely - Roy Orbison (March 1960)"
];

var w4_t = [
  "Bo Diddley - Bo Diddley (March 1955)",
  "Tutti Frutti - Little Richard (December 1955)",
  "Tutti Frutti - Pat Boone (January 1956)",
  "Ain't That A Shame - Fats Domino (April 1955)",
  "Ain't That A Shame - Pat Boone (July 1955)",
  "Whole Lotta Shakin' Goin' On - Jerry Lee Lewis (March 1957)",
  "Not Fade Away - Buddy Holly (October 1957)",
  "Not Fade Away - The Rolling Stones (May 1964)",
  "That'll Be The Day - Buddy Holly and the Crickets (May 1957)",
  "That'll Be The Day - The Quarry Men (1958)",
  "Great Balls of Fire - Jerry Lee Lewis, vocals, piano (November 1957)",
  "Johnny B. Goode - Chuck Berry (April 1958)",
  "Johnny B. Goode - The Beatles (January 1964)",
  "Carol - Chuck Berry (May 1958)",
  "Carol - The Rolling Stones (May 1964)",
  "It's Too Soon To Know - The Orioles (July 1948)",
  "Gee - The Crows (June 1953)",
  "Sh-Boom - The Chords (April 1954)",
  "Sh-Boom - The Crew-Cuts (July 1954)",
  "Earth Angel (Will You Be Mine) - The Penguins (September 1954)",
  "Mr. Sandman - The Four Acres (December 1954)",
  "Mr. Sandman - The Chordettes (December 1954)",
  "The Great Pretender - The Platters (November 1955)",
  "Little Star - The Elegants (June 1958)",
  "Hushabye - The Mystics (April 1959)",
  "Hushabye - The Beach Boys (July 1964)",
  "Big Girls Don't Cry -The Four Seasons (October 1962)"
];

var w5_t = [
  "Diana - Paul Anka (August 1954)",
  "Dream Lover - Bobby Darin (March 1959)",
  "The Twist - Chubby Checker (June 1960)",
  "Miserlou - Dick Dale and The Del-Tones (September 1962)",
  "Miserlou - The Beach Boys (March 1963)",
  "Surfer Girl (vocal track) The Beach Boys (June 12, 1963)",
  "Surfer Girl (backing track) - (August 1968)",
  "Surfer Girl (released version) - The Beach Boys (June 1963)",
  "Sweet Little Sixteen - Chuck Berry, guitar, vocals (February 1958)",
  "Surfin' USA - The Beach Boys (March 1963)",
  "Graduation Day - The Four Freshmen (April 1956)",
  "Graduation Day - The Beach Boys (Live 1964)",
  "Fun, Fun. Fun - The Beach Boys (February 1964)",
  "Down in Mexico - The Coasters (1956)",
  "Da Doo Ron Ron - The Crystals (March 1963)",
  "Be My Baby - The Ronnettes (July 1963)",
  "Then He Kissed Me - The Crystals (July 1963)",
  "Then I Kissed Her - The Beach Boys (June 1965)",
  "You've Lost That Lovin' Feeling - The Righteous Brothers (August-November 1964)",
  "California Girls - Beach Boys (July 1965)",
  "River Deep- Mountain High - Ike and Tina Turner (March 1966)",
  "God Only Knows (backing track) - The Beach Boys (1966)",
  "God Only Knows (vocal track) The Beach Boys (1966)",
  "God Only Knows - The Beach Boys (July 1966)",
  "The Long and Winding Road (original track) - Beatles (recorded January 31, 1969)",
  "The Long and Winding Road - Beatles (May 1970)"
];

var w6_t = [
  "I got a woman - Ray Charles (November 1954)",
  "There goes my Baby - The Drifters (1959)",
  "Wonderful World - Sam Cooke (April 1960)",
  "Papa’s Got A Brand New Bag",
  "In the Midnight Hour - Wilson Pickett (May 1965)",
  "Respect - Otis Redding (August 1965)",
  "Respect - Aretha Franklin (February 1967)",
  "People get ready - The Impressions (1965)",
  "Say It Loud- I'm Black and I'm Proud - James Brown (August 1968)",
  "Please Mr. Postman - The Marvelettes (August 1961)",
  "Please Mr. Postman - Beatles (November 1963)",
  "The Way You do the Things You do - The Temptations (January 1964)",
  "Dancing in the Street - Martha Reeves and the Vandellas (August 1964)",
  "Baby Love - The Supremes (September 1964)",
  "Ain't to Proud to Beg - The Temptations (May 1966)",
  "What Becomes of the Brokenhearted - Jimmy Ruffin (September 1966)",
  "Reach Out, I'll Be There - The Four Tops (October 1966)",
  "I Heard It Through The Grapevine - Marvin Gaye (November 1968)",
  "Tears of A Clown - Smokey Robinson and The Bandits (October 1970)"
];

var w7_t = [
  "Love Me Do - The Beatles (June, 1962)",
  "From Me to You - The Beatles (April, 1963)",
  "Please Please Me - The Beatles (March, 1963)",
  "She loves you The Beatles (August, 1963)",
  "I Want To Hold Your Hand - The Beatles (November, 1963)",
  "Twist and Shout - The Isley Brothers (June, 1962)",
  "Twist and Shout - The Beatles (March 1963)	",
  "You've Got To Hide Your Love Away - The Beatles (August, 1965)",
  "Yesterday - The Beatles (August, 1965)",
  "Good Night Irene - Leadbelly (1943)",
  "Goodnight Irene - The Weavers (June 1950)",
  "Pete Seeger, “Wasn’t That a Time?” (1957)",
  "This land is your land - Woody Guthrie (1945)",
  "Tom Dooley - G. B. Grayson and Henry Whitter (1929)",
  "Tom Dooley - Kingston Trio (1958)",
  "Blowin' in the Wind - Bob Dylan (May 1963)",
  "Blowin' In The Wind - Peter, Paul and Mary (1963)",
  "The Times They Are A-Changin' - Bob Dylan (January 1964)",
  "The Times They Are A-Changin - The Byrds (1966)",
  "If I Were A Carpenter - Tim Hardin (Woodstock, 1969)",
  "If You Were A Carpenter - Joan Baez (1967)"
];

var w8_t = [
  "Subterranean Homesick Blues - Bob Dylan (March 1965)",
  "Mr. Tambourine Man - Bob Dylan (March 1965)",
  "Mr. Tambourine Man - The Byrds (April 1965)",
  "Like A Rolling Stone - Bob Dylan (August 1965)",
  "Positively 4th Street - Bob Dylan (September 1965)",
  "The Sound of Silence - Simon and Garfunkel (October 1964)",
  "The Sounds of Silence - Simon and Garfunkel (December 1965)",
  "I'm A Man - The Yardbirds (October, 1965)",
  "All Along the Watchtower - Bob Dylan (December 1967)",
  "All Along the Watchtower - Jimi Hendrix (February 1968)",
  "Hoochie Coochie (I’m Your Hoochie Coochie Man) - Muddy Waters (January 1954)",
  "I Just Want To Make Love To You - Muddy Waters (April 1954)",
  "I Just Want To Make Love To You - The Rolling Stones (May 1964)",
  "It's All Over Now - The Valentinos (rec. March, released June, 1964)",
  "It's all Over Now - Rolling Stones (July 1964)",
  "House of the Rising Sun - Eric Burton and the Animals (June 1964)",
  "I'm A Man - Bo Diddley (March 1955)",
  "(I Can't Get No) Satisfaction - Rolling Stones (May 1965)",
  "Sympathy for the Devil - The Rolling Stones (November 1968)",
  "Sunshine of Your Love - Cream (November 1967)"
];

ReactGA.initialize("UA-135966055-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  state = {
    weekFlag: null,
    lucky: null,
    query: "",
    songs: [
      {
        title: w1_t[0],
        link: w1[0],
        week: 0
      },
      {
        title: w1_t[1],
        link: w1[1],
        week: 0
      },
      {
        title: w1_t[2],
        link: w1[2],
        week: 0
      },
      {
        title: w1_t[3],
        link: w1[3],
        week: 0
      },
      {
        title: w1_t[4],
        link: w1[4],
        week: 0
      },
      {
        title: w1_t[5],
        link: w1[5],
        week: 0
      },
      {
        title: w1_t[6],
        link: w1[6],
        week: 0
      },
      {
        title: w1_t[7],
        link: w1[7],
        week: 0
      },
      {
        title: w1_t[8],
        link: w1[8],
        week: 0
      },
      {
        title: w1_t[9],
        link: w1[9],
        week: 0
      },
      {
        title: w1_t[10],
        link: w1[10],
        week: 0
      },
      {
        title: w1_t[11],
        link: w1[11],
        week: 0
      },
      {
        title: w1_t[12],
        link: w1[12],
        week: 0
      },
      {
        title: w1_t[13],
        link: w1[13],
        week: 0
      },

      {
        title: w2_t[0],
        link: w2[0],
        week: 1
      },
      {
        title: w2_t[1],
        link: w2[1],
        week: 1
      },
      {
        title: w2_t[2],
        link: w2[2],
        week: 1
      },
      {
        title: w2_t[3],
        link: w2[3],
        week: 1
      },
      {
        title: w2_t[4],
        link: w2[4],
        week: 1
      },
      {
        title: w2_t[5],
        link: w2[5],
        week: 1
      },
      {
        title: w2_t[6],
        link: w2[6],
        week: 1
      },
      {
        title: w2_t[7],
        link: w2[7],
        week: 1
      },
      {
        title: w2_t[8],
        link: w2[8],
        week: 1
      },
      {
        title: w2_t[9],
        link: w2[9],
        week: 1
      },
      {
        title: w2_t[10],
        link: w2[10],
        week: 1
      },
      {
        title: w2_t[11],
        link: w2[11],
        week: 1
      },
      {
        title: w2_t[12],
        link: w2[12],
        week: 1
      },
      {
        title: w2_t[13],
        link: w2[13],
        week: 1
      },
      {
        title: w2_t[14],
        link: w2[14],
        week: 1
      },
      {
        title: w2_t[15],
        link: w2[15],
        week: 1
      },
      {
        title: w2_t[16],
        link: w2[16],
        week: 1
      },
      {
        title: w2_t[17],
        link: w2[17],
        week: 1
      },
      {
        title: w2_t[18],
        link: w2[18],
        week: 1
      },
      {
        title: w2_t[19],
        link: w2[19],
        week: 1
      },

      {
        title: w3_t[0],
        link: w3[0],
        week: 2
      },
      {
        title: w3_t[1],
        link: w3[1],
        week: 2
      },
      {
        title: w3_t[2],
        link: w3[2],
        week: 2
      },
      {
        title: w3_t[3],
        link: w3[3],
        week: 2
      },
      {
        title: w3_t[4],
        link: w3[4],
        week: 2
      },
      {
        title: w3_t[5],
        link: w3[5],
        week: 2
      },
      {
        title: w3_t[6],
        link: w3[6],
        week: 2
      },
      {
        title: w3_t[7],
        link: w3[7],
        week: 2
      },
      {
        title: w3_t[8],
        link: w3[8],
        week: 2
      },
      {
        title: w3_t[9],
        link: w3[9],
        week: 2
      },
      {
        title: w3_t[10],
        link: w3[10],
        week: 2
      },
      {
        title: w3_t[11],
        link: w3[11],
        week: 2
      },
      {
        title: w3_t[12],
        link: w3[12],
        week: 2
      },
      {
        title: w3_t[13],
        link: w3[13],
        week: 2
      },
      {
        title: w3_t[14],
        link: w3[14],
        week: 2
      },
      {
        title: w3_t[15],
        link: w3[15],
        week: 2
      },
      {
        title: w3_t[16],
        link: w3[16],
        week: 2
      },
      {
        title: w3_t[17],
        link: w3[17],
        week: 2
      },
      {
        title: w3_t[18],
        link: w3[18],
        week: 2
      },
      {
        title: w3_t[19],
        link: w3[19],
        week: 2
      },
      {
        title: w3_t[20],
        link: w3[20],
        week: 2
      },
      {
        title: w3_t[21],
        link: w3[21],
        week: 2
      },
      {
        title: w3_t[22],
        link: w3[22],
        week: 2
      },
      {
        title: w3_t[23],
        link: w3[23],
        week: 2
      },
      {
        title: w3_t[24],
        link: w3[24],
        week: 2
      },
      {
        title: w3_t[25],
        link: w3[25],
        week: 2
      },
      {
        title: w3_t[26],
        link: w3[26],
        week: 2
      },
      {
        title: w3_t[27],
        link: w3[27],
        week: 2
      },
      {
        title: w3_t[28],
        link: w3[28],
        week: 2
      },
      {
        title: w4_t[0],
        link: w4[0],
        week: 3
      },
      {
        title: w4_t[1],
        link: w4[1],
        week: 3
      },
      {
        title: w4_t[2],
        link: w4[2],
        week: 3
      },
      {
        title: w4_t[3],
        link: w4[3],
        week: 3
      },
      {
        title: w4_t[4],
        link: w4[4],
        week: 3
      },
      {
        title: w4_t[5],
        link: w4[5],
        week: 3
      },
      {
        title: w4_t[6],
        link: w4[6],
        week: 3
      },
      {
        title: w4_t[7],
        link: w4[7],
        week: 3
      },
      {
        title: w4_t[8],
        link: w4[8],
        week: 3
      },
      {
        title: w4_t[9],
        link: w4[9],
        week: 3
      },
      {
        title: w4_t[10],
        link: w4[10],
        week: 3
      },
      {
        title: w4_t[11],
        link: w4[11],
        week: 3
      },
      {
        title: w4_t[12],
        link: w4[12],
        week: 3
      },
      {
        title: w4_t[13],
        link: w4[13],
        week: 3
      },
      {
        title: w4_t[14],
        link: w4[14],
        week: 3
      },
      {
        title: w4_t[15],
        link: w4[15],
        week: 3
      },
      {
        title: w4_t[16],
        link: w4[16],
        week: 3
      },
      {
        title: w4_t[17],
        link: w4[17],
        week: 3
      },
      {
        title: w4_t[18],
        link: w4[18],
        week: 3
      },
      {
        title: w4_t[19],
        link: w4[19],
        week: 3
      },
      {
        title: w4_t[20],
        link: w4[20],
        week: 3
      },
      {
        title: w4_t[21],
        link: w4[21],
        week: 3
      },
      {
        title: w4_t[22],
        link: w4[22],
        week: 3
      },
      {
        title: w4_t[23],
        link: w4[23],
        week: 3
      },
      {
        title: w4_t[24],
        link: w4[24],
        week: 3
      },

      {
        title: w5_t[0],
        link: w5[0],
        week: 4
      },
      {
        title: w5_t[1],
        link: w5[1],
        week: 4
      },
      {
        title: w5_t[2],
        link: w5[2],
        week: 4
      },
      {
        title: w5_t[3],
        link: w5[3],
        week: 4
      },
      {
        title: w5_t[4],
        link: w5[4],
        week: 4
      },
      {
        title: w5_t[5],
        link: w5[5],
        week: 4
      },
      {
        title: w5_t[6],
        link: w5[6],
        week: 4
      },
      {
        title: w5_t[7],
        link: w5[7],
        week: 4
      },
      {
        title: w5_t[8],
        link: w5[8],
        week: 4
      },
      {
        title: w5_t[9],
        link: w5[9],
        week: 4
      },
      {
        title: w5_t[10],
        link: w5[10],
        week: 4
      },
      {
        title: w5_t[11],
        link: w5[11],
        week: 4
      },
      {
        title: w5_t[12],
        link: w5[12],
        week: 4
      },
      {
        title: w5_t[13],
        link: w5[13],
        week: 4
      },
      {
        title: w5_t[14],
        link: w5[14],
        week: 4
      },
      {
        title: w5_t[15],
        link: w5[15],
        week: 4
      },
      {
        title: w5_t[16],
        link: w5[16],
        week: 4
      },
      {
        title: w5_t[17],
        link: w5[17],
        week: 4
      },
      {
        title: w5_t[18],
        link: w5[18],
        week: 4
      },
      {
        title: w5_t[19],
        link: w5[19],
        week: 4
      },
      {
        title: w5_t[20],
        link: w5[20],
        week: 4
      },
      {
        title: w5_t[21],
        link: w5[21],
        week: 4
      },

      {
        title: w6_t[0],
        link: w6[0],
        week: 5
      },
      {
        title: w6_t[1],
        link: w6[1],
        week: 5
      },
      {
        title: w6_t[2],
        link: w6[2],
        week: 5
      },
      {
        title: w6_t[3],
        link: w6[3],
        week: 5
      },
      {
        title: w6_t[4],
        link: w6[4],
        week: 5
      },
      {
        title: w6_t[5],
        link: w6[5],
        week: 5
      },
      {
        title: w6_t[6],
        link: w6[6],
        week: 5
      },
      {
        title: w6_t[7],
        link: w6[7],
        week: 5
      },
      {
        title: w6_t[8],
        link: w6[8],
        week: 5
      },
      {
        title: w6_t[9],
        link: w6[9],
        week: 5
      },

      {
        title: w7_t[0],
        link: w7[0],
        week: 6
      },
      {
        title: w7_t[1],
        link: w7[1],
        week: 6
      },
      {
        title: w7_t[2],
        link: w7[2],
        week: 6
      },
      {
        title: w7_t[3],
        link: w7[3],
        week: 6
      },
      {
        title: w7_t[4],
        link: w7[4],
        week: 6
      },
      {
        title: w7_t[5],
        link: w7[5],
        week: 6
      },
      {
        title: w7_t[6],
        link: w7[6],
        week: 6
      },
      {
        title: w7_t[7],
        link: w7[7],
        week: 6
      },
      {
        title: w7_t[8],
        link: w7[8],
        week: 6
      },
      {
        title: w7_t[9],
        link: w7[9],
        week: 6
      },

      {
        title: w7_t[10],
        link: w7[10],
        week: 6
      },
      {
        title: w7_t[11],
        link: w7[11],
        week: 6
      },
      {
        title: w7_t[12],
        link: w7[12],
        week: 6
      },
      {
        title: w7_t[13],
        link: w7[13],
        week: 6
      },
      {
        title: w7_t[14],
        link: w7[14],
        week: 6
      },
      {
        title: w7_t[15],
        link: w7[15],
        week: 6
      },
      {
        title: w7_t[16],
        link: w7[16],
        week: 6
      },
      {
        title: w7_t[17],
        link: w7[17],
        week: 6
      },
      {
        title: w7_t[18],
        link: w7[18],
        week: 6
      },
      {
        title: w7_t[19],
        link: w7[19],
        week: 6
      },

      {
        title: w8_t[0],
        link: w8[0],
        week: 7
      },
      {
        title: w8_t[1],
        link: w8[1],
        week: 7
      },
      {
        title: w8_t[2],
        link: w8[2],
        week: 7
      },
      {
        title: w8_t[3],
        link: w8[3],
        week: 7
      },
      {
        title: w8_t[4],
        link: w8[4],
        week: 7
      },
      {
        title: w8_t[5],
        link: w8[5],
        week: 7
      },
      {
        title: w8_t[6],
        link: w8[6],
        week: 7
      },
      {
        title: w8_t[7],
        link: w8[7],
        week: 7
      },
      {
        title: w8_t[8],
        link: w8[8],
        week: 7
      },
      {
        title: w8_t[9],
        link: w8[9],
        week: 7
      },

      {
        title: w8_t[10],
        link: w8[10],
        week: 7
      },
      {
        title: w8_t[11],
        link: w8[11],
        week: 7
      },
      {
        title: w8_t[12],
        link: w8[12],
        week: 7
      },
      {
        title: w8_t[13],
        link: w8[13],
        week: 7
      },
      {
        title: w8_t[14],
        link: w8[14],
        week: 7
      },
      {
        title: w8_t[15],
        link: w8[15],
        week: 7
      },
      {
        title: w8_t[16],
        link: w8[16],
        week: 7
      },
      {
        title: w8_t[17],
        link: w8[17],
        week: 7
      },
      {
        title: w8_t[18],
        link: w8[18],
        week: 7
      },
      {
        title: w8_t[19],
        link: w8[19],
        week: 7
      }
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
          <ReactPlayer
            className="player"
            width={"100%"}
            height={50}
            url={tune.link}
            controls
          />
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
          <ReactPlayer
            className="player"
            width={"100%"}
            height={50}
            url={tune.link}
            controls
          />
        );
      }
      if (flag === tune.week) {
        table.push(<p>{tune.title}</p>);
        table.push(
          <ReactPlayer
            className="player"
            width={"100%"}
            height={50}
            url={tune.link}
            controls
          />
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
          <button onClick={this.toggleWeekHandler.bind(this, 6)}>Week 7</button>
          <button onClick={this.toggleWeekHandler.bind(this, 7)}>Week 8</button>
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
        {/* <div className="disclaimer">
          Probably taken down soon after midterms due to questionable legality
        </div> */}
        <div className="footer">
          <span id="heart">&#169;</span> because blackboard is an absolute pain
          in the derrière
        </div>
      </div>
    );
  }
}

export default App;
