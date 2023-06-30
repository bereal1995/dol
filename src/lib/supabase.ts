import { createClient } from '@supabase/supabase-js'

import { Database } from '@/types/supabase'

const {
  VITE_SUPABASE_PROJECT_URL: supabaseUrl,
  VITE_SUPABASE_API_KEY: supabaseKey,
} = import.meta.env

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
