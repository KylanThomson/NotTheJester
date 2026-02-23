# Email Capture Setup Guide

Your band website now has an email capture form integrated into the Contact section! 🎸

## What's Been Added

1. **NewsletterSignup Component** - A beautiful form that matches your site's aesthetic
2. **API Route** - Backend endpoint to handle subscriptions
3. **Multi-Platform Support** - Works with ConvertKit, Mailchimp, or Beehiiv

## Choose Your Platform

### Option 1: ConvertKit (RECOMMENDED) ⭐

**Best for:** Bands, musicians, creators
**Pros:**

- Free up to 1,000 subscribers
- Beautiful forms & landing pages
- Easy automation for show announcements
- Great deliverability

**Setup Steps:**

1. Go to https://convertkit.com and sign up
2. Create a new Form in your dashboard
3. Get your **API Key**: Settings → Advanced → API Secret
4. Get your **Form ID**: Forms → Click on your form → URL shows the ID
5. Create a file `.env.local` in your `not-the-jester` folder:
   ```
   CONVERTKIT_API_KEY=your_api_key_here
   CONVERTKIT_FORM_ID=your_form_id_here
   ```
6. Restart your dev server

### Option 2: Mailchimp

**Best for:** Traditional email marketing
**Pros:**

- Most well-known platform
- Free up to 500 contacts
- Lots of templates

**Setup Steps:**

1. Go to https://mailchimp.com and sign up
2. Create an Audience (your mailing list)
3. Get your **API Key**: Account → Extras → API keys
4. Get your **Audience ID**: Audience → Settings → Audience name and defaults
5. Create a file `.env.local` in your `not-the-jester` folder:
   ```
   MAILCHIMP_API_KEY=your_api_key_here-us1
   MAILCHIMP_AUDIENCE_ID=your_audience_id_here
   ```
6. Restart your dev server

### Option 3: Beehiiv

**Best for:** Modern newsletters
**Pros:**

- Super clean interface
- Great for content creators
- Modern analytics

**Setup Steps:**

1. Go to https://beehiiv.com and sign up
2. Create a Publication
3. Get your **API Key**: Settings → Integrations → API
4. Get your **Publication ID**: Settings → Publication details
5. Create a file `.env.local` in your `not-the-jester` folder:
   ```
   BEEHIIV_API_KEY=your_api_key_here
   BEEHIIV_PUBLICATION_ID=your_publication_id_here
   ```
6. Restart your dev server

## Development Mode

The form works **right now** in development mode without any setup! It will:

- Accept email submissions
- Log them to your console
- Show success messages

This lets you test the UI immediately.

## Testing Your Setup

1. Start your dev server: `npm run dev`
2. Navigate to the Contact section
3. Enter an email address
4. Click Subscribe
5. Check your email service dashboard to see the new subscriber!

## Customization

### Change the Form Text

Edit `not-the-jester/src/components/NewsletterSignup.tsx`:

- Line 46-48: Form title and description
- Line 72-74: Button text

### Change the Styling

The form uses your existing Tailwind theme colors:

- `tarot-accent` - For highlights and buttons
- `tarot-bg` - Background colors
- `tarot-text-main` - Text color

### Add Custom Fields

To collect more than just email (like name), update:

1. The form in `NewsletterSignup.tsx` to add input fields
2. The API route in `src/app/api/subscribe/route.ts` to pass the data

## Best Practices

### For Band Marketing:

- **Welcome Email**: Set up an automated welcome email with your latest single
- **Segments**: Tag fans by location for show announcements
- **Regular Updates**: Send monthly newsletters about new music, shows, merch
- **Exclusive Content**: Offer early ticket access or unreleased tracks
- **Mobile Optimize**: Most fans will sign up on mobile (already done!)

### Email Frequency:

- New show announcements: Immediately
- New music releases: As released
- General newsletter: Monthly or bi-monthly
- Don't over-email or fans will unsubscribe

## Production Deployment

When deploying to Vercel/Netlify:

1. Add your environment variables in the hosting platform's dashboard
2. Never commit `.env.local` to git (it's already in .gitignore)
3. Test the form after deployment

## Troubleshooting

**Form not submitting?**

- Check browser console for errors
- Verify environment variables are set correctly
- Make sure you restarted the dev server after adding .env.local

**Not receiving test emails?**

- Check spam folder
- Verify API credentials are correct
- Check your email service dashboard for errors

**Button stays in "loading" state?**

- Check the API route is working: `/api/subscribe`
- Check browser Network tab for error responses

## Files Modified

- ✅ `src/components/NewsletterSignup.tsx` - The signup form
- ✅ `src/app/api/subscribe/route.ts` - Backend API
- ✅ `src/components/ContactSection.tsx` - Updated with form

## Next Steps

1. Choose your email platform (I recommend ConvertKit)
2. Sign up and get your API credentials
3. Create `.env.local` file with your credentials
4. Test the form!
5. Start building your fan base 🚀

Need help? Check the comments in the code or consult your email platform's documentation.
