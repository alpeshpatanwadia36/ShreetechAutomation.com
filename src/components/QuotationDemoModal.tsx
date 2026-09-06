import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  Building2, 
  ShieldCheck, 
  Phone,
  ExternalLink,
  Download
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ProductItem } from '../types';

interface QuotationDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductItem;
  quantity: number;
  materialOption: string;
  dimensions: string;
  clientName?: string;
  clientCompany?: string;
  clientPhone?: string;
  clientEmail?: string;
  clientCity?: string;
  notes?: string;
}

export const QuotationDemoModal: React.FC<QuotationDemoModalProps> = ({
  isOpen,
  onClose,
  product,
  quantity,
  materialOption,
  dimensions,
  clientName = 'Valued Client',
  clientCompany = 'Engineering & Projects Dept.',
  clientPhone = '+91 80 4580 1731',
  clientEmail = 'vasad36@gmail.com',
  clientCity = 'Vadodara, Gujarat',
  notes = 'Standard industrial testing & factory acceptance compliance',
}) => {
  const [copied, setCopied] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  if (!isOpen) return null;

  // Approximate baseline quotation calculations for demo purposes
  const baseEstimatedUnitPrice = product.category === 'doors' ? 68000 : 
                                 product.category === 'interlocks' ? 18500 : 
                                 product.category === 'curtains' ? 14200 : 
                                 product.category === 'security' ? 36000 : 
                                 product.category === 'hygiene' ? 8900 : 22000;
  
  const taxableTotal = baseEstimatedUnitPrice * quantity;
  const gstRate = 18;
  const gstAmount = Math.round((taxableTotal * gstRate) / 100);
  const grandTotal = taxableTotal + gstAmount;

  const quoteNumber = `STA/QTN/2026-27/${Math.floor(1000 + Math.random() * 9000)}`;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const quoteText = `===============================================================
OFFICIAL COMMERCIAL QUOTATION - SHREE TECH AUTOMATION
===============================================================
Quotation Ref: ${quoteNumber}
Date: ${currentDate}
Validity: 30 Days from date of issuance

ISSUED BY:
Shree Tech Automation (Regd. Manufacturer)
Proprietor: ${COMPANY_DETAILS.proprietor}
Address: 4-A, Nirman Deep Complex, Opp. My Apple School,
Near Avdhoot Phatak, Manjalpur, Vadodara - 390011, Gujarat, India
Phone / WhatsApp: ${COMPANY_DETAILS.primaryPhone}
Email: ${COMPANY_DETAILS.salesEmail} | ${COMPANY_DETAILS.primaryEmail}
GSTIN: ${COMPANY_DETAILS.gstNumber}

PREPARED FOR:
Client Name: ${clientName || 'Demo Inquirer'}
Company: ${clientCompany || 'Industry Client'}
Email: ${clientEmail || 'vasad36@gmail.com'}
Phone: ${clientPhone || 'Not provided'}
Site Location: ${clientCity || 'India'}

---------------------------------------------------------------
ITEMIZED PARTICULARS:
---------------------------------------------------------------
1. Product: ${product.name}
   Category: ${product.categoryLabel}
   MOC / Material: ${materialOption}
   Dimensions: ${dimensions}
   HSN / SAC: 85371000 / 84798999
   Quantity: ${quantity} Unit(s)
   Unit Rate (INR): ₹${baseEstimatedUnitPrice.toLocaleString('en-IN')}
   Taxable Value: ₹${taxableTotal.toLocaleString('en-IN')}

   GST (18%): ₹${gstAmount.toLocaleString('en-IN')}
   ------------------------------------------------------------
   NET PAYABLE AMOUNT: ₹${grandTotal.toLocaleString('en-IN')}
   (Rupees in Words: Approximate estimate subject to technical drawing sign-off)

COMMERCIAL TERMS & CONDITIONS:
1. Prices: Ex-Works Manjalpur, Vadodara facility.
2. Packing & Forwarding: At actuals via reputed transport/logistics.
3. Delivery: 7 to 10 working days upon advance payment & PO confirmation.
4. Payment: 30% advance with Purchase Order, 70% against Proforma Invoice prior to dispatch.
5. Warranty: 12 Months standard manufacturer warranty against manufacturing defects.
6. Inspection: Pre-dispatch inspection welcome at our Vadodara manufacturing works.

BANKING DETAILS:
Account Name: SHREE TECH AUTOMATION
Bank: HDFC Bank / State Bank of India
Branch: Manjalpur, Vadodara, Gujarat
Account Type: Current Account
GSTIN: ${COMPANY_DETAILS.gstNumber}

Authorized Signatory
For SHREE TECH AUTOMATION
(Mr. Janak Thakar - Proprietor)
===============================================================`;

  const handleCopy = () => {
    navigator.clipboard.writeText(quoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendEmailToUser = () => {
    const subject = encodeURIComponent(`Demo Quotation & Technical Estimate: ${product.name} [Ref: ${quoteNumber}]`);
    const body = encodeURIComponent(quoteText);
    const targetEmail = clientEmail || 'vasad36@gmail.com';
    window.location.href = `mailto:${targetEmail}?cc=${COMPANY_DETAILS.salesEmail}&subject=${subject}&body=${body}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden my-auto print:shadow-none print:border-none print:max-h-none print:w-full">
        
        {/* Top Action Bar (hidden during print) */}
        <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold">Official Commercial Quotation Preview (Demo)</h3>
              <p className="text-[11px] text-slate-400">Exact format dispatched for inquiries and Purchase Orders</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSendEmailToUser}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
              title="Open email composer prefilled with this quotation"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send to {clientEmail || 'vasad36@gmail.com'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopy}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Copy text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {sentNotice && (
          <div className="bg-emerald-600 text-white text-xs px-4 py-2 font-medium flex items-center justify-between print:hidden">
            <span>Opening email client with pre-filled formal quotation addressed to {clientEmail || 'vasad36@gmail.com'}!</span>
            <Check className="w-4 h-4" />
          </div>
        )}

        {/* Quotation Document Body (Printable Sheet) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 text-xs sm:text-sm font-sans print:p-4">
          
          {/* Company Letterhead Header */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded text-xs tracking-wider">
                  STA
                </div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 uppercase">
                  {COMPANY_DETAILS.name}
                </h1>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Manufacturers of Cleanroom Interlock Systems, Rapid PVC Roll-up Doors, Air Curtains & Automation
              </p>
              <p className="text-[11px] text-slate-500 leading-snug mt-1 max-w-lg">
                4-A, Nirman Deep Complex, Opp. My Apple School, Near Avdhoot Phatak, Manjalpur, Vadodara - 390011, Gujarat, India
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-700 font-mono mt-2 font-medium">
                <span>Phone/WhatsApp: {COMPANY_DETAILS.primaryPhone}</span>
                <span>•</span>
                <span>Email: {COMPANY_DETAILS.salesEmail}</span>
                <span>•</span>
                <span>GSTIN: <strong className="text-slate-900">{COMPANY_DETAILS.gstNumber}</strong></span>
              </div>
            </div>

            <div className="sm:text-right bg-amber-50 sm:bg-transparent p-3 sm:p-0 rounded-xl w-full sm:w-auto border sm:border-none border-amber-200">
              <div className="inline-block bg-slate-900 text-amber-400 font-mono font-bold text-xs px-3 py-1 rounded">
                COMMERCIAL ESTIMATE
              </div>
              <p className="text-xs font-mono font-bold text-slate-900 mt-2">Ref: {quoteNumber}</p>
              <p className="text-xs text-slate-500">Date: {currentDate}</p>
              <p className="text-xs text-slate-500">Validity: 30 Calendar Days</p>
            </div>
          </div>

          {/* Client & Dispatch Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="font-bold uppercase tracking-wider text-slate-500 text-[10px] block mb-1">
                Quotation Issued To:
              </span>
              <p className="font-bold text-slate-900 text-sm">{clientName || 'Demo Recipient'}</p>
              <p className="text-slate-700 font-medium">{clientCompany || 'Engineering & Purchase Division'}</p>
              <p className="text-slate-600 mt-0.5">Email: <strong className="text-slate-800">{clientEmail || 'vasad36@gmail.com'}</strong></p>
              <p className="text-slate-600">Contact No: {clientPhone || '+91 80 4580 1731'}</p>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-slate-500 text-[10px] block mb-1">
                Project & Delivery Location:
              </span>
              <p className="text-slate-800 font-medium">{clientCity || 'Vadodara / Pan-India Plant Site'}</p>
              <p className="text-slate-600 mt-0.5">Delivery Basis: <strong>Ex-Works Vadodara Works</strong></p>
              <p className="text-slate-600">Manufacturing Lead Time: <strong>7-10 Working Days</strong></p>
              <p className="text-slate-600">Mode of Transport: <strong>Reputed Express Logistics</strong></p>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase font-bold border-b border-slate-300">
                  <th className="p-3 border-r border-slate-300 w-12 text-center">#</th>
                  <th className="p-3 border-r border-slate-300">Item Description & Technical Specifications</th>
                  <th className="p-3 border-r border-slate-300 text-center w-24">HSN/SAC</th>
                  <th className="p-3 border-r border-slate-300 text-center w-16">Qty</th>
                  <th className="p-3 border-r border-slate-300 text-right w-28">Unit Rate (₹)</th>
                  <th className="p-3 text-right w-32">Total (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                <tr>
                  <td className="p-3 border-r border-slate-200 text-center font-mono">01</td>
                  <td className="p-3 border-r border-slate-200">
                    <p className="font-bold text-slate-900 text-sm">{product.name}</p>
                    <p className="text-slate-600 mt-0.5">{product.categoryLabel}</p>
                    <div className="mt-2 space-y-1 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-200 font-mono">
                      <div>• <strong>Material of Construction (MOC):</strong> {materialOption}</div>
                      <div>• <strong>Dimensions / Sizing:</strong> {dimensions}</div>
                      <div>• <strong>Special Execution Notes:</strong> {notes}</div>
                      <div>• <strong>Compliance:</strong> Factory tested with electrical test certificate and operation manual.</div>
                    </div>
                  </td>
                  <td className="p-3 border-r border-slate-200 text-center font-mono text-slate-600">
                    85371000
                  </td>
                  <td className="p-3 border-r border-slate-200 text-center font-bold font-mono">
                    {quantity}
                  </td>
                  <td className="p-3 border-r border-slate-200 text-right font-mono font-medium">
                    ₹{baseEstimatedUnitPrice.toLocaleString('en-IN')}
                  </td>
                  <td className="p-3 text-right font-mono font-bold text-slate-900">
                    ₹{taxableTotal.toLocaleString('en-IN')}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t border-slate-300 bg-slate-50">
                  <td colSpan={4} className="p-3 border-r border-slate-300 font-medium text-slate-600 text-right">
                    Subtotal (Taxable Value):
                  </td>
                  <td colSpan={2} className="p-3 text-right font-mono font-bold text-slate-900">
                    ₹{taxableTotal.toLocaleString('en-IN')}
                  </td>
                </tr>
                <tr className="border-t border-slate-200 bg-slate-50">
                  <td colSpan={4} className="p-3 border-r border-slate-300 font-medium text-slate-600 text-right">
                    GST @ 18% (IGST or CGST 9% + SGST 9%):
                  </td>
                  <td colSpan={2} className="p-3 text-right font-mono font-bold text-slate-700">
                    ₹{gstAmount.toLocaleString('en-IN')}
                  </td>
                </tr>
                <tr className="border-t-2 border-slate-900 bg-amber-50/70 font-bold text-sm">
                  <td colSpan={4} className="p-3 border-r border-slate-300 text-right text-slate-950 uppercase tracking-wide">
                    Total Gross Payable Amount:
                  </td>
                  <td colSpan={2} className="p-3 text-right font-mono text-amber-800 text-base">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Terms & Conditions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-[11px] text-slate-600 leading-relaxed">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 uppercase tracking-wide block text-xs">
                Standard Commercial Terms
              </span>
              <p>• <strong>Price Basis:</strong> Ex-works Manjalpur, Vadodara. Freight & transit insurance extra.</p>
              <p>• <strong>Payment Terms:</strong> 30% advance along with confirmed Purchase Order, 70% against Proforma Invoice prior to dispatch.</p>
              <p>• <strong>Delivery Lead Time:</strong> Ready dispatch in 7 to 10 working days from approval.</p>
              <p>• <strong>Warranty:</strong> 12 Months from invoice date against manufacturing defects.</p>
              <p>• <strong>Installation:</strong> Plug-and-play installation schematics included. On-site engineer available on request.</p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 uppercase tracking-wide block text-xs">
                Company Banking & Remittance Details
              </span>
              <p>• <strong>Beneficiary:</strong> SHREE TECH AUTOMATION</p>
              <p>• <strong>Bank Name:</strong> HDFC Bank Ltd / State Bank of India</p>
              <p>• <strong>Branch:</strong> Manjalpur Branch, Vadodara - 390011</p>
              <p>• <strong>Account Type:</strong> Industrial Current Account</p>
              <p>• <strong>GSTIN / UIN:</strong> 24AEAPT4592C1ZL</p>
            </div>
          </div>

          {/* Signature Block */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <div className="text-[11px] text-slate-500">
              <p className="font-semibold text-slate-700">Shree Tech Automation • Vadodara Works</p>
              <p>This is an automated formal commercial estimate generated for engineering evaluation.</p>
            </div>

            <div className="text-right">
              <p className="text-xs font-bold text-slate-900">For SHREE TECH AUTOMATION</p>
              <div className="my-2 h-8 flex items-center justify-end">
                <span className="font-serif italic text-slate-400 text-sm tracking-wide">Janak Thakar</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-800">{COMPANY_DETAILS.proprietor}</p>
              <p className="text-[10px] text-slate-500">Proprietor & Head of Engineering</p>
            </div>
          </div>

        </div>

        {/* Footer Actions (hidden during print) */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="text-xs text-slate-600">
            Click <strong>"Send to {clientEmail || 'vasad36@gmail.com'}"</strong> to open your email program with this complete commercial estimate.
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSendEmailToUser}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors shadow"
            >
              <Mail className="w-4 h-4" />
              <span>Email Quotation to {clientEmail || 'vasad36@gmail.com'}</span>
            </button>
            <button
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
