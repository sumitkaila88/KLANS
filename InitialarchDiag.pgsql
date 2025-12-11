klans/
├── apps/
│   ├── backend/            # Next.js backend (App Router + API routes)
│   ├── web/                # Next.js frontend (Tailwind)
│   └── mobile/             # Expo app
│
├── packages/
│   ├── types/              # shared TS types
│   ├── api-client/         # shared fetch wrapper (isomorphic)
│   ├── services/           # onesignal, payment adapters etc.
│   └── db/                 # prisma schema or SQL scripts
│
├── infra/
│   └── docker/
│
├── .gitignore
├── pnpm-workspace.yaml
├── package.json
├── turbo.json
├── tsconfig.base.json
└── README.md
