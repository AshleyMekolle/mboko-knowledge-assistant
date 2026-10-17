# Procurement, Vendor and Invoice Procedure

| Field | Value |
|---|---|
| Document title | Procurement, Vendor and Invoice Procedure |
| Document ID | FIN-SOP-001 |
| Department | Finance and Operations |
| Document owner | Emmanuel Kamga, Finance and Operations Manager |
| Version | 1.0 |
| Effective date | 1 September 2026 |
| Last reviewed date | 15 October 2026 |
| Status | Approved |

> **Fictional document.** Mboko Media Group is a fictional company created for a software engineering portfolio project. All people, clients, vendors, figures and records in this document are invented. Nothing here is legal, financial or employment advice.

## Purpose

This procedure explains how Mboko Media Group buys goods and services, sets up vendors, checks and pays invoices, and keeps track of its assets. It separates the people who request, approve, record and pay, so that no single person controls a purchase from start to finish.

## Scope

This procedure applies to every purchase made with Mboko money, other than expense claims and petty cash, which follow the Expense Claims and Petty Cash Policy (FIN-POL-001). All amounts are fictional and in XAF.

## Separation of duties

| Step | Who |
|---|---|
| Request the purchase | Any employee, for their department |
| Approve the purchase | Approvers in the Approval Authority Matrix (COM-POL-001) |
| Raise the purchase order and record invoices | Finance and Operations Officer (Aïcha Bello) |
| Confirm goods or services were received | The requester |
| Authorise the payment in the bank | Finance and Operations Manager (Emmanuel Kamga), plus the Managing Director above XAF 2,000,000 |

No person may perform two of these steps for the same purchase, except that the requester always confirms receipt.

## Purchasing steps

1. **Request.** The requester submits a purchase request in Mboko Ledger with the description, project code, budget line, vendor and amount.
2. **Quotations.** The requester attaches quotations as required:

| Purchase value (XAF) | Purchase order | Quotations |
|---|---|---|
| Up to 100,000 | Not required | Not required |
| 100,001 to 250,000 | Required | Not required |
| 250,001 to 1,000,000 | Required | 2 written quotations |
| Above 1,000,000 | Required | 3 written quotations |

If fewer quotations are available, for example because only one vendor can supply the service, the requester explains why and the Finance and Operations Manager must approve the exception.

3. **Budget check.** The Finance and Operations Officer confirms there is enough money in the budget line, under the Budget Planning and Control Policy (FIN-POL-002).
4. **Approval.** The request is approved at the limits in COM-POL-001: up to 100,000 by the Department Head; 100,001 to 500,000 by the Department Head and the Finance and Operations Manager; 500,001 to 2,000,000 also by the Managing Director; above 2,000,000 also by the Managing Director, and only if the cost is in an approved budget.
5. **Purchase order.** The Finance and Operations Officer issues the purchase order (PO) to the vendor. **Work must not start and goods must not be ordered before the PO is issued.**
6. **Receipt.** When goods or services are received, the requester records a Goods Received Note (GRN) in Mboko Ledger within 2 working days.

Splitting a purchase into smaller orders to avoid a limit is prohibited.

## Vendor onboarding

A vendor must be onboarded before its first PO.

1. The requester sends the vendor the vendor form.
2. The vendor returns: legal name, business registration certificate, NIU taxpayer number, address, contact person and bank details on company letterhead.
3. The Finance and Operations Officer verifies the bank details by **calling the vendor on a phone number from an independent source**, not the number in the email.
4. The Finance and Operations Manager approves the vendor in Mboko Ledger.
5. Changes to a vendor's bank details are verified by phone in the same way before any payment is made.

## Invoice processing and payment

1. Vendors send invoices to the finance email address. Invoices must show the PO number.
2. The Finance and Operations Officer records the invoice in Mboko Ledger within 2 working days of receiving it.
3. **Three-way match.** The invoice is checked against the PO and the GRN: same vendor, items, quantities, prices and total.
4. **Tolerance.** If the invoice total differs from the PO by no more than **2% or XAF 10,000, whichever is lower**, the Finance and Operations Officer may approve it for payment and records the difference.
5. Matched invoices are paid within the vendor's payment terms, which are **30 days from receipt of a valid invoice** unless the contract says otherwise.
6. Payments are made in the **weekly payment run every Thursday**. The Finance and Operations Officer prepares the payment and the Finance and Operations Manager authorises it. Payments above XAF 2,000,000 also need the Managing Director.

