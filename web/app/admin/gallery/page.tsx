'use client';

import { useState, useEffect } from 'react';
import { galleryApi } from '@/lib/gallery-api';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  filename: string;
  alt: string;
  caption: string;
  order: number;
  is_cover: boolean;
  active: boolean;
  created_at: string;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ alt: '', caption: '', is_cover: false });
  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    setLoading(true);
    try {
      const response = await galleryApi.getAll();
      setImages(response.images || []);
    } catch (error: any) {
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('caption', file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));

      const response = await fetch('/api/gallery', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer homa_admin_2024`,
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }

      const result = await response.json();
      alert(`✅ Image uploaded successfully: ${result.image.filename}`);
      await loadImages();
    } catch (error: any) {
      alert('Upload error: ' + error.message);
    } finally {
      setUploading(false);
      if (e.target) e.target.value = '';
    }
  };

  const handleDelete = async (id: string, filename: string) => {
    if (!confirm('Delete this image?')) return;

    try {
      const response = await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer homa_admin_2024`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Delete failed');
      }

      alert(`✅ Image deleted: ${filename}`);
      await loadImages();
    } catch (error: any) {
      alert('Delete error: ' + error.message);
    }
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingId(image.id);
    setEditForm({ alt: image.alt, caption: image.caption, is_cover: image.is_cover });
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;

    try {
      const response = await fetch(`/api/gallery/${editingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer homa_admin_2024`,
        },
        body: JSON.stringify({
          alt: editForm.alt,
          caption: editForm.caption,
          is_cover: editForm.is_cover,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Update failed');
      }

      setEditingId(null);
      await loadImages();
    } catch (error: any) {
      alert('Error updating: ' + error.message);
    }
  };

  const handleSetCover = async (id: string) => {
    try {
      const response = await fetch(`/api/gallery/${id}/set-cover`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer homa_admin_2024`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Set cover failed');
      }

      await loadImages();
    } catch (error: any) {
      alert('Error setting cover: ' + error.message);
    }
  };

  const handleReorder = async (id: string, direction: 'up' | 'down') => {
    const index = images.findIndex(img => img.id === id);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= images.length) return;

    const updates = [
      { id: images[index].id, order: images[newIndex].order },
      { id: images[newIndex].id, order: images[index].order },
    ];

    try {
      const response = await fetch('/api/gallery/reorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer homa_admin_2024`,
        },
        body: JSON.stringify({ updates }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Reorder failed');
      }

      await loadImages();
    } catch (error: any) {
      alert('Error reordering: ' + error.message);
    }
  };

  const filteredImages = images.filter(img =>
    img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📸 Gallery CMS</h1>
          <p className="text-gray-600">Manage gallery images, upload, reorder, and edit</p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload New Image</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {uploading && <p className="mt-2 text-sm text-gray-600">Uploading...</p>}
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <input
            type="text"
            placeholder="Search by alt text or caption..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Images Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading images...</p>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600">No images found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden">
                {/* Image */}
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={`/images/${image.filename}`}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {image.is_cover && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      COVER
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  {editingId === image.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editForm.alt}
                        onChange={(e) => setEditForm({ ...editForm, alt: e.target.value })}
                        placeholder="Alt text"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                      <input
                        type="text"
                        value={editForm.caption}
                        onChange={(e) => setEditForm({ ...editForm, caption: e.target.value })}
                        placeholder="Caption"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={editForm.is_cover}
                          onChange={(e) => setEditForm({ ...editForm, is_cover: e.target.checked })}
                          className="rounded"
                        />
                        <span className="text-sm">Set as cover</span>
                      </label>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveEdit}
                          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm font-semibold hover:bg-blue-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="flex-1 bg-gray-300 text-gray-700 px-3 py-2 rounded text-sm font-semibold hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                        {image.caption}
                      </p>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{image.alt}</p>
                      <p className="text-xs text-gray-500 mb-3">Order: {image.order}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleEdit(image)}
                          className="flex-1 bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleSetCover(image.id)}
                          disabled={image.is_cover}
                          className="flex-1 bg-green-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          {image.is_cover ? 'Cover' : 'Set Cover'}
                        </button>
                        <button
                          onClick={() => handleReorder(image.id, 'up')}
                          disabled={index === 0}
                          className="bg-gray-600 text-white px-2 py-1.5 rounded text-xs font-semibold hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => handleReorder(image.id, 'down')}
                          disabled={index === filteredImages.length - 1}
                          className="bg-gray-600 text-white px-2 py-1.5 rounded text-xs font-semibold hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          ↓
                        </button>
                        <button
                          onClick={() => handleDelete(image.id, image.filename)}
                          className="bg-red-600 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

