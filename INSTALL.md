# Installation Guide

## Step-by-Step Installation

### 1. Make sure you're in the root directory
```bash
cd "/Users/sumitkaila/Project work/KLANS"
```

### 2. Install all dependencies (from root)
```bash
pnpm install
```

This will install dependencies for all packages and apps in the monorepo.

### 3. If you encounter errors, try:

#### Option A: Clean install
```bash
# Remove node_modules and lock file
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm pnpm-lock.yaml

# Reinstall
pnpm install
```

#### Option B: Check pnpm version
```bash
# Make sure you have pnpm 9.0.0
pnpm --version

# If not, install/update pnpm
npm install -g pnpm@9.0.0
```

#### Option C: Install with verbose output to see errors
```bash
pnpm install --reporter=append-only
```

### 4. Common Issues and Solutions

#### Issue: "ERR_PNPM_INVALID_PACKAGE_NAME"
- **Solution**: Make sure all workspace dependencies use `workspace:*` format
- Check that package names start with `@klans/`

#### Issue: "Cannot find module"
- **Solution**: Make sure you ran `pnpm install` from the root directory
- Workspace packages need to be installed together

#### Issue: "Peer dependency warnings"
- **Solution**: These are usually warnings, not errors. You can ignore them or install peer dependencies

### 5. Verify Installation

After installation, verify packages are linked:
```bash
# Check if workspace packages are linked
pnpm list --depth=0

# Or check a specific package
pnpm --filter @klans/db list
```

### 6. If specific package fails

If a specific package fails, try installing it individually:
```bash
# Example: Install API dependencies
pnpm --filter api install

# Example: Install mobile dependencies  
pnpm --filter mobile install
```

## Troubleshooting

### Clear pnpm cache
```bash
pnpm store prune
```

### Check workspace configuration
Make sure `pnpm-workspace.yaml` exists and contains:
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

### Verify Node version
```bash
node --version  # Should be >= 18
```
