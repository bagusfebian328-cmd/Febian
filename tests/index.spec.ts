import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/LinkTreeFreeClone/);

  const twitter = page.getByRole('link', { name: '🌴 TikTok' });
  await expect(twitter).toHaveAttribute('href', 'https://www.tiktok.com/@81yanho?_r=1&_t=ZS-97tGqg2JrSm');

  const youtube = page.getByRole('link', { name: '🎒 Instagram' });
  await expect(youtube).toHaveAttribute('href', 'https://www.instagram.com/imnotfebian?igsh=MWQ2ZGtzZGIweHl1eg==');

  const phone = page.getByRole('link', { name: '☎️ Call me' });
  await expect(phone).toHaveAttribute('href', 'tel://+6285876962829');

  const email = page.getByRole('link', { name: '📪 Email me' });
  await expect(email).toHaveAttribute('href', 'bagusfebian328@gmail.com');
});
