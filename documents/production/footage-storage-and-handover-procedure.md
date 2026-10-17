# Footage Storage and Handover Procedure

| Field | Value |
|---|---|
| Document title | Footage Storage and Handover Procedure |
| Document ID | PROD-SOP-001 |
| Department | Production |
| Document owner | Samuel Tchoumi, Head of Production |
| Version | 1.0 |
| Effective date | 1 September 2026 |
| Last reviewed date | 1 September 2026 |
| Status | Approved |

> **Fictional document.** Mboko Media Group is a fictional company created for a software engineering portfolio project. All people, clients, vendors, figures and records in this document are invented. Nothing here is legal, financial or employment advice.

## Purpose

This procedure makes sure no footage is ever lost and that Editorial and post-production receive everything they need to finish an episode. It covers offloading, verification, storage, backup and the Handover Package from Production to Editorial.

## Scope

This procedure applies to all footage, audio and stills recorded for a Mboko production, including branded projects.

## Definitions

- **Verified copy:** a complete copy of a card whose files have been compared with the original using a checksum tool. A copy is not verified until the comparison passes.
- **Handover Package:** the set of files and records Production gives to Editorial after the last shoot day of an episode.

## Where footage is stored

| Location | What is stored | Who maintains it |
|---|---|---|
| MBK-NAS-01 (office storage server) | Working copy of all raw and edited footage | Finance and Operations Manager |
| Shuttle drive (MBK-EQ-041) | Second copy made on location | Production Coordinator |
| Mboko Archive (off-site cloud) | Long-term backup of all footage | Finance and Operations Manager |

Completed footage is stored on MBK-NAS-01 using this folder structure:

```
/Productions/{ProjectCode}/{EpisodeCode}/RAW/{YYYY-MM-DD}_{Location}/{Camera}/
/Productions/{ProjectCode}/{EpisodeCode}/AUDIO/
/Productions/{ProjectCode}/{EpisodeCode}/EDIT/
/Productions/{ProjectCode}/{EpisodeCode}/MASTER/
```

Example: `/Productions/MBK-MM-S02/MBK-MM-S02E05/RAW/2026-10-20_Bonaberi/CamA/`

Footage must never be stored only on a personal laptop, phone or personal cloud account.

## Step-by-step procedure

### Step 1: On location
1. At the end of each shoot day, the camera operator copies every card to the shuttle drive and verifies the copy.
2. The camera operator completes the footage log in Mboko Board with the card number, camera, scenes or interviews recorded and any problems.
3. Cards are stored in a labelled case and are not reused or formatted.

### Step 2: Offload to MBK-NAS-01
1. Within **24 hours of the end of the shoot day**, or within 24 hours of returning to Douala for shoots outside Douala, the Production Coordinator copies the cards to MBK-NAS-01 and verifies the copy.
2. The footage now has two verified copies: the shuttle drive and MBK-NAS-01.
3. Only now may the Production Coordinator mark the cards "Cleared for formatting" in the footage log.

### Step 3: Archive
1. Within **72 hours of the offload**, the footage on MBK-NAS-01 is backed up to Mboko Archive. The Finance and Operations Manager's automated backup job does this every night.
2. The Production Coordinator confirms the archive copy in the footage log.

### Step 4: Handover Package to Editorial
Within **3 working days after the last shoot day of an episode**, the Production Coordinator delivers the Handover Package by setting the episode to "Post-production" in Mboko Board and attaching:

| Item | Description |
|---|---|
| Footage log | Every card, camera, date, location and interview recorded |
| Shot list | Shots planned and shots achieved |
| Interview transcripts | Automatic transcripts of every interview, marked as unverified |
| Consent records | Every signed or recorded consent from the shoot, as required by the Interview Consent and Contributor Release Policy (EDIT-POL-002) |
| Location permissions | Copies of permissions and permits used |
| Production notes | Anything the editor or fact-checker should know, such as sensitive moments or contributor requests |

Editorial confirms receipt in Mboko Board within 1 working day. A missing consent record blocks the episode from moving to Editorial Review.

### Step 5: Post-production
1. Editing is done by the post-production vendor Wouri Post Studio (vendor V-001) or by Mboko staff, working from MBK-NAS-01.
2. The producer reviews the rough cut, and the Editor-in-Chief reviews the fine cut, under the Editorial Review, Bilingual Publishing and Corrections Procedure (EDIT-SOP-001).
3. The approved master file is saved in the `MASTER` folder and archived.

## Retention

- Raw footage is kept on MBK-NAS-01 for 12 months after the episode is published, then kept only in Mboko Archive.
- Masters and consent records are kept for as long as the content is published, plus 5 years.

## Documents that govern the handover from Production to Editorial

1. This procedure (PROD-SOP-001): what is handed over and when.
2. Interview Consent and Contributor Release Policy (EDIT-POL-002): what each consent record must contain.
3. Editorial Review, Bilingual Publishing and Corrections Procedure (EDIT-SOP-001): what Editorial does after receiving the handover.

## Exceptions and escalation

If footage is lost, corrupted or cannot be verified, the Production Coordinator informs the Head of Production immediately and submits an incident report under PROD-POL-001.

## Related documents

- Production Planning, Scheduling and Project Register (PROD-POL-001)
- Equipment Checkout and Return Policy (PROD-POL-002)
- Interview Consent and Contributor Release Policy (EDIT-POL-002)
- Editorial Review, Bilingual Publishing and Corrections Procedure (EDIT-SOP-001)

## Revision history

| Version | Date | Change | Approved by |
|---|---|---|---|
| 1.0 | 1 September 2026 | Initial version | Samuel Tchoumi, Head of Production |

