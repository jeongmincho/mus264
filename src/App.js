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

var w9 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_vstxormq/v/1/flavorId/1_51nx29jw/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_hc0708jh/v/1/flavorId/1_r6xbv4qk/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_y5vdlnqe/v/1/flavorId/1_31enows9/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_cvs3goua/v/1/flavorId/1_ucfhfsag/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_764lmy6v/v/1/flavorId/1_o6trxbx5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_luhf6g3n/v/1/flavorId/1_yk2u0dbc/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ud41xz58/v/1/flavorId/1_tl2hn754/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_t2ggagms/v/1/flavorId/1_dmok93ta/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_51fmwddx/v/1/flavorId/1_b1pyu99w/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_zqhqy1te/v/1/flavorId/1_3047hg22/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_tjtwf88s/v/1/flavorId/1_bwgvb3fm/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_z05dcvk5/v/1/flavorId/1_4cox6yfh/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_32bw0xxr/v/1/ev/3/flavorId/1_ud777gr2/name/a.mp4/index.m3u8"
];

var w10 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_qvmo4fix/v/1/flavorId/1_uik9pry4/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_z71oc1i2/v/1/flavorId/1_8hyezdpz/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_zy1iku6z/v/1/flavorId/1_t5mebuu8/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_3s0h80i8/v/1/flavorId/1_j06jmcoe/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_5cdyrfit/v/1/flavorId/1_kwbj8o97/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_6wfcs8n5/v/1/flavorId/1_s6cahpy6/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_m6ag67ii/v/1/flavorId/1_a36y6mrp/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_9sho6380/v/1/flavorId/1_0mtrjrld/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_gxquch2c/v/1/flavorId/1_e2csyb6v/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_lzblyfiv/v/1/flavorId/1_4rvilvqs/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_y5umc807/v/1/flavorId/1_4ag8rpm3/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_8ustyc32/v/1/flavorId/1_axdusan2/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_s1gct3b4/v/1/flavorId/1_rgjp5opc/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_cr98yor6/v/1/flavorId/1_jdssrm43/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_8ittlsfp/v/1/flavorId/1_8t0r60w8/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_9kb4y4zc/v/1/flavorId/1_rxdd30og/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_wu4b7p6y/v/1/flavorId/1_xmxutm5s/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_i56majmm/v/1/flavorId/1_g14l9o77/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4rklwuth/v/1/flavorId/1_tfk9kj10/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4em6z6dm/v/1/ev/3/flavorId/1_mg0pny7b/name/a.mp4/index.m3u8"
];

var w11 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_58o3mf2s/v/1/flavorId/1_0yyaubdj/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_w8mtff3n/v/1/flavorId/1_5kwge29l/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_qka9nxmm/v/1/flavorId/1_wyw3btol/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_5lcmtsyd/v/1/flavorId/1_z4yi4be0/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_hraqk2bg/v/1/flavorId/1_calr79z9/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_34zv672r/v/1/flavorId/1_2qvjfll7/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_mtb83hd4/v/1/flavorId/1_dxi1dsrk/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_1hw0j4hi/v/1/flavorId/1_s4d1hrc2/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_hsheyegh/v/1/flavorId/1_v5p5bk90/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_6x2aewdb/v/1/flavorId/1_0cwn8s5q/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_wzz0xif2/v/1/flavorId/1_u63w2p75/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_28akxjly/v/1/flavorId/1_bq9ef3jp/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_zuceo2xg/v/1/flavorId/1_4ttjj1jy/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_peefbrrq/v/1/flavorId/1_8574cqa5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ln2zqmgk/v/1/flavorId/1_bnylb70z/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_nzgmcui6/v/1/flavorId/1_whawsb7u/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_432lmrta/v/1/flavorId/1_626gblqk/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_jua7g7v9/v/1/flavorId/1_c24wbsm4/name/a.mp4/index.m3u8"
];

