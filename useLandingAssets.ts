import { useEffect, useState } from "react";

export function useLandingAssets() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const texture = new Image();
    texture.src = "/Texturelabs_Paper_373XL.jpg";

    const video = document.createElement("video");
    video.src = "/ink-splatter.mp4";
    video.muted = true;

    Promise.all([
      document.fonts.ready,
      new Promise((res) => (texture.onload = res)),
      new Promise((res) => (video.onloadeddata = res)),
    ]).then(() => {
      // one extra frame so layout is stable
      requestAnimationFrame(() => setReady(true));
    });
  }, []);

  return ready;
}