## When a vendor invoice does not match the purchase order

1. The Finance and Operations Officer sets the invoice to **"On Hold"** in Mboko Ledger. It must not be paid.
2. Within **2 working days**, the Finance and Operations Officer informs the requester and the vendor in writing of the difference.
3. The requester confirms whether the extra cost or change was genuinely agreed and received.
4. The mismatch is resolved in one of two ways:
   - **The vendor corrects the invoice** by sending a credit note or a corrected invoice; or
   - **The PO is revised** to the new amount, and the revised PO is approved at the approval limit for the **new total** in COM-POL-001.
5. Once the invoice, PO and GRN match, the invoice is released for the next payment run.
6. Invoices on hold for more than 10 working days are reported to the Finance and Operations Manager.

## Asset inventory

- Every item of equipment costing more than XAF 150,000 is recorded in the asset inventory in Mboko Ledger with an asset tag, description, cost, purchase date, location and person responsible.
- Production equipment uses `MBK-EQ` tags and is managed day to day under the Equipment Checkout and Return Policy (PROD-POL-002). IT equipment such as laptops uses `MBK-IT` tags and is assigned to individual employees.
- The Finance and Operations Officer carries out a full physical count of all assets every December and reports missing items to the Finance and Operations Manager.
- Damaged equipment is repaired or written off with the Finance and Operations Manager's approval.

## Vendor register

Status as at 15 October 2026. All vendors are fictional.

| Vendor ID | Vendor | Service | Status | Onboarded | Bank details verified |
|---|---|---|---|---|---|
| V-001 | Wouri Post Studio | Video editing and post-production | Active | 12 January 2026 | Yes |
| V-002 | Akwa Rentals | Camera, lighting and audio equipment rental | Active | 3 March 2026 | Yes |
| V-003 | Sawa Translations | Translation, subtitling and second-language review | Active | 20 February 2026 | Yes |
| V-004 | Littoral Fleet Services | Vehicle hire with driver | Active | 5 May 2026 | Yes |
| V-005 | SoundTrack Africa Library | Music licensing subscription | Active | 1 January 2026 | Yes |

## Purchase order and invoice records

Records as at 15 October 2026.

| PO | Vendor | Project | Description | PO amount (XAF) | Quotations | Approved by | Invoice | Invoice status |
|---|---|---|---|---|---|---|---|---|
| PO-2026-044 | Akwa Rentals (V-002) | MBK-MV-S03 | Second camera and lighting rental, 14 to 18 September 2026 | 600,000 | 2 | Samuel Tchoumi, Emmanuel Kamga and Nadège Ekwalla, 2 September 2026 | INV-AR-0917 for XAF 640,000, received 8 October 2026 | **On Hold:** invoice is XAF 40,000 (6.7%) above the PO and outside tolerance. Requester and vendor informed 9 October 2026. Awaiting the vendor's credit note or the requester's confirmation of extra equipment. |
| PO-2026-047 | Wouri Post Studio (V-001) | MBK-BR-KCC-01 | Editing of the 3-minute film and three cutdowns | 1,800,000 | 3 | Samuel Tchoumi, Emmanuel Kamga and Nadège Ekwalla, 22 September 2026 | INV-WPS-0231 for XAF 900,000 (50% deposit) | Paid 1 October 2026. Final 50% due on delivery of the final master. |
| PO-2026-049 | Sawa Translations (V-003) | MBK-MV-S03 | English subtitle review for episodes E01 to E10 | 240,000 | Not required | Arnaud Fotso and Emmanuel Kamga, 25 September 2026 | Not yet received | Open |

## Related documents

- Approval Authority Matrix (COM-POL-001)
- Expense Claims and Petty Cash Policy (FIN-POL-001)
- Budget Planning and Control Policy (FIN-POL-002)
- Equipment Checkout and Return Policy (PROD-POL-002)

## Revision history

| Version | Date | Change | Approved by |
|---|---|---|---|
| 1.0 | 1 September 2026 | Initial version | Emmanuel Kamga, Finance and Operations Manager |

