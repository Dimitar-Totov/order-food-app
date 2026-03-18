import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://hjlkvxdracepxnzkucxy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbGt2eGRyYWNlcHhuemt1Y3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MjY1NDEsImV4cCI6MjA4OTQwMjU0MX0.yGImxsS0oj53PDTo4BClIF_kThRU6s46mT0CJdm_xe4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);