var w12 = [
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_yo0i7t0a/v/1/flavorId/1_mnyij9fi/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_5h2swisj/v/1/flavorId/1_owrzlbsy/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_c2r9gxin/v/1/flavorId/1_sg5a96k4/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_3ahugox6/v/1/flavorId/1_jnpidv41/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_4dg6dnqx/v/1/flavorId/1_8mgt71va/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_59ifvo7s/v/1/flavorId/1_w6m6mt5y/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_6i8ghkys/v/1/flavorId/1_jr0y5u73/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_tx9in82t/v/1/flavorId/1_a9uywk0w/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_b3ztzdm8/v/1/flavorId/1_8xejplsw/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_0kethowl/v/1/flavorId/1_tvbnhu31/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/0_ktq2hd27/v/2/ev/3/flavorId/0_s770dory/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_68281xih/v/1/flavorId/1_h35c3cig/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_su7h6u5r/v/1/flavorId/1_giwhj8pp/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_fhac1e2a/v/1/flavorId/1_d99v3ism/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_cxd7sfv9/v/1/flavorId/1_0edbqcml/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_o1frnry7/v/1/flavorId/1_xuxy4xgd/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_n6na9r82/v/1/flavorId/1_zz7g7fx5/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_hlgvbjlq/v/1/flavorId/1_tvhhrpyu/name/a.mp4/index.m3u8",
  "https://cfvod.kaltura.com/hls/p/1536481/sp/153648100/serveFlavor/entryId/1_ic7d3nkv/v/1/flavorId/1_50gx71xz/name/a.mp4/index.m3u8"
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
  "Be-bop-a-lua - Gene Vincent & His Blue Caps (June 1956)",
  "All I Have to do is Dream - Everly Brothers (April 1958)",
  "Only the Lonely - Roy Orbison (March 1960)",
  "Bo Diddley - Bo Diddley (March 1955)",
  "Tutti Frutti - Little Richard (December 1955)",
  "Tutti Frutti - Pat Boone (January 1956)",
  "Ain't That A Shame - Fats Domino (April 1955)",
  "Ain't That A Shame - Pat Boone (July 1955)",
  "Whole Lotta Shakin' Goin' On - Jerry Lee Lewis (March 1957)",
  "That'll Be The Day - Buddy Holly and the Crickets (May 1957)",
  "That'll Be The Day - The Quarry Men (1958)",
  "Not Fade Away - Buddy Holly (October 1957)",
  "Not Fade Away - The Rolling Stones (May 1964)",
  "Great Balls of Fire - Jerry Lee Lewis, vocals, piano (November 1957)",
  "Johnny B. Goode - Chuck Berry (April 1958)",
  "Johnny B. Goode - The Beatles (January 1964)",
  "Carol - Chuck Berry (May 1958)",
  "Carol - The Rolling Stones (May 1964)"
];

var w4_t = [
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
  "Big Girls Don't Cry -The Four Seasons (October 1962)",
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
  "Fun, Fun. Fun - The Beach Boys (February 1964)"
];

var w5_t = [
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
  "The Long and Winding Road - Beatles (May 1970)",
  "I Got A Woman - Ray Charles (November 1954)",
  "There goes my Baby - The Drifters (1959)",
  "Wonderful World - Sam Cooke (April 1960)",
  "Papa’s Got A Brand New Bag",
  "In the Midnight Hour - Wilson Pickett (May 1965)",
  "Respect - Otis Redding (August 1965)",
  "Respect - Aretha Franklin (February 1967)",
  "People Get Ready - The Impressions (1965)",
  "Say It Loud- I'm Black and I'm Proud - James Brown (August 1968)"
];

var w6_t = [
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
  "Please Please Me - The Beatles (March, 1963)",
  "From Me to You - The Beatles (April, 1963)",
  "She loves you - The Beatles (August, 1963)",
  "I Want To Hold Your Hand - The Beatles (November, 1963)",
  "Twist and Shout - The Isley Brothers (June, 1962)",
  "Twist and Shout - The Beatles (March 1963)	",
  "You've Got To Hide Your Love Away - The Beatles (August, 1965)",
  "Yesterday - The Beatles (August, 1965)",
  "Good Night Irene - Leadbelly (1943)",
  "Good Night Irene - The Weavers (June 1950)",
  "This land is your land - Woody Guthrie (1945)",
  "Wasn’t That a Time? - Pete Seeger (1957)",
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
  "All Along the Watchtower - Bob Dylan (December 1967)",
  "All Along the Watchtower - Jimi Hendrix (February 1968)",
  "Hoochie Coochie (I’m Your Hoochie Coochie Man) - Muddy Waters (January 1954)",
  "I Just Want To Make Love To You - Muddy Waters (April 1954)",
  "I Just Want To Make Love To You - The Rolling Stones (May 1964)",
  "It's All Over Now - The Valentinos (rec. March, released June, 1964)",
  "It's all Over Now - Rolling Stones (July 1964)",
  "House of the Rising Sun - Eric Burton and the Animals (June 1964)",
  "I'm A Man - Bo Diddley (March 1955)",
  "I'm A Man - The Yardbirds (October, 1965)",
  "(I Can't Get No) Satisfaction - Rolling Stones (May 1965)",
  "Sympathy for the Devil - The Rolling Stones (November 1968)",
  "Sunshine of Your Love - Cream (November 1967)"
];

