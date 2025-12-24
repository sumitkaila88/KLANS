// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { supabase } from '@/lib/supabaseClient';

// export default function AuthCallbackPage() {
//   const router = useRouter();

//   useEffect(() => {
//     const handleAuth = async () => {
//       const hash = window.location.hash;

//       if (!hash) {
//         router.replace('/login');
//         return;
//       }

//       // Parse hash params
//       const params = new URLSearchParams(hash.substring(1));

//       const access_token = params.get('access_token');
//       const refresh_token = params.get('refresh_token');

//       if (!access_token || !refresh_token) {
//         router.replace('/login');
//         return;
//       }

//       // Set Supabase session
//       const { error } = await supabase.auth.setSession({
//         access_token,
//         refresh_token,
//       });

//       if (error) {
//         console.error('Auth error:', error);
//         router.replace('/login');
//         return;
//       }

//       // SUCCESS → user verified + logged in
//       router.replace('/dashboard'); // or wherever
//     };

//     handleAuth();
//   }, [router]);

//   return <p>Verifying your account…</p>;
// }
