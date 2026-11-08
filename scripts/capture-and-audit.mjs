import puppeteer from 'puppeteer-core';
import path from 'node:path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop sections
  await page.setViewport({ width: 1440, height: 950, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });

  // Hero
  await page.screenshot({ path: path.join('screenshots', 'desktop-1440-hero.png') });

  // Case Studies
  const caseStudiesEl = await page.$('#studi-kasus');
  if (caseStudiesEl) {
    await caseStudiesEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'desktop-1440-case-studies.png') });
  }

  // Experience
  const expEl = await page.$('#pengalaman');
  if (expEl) {
    await expEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'desktop-1440-experience.png') });
  }

  // Teaching & Skills
  const teachEl = await page.$('#riset-mengajar');
  if (teachEl) {
    await teachEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'desktop-1440-teaching.png') });
  }

  // Rate card & Contact
  const layananEl = await page.$('#layanan');
  if (layananEl) {
    await layananEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'desktop-1440-ratecard.png') });
  }

  const kontakEl = await page.$('#kontak');
  if (kontakEl) {
    await kontakEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'desktop-1440-contact.png') });
  }

  // Mobile 375 sections
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join('screenshots', 'mobile-375-hero.png') });

  const mCaseStudies = await page.$('#studi-kasus');
  if (mCaseStudies) {
    await mCaseStudies.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'mobile-375-case-studies.png') });
  }

  const mContact = await page.$('#kontak');
  if (mContact) {
    await mContact.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'mobile-375-contact.png') });
  }

  // Tablet 768
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join('screenshots', 'tablet-768-hero.png') });

  await browser.close();
  console.log('Targeted section captures completed successfully.');
}

run().catch(console.error);
