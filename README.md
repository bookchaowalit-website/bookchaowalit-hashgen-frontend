# Hash Generator

Generate cryptographic digests client-side with the Web Crypto API.

## Features
- SHA-1 / SHA-256 / SHA-384 / SHA-512
- Hex output, one-click copy
- No server round-trip

## Limitations
- MD5 is intentionally omitted (not in Web Crypto)
- Not a password hashing UI (no bcrypt/argon2)

## Run
```bash
npm install
npm run dev
```

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Fully client-side (no API keys)

## Honesty notes
- Portfolio developer utility showcase
- Not a multi-tenant SaaS product
