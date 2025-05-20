# A Sign up Form

> w/ zod | RHF | TS

## Practice Focus:

- Basic React with TS components.
- RHF controlled and uncontrolled inputs.
- Zod schemas for client-side validation.
- Type safety across form values.

## Form Field:

🔐 Account Info

1. Username – Required, alphanumeric, min 3, max 20

2. Email – Required, valid email

3. Password – Required, min 8, must include a number and special character

4. Confirm Password – Must match password

🧍 Personal Info

5. Full Name – Required

6. Date of Birth – Required, user must be at least 18 years old

7. Phone Number – Optional, must match pattern (e.g., E.164)

8. Gender – Optional, must be either 'male', 'female', or 'other'

9. Country – Required, selected from dropdown

📎 Extra Features

10. Profile Picture URL – Optional, must be a valid URL if provided

11. Bio – Optional, max 300 characters

12. Newsletter Subscription – Optional boolean

13. Accept Terms – Must be true
