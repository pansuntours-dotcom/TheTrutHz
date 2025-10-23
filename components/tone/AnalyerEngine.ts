// components/tone/AnalyzerEngine.ts
import * as Tone from 'tone';

export class AnalyzerEngine {
  private analyzer: Tone.Analyser | null = null;

  constructor() {
    try {
      this.analyzer = new Tone.Analyser('fft', 64);
      // Attach to master - any Tone.Player / MediaElement routed to destination will be seen
      Tone.getDestination().connect(this.analyzer);
    } catch (err) {
      console.warn('Tone Analyzer init failed', err);
      this.analyzer = null;
    }
  }

  getFftArray(): Float32Array {
    if (!this.analyzer) return new Float32Array(64).fill(0);
    const val = this.analyzer.getValue() as number[] | Float32Array;
    return Float32Array.from(val as any);
  }

  dispose() {
    this.analyzer?.dispose();
    this.analyzer = null;
  }
}
