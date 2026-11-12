/**
 * lib/haptics.ts
 *
 * [BLOG-11] 3대 촉각적 마이크로 햅틱 ASMR 엔진
 *
 * 외부 사운드 파일(mp3/wav) 및 무거운 라이브러리 없이,
 * 브라우저 내장 Web Audio API를 활용하여 100% 무손실 실시간 물리 음향을 합성합니다.
 *
 * 3대 사운드스케이프:
 * 1. paperRustle: 식물 표본지(한지) 사각거림 (고역 통과 노이즈 버스트)
 * 2. rootClick: 지식의 뿌리망(Rhizome) 마디 맞물림 (우드블록 스타일 트랜지언트)
 * 3. dewTap: 잎사귀 이슬 물방울 터짐 (맑은 사인파 하모닉스 팝)
 */

type HapticSound = 'paperRustle' | 'rootClick' | 'dewTap';

class HapticsEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  /**
   * 1. Paper Rustle: 식물 표본지(한지) 사각거림
   * 미세한 한지 섬유의 마찰음을 묘사하는 밴드패스 노이즈
   */
  public playPaperRustle() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const bufferSize = ctx.sampleRate * 0.045; // 45ms 초경량 버퍼
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);

      // 핑크/화이트 노이즈 생성
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      // 한지 질감을 위한 밴드패스 필터 (2500Hz ~ 4500Hz 대역)
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3200, ctx.currentTime);
      filter.Q.setValueAtTime(1.8, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.045);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
    } catch {
      // AudioContext 정책 방어
    }
  }

  /**
   * 2. Root Click: 뿌리 마디 맞물림
   * 지식 그래프 노드 연결 시 발생하는 유기적 우드블록 틱 사운드
   */
  public playRootClick() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      // 850Hz에서 180Hz로 급격히 떨어지는 우드블록 피치 드롭 (20ms)
      osc.frequency.setValueAtTime(850, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch {
      // AudioContext 정책 방어
    }
  }

  /**
   * 3. Dew Tap: 잎사귀 이슬 물방울 터짐
   * 링크 클릭 및 선택 시 맑게 퍼지는 사인파 팝
   */
  public playDewTap() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.045);

      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // AudioContext 정책 방어
    }
  }

  public trigger(type: HapticSound) {
    switch (type) {
      case 'paperRustle':
        this.playPaperRustle();
        break;
      case 'rootClick':
        this.playRootClick();
        break;
      case 'dewTap':
        this.playDewTap();
        break;
    }
  }
}

export const haptics = new HapticsEngine();
