// components/tone/htmlAudioAnalyser.ts
export function createHtmlAnalyser(mediaElement: HTMLMediaElement, fftSize = 128) {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const src = ctx.createMediaElementSource(mediaElement);
  const analyser = ctx.createAnalyser();
  analyser.fftSize = fftSize;
  src.connect(analyser);
  analyser.connect(ctx.destination);
  return {
    analyser,
    getFrequencyData() {
      const arr = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(arr);
      return arr;
    },
    dispose() {
      try { ctx.close(); } catch {}
    }
  };
}
