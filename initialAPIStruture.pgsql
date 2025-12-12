apps/api/
│
├── src/
│   ├── app/                     # Next.js App Router API endpoints
│   │   ├── community/
│   │   │   ├── route.ts         # GET, POST /communities
│   │   │   ├── [id]/route.ts    # GET, PUT, DELETE /communities/:id
│   │   ├── user/
│   │   │   ├── route.ts
│   │   │   ├── [id]/route.ts
│   │   ├── member/
│   │   │   ├── route.ts
│   │   │   ├── [id]/route.ts
│   │   ├── post/
│   │   │   ├── route.ts
│   │   │   ├── [id]/route.ts
│   │   ├── event/
│   │   │   ├── route.ts
│   │   │   ├── [id]/route.ts
│   │   ├── auth/                # login/signup, token refresh
│   │   │   └── route.ts
│   │   ├── wallet/              # wallet/transactions endpoints
│   │   │   └── route.ts
│   │   └── index.ts             # optional: root API info
│   │
│   ├── db/                      # database connection / ORM client
│   │   ├── mysql.ts             # MySQL client / Prisma setup
│   │   └── seed.ts              # optional seed data
│   │
│   ├── services/                # business logic
│   │   ├── communityService.ts
│   │   ├── userService.ts
│   │   ├── memberService.ts
│   │   ├── postService.ts
│   │   ├── eventService.ts
│   │   └── walletService.ts
│   │
│   ├── middlewares/             # auth, error handling, logging
│   │   ├── authMiddleware.ts
│   │   └── errorMiddleware.ts
│   │
│   ├── utils/                   # helpers & utilities
│   │   ├── validator.ts
│   │   ├── date.ts
│   │   └── response.ts
│   │
│   └── types/                   # TypeScript types & Zod schemas
│       ├── community.ts
│       ├── user.ts
│       ├── member.ts
│       ├── post.ts
│       ├── event.ts
│       └── wallet.ts
│
├── package.json
├── tsconfig.json
└── README.md
