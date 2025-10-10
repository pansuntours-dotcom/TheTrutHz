import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const createClient = () => createClientComponentClient()

export type Database = {
  public: {
    Tables: {
      creators: {
        Row: {
          id: string
          email: string
          name: string
          avatar_url?: string
          revenue: number
          content_count: number
          is_fcp_member: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          avatar_url?: string
          revenue?: number
          content_count?: number
          is_fcp_member?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          avatar_url?: string
          revenue?: number
          content_count?: number
          is_fcp_member?: boolean
          updated_at?: string
        }
      }
      content: {
        Row: {
          id: string
          creator_id: string
          title: string
          description: string
          ar_data?: string
          views: number
          revenue: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          creator_id: string
          title: string
          description: string
          ar_data?: string
          views?: number
          revenue?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          creator_id?: string
          title?: string
          description?: string
          ar_data?: string
          views?: number
          revenue?: number
          updated_at?: string
        }
      }
    }
  }
}
