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
        link: w1[0],
        week: 0
      },
      {
        title: "All or Nothing at All - Frank Sinatra (1940; 1943)",
        link: w1[1],
        week: 0
      },
      {
        title:
          "I'm Sitting on Top of the World - Les Paul, guitar; Mary Ford, vocals. (March 1953)",
        link: w1[2],
        week: 0
      },
      {
        title:
          "How Much is That Doggie in the Window - Patti Page, vocals (March 1953)",
        link: w1[3],
        week: 0
      },
      {
        title: "Secret Love - Doris Day (March 1954)",
        link: w1[4],
        week: 0
      },
      {
        title: "April Love - Pat Boone (October 1957)",
        link: w1[5],
        week: 0
      },
      {
        title: "Future Blues - Willie Brown, vocals, guitar (1930)",
        link: w1[6],
        week: 0
      },
      {
        title: "Cross Road Blues - Robert Johnson (November 1936)",
        link: w1[7],
        week: 0
      },
      {
        title: "In the Mood - Glenn Miller and his Orchestra (1939)",
        link: w1[8],
        week: 0
      },
      {
        title: "BeBop - Dizzy Gillespie Quintet ; Charlie Parker, alto sax",
        link: w1[9],
        week: 0
      },
      {
        title: "Caldonia - Louis Jordan and His Tympany Five (January 1945)",
        link: w1[10],
        week: 0
      },
      {
        title:
          "Choo Choo Ch'Boogie - Louis Jordan and His Tympany Five (January 1945)",
        link: w1[11],
        week: 0
      },
      {
        title: "Good Rockin' Tonight - Wynonie Harris (December 1947)",
        link: w1[12],
        week: 0
      },
      {
        title: "The Fat Man - Fats Domino, vocals, piano (1949)",
        link: w1[13],
        week: 0
      },

      {
        title: "Can the Circle Be Unbroken - Carter Family (August 1935)",
        link: w2[0],
        week: 1
      },
      {
        title: "Blueberry Hill - Gene Autry (August 1940)",
        link: w2[1],
        week: 1
      },
      {
        title: "Blueberry Hill - Fats Domino (September 1956)",
        link: w2[2],
        week: 1
      },
      {
        title: "Faded Love - Bob Wills & His Texas Playboys (April 1946)",
        link: w2[3],
        week: 1
      },
      {
        title:
          "Tennessee Waltz - Pee Wee King & His Golden West Cowboys (February 1948)",
        link: w2[4],
        week: 1
      },
      {
        title: "Tennessee Waltz - Patti Page (November 1950)",
        link: w2[5],
        week: 1
      },
      {
        title: "Hey Good Lookin' - Hank Williams (June 1951)",
        link: w2[6],
        week: 1
      },
      {
        title: "Cold, Cold Heart - Hank Williams (1951)",
        link: w2[7],
        week: 1
      },
      {
        title: "Your Cheatin' Heart - Hank Williams (September 1952)",
        link: w2[8],
        week: 1
      },
      {
        title: "Rocket '88 - Jackie Brenston With His Delta Cats (April 1951)",
        link: w2[9],
        week: 1
      },
      {
        title:
          "Rocket '88 and interview - Bill Haley and The Saddlemen (July 1951)",
        link: w2[10],
        week: 1
      },
      {
        title: "We're Gonna Rock This Joint Jimmy Preston (1949)",
        link: w2[11],
        week: 1
      },
      {
        title: "Rock the Joint - Bill Haley and The Saddlemen (April 1952)",
        link: w2[12],
        week: 1
      },
      {
        title:
          "Shake, Rattle, and Roll - Joe Turner & His Blues Kings (April 1954)",
        link: w2[13],
        week: 1
      },
      {
        title:
          "Shake, Rattle and Roll - Bill Haley and His Comets (June, 1954)",
        link: w2[14],
        week: 1
      },
      {
        title:
          "Rock Around the Clock (excerpt) - Sunny Dae and his Knights (1953)",
        link: w2[15],
        week: 1
      },
      {
        title: "Rock Around the Clock - Bill Haley and His Comets (May 1954)",
        link: w2[16],
        week: 1
      },
      {
        title: "Dim, Dim the Lights - Bill Haley and His Comets (1955)",
        link: w2[17],
        week: 1
      },
      {
        title: "Later Alligator - Bobby Charles (November 1955)",
        link: w2[18],
        week: 1
      },
      {
        title: "See You Later, Alligator - Bill Haley and His Comets (1954)",
        link: w2[19],
        week: 1
      },

      {
        title: "All I Have to do is Dream - Everly Brothers (April 1958)",
        link: w3[0],
        week: 2
      },
      {
        title: 'That\'s All Right - Arthur "Big Boy" Crudup (September 1946)',
        link: w3[1],
        week: 2
      },
      {
        title: "That's All Right - Elvis Presley (June 1954)",
        link: w3[2],
        week: 2
      },
      {
        title:
          "Blue Moon of Kentucky - Bill Monroe & His Blue Grass Boys (September 1947)",
        link: w3[3],
        week: 2
      },
      {
        title: 'Hound Dog - Willie Mae "Big Mama" Thornton (March 1953)',
        link: w3[4],
        week: 2
      },
      {
        title:
          'Bear Cat (The Answer to Hound Dog) - Rufus "Hound Dog" Thomas Jr. (March 1953)',
        link: w3[5],
        week: 2
      },
      {
        title: "Hound Dog - Elvis Presley (July 1956)",
        link: w3[6],
        week: 2
      },
      {
        title: "Blue Suede Shoes - Carl Perkins (December 1955)",
        link: w3[7],
        week: 2
      },
      {
        title: "Blue Suede Shoes - Elvis Presley (August 1956)",
        link: w3[8],
        week: 2
      },
      {
        title: "Blue Moon of Kentucky - Elvis Presley (July 1954)",
        link: w3[9],
        week: 2
      },
      {
        title: "Honey, Don't! - Carl Perkins (December 1955)",
        link: w3[10],
        week: 2
      },
      {
        title: "Heartbreak Hotel - Elvis Presley (January 1956)",
        link: w3[11],
        week: 2
      },
      {
        title: "Be-bop-a-lua - Gene Vincent & His Blue Caps (June 1956)",
        link: w3[12],
        week: 2
      },
      {
        title: "Only the Lonely - Roy Orbison (March 1960)",
        link: w3[13],
        week: 2
      },
      {
        title: "Bo Diddley - Bo Diddley (March 1955)",
        link: w3[14],
        week: 2
      },
      {
        title: "Tutti Frutti - Little Richard (December 1955)",
        link: w3[15],
        week: 2
      },
      {
        title: "Tutti Frutti - Pat Boone (January 1956)",
        link: w3[16],
        week: 2
      },
      {
        title: "Ain't That A Shame - Fats Domino (April 1955)",
        link: w3[17],
        week: 2
      },
      {
        title: "Ain't That A Shame - Pat Boone (July 1955)",
        link: w3[18],
        week: 2
      },
      {
        title: "Whole Lotta Shakin' Goin' On - Jerry Lee Lewis (March 1957)",
        link: w3[19],
        week: 2
      },
      {
        title: "Not Fade Away - Buddy Holly (October 1957)",
        link: w3[20],
        week: 2
      },
      {
        title: "Not Fade Away - The Rolling Stones (May 1964)",
        link: w3[21],
        week: 2
      },
      {
        title: "That'll Be The Day - Buddy Holly and the Crickets (May 1957)",
        link: w3[22],
        week: 2
      },
      {
        title: "That'll Be The Day - The Quarry Men (1958)",
        link: w3[23],
        week: 2
      },
      {
        title:
          "Great Balls of Fire - Jerry Lee Lewis, vocals, piano (November 1957)",
        link: w3[24],
        week: 2
      },
      {
        title: "Johnny B. Goode - Chuck Berry (April 1958)",
        link: w3[25],
        week: 2
      },
      {
        title: "Johnny B. Goode - The Beatles (January 1964)",
        link: w3[26],
        week: 2
      },
      {
        title: "Carol - Chuck Berry (May 1958)",
        link: w3[27],
        week: 2
      },
      {
        title: "Carol - The Rolling Stones (May 1964)",
        link: w3[28],
        week: 2
      },
      {
        title: "It's Too Soon To Know - The Orioles (July 1948)",
        link: w4[0],
        week: 3
      },
      {
        title: "Gee - The Crows (June 1953)",
        link: w4[1],
        week: 3
      },
      {
        title: "Sh-Boom - The Chords (April 1954)",
        link: w4[2],
        week: 3
      },
      {
        title: "Sh-Boom - The Crew-Cuts (July 1954)",
        link: w4[3],
        week: 3
      },
      {
        title: "Earth Angel (Will You Be Mine) - The Penguins (September 1954)",
        link: w4[4],
        week: 3
      },
      {
        title: "Mr. Sandman - The Four Acres (December 1954)",
        link: w4[5],
        week: 3
      },
      {
        title: "Mr. Sandman - The Chordettes (December 1954)",
        link: w4[6],
        week: 3
      },
      {
        title: "The Great Pretender - The Platters (November 1955)",
        link: w4[7],
        week: 3
      },
      {
        title: "Little Star - The Elegants (June 1958)",
        link: w4[8],
        week: 3
      },
      {
        title: "Hushabye - The Mystics (April 1959)",
        link: w4[9],
        week: 3
      },
      {
        title: "Hushabye - The Beach Boys (July 1964)",
        link: w4[10],
        week: 3
      },
      {
        title: "Big Girls Don't Cry -The Four Seasons (October 1962)",
        link: w4[11],
        week: 3
      },
      {
        title: "Diana - Paul Anka (August 1954)",
        link: w4[12],
        week: 3
      },
      {
        title: "Dream Lover - Bobby Darin (March 1959)",
        link: w4[13],
        week: 3
      },
      {
        title: "The Twist - Chubby Checker (June 1960)",
        link: w4[14],
        week: 3
      },
      {
        title: "Miserlou - Dick Dale and The Del-Tones (September 1962)",
        link: w4[15],
        week: 3
      },
      {
        title: "Miserlou - The Beach Boys (March 1963)",
        link: w4[16],
        week: 3
      },
      {
        title: "Surfer Girl (vocal track) The Beach Boys (June 12, 1963)",
        link: w4[17],
        week: 3
      },
      {
        title: "Surfer Girl (backing track) - (August 1968)",
        link: w4[18],
        week: 3
      },
      {
        title: "Surfer Girl (released version) - The Beach Boys (June 1963)",
        link: w4[19],
        week: 3
      },
      {
        title:
          "Sweet Little Sixteen - Chuck Berry, guitar, vocals (February 1958)",
        link: w4[20],
        week: 3
      },
      {
        title: "Surfin' USA - The Beach Boys (March 1963)",
        link: w4[21],
        week: 3
      },
      {
        title: "Graduation Day - The Four Freshmen (April 1956)",
        link: w4[22],
        week: 3
      },
      {
        title: "Graduation Day - The Beach Boys (Live 1964)",
        link: w4[23],
        week: 3
      },
      {
        title: "Fun, Fun. Fun - The Beach Boys (February 1964)",
        link: w4[24],
        week: 3
      },

      {
        title: "Down in Mexico - The Coasters (1956)",
        link: w5[0],
        week: 4
      },
      {
        title: "Da Doo Ron Ron - The Crystals (March 1963)",
        link: w5[1],
        week: 4
      },
      {
        title: "Be My Baby - The Ronnettes (July 1963)",
        link: w5[2],
        week: 4
      },
      {
        title: "Then He Kissed Me - The Crystals (July 1963)",
        link: w5[3],
        week: 4
      },
      {
        title: "Then I Kissed Her - The Beach Boys (June 1965)",
        link: w5[4],
        week: 4
      },
      {
        title:
          "You've Lost That Lovin' Feeling - The Righteous Brothers (August-November 1964)",
        link: w5[5],
        week: 4
      },
      {
        title: "California Girls - Beach Boys (July 1965)",
        link: w5[6],
        week: 4
      },
      {
        title: "River Deep- Mountain High - Ike and Tina Turner (March 1966)",
        link: w5[7],
        week: 4
      },
      {
        title: "God Only Knows (backing track) - The Beach Boys (1966)",
        link: w5[8],
        week: 4
      },
      {
        title: "God Only Knows (vocal track) The Beach Boys (1966)",
        link: w5[9],
        week: 4
      },
      {
        title: "God Only Knows - The Beach Boys (July 1966)",
        link: w5[10],
        week: 4
      },
      {
        title:
          "The Long and Winding Road (original track) - Beatles (recorded January 31, 1969)",
        link: w5[11],
        week: 4
      },
      {
        title: "The Long and Winding Road - Beatles (May 1970)",
        link: w5[12],
        week: 4
      },
      {
        title: "I got a woman - Ray Charles (November 1954)",
        link: w5[13],
        week: 4
      },
      {
        title: "There goes my Baby - The Drifters (1959)",
        link: w5[14],
        week: 4
      },
      {
        title: "Wonderful World - Sam Cooke (April 1960)",
        link: w5[15],
        week: 4
      },
      {
        title: "Papa’s Got A Brand New Bag",
        link: w5[16],
        week: 4
      },
      {
        title: "In the Midnight Hour - Wilson Pickett (May 1965)",
        link: w5[17],
        week: 4
      },
      {
        title: "Respect - Otis Redding (August 1965)",
        link: w5[18],
        week: 4
      },
      {
        title: "Respect - Aretha Franklin (February 1967)",
        link: w5[19],
        week: 4
      },
      {
        title: "People get ready - The Impressions (1965)",
        link: w5[20],
        week: 4
      },
      {
        title:
          "Say It Loud- I'm Black and I'm Proud - James Brown (August 1968)",
        link: w5[21],
        week: 4
      },

      {
        title: "Please Mr. Postman - The Marvelettes (August 1961)",
        link: w6[0],
        week: 5
      },
      {
        title: "Please Mr. Postman - Beatles (November 1963)",
        link: w6[1],
        week: 5
      },
      {
        title:
          "The Way You do the Things You do - The Temptations (January 1964)",
        link: w6[2],
        week: 5
      },
      {
        title:
          "Dancing in the Street - Martha Reeves and the Vandellas (August 1964)",
        link: w6[3],
        week: 5
      },
      {
        title: "Baby Love - The Supremes (September 1964)",
        link: w6[4],
        week: 5
      },
      {
        title: "Ain't to Proud to Beg - The Temptations (May 1966)",
        link: w6[5],
        week: 5
      },
      {
        title:
          "What Becomes of the Brokenhearted - Jimmy Ruffin (September 1966)",
        link: w6[6],
        week: 5
      },
      {
        title: "Reach Out, I'll Be There - The Four Tops (October 1966)",
        link: w6[7],
        week: 5
      },
      {
        title: "I Heard It Through The Grapevine - Marvin Gaye (November 1968)",
        link: w6[8],
        week: 5
      },
      {
        title:
          "Tears of A Clown - Smokey Robinson and The Bandits (October 1970)",
        link: w6[9],
        week: 5
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
