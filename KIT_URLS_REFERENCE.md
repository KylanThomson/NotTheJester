# Kit Integration - URLs Reference

When setting up your Kit integration, you'll need to provide these URLs. Copy and paste them exactly as shown below.

## URLs for Kit Setup

### 🏠 Home Page URL

**What Kit wants:** Your website's homepage URL

**Local (for testing):**

```
http://localhost:3000
```

**Production (after deployment):**

```
https://yourdomain.com
```

_(Replace with your actual domain when deployed)_

---

### 🛟 Support URL

**What Kit wants:** Where users can get help

**Local (for testing):**

```
http://localhost:3000/support
```

**Production (after deployment):**

```
https://yourdomain.com/support
```

---

### 📖 Help Article URL

**What Kit wants:** Knowledge base or FAQ page

**Local (for testing):**

```
http://localhost:3000/support
```

**Production (after deployment):**

```
https://yourdomain.com/support
```

_(We use the same support page for both support and help)_

---

### ⚙️ App Settings URL

**What Kit wants:** Where users can configure app settings

**For this integration, you can use:**

```
Not applicable
```

_OR if Kit requires a URL:_

```
http://localhost:3000
```

_(Newsletter settings are managed in Kit's dashboard, not on your site)_

---

### 🔒 Privacy Policy URL

**What Kit wants:** Your privacy policy page

**Local (for testing):**

```
http://localhost:3000/privacy
```

**Production (after deployment):**

```
https://yourdomain.com/privacy
```

---

## Quick Copy-Paste (Local Testing)

For quick setup while testing locally, here are all URLs:

```
Home Page:        http://localhost:3000
Support:          http://localhost:3000/support
Help Article:     http://localhost:3000/support
App Settings:     http://localhost:3000
Privacy Policy:   http://localhost:3000/privacy
```

## Quick Copy-Paste (Production)

Replace `yourdomain.com` with your actual domain:

```
Home Page:        https://yourdomain.com
Support:          https://yourdomain.com/support
Help Article:     https://yourdomain.com/support
App Settings:     https://yourdomain.com
Privacy Policy:   https://yourdomain.com/privacy
```

---

## Pages Created

✅ **Privacy Policy** - `/privacy`

- Full privacy policy explaining data collection and usage
- Complies with privacy regulations

✅ **Support & Help** - `/support`

- FAQ about newsletter subscription
- Troubleshooting tips
- Contact information

---

## Notes

- **Local vs Production**: Use localhost URLs while testing, then update to your production domain when you deploy
- **SSL Required**: Production URLs must use `https://` (handled automatically by Vercel/Netlify)
- **Kit may not require all URLs**: Some fields might be optional - fill in what you can
- **Update Later**: You can always update these URLs in Kit's dashboard after initial setup

---

## Testing Your Pages

After starting your dev server (`npm run dev`), test that all pages work:

- Homepage: http://localhost:3000
- Privacy Policy: http://localhost:3000/privacy
- Support: http://localhost:3000/support

All pages include a "Back to Home" link and match your site's tarot theme!
