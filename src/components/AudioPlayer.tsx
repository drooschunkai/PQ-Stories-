import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, Square, Volume2, VolumeX, Sliders } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  introduction: string;
  paragraphs: string[];
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, introduction, paragraphs }) => {
  const { language, t, isRtl } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(1); // Speed of narration
  const [supported, setSupported] = useState<boolean>(true);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    } else {
      setSupported(false);
    }

    return () => {
      stopVoice();
    };
  }, []);

  // Whenever content changes, stop the active voice
  useEffect(() => {
    stopVoice();
  }, [title, paragraphs, language]);

  const speakText = () => {
    if (!synthRef.current || !supported) return;

    // Stop anything currently speaking first
    synthRef.current.cancel();

    // Prepare full unified text to speak
    const fullText = `${title}. ${introduction}. ${paragraphs.join(' ')}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utteranceRef.current = utterance;

    // Pair language with voice code
    const langMapRef: Record<string, string> = {
      en: 'en-US',
      ar: 'ar-SA',
      sv: 'sv-SE',
      de: 'de-DE'
    };

    utterance.lang = langMapRef[language] || 'en-US';
    utterance.rate = rate;

    // Try to find a matching voice if available
    const voices = synthRef.current.getVoices();
    const voiceCandidate = voices.find(v => v.lang.startsWith(langMapRef[language])) || 
                             voices.find(v => v.lang.includes(language));
    if (voiceCandidate) {
      utterance.voice = voiceCandidate;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      // Don't flag error if manually stopped
      if (e.error !== 'interrupted') {
        console.error('SpeechSynthesis error:', e);
        setIsPlaying(false);
        setIsPaused(false);
      }
    };

    synthRef.current.speak(utterance);
  };

  const pauseVoice = () => {
    if (synthRef.current && isPlaying) {
      if (isPaused) {
        synthRef.current.resume();
        setIsPaused(false);
      } else {
        synthRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const stopVoice = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  // Adjust vocal speed on the fly
  const changeSpeed = (newRate: number) => {
    setRate(newRate);
    if (isPlaying) {
      // Re-trigger with new speed
      stopVoice();
      setTimeout(() => {
        speakText();
      }, 50);
    }
  };

  if (!supported) {
    return (
      <div className="text-xs text-amber-600 bg-amber-50 p-2.5 rounded-lg border border-amber-100 flex items-center gap-2" id="audio-player-unsupported">
        <VolumeX size={14} />
        <span>{t('audio_unsupported')}</span>
      </div>
    );
  }

  return (
    <div className={`p-4 bg-emerald-50/65 rounded-xl border border-emerald-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs select-none ${isRtl ? 'text-right' : 'text-left'}`} id="audio-player-panel">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700 animate-pulse">
          <Volume2 size={20} id="volume-mic-icon" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-emerald-950 font-sans" id="audio-heading">
            {isPlaying ? t('playing_audio') || 'Narrating Story...' : t('play_audio')}
          </h4>
          <span className="text-xs text-emerald-800/80 block leading-tight font-sans">
            {t('app_title')} • {language.toUpperCase()} Voice
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:self-center" id="audio-gui-controls">
        {/* Play / Replay button */}
        {!isPlaying ? (
          <button
            onClick={speakText}
            id="speak-btn-play"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold cursor-pointer transition-all shadow-xs hover:scale-105"
          >
            <Play size={14} />
            <span>{t('play_audio')}</span>
          </button>
        ) : (
          <>
            {/* Pause / Resume */}
            <button
              onClick={pauseVoice}
              id="speak-btn-pause"
              className="flex items-center gap-1 px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full text-xs font-semibold cursor-pointer transition-all shadow-xs"
            >
              <Pause size={14} />
              <span>{isPaused ? 'Resume' : t('pause_audio')}</span>
            </button>

            {/* Stop check */}
            <button
              onClick={stopVoice}
              id="speak-btn-stop"
              className="flex items-center gap-1 px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full text-xs font-semibold cursor-pointer transition-all shadow-xs"
            >
              <Square size={14} />
              <span>{t('stop_audio')}</span>
            </button>
          </>
        )}

        {/* Speed Adjustment dial */}
        <div className="flex items-center gap-1.5 bg-white/90 border border-emerald-100/60 rounded-full py-1 px-2.5 shadow-2xs ml-1" id="audio-speed-control">
          <Sliders size={12} className="text-emerald-700" />
          <span className="text-2xs font-sans text-gray-500">{t('voice_speed')}:</span>
          <select
            value={rate}
            onChange={(e) => changeSpeed(parseFloat(e.target.value))}
            id="speed-selector"
            className="text-xs font-semibold text-emerald-800 bg-transparent outline-none cursor-pointer border-none p-0 pr-1"
          >
            <option value="0.8">0.8x</option>
            <option value="1.0">1.0x</option>
            <option value="1.15">1.15x</option>
            <option value="1.3">1.3x</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
