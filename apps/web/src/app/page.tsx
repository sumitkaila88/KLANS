"use client"

import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";


export default function DebugAuth() {
  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      console.log('USER:', data.user)
      console.log('ERROR:', error)
    })
  }, []);


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
        this is homepage 
    </div>
  );
}
