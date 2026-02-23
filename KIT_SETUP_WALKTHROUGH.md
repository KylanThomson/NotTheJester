# Kit (ConvertKit) Setup Walkthrough

## What You Need to Collect

You need **2 pieces of information** from Kit:

1. **API Secret Key** - Your account's authentication key
2. **Form ID** - The specific form's unique identifier

## Step-by-Step Setup

### Part 1: Create Your Kit Account

1. **Go to Kit's website**
   - Visit: https://kit.com (formerly convertkit.com)
   - Click "Get started free"

2. **Sign up**
   - Enter your email address
   - Create a password
   - Click through the onboarding (you can skip most questions)
   - Choose the FREE plan (works great for up to 1,000 subscribers)

3. **Verify your email**
   - Check your inbox for verification email
   - Click the verification link

### Part 2: Create a Form in Kit

4. **Create a new form**
   - Once logged in, look for **"Grow"** in the left sidebar
   - Click **"Landing Pages & Forms"** → **"Forms"**
   - Click **"Create New"** → **"Form"**

5. **Choose a form style**
   - Select **"Inline"** or **"Modal"** (doesn't matter, we're using your custom form)
   - Click **"Create"**

6. **Name your form**
   - Give it a name like "Website Newsletter Signup" or "Band Mailing List"
   - You can customize the form design in Kit, but we won't use their form - just the ID

7. **Get your Form ID**
   - Look at the URL in your browser
   - It will look like: `https://app.kit.com/forms/12345678`
   - **The numbers at the end (e.g., 12345678) are your Form ID**
   - Copy this number - you'll need it!

### Part 3: Provide URLs for Kit (if asked)

8. **Kit may ask for resource URLs**
   - During setup, Kit might ask for Support URL, Privacy Policy URL, etc.
   - **See `KIT_URLS_REFERENCE.md`** for all the URLs you need
   - We've created Privacy and Support pages for you!
   - Quick answer: Use `http://localhost:3000` for local testing

### Part 4: Get Your API Key

9. **Navigate to Settings**
   - Click your profile icon (top right corner)
   - Click **"Settings"**

10. **Find API section**
    - In the left sidebar, click **"Advanced"**
    - Look for **"API"** or **"API Secret"**

11. **Copy your API Secret**
    - You'll see a long string of letters and numbers
    - Click **"Show"** or **"Reveal"** if hidden
    - **Copy the entire API Secret** (looks like: `abc123def456ghi789`)
    - Keep this private! Don't share it publicly

### Part 5: Add to Your Website

12. **Create .env.local file**
    - In your `not-the-jester` folder (where package.json is)
    - Create a new file called `.env.local` (exactly like that, with the dot at the start)
    - If you're on Windows, you might need to create it in VS Code or command line

13. **Add your credentials**
    - Open the `.env.local` file
    - Add these two lines (replace with YOUR actual values):

    ```
    CONVERTKIT_API_KEY=your_api_secret_here
    CONVERTKIT_FORM_ID=your_form_id_here
    ```

    **Example** (don't use these, use your own!):

    ```
    CONVERTKIT_API_KEY=abc123def456ghi789jkl012mno345
    CONVERTKIT_FORM_ID=6789012
    ```

14. **Restart your development server**
    - Stop your dev server if it's running (Ctrl+C or Cmd+C in terminal)
    - Start it again: `npm run dev`

### Part 6: Test It!

15. **Test the form**
    - Open your website: http://localhost:3000
    - Scroll to the Contact section
    - Enter your email address
    - Click "Subscribe"
    - You should see "Thanks for subscribing! Check your email to confirm."

16. **Check Kit dashboard**
    - Go back to Kit
    - Click **"Grow"** → **"Subscribers"**
    - You should see your test email there!
    - Check your email for a confirmation message from Kit

17. **Configure welcome email (Optional but recommended)**
    - In Kit, go to **"Automate"** → **"Sequences"**
    - Create a welcome sequence with your latest music/show info
    - Set it to trigger when someone joins via your form

## Troubleshooting

### "Error: Failed to subscribe"

- Double-check your `.env.local` file has the correct keys
- Make sure there are no spaces around the `=` sign
- Verify you copied the full API Secret (it's long!)
- Make sure you restarted the dev server

### "No variables set" or form keeps loading

- The `.env.local` file must be in the `not-the-jester` folder (same level as package.json)
- File must be named exactly `.env.local` (with the dot)
- Try stopping and starting the dev server again

### Not receiving confirmation emails

- Check your spam folder
- In Kit, make sure your account is verified
- Check Kit's "Settings" → "Email Settings" is configured

## What Happens When Someone Signs Up?

1. Fan enters email on your website
2. Email gets sent to Kit via API
3. Kit adds them to your subscriber list
4. Kit sends them a confirmation email (double opt-in)
5. Once confirmed, they're on your mailing list!
6. You can send them updates about shows, music, etc.

## Security Notes

- ✅ `.env.local` is already in your `.gitignore` - it won't be committed to git
- ✅ Never share your API Secret publicly
- ✅ When deploying to production (Vercel/Netlify), add these variables in their dashboard
- ✅ Each environment (local, staging, production) can use different API keys if needed

## Need Your Actual Values?

Here's a checklist to keep track:

```
[ ] Kit Account Created
[ ] Form Created
[ ] Form ID: _____________ (numbers from URL)
[ ] API Secret: _________________________ (from Settings → Advanced → API)
[ ] .env.local file created in not-the-jester folder
[ ] Both values added to .env.local
[ ] Dev server restarted
[ ] Form tested successfully
```

## Next Steps After Setup

1. **Customize your welcome email** in Kit
2. **Set up segments** (e.g., by location for show announcements)
3. **Create a broadcast** to send your first newsletter
4. **Add more fields** to collect names (I can help with this!)
5. **Set up automations** for new music releases

You're all set! Your band now has professional email marketing! 🎸
