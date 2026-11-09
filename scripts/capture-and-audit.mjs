import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs';
import http from 'node:http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 4329;

function startStaticServer() {
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
    const filePath = path.join(process.cwd(), 'dist', reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.woff2': 'font/woff2'
      };
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

async function run() {
  const server = await startStaticServer();
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop sections
  await page.setViewport({ width: 1440, height: 950, deviceScaleFactor: 2 });
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });

  // Hero
  await page.screenshot({ path: path.join('screenshots', 'desktop-1440-hero.png') });

  // Case Studies
  const caseStudiesEl = await page.$('#studi-kasus');
  if (caseStudiesEl) {
    await caseStudiesEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'desktop-1440-case-studies.png') });
  }

  // TelUGig Gallery
  const telugigEl = await page.$('#telugig-gallery');
  if (telugigEl) {
    await telugigEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'desktop-1440-telugig.png') });
  }

  // Experience
  const expEl = await page.$('#pengalaman');
  if (expEl) {
    await page.evaluate(() => document.querySelector('#pengalaman')?.scrollIntoView({ block: 'start' }));
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

  // Certifications
  const certEl = await page.$('#sertifikasi');
  if (certEl) {
    // Reveal all scroll elements so full element screenshots show all cards
    await page.evaluate(() => {
      document.querySelectorAll('.scroll-reveal').forEach((el) => {
        el.classList.add('is-revealed');
      });
    });
    await new Promise(r => setTimeout(r, 400));
    // Capture the entire element
    await certEl.screenshot({ path: path.join('screenshots', 'desktop-1440-certifications.png') });

    // Click Dicoding cert trigger to test modal lightbox with external verification link
    const dicodingTrigger = await page.$('[data-cert-title="Spec-Driven Development dengan Kiro"]');
    if (dicodingTrigger) {
      await dicodingTrigger.click();
      await new Promise(r => setTimeout(r, 300));
      await page.screenshot({ path: path.join('screenshots', 'desktop-1440-cert-modal-dicoding.png') });
      const closeBtn = await page.$('#modal-cert-close');
      if (closeBtn) await closeBtn.click();
      await new Promise(r => setTimeout(r, 200));
    }

    // Also click IDX SPM trigger to test SPM modal
    const spmTrigger = await page.$('[data-cert-title="Sekolah Pasar Modal (SPM)"]');
    if (spmTrigger) {
      await spmTrigger.click();
      await new Promise(r => setTimeout(r, 300));
      await page.screenshot({ path: path.join('screenshots', 'desktop-1440-cert-modal-spm.png') });
      const closeBtn = await page.$('#modal-cert-close');
      if (closeBtn) await closeBtn.click();
      await new Promise(r => setTimeout(r, 200));
    }
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
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join('screenshots', 'mobile-375-hero.png') });

  const mCaseStudies = await page.$('#studi-kasus');
  if (mCaseStudies) {
    await mCaseStudies.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'mobile-375-case-studies.png') });
  }

  const mTelugig = await page.$('#telugig-gallery');
  if (mTelugig) {
    await mTelugig.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'mobile-375-telugig.png') });
  }

  const mLayanan = await page.$('#layanan');
  if (mLayanan) {
    await mLayanan.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'mobile-375-ratecard.png') });
  }

  const mContact = await page.$('#kontak');
  if (mContact) {
    await mContact.scrollIntoView();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.join('screenshots', 'mobile-375-contact.png') });
  }

  // Tablet 768
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join('screenshots', 'tablet-768-hero.png') });

  await browser.close();
  server.close();
  console.log('Targeted section captures completed successfully.');
}

run().catch(console.error);
