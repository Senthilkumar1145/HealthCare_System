const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load .env from backend folder or root folder
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Warning: SUPABASE_URL or SUPABASE_KEY missing in .env file!');
} else {
  console.log(' Connected to Supabase URL:', supabaseUrl);
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
