export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      options: {
        Row: {
          created_at: string | null
          description: string[] | null
          id: number
          poll_id: number | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string[] | null
          id?: number
          poll_id?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string[] | null
          id?: number
          poll_id?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'options_poll_id_fkey'
            columns: ['poll_id']
            referencedRelation: 'polls'
            referencedColumns: ['id']
          },
        ]
      }
      polls: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      votes: {
        Row: {
          created_at: string | null
          id: number
          option_id: number
          poll_id: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          option_id: number
          poll_id: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          option_id?: number
          poll_id?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'votes_option_id_fkey'
            columns: ['option_id']
            referencedRelation: 'options'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'votes_poll_id_fkey'
            columns: ['poll_id']
            referencedRelation: 'polls'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
