'use client';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

interface MediaPortalProps {
  item: GalleryItem;
  onClose: () => void;
}

export default function MediaPortal({ item, onClose }: MediaPortalProps) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '90%', maxHeight: '90%' }} />
    </div>
  );
}
