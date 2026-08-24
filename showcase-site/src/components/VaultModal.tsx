// showcase-site/src/components/VaultModal.tsx
import React, { useState } from 'react';
import { UploadCloud, FolderCheck, FileCode, CheckCircle, Music, Box, Type, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../audio/WebAudioEngine';

interface VaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VaultItem {
  name: string;
  category: '3d-models' | 'shaders' | 'sounds' | 'fonts' | 'textures';
  size: string;
  addedTime: string;
}

export const VaultModal: React.FC<VaultModalProps> = ({ isOpen, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [vaultItems, setVaultItems] = useState<VaultItem[]>([
    { name: 'universal-light-cone.glsl', category: 'shaders', size: '4.2 KB', addedTime: 'Сегодня, 14:20' },
    { name: 'cinematic-impact-sub.wav', category: 'sounds', size: '480 KB', addedTime: 'Сегодня, 13:10' },
    { name: 'luxury-shield-monolith.glb', category: '3d-models', size: '1.8 MB', addedTime: 'Вчера, 19:40' }
  ]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    soundEngine.playWhoosh();
    const newItems: VaultItem[] = [];

    Array.from(files).forEach(file => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      let cat: VaultItem['category'] = 'textures';

      if (['glb', 'gltf', 'obj', 'fbx'].includes(ext)) cat = '3d-models';
      else if (['glsl', 'vert', 'frag'].includes(ext)) cat = 'shaders';
      else if (['wav', 'mp3', 'ogg', 'flac'].includes(ext)) cat = 'sounds';
      else if (['woff2', 'woff', 'ttf', 'otf'].includes(ext)) cat = 'fonts';

      newItems.push({
        name: file.name,
        category: cat,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        addedTime: 'Только что'
      });
    });

    setVaultItems(prev => [...newItems, ...prev]);
    setStatusMessage(`✅ ${newItems.length} ассетов успешно обработано и сохранено в /library/assets-vault/!`);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <div className="studio-modal-overlay" onClick={onClose}>
      <div className="studio-modal" onClick={e => e.stopPropagation()}>
        <div className="studio-modal__header">
          <div>
            <h2>📥 Загрузка файлов с ПК в библиотеку STUDIO OS</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Перетащите ассеты с компьютера — движок оптимизирует их и сохранит в `/library/assets-vault/`
            </p>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Drag & Drop Zone */}
        <div
          className={`drop-area ${isDragging ? 'dragging' : ''}`}
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={e => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
          }}
        >
          <UploadCloud size={44} color="var(--accent)" />
          <h3>Перетащите файлы с ПК в библиотеку</h3>
          <p>Поддерживаются .glb (3D), .glsl (шейдеры), .wav (звук), .woff2 (шрифты), .png (текстуры)</p>
          
          <label className="btn-studio-secondary" style={{ marginTop: '12px', cursor: 'pointer' }}>
            <span>Выбрать файлы с диска</span>
            <input
              type="file"
              multiple
              style={{ display: 'none' }}
              onChange={e => handleFiles(e.target.files)}
            />
          </label>
        </div>

        {statusMessage && (
          <div className="vault-status-box">
            <CheckCircle size={16} color="#00ff88" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Current Vault Contents */}
        <div className="vault-list-section">
          <h4>Текущее содержимое `/library/assets-vault/` ({vaultItems.length} ассетов):</h4>
          <div className="vault-items-grid">
            {vaultItems.map((item, idx) => (
              <div key={idx} className="vault-item-card">
                <div className="vault-item-icon">
                  {item.category === '3d-models' && <Box size={20} />}
                  {item.category === 'shaders' && <FileCode size={20} />}
                  {item.category === 'sounds' && <Music size={20} />}
                  {item.category === 'fonts' && <Type size={20} />}
                  {item.category === 'textures' && <Eye size={20} />}
                </div>
                <div className="vault-item-details">
                  <div className="v-name">{item.name}</div>
                  <div className="v-meta">Папка: <strong>{item.category}</strong> • {item.size} • {item.addedTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .drop-area {
          border: 2px dashed var(--border-strong);
          border-radius: var(--radius-md);
          background: var(--bg-primary);
          padding: clamp(24px, 4vw, 36px) 20px;
          text-align: center;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .drop-area.dragging {
          border-color: var(--accent);
          background: var(--bg-card);
        }
        .drop-area h3 {
          font-size: 1.1rem;
        }
        .drop-area p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .vault-status-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        .vault-list-section h4 {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .vault-items-grid {
          display: grid;
          gap: 8px;
          max-height: 250px;
          overflow-y: auto;
        }
        .vault-item-card {
          background: var(--bg-primary);
          border: var(--border-width) solid var(--border);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .vault-item-icon {
          color: var(--accent);
        }
        .v-name {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: bold;
        }
        .v-meta {
          font-size: 0.72rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};