var w9_t = [
  "Louie, Louie - The Kingsman (May 1963)",
  "California Dreaming - Mamas and the Papas (January 1966)",
  "Somebody To Love - Jefferson Airplane (February 1967)",
  "San Francisco (be sure to wear flowers in your hair) - Scott, McKenzie (May 1967)",
  "White Rabbit - Jefferson Airplane (June 1967)",
  "Won't You Try/ Saturday Afternoon - Jefferson Airplane (December 1967)",
  "Babe I'm gonna leave you - Quicksilver Messenger Service (1967)",
  "Piece of My Heart - Janis Joplin, Big Brother and the Holding Company 9(August 1968)",
  "Who Do You Love - Bo Diddley (March 1956)",
  "Who Do You Love / When You Love / Where You Love - Quicksilver Messenger Service (March 1969)",
  'Turn on Your Love Light - Bobby "Blue" Bland (1961)',
  "Turn on Your Love Light - The Grateful Dead (November 1969)",
  "When the Music's Over - Doors (live recording 1968-70)"
];

var w10_t = [
  "Eight Miles High - The Byrds (March 1966)",
  "Tomorrow Never Knows - The Beatles (August 1966)",
  "Good Vibrations - The Beach Boys (October 1966)",
  "Strawberry Fields Forever (demo sequence) - The Beatles (November, 1966)",
  "Strawberry Fields Forever - The Beatles (February 1967)",
  "Flaming - Pink Floyd (August 1967)",
  "Bass Strings - Country Joe And The Fish (October 1967)",
  "Incense and Peppermints - Strawberry Alarm Clock (April-November 1967)",
  "The Red Telephone - Love (November 1967)",
  "Hung Up On A Dream - The Zombies (April 1968)",
  "In My Life - The Beatles (December 1965)",
  "Don't Talk (Put Your Head on my Shoulders) - The Beach Boys (May 1966)",
  "I Just Wasn't Made For These Times - The Beach Boys (May 1966)",
  "I Just Wasn't Made For These Times (backing track) - The Beach Boys (1966)",
  "Eleanor Rigby - The Beatles (August 1966)",
  "Eleanor Rigby (backing track) - The Beatles (August 1966)",
  "Wonderful - The Beach Boys (December 1966)",
  "Surf's Up - The Beach Boys (August 1971)",
  "Lucy In the Sky With Diamonds - The Beatles (June 1967)",
  "Sgt. Pepper's Lonely Hearts Club Band (reprise) / A Day in a Life - The Beatles (June 1967)"
];

var w11_t = [
  "Help I'm a Rock / It Can't Happen Here - Frank Zappa and The Mothers of Invention (1966)",
  "A White Shade of Pale - Procul Harum (May 1967)",
  "Grocer Jack (excerpt from A Teenage Opera) - Mark Wirtz (July 1967)",
  "Nights in White Satin - The Moody Blues (March 1968)",
  "Overture - The Who (May 1969)",
  "Gemini Suite - Deep Purple (live recording, September 1970)",
  "Roundabout - Yes (January 1972)",
  "Spinning Wheel - Blood, Sweat and Tears (January 1969)",
  "Introduction - Chicago Transit Authority (September 1969)",
  "Pharao's Dance (1) - Miles Davis (1970)",
  "Hey Joe - The Leaves (April 1966)",
  "Hey Joe - The Byrds (July 1966)",
  "Hey Joe - Jimi Hendrix Experience (May 1967)",
  "Flower Punk - Frank Zappa and The Mothers of Invention (January 1968)",
  "Hey Joe - Wilson Pickett (Spring 1969)",
  "Purple Haze - Jimi Hendrix Experience (May 1967)",
  "Foxey Lady - Jimi Hendrix Experience (May 1967)",
  "Whole Lotta Love - Led Zeppelin (October 1969)"
];

