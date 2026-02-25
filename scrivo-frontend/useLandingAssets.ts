import { useEffect, useState } from "react";

export function useLandingAssets() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const texture = new Image();
    texture.src = "/Texturelabs_Paper_373XL.webp";

    const video = document.createElement("video");
    video.src = "/ink-splatter.mp4";
    video.muted = true;

    Promise.all([
      document.fonts.ready,
      new Promise((res) => (texture.onload = res)),
      new Promise((res) => (video.onloadeddata = res)),
    ]).then(() => {
      requestAnimationFrame(() => setReady(true));
    });
  }, []);

  return ready;
}
