$env:DATABASE_URL = "postgresql://postgres:Vuntai2026omnamashivaya!@localhost:5432/nextcrm"

$body = @"
-- Delete existing if any
DELETE FROM account WHERE user_id IN (SELECT id FROM users WHERE email = 'admin@example.com');
DELETE FROM session WHERE user_id IN (SELECT id FROM users WHERE email = 'admin@example.com');
DELETE FROM users WHERE email = 'admin@example.com';

-- Create user
INSERT INTO users (id, email, name, "userStatus", "is_admin", "is_account_admin", role, created_on)
VALUES (
    gen_random_uuid(),
    'admin@example.com',
    'Admin',
    'ACTIVE',
    true,
    true,
    'admin',
    NOW()
)
RETURNING id;

-- Create password account
INSERT INTO account (id, user_id, provider, provider_id, account_created, account_updated)
SELECT id, id, 'password', 'admin@example.com', NOW(), NOW()
FROM users WHERE email = 'admin@example.com';

-- Verify
SELECT email, name, "userStatus", role FROM users WHERE email = 'admin@example.com';
"@

$result = psql $env:DATABASE_URL -c $body 2>&1
Write-Host $result