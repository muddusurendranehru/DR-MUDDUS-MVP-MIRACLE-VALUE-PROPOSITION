// Gallery API client for frontend
const API_BASE = '/api/gallery';
const ADMIN_PASSWORD = 'homa_admin_2024';

// Get auth header
function getAuthHeader() {
  return `Bearer ${ADMIN_PASSWORD}`;
}

export const galleryApi = {
  // Get all images (public)
  async getAll() {
    const response = await fetch(API_BASE);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch images');
    }
    return response.json();
  },

  // Create image (protected)
  async create(data: { filename: string; alt: string; caption: string; order?: number; isCover?: boolean }) {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create image');
    }
    return response.json();
  },

  // Update image (protected)
  async update(id: string, data: { filename?: string; alt?: string; caption?: string; order?: number; isCover?: boolean }) {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getAuthHeader(),
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update image');
    }
    return response.json();
  },

  // Delete image (protected)
  async delete(id: string) {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': getAuthHeader(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete image');
    }
    return response.json();
  },

  // Reorder images (protected)
  async reorder(updates: { id: string; order: number }[]) {
    const response = await fetch(`${API_BASE}/reorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getAuthHeader(),
      },
      body: JSON.stringify({ updates }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to reorder images');
    }
    return response.json();
  },

  // Set cover image (protected)
  async setCover(id: string) {
    const response = await fetch(`${API_BASE}/${id}/set-cover`, {
      method: 'POST',
      headers: {
        'Authorization': getAuthHeader(),
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to set cover image');
    }
    return response.json();
  },
};

