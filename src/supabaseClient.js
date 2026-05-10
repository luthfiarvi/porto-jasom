import { createClient } from '@supabase/supabase-js'

// URL yang benar (menggunakan ID project dari screenshot-mu)
const supabaseUrl = 'https://dnkjrwvnhqbxrrawjiwu.supabase.co'

// Key yang ini sudah betul
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRua2pyd3ZuaHFieHJyYXdqaXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MjI2NjAsImV4cCI6MjA5Mzk5ODY2MH0.gwvoNhd0FNwp_FPncDnJljMppuA2zS3kci3JYB2nJIM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)