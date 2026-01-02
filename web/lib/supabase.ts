import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials not found. Gallery CMS will use fallback data.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Gallery images type
export interface GalleryImage {
  id: string;
  filename: string;
  alt: string;
  caption: string;
  order: number;
  is_cover: boolean;
  created_at: string;
}

// Gallery CRUD functions
export const galleryApi = {
  // Fetch all gallery images
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('order', { ascending: true });
      
      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Error fetching gallery images:', error);
      return { data: null, error };
    }
  },

  // Upload image (insert row)
  async create(imageData: Omit<GalleryImage, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .insert([imageData])
        .select()
        .single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Error creating gallery image:', error);
      return { data: null, error };
    }
  },

  // Update image
  async update(id: string, updates: Partial<GalleryImage>) {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Error updating gallery image:', error);
      return { data: null, error };
    }
  },

  // Delete image
  async delete(id: string) {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Error deleting gallery image:', error);
      return { data: null, error };
    }
  },

  // Reorder images
  async reorder(updates: { id: string; order: number }[]) {
    try {
      const promises = updates.map(({ id, order }) =>
        supabase
          .from('gallery_images')
          .update({ order })
          .eq('id', id)
      );
      
      await Promise.all(promises);
      return { error: null };
    } catch (error: any) {
      console.error('Error reordering gallery images:', error);
      return { error };
    }
  },

  // Set cover image
  async setCover(id: string) {
    try {
      // First, unset all covers
      await supabase
        .from('gallery_images')
        .update({ is_cover: false })
        .neq('id', id);
      
      // Then set the new cover
      const { data, error } = await supabase
        .from('gallery_images')
        .update({ is_cover: true })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return { data, error: null };
    } catch (error: any) {
      console.error('Error setting cover image:', error);
      return { data: null, error };
    }
  },
};

