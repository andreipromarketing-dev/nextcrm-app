$env:DATABASE_URL = "postgresql://postgres:Vuntai2026omnamashivaya!@localhost:5432/nextcrm"

$query = @"
INSERT INTO users (id, email, name, "userStatus", "is_admin", "is_account_admin", role, password, created_on)
VALUES (
  'admin-user-001',
  'admin@example.com',
  'Admin',
  'ACTIVE',
  true,
  true,
  'admin',
  '$2a$10$CwCd5zU9U5lH3eXQWf5YOuIY2p5ZzQKvYzXq5Xw5Xw5Xw5Xw5Xw5Xw', -- password: admin123
  NOW()
)
ON CONFLICT (email) DO UPDATE SET
  "userStatus" = 'ACTIVE',
  "is_admin" = true,
  "is_account_admin" = true,
  role = 'admin',
  password = '$2a$10$CwCd5zU9U5lH3eXQWf5YOuIY2p5ZzQKvYzXq5Xw5Xw5Xw5Xw5Xw5Xw';
"@

Write-Host "Executing SQL..."