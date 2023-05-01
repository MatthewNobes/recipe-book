import { createClient } from "@supabase/supabase-js";

let supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
let supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (process.env.NODE_ENV === "test") {
	supabaseUrl = "https://test.supabase.co";
	supabaseKey = "test";
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
