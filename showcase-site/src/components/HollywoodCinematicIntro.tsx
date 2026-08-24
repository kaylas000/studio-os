// showcase-site/src/components/HollywoodCinematicIntro.tsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { Volume2, VolumeX, FastForward, Sparkles } from 'lucide-react';
import { soundEngine } from '../audio/WebAudioEngine';

interface HollywoodIntroProps {
  onIntroComplete: () => void;
  forcePlay?: boolean;
}

export const HollywoodCinematicIntro: React.FC<HollywoodIntroProps> = ({
  onIntroComplete,
  forcePlay = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const curtainTopRef = useRef<HTMLDivElement>(null);
  const curtainBottomRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  const [isMuted, setIsMuted] = useState(soundEngine.getIsMuted());
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the intro in this session unless forcePlay
    if (!forcePlay && typeof window !== 'undefined' && sessionStorage.getItem('studio_intro_seen') === 'true') {
      setIsVisible(false);
      onIntroComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Studio Insignia Assembly (Guide 5)
    const particleCount = 6500;
    const geometry = new THREE.BufferGeometry();
    const startPositions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color('#d4af37');

    for (let i = 0; i < particleCount; i++) {
      // Start pos: exploded in outer sphere
      const r = 25 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      startPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      startPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      startPositions[i * 3 + 2] = r * Math.cos(phi);

      currentPositions[i * 3] = startPositions[i * 3];
      currentPositions[i * 3 + 1] = startPositions[i * 3 + 1];
      currentPositions[i * 3 + 2] = startPositions[i * 3 + 2];

      // Target pos: Concentric geometric rings + Monolith
      const angle = (i / particleCount) * Math.PI * 10;
      const ringRadius = 3 + (i % 7) * 1.4;
      targetPositions[i * 3] = Math.cos(angle) * ringRadius + (Math.random() - 0.5) * 0.4;
      targetPositions[i * 3 + 1] = Math.sin(angle) * ringRadius + (Math.random() - 0.5) * 0.4;
      targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 2;

      colors[i * 3] = goldColor.r + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 1] = goldColor.g + (Math.random() - 0.5) * 0.2;
      colors[i * 3 + 2] = goldColor.b + (Math.random() - 0.5) * 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Master Timeline for Hollywood Animation Sequence (Guide 5)
    const tl = gsap.timeline({
      onComplete: () => {
        handleFinish();
      }
    });

    // 1. Play deep cinematic sub-bass impact (Guide 1 & 5)
    soundEngine.playCinematicImpact();

    const progressObj = { val: 0 };
    tl.to(progressObj, {
      val: 1,
      duration: 2.8,
      ease: 'power3.inOut',
      onUpdate: () => {
        setProgress(Math.round(progressObj.val * 100));
        const pos = geometry.attributes.position as THREE.BufferAttribute;
        const p = progressObj.val;

        for (let i = 0; i < particleCount; i++) {
          const sx = startPositions[i * 3];
          const sy = startPositions[i * 3 + 1];
          const sz = startPositions[i * 3 + 2];

          const tx = targetPositions[i * 3];
          const ty = targetPositions[i * 3 + 1];
          const tz = targetPositions[i * 3 + 2];

          pos.setXYZ(
            i,
            sx + (tx - sx) * p + Math.sin(p * Math.PI + i) * (1 - p) * 2,
            sy + (ty - sy) * p + Math.cos(p * Math.PI + i) * (1 - p) * 2,
            sz + (tz - sz) * p
          );
        }
        pos.needsUpdate = true;
      }
    }, 0);

    // Typography Reveal
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.85, letterSpacing: '0.4em' },
        { opacity: 1, scale: 1, letterSpacing: '0.18em', duration: 1.6, ease: 'power2.out' },
        0.8
      );
    }

    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
        1.4
      );
    }

    // Animation render loop
    let animId = 0;
    const animate = () => {
      points.rotation.z += 0.003;
      points.rotation.y += 0.002;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleFinish = () => {
      soundEngine.playWhoosh();
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('studio_intro_seen', 'true');
      }

      // Cinema Curtains Transition Out (Guide 5 - TransitionController)
      const exitTl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          onIntroComplete();
          cancelAnimationFrame(animId);
          renderer.dispose();
          geometry.dispose();
          material.dispose();
        }
      });

      if (curtainTopRef.current && curtainBottomRef.current) {
        exitTl
          .to([titleRef.current, taglineRef.current, canvas], { opacity: 0, duration: 0.5 })
          .to(curtainTopRef.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.2')
          .to(curtainBottomRef.current, { yPercent: 100, duration: 0.9, ease: 'power4.inOut' }, '<');
      } else {
        setIsVisible(false);
        onIntroComplete();
      }
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      tl.kill();
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [forcePlay]);

  if (!isVisible) return null;

  const handleSkip = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('studio_intro_seen', 'true');
    }
    soundEngine.playWhoosh();
    setIsVisible(false);
    onIntroComplete();
  };

  const handleToggleSound = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) soundEngine.playClick();
  };

  return (
    <div className="hollywood-intro-overlay" ref={containerRef}>
      {/* Cinema Curtains */}
      <div className="curtain curtain-top" ref={curtainTopRef} />
      <div className="curtain curtain-bottom" ref={curtainBottomRef} />

      {/* WebGL 3D Canvas */}
      <canvas className="intro-canvas" ref={canvasRef} />

      {/* Intro Typography Layer */}
      <div className="intro-content">
        <span className="intro-pretitle">
          <Sparkles size={14} color="#d4af37" />
          <span>PRODUCTION PREMIERE</span>
        </span>
        <h1 className="intro-title" ref={titleRef}>STUDIO OS</h1>
        <p className="intro-tagline" ref={taglineRef}>
          CINEMATIC ARCHITECTURE • 9 MONOLITHIC STANDARDS • ZERO-SLOP
        </p>

        {/* Progress HUD */}
        <div className="intro-hud-bar">
          <div className="hud-track">
            <div className="hud-fill" style={{ width: `${progress}%` }} />
          </div>
          <span>INITIALIZING CORE {progress}%</span>
        </div>
      </div>

      {/* Controls: Sound & Skip */}
      <div className="intro-controls">
        <button className="btn-intro-control" onClick={handleToggleSound} title="Вкл/Выкл звук">
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          <span>{isMuted ? 'ЗВУК ВЫКЛ' : 'ЗВУК ВКЛ'}</span>
        </button>

        <button className="btn-intro-control skip-btn" onClick={handleSkip}>
          <span>ПРОПУСТИТЬ</span>
          <FastForward size={16} />
        </button>
      </div>

      <style>{`
        .hollywood-intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999999;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: #ffffff;
        }
        .curtain {
          position: fixed;
          left: 0;
          width: 100%;
          height: 50.5vh;
          background: #040507;
          z-index: 1000;
          pointer-events: none;
          box-shadow: 0 0 50px rgba(0,0,0,0.9);
        }
        .curtain-top { top: 0; border-bottom: 1px solid rgba(212, 175, 55, 0.25); }
        .curtain-bottom { bottom: 0; border-top: 1px solid rgba(212, 175, 55, 0.25); }
        
        .intro-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
        .intro-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .intro-pretitle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.65rem, 0.6rem + 0.3vw, 0.85rem);
          color: #d4af37;
          letter-spacing: 0.3em;
          margin-bottom: 14px;
        }
        .intro-title {
          font-family: 'Cinzel', 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 6.5rem);
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #f7f7fa;
          text-shadow: 0 0 40px rgba(212, 175, 55, 0.5);
          margin-bottom: 12px;
        }
        .intro-tagline {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.7rem, 0.65rem + 0.3vw, 0.95rem);
          color: rgba(255, 255, 255, 0.65);
          letter-spacing: 0.15em;
          max-width: 680px;
          margin-bottom: 30px;
        }
        .intro-hud-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: #d4af37;
        }
        .hud-track {
          width: 180px;
          height: 3px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 2px;
          overflow: hidden;
        }
        .hud-fill {
          height: 100%;
          background: #d4af37;
          box-shadow: 0 0 10px #d4af37;
          transition: width 0.1s linear;
        }
        .intro-controls {
          position: absolute;
          bottom: calc(24px + env(safe-area-inset-bottom, 0px));
          left: 0;
          right: 0;
          padding: 0 clamp(16px, 4vw, 36px);
          display: flex;
          justify-content: space-between;
          z-index: 20;
        }
        .btn-intro-control {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          min-height: 44px;
          background: rgba(10, 10, 15, 0.75);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 30px;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
        }
        .btn-intro-control:hover {
          border-color: #d4af37;
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
        }
        .skip-btn {
          border-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};
