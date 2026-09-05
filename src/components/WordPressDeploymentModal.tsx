import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Server, 
  FileCode, 
  Globe, 
  CheckCircle2, 
  FolderArchive,
  ArrowRight,
  ExternalLink,
  Code
} from 'lucide-react';
import JSZip from 'jszip';
import { COMPANY_DETAILS } from '../data/companyData';

interface WordPressDeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressDeploymentModal: React.FC<WordPressDeploymentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedHtaccess, setCopiedHtaccess] = useState(false);
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [isGeneratingZip, setIsGeneratingZip] = useState(false);
  const [zipSuccess, setZipSuccess] = useState(false);

  if (!isOpen) return null;

  const htaccessCode = `# Apache configuration for Shree Tech Automation SPA
# Compatible with cPanel, WordPress hosting & LiteSpeed

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Serve existing files and directories directly
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Route all other traffic to index.html for smooth client routing
  RewriteRule ^(.*)$ index.html [L,QSA]
</IfModule>

# Browser Caching for optimal Google PageSpeed
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`;

  const embedCode = `<!-- Paste this into any WordPress Page, Elementor HTML Widget, or Theme Template -->
<div style="width: 100%; height: 100vh; min-height: 900px; border: none; overflow: hidden;">
  <iframe 
    src="https://www.shreetechautomation.com/" 
    style="width: 100%; height: 100%; border: none;" 
    title="Shree Tech Automation Official Application"
    allow="clipboard-write"
  ></iframe>
</div>`;

  const handleCopyHtaccess = () => {
    navigator.clipboard.writeText(htaccessCode);
    setCopiedHtaccess(true);
    setTimeout(() => setCopiedHtaccess(false), 3000);
  };

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 3000);
  };

  const handleDownloadZipPackage = async () => {
    try {
      setIsGeneratingZip(true);
      const zip = new JSZip();

      // Read current index.html content
      const indexHtmlResponse = await fetch('./index.html');
      let indexHtmlContent = '';
      if (indexHtmlResponse.ok) {
        indexHtmlContent = await indexHtmlResponse.text();
      } else {
        indexHtmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shree Tech Automation | Industrial, Security & Hygiene Solutions</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
      }

      // Add files to zip
      zip.file('.htaccess', htaccessCode);
      zip.file('index.html', indexHtmlContent);

      // Bundle all genuine product catalog images
      const productImages = [
        'air-curtain.jpg',
        'air-curtain-sensor.jpg',
        'automatic-number-plate-recognition.jpg',
        'automatic-pvc-roll-up-doors.jpg',
        'automatic-shoe-shiner-machine.jpg',
        'automatic-sliding-gate-motor.jpg',
        'curtain-sensor.jpg',
        'door-interlock-controller.jpg',
        'door-interlocking-system.jpg',
        'fire-alarm-system.jpg',
        'flap-barrier-gate.jpg',
        'flying-insect-killer.jpg',
        'hand-dryer.jpg',
        'hand-sanitizer-dispenser.jpg',
        'magnum-ss-hand-dryer.jpg',
        'portable-hygiene-station.jpg',
        'pvc-strip-curtain.jpg',
        'steel-turnstile-gate.jpg',
        'tripod-turnstile.jpg',
      ];

      for (const imgName of productImages) {
        try {
          const imgResp = await fetch(`./products/${imgName}`);
          if (imgResp.ok) {
            const blob = await imgResp.blob();
            zip.file(`products/${imgName}`, blob);
          }
        } catch (e) {
          console.warn(`Could not bundle image ${imgName}`, e);
        }
      }

      zip.file(
        'README-WORDPRESS-DEPLOY.txt',
        `==================================================================
SHREE TECH AUTOMATION - WORDPRESS HOSTING DEPLOYMENT INSTRUCTIONS
Official Domains: https://www.shreetechautomation.com / .in
==================================================================

Thank you for choosing the modern Shree Tech Automation web application!
Because this app is built with relative assets (base: "./"), it can run on
virtually ANY standard hosting server (cPanel, WordPress hosting, Apache, Nginx).

------------------------------------------------------------------
METHOD 1: UPLOAD AS THE MAIN WEBSITE (RECOMMENDED FOR SPEED)
------------------------------------------------------------------
1. Build the production files by running:
   npm run build
2. This creates a "dist" folder containing:
   - index.html
   - assets/ (CSS and JS bundles)
   - .htaccess
3. Log into your cPanel or FTP client:
   - Navigate to the "public_html" directory.
   - (Optional) Backup your existing WordPress files into a subfolder like "wp_backup".
   - Upload all files from the "dist" directory directly into "public_html".
4. Test by opening https://www.shreetechautomation.com/
   Enjoy instant sub-second loading speeds and zero PHP database overhead!

------------------------------------------------------------------
METHOD 2: DEPLOY IN A SUBDIRECTORY ALONGSIDE WORDPRESS
------------------------------------------------------------------
1. Inside your WordPress "public_html", create a new directory (e.g. "portal" or "automation").
2. Upload the files from "dist" into:
   public_html/automation/
3. Access your app at:
   https://www.shreetechautomation.com/automation/
   All relative paths will load automatically without errors!

------------------------------------------------------------------
METHOD 3: EMBED WITHIN A WORDPRESS PAGE / ELEMENTOR
------------------------------------------------------------------
1. Host the static application on your server or subdomain.
2. In your WordPress Admin:
   - Go to Pages -> Add New.
   - Title: "Solutions & Products"
   - Add a "Custom HTML" block (or Elementor HTML widget).
   - Paste the provided iframe code from the WordPress Deployment Modal.
   - Publish page.

Need assistance?
Email: info@shreetechautomation.com
WhatsApp / Call: +91 80 4580 1731
==================================================================`
      );

      // Generate the zip blob
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'shreetech-automation-wordpress-deployment-package.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setZipSuccess(true);
      setTimeout(() => setZipSuccess(false), 5000);
    } catch (err) {
      console.error('Error generating zip package', err);
    } finally {
      setIsGeneratingZip(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Server className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                WordPress Hosting Deployment Guide
              </h2>
              <p className="text-[11px] text-amber-400 font-mono">
                Target: {COMPANY_DETAILS.officialDomains[1]} & {COMPANY_DETAILS.officialDomains[0]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* Overview Callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Tailored Specifically for Your WordPress Server</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              We configured the build system with relative assets (<code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-amber-900">base: './'</code>). 
              This means you can upload the compiled files to your WordPress cPanel / Apache / Nginx server, either replacing the root or residing in a subfolder, with zero broken asset paths.
            </p>
          </div>

          {/* Quick Download Package Button */}
          <div className="bg-slate-900 text-white rounded-xl p-5 flex flex-wrap items-center justify-between gap-4 border border-slate-800">
            <div className="space-y-1">
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <FolderArchive className="w-4 h-4 text-amber-400" />
                <span>Download Ready WordPress Package (.zip)</span>
              </div>
              <p className="text-xs text-slate-400">
                Includes pre-configured <code className="text-amber-300">.htaccess</code>, deployment instructions, and entry files.
              </p>
            </div>

            <button
              onClick={handleDownloadZipPackage}
              disabled={isGeneratingZip}
              className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs flex items-center gap-2 transition-all shadow"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingZip ? 'Generating ZIP...' : zipSuccess ? 'Downloaded!' : 'Download Package (.zip)'}</span>
            </button>
          </div>

          {/* 3 Step-by-Step Deployment Methods */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide border-b border-slate-200 pb-2">
              Step-by-Step Deployment Options
            </h3>

            {/* Option 1 */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-slate-50/50">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">1</span>
                <span>Option A: Deploy to cPanel / File Manager (Standalone Site)</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600 pl-2">
                <li>Run <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">npm run build</code> to produce the production <code className="font-mono">dist/</code> folder.</li>
                <li>Log in to your cPanel or FTP client and open <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">public_html/</code>.</li>
                <li>Upload all files from <code className="font-mono">dist/</code> directly into <code className="font-mono">public_html/</code>.</li>
                <li>Upload the <code className="font-mono">.htaccess</code> file provided below to handle URL rewrites.</li>
              </ol>
            </div>

            {/* Option 2 */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-slate-50/50">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">2</span>
                <span>Option B: Deploy in a Subdirectory alongside WordPress</span>
              </div>
              <p className="text-xs text-slate-600 pl-2">
                Create a folder such as <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">public_html/app/</code> or <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">public_html/automation/</code>. 
                Upload the contents of <code className="font-mono">dist/</code> there. Your app will run seamlessly at <strong className="text-slate-800">https://www.shreetechautomation.com/automation/</strong>.
              </p>
            </div>

            {/* Option 3 */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-slate-50/50">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">3</span>
                <span>Option C: Embed into any WordPress Page (Elementor / Gutenberg)</span>
              </div>
              <p className="text-xs text-slate-600 pl-2">
                Use the one-click embed code below to display this full-featured portal inside any standard WordPress page or post.
              </p>
            </div>
          </div>

          {/* Apache .htaccess Code Block */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs uppercase tracking-wide text-slate-700 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-amber-600" />
                <span>Apache .htaccess Configuration</span>
              </h4>
              <button
                onClick={handleCopyHtaccess}
                className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded transition-colors font-medium"
              >
                {copiedHtaccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHtaccess ? 'Copied to Clipboard!' : 'Copy .htaccess'}</span>
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-200 p-3.5 rounded-xl text-[11px] font-mono overflow-x-auto border border-slate-800 leading-relaxed">
              {htaccessCode}
            </pre>
          </div>

          {/* WordPress Embed Code Block */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs uppercase tracking-wide text-slate-700 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-amber-600" />
                <span>WordPress Page Embed HTML Snippet</span>
              </h4>
              <button
                onClick={handleCopyEmbed}
                className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded transition-colors font-medium"
              >
                {copiedEmbed ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmbed ? 'Copied Code!' : 'Copy Embed Code'}</span>
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-200 p-3.5 rounded-xl text-[11px] font-mono overflow-x-auto border border-slate-800 leading-relaxed">
              {embedCode}
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono">
            Support: info@shreetechautomation.com • +91 80 4580 1731
          </span>
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