var w12_t = [
  "Tougher Than Tough - Derrick Morgan (1967)",
  "More Scorcher - Count Machuki and the Sound Dimension (1972)",
  "Papa Was a Rollin' Stone - The Temptations (1972)",
  "Livin' for the City - Stevie Wonder (1973)",
  "Love to Love You Baby - Donna Summer (1975)",
  "One Love - Bob Marley and the Wailers (1977)",
  "Stayin' Alive - The Bee Gees (1977)",
  "What Cha' Gonna Do With My Lovin' - Stephanie Mills (1979)",
  "Good Times - Chic (1979)",
  "God Save the Queen - The Sex Pistols (1977)",
  "Amen, Brother - The Wintsons (1969)",
  "Funky Drummer - James Brown (March 1970)",
  "Apache - The Incredible Bongo Band (1973)",
  "Give up the Funk (Tear the Roof off the Sucker) - Parliament (1976)",
  "Rapper's Delight - Sugarhill Gang (September 1979)",
  "Apache (Jump On It) - Sugarhill Gang (1981)",
  "Rock Box - Run DMC (1984)",
  "Don't Believe the Hype - Public Enemy (1988)",
  "Straight outta Compton - N.W.A (1998)"
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
        title: w7_t[20],
        link: w7[20],
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
      },

      {
        title: w9_t[0],
        link: w9[0],
        week: 8
      },
      {
        title: w9_t[1],
        link: w9[1],
        week: 8
      },
      {
        title: w9_t[2],
        link: w9[2],
        week: 8
      },
      {
        title: w9_t[3],
        link: w9[3],
        week: 8
      },
      {
        title: w9_t[4],
        link: w9[4],
        week: 8
      },
      {
        title: w9_t[5],
        link: w9[5],
        week: 8
      },
      {
        title: w9_t[6],
        link: w9[6],
        week: 8
      },
      {
        title: w9_t[7],
        link: w9[7],
        week: 8
      },
      {
        title: w9_t[8],
        link: w9[8],
        week: 8
      },
      {
        title: w9_t[9],
        link: w9[9],
        week: 8
      },

      {
        title: w9_t[10],
        link: w9[10],
        week: 8
      },
      {
        title: w9_t[11],
        link: w9[11],
        week: 8
      },
      {
        title: w9_t[12],
        link: w9[12],
        week: 8
      },

      {
        title: w10_t[0],
        link: w10[0],
        week: 9
      },
      {
        title: w10_t[1],
        link: w10[1],
        week: 9
      },
      {
        title: w10_t[2],
        link: w10[2],
        week: 9
      },
      {
        title: w10_t[3],
        link: w10[3],
        week: 9
      },
      {
        title: w10_t[4],
        link: w10[4],
        week: 9
      },
      {
        title: w10_t[5],
        link: w10[5],
        week: 9
      },
      {
        title: w10_t[6],
        link: w10[6],
        week: 9
      },
      {
        title: w10_t[7],
        link: w10[7],
        week: 9
      },
      {
        title: w10_t[8],
        link: w10[8],
        week: 9
      },
      {
        title: w10_t[9],
        link: w10[9],
        week: 9
      },

      {
        title: w10_t[10],
        link: w10[10],
        week: 9
      },
      {
        title: w10_t[11],
        link: w10[11],
        week: 9
      },
      {
        title: w10_t[12],
        link: w10[12],
        week: 9
      },
      {
        title: w10_t[13],
        link: w10[13],
        week: 9
      },
      {
        title: w10_t[14],
        link: w10[14],
        week: 9
      },
      {
        title: w10_t[15],
        link: w10[15],
        week: 9
      },
      {
        title: w10_t[16],
        link: w10[16],
        week: 9
      },
      {
        title: w10_t[17],
        link: w10[17],
        week: 9
      },
      {
        title: w10_t[18],
        link: w10[18],
        week: 9
      },
      {
        title: w10_t[19],
        link: w10[19],
        week: 9
      },

      {
        title: w11_t[0],
        link: w11[0],
        week: 10
      },
      {
        title: w11_t[1],
        link: w11[1],
        week: 10
      },
      {
        title: w11_t[2],
        link: w11[2],
        week: 10
      },
      {
        title: w11_t[3],
        link: w11[3],
        week: 10
      },
      {
        title: w11_t[4],
        link: w11[4],
        week: 10
      },
      {
        title: w11_t[5],
        link: w11[5],
        week: 10
      },
      {
        title: w11_t[6],
        link: w11[6],
        week: 10
      },
      {
        title: w11_t[7],
        link: w11[7],
        week: 10
      },
      {
        title: w11_t[8],
        link: w11[8],
        week: 10
      },
      {
        title: w11_t[9],
        link: w11[9],
        week: 10
      },

      {
        title: w11_t[10],
        link: w11[10],
        week: 10
      },
      {
        title: w11_t[11],
        link: w11[11],
        week: 10
      },
      {
        title: w11_t[12],
        link: w11[12],
        week: 10
      },
      {
        title: w11_t[13],
        link: w11[13],
        week: 10
      },
      {
        title: w11_t[14],
        link: w11[14],
        week: 10
      },
      {
        title: w11_t[15],
        link: w11[15],
        week: 10
      },
      {
        title: w11_t[16],
        link: w11[16],
        week: 10
      },
      {
        title: w11_t[17],
        link: w11[17],
        week: 10
      },

      {
        title: w12_t[0],
        link: w12[0],
        week: 11
      },
      {
        title: w12_t[1],
        link: w12[1],
        week: 11
      },
      {
        title: w12_t[2],
        link: w12[2],
        week: 11
      },
      {
        title: w12_t[3],
        link: w12[3],
        week: 11
      },
      {
        title: w12_t[4],
        link: w12[4],
        week: 11
      },
      {
        title: w12_t[5],
        link: w12[5],
        week: 11
      },
      {
        title: w12_t[6],
        link: w12[6],
        week: 11
      },
      {
        title: w12_t[7],
        link: w12[7],
        week: 11
      },
      {
        title: w12_t[8],
        link: w12[8],
        week: 11
      },
      {
        title: w12_t[9],
        link: w12[9],
        week: 11
      },

      {
        title: w12_t[10],
        link: w12[10],
        week: 11
      },
      {
        title: w12_t[11],
        link: w12[11],
        week: 11
      },
      {
        title: w12_t[12],
        link: w12[12],
        week: 11
      },
      {
        title: w12_t[13],
        link: w12[13],
        week: 11
      },
      {
        title: w12_t[14],
        link: w12[14],
        week: 11
      },
      {
        title: w12_t[15],
        link: w12[15],
        week: 11
      },
      {
        title: w12_t[16],
        link: w12[16],
        week: 11
      },
      {
        title: w12_t[17],
        link: w12[17],
        week: 11
      },
      {
        title: w12_t[18],
        link: w12[18],
        week: 11
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
        {/* <div className="buttons">
          <button onClick={this.toggleWeekHandler.bind(this, 0)}>Week 1</button>
          <button onClick={this.toggleWeekHandler.bind(this, 1)}>Week 2</button>
          <button onClick={this.toggleWeekHandler.bind(this, 2)}>Week 3</button>
          <button onClick={this.toggleWeekHandler.bind(this, 3)}>Week 4</button>
          <button onClick={this.toggleWeekHandler.bind(this, 4)}>Week 5</button>
          <button onClick={this.toggleWeekHandler.bind(this, 5)}>Week 6</button>
          <button onClick={this.toggleWeekHandler.bind(this, 6)}>Week 7</button>
          <button onClick={this.toggleWeekHandler.bind(this, 7)}>Week 8</button>
          <button onClick={this.toggleWeekHandler.bind(this, 8)}>Week 9</button>
          <button onClick={this.toggleWeekHandler.bind(this, 9)}>
            Week 10
          </button>
          <button onClick={this.toggleWeekHandler.bind(this, 10)}>
            Week 11
          </button>
          <button onClick={this.toggleWeekHandler.bind(this, 11)}>
            Week 12
          </button>
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
        <div className="content">{this.createElements()}</div> */}
        <div className="disclaimer">
          For faster loading, we've moved over to{" "}
          <a
            href="https://beachboysrsogreat.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            beachboysrsogreat.netlify.com
          </a>
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
