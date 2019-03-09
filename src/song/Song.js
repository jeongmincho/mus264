// import React from "react";

// const song = props => {
//     return (
//         <div className="Song">
//             <script src="https://cdn.jsdelivr.net/npm/hls.js@latest" />
//             <video id="video" controls></video>
//             <script>{Hls.isSupported() ? {
//                     var video = document.getElementById("video");
//                     var hls = new Hls();
//                     hls.loadSource({props.title});
//                     hls.attachMedia(video);
//                     hls.on(Hls.Events.MANIFEST_PARSED, function() {
//                     video.play();
//                     });
//                 } : video.canPlayType("application/vnd.apple.mpegurl") ? {
//                     video.src = props.title;
//                     video.addEventListener("canplay", function() {
//                     video.play();
//                     });
//                 } : null}
//             </script>
//         </div>
//     );
// };

// export default song;
