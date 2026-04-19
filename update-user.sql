-- Enable password login for better-auth
UPDATE users
SET "userStatus" = 'ACTIVE', "is_admin" = true, "is_account_admin" = true, role = 'admin'
WHERE email = 'admin@example.com';

-- Create session for immediate login (optional)
SELECT id, email, name, "userStatus", role FROM users WHERE email = 'admin@example.com';