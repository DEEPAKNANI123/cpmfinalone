const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jmnjguadgmdyxfrmecpn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbmpndWFkZ21keXhmcm1lY3BuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MDg1MDMsImV4cCI6MjA5MTQ4NDUwM30.JJdJgW_N922_aotLraP0ib4BUY7Pr5ucZnJgXF6-XFs';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkProfiles() {
  const { data: profiles } = await supabase.from('profiles').select('id, first_name, last_name, role, manager_id');
  console.log(JSON.stringify(profiles, null, 2));
}

checkProfiles();
