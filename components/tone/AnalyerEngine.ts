// components/tone/AnalyzerEngine.ts
import * as Tone from 'tone';

export class AnalyzerEngine {
  analyzer: Tone.Analyser;

  constructor() {
    this.analyzer = new Tone.Analyser('waveform', 1024);
  }

  getWaveform() {
    return this.analyzer.getValue();
  }

  connect(node: Tone.ToneAudioNode) {
    node.connect(this.analyzer);
  }

  disconnect() {
    this.analyzer.dispose();
  }
}
