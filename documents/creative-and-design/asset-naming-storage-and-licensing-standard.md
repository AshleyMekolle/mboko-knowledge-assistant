# Asset Naming, Storage and Licensing Standard

| Field | Value |
|---|---|
| Document title | Asset Naming, Storage and Licensing Standard |
| Document ID | CREA-STD-002 |
| Department | Creative and Design |
| Document owner | Kevin Tabi, Creative Director |
| Version | 1.0 |
| Effective date | 1 September 2026 |
| Last reviewed date | 15 October 2026 |
| Status | Approved |

> **Fictional document.** Mboko Media Group is a fictional company created for a software engineering portfolio project. All people, clients, vendors, figures and records in this document are invented. Nothing here is legal, financial or employment advice.

## Purpose

This standard makes sure every creative asset can be found, its latest version is obvious, and every piece of third-party music, imagery and footage is properly licensed.

## Scope

This standard applies to graphics, thumbnails, motion graphics, title cards, subtitles files, music and stock media used in Mboko content. Raw footage follows the Footage Storage and Handover Procedure (PROD-SOP-001).

## File naming convention

```
{ProjectCode}_{AssetType}_{Description}_{Language}_v{NN}.{ext}
```

| Part | Rule | Examples |
|---|---|---|
| ProjectCode | Project or episode code from the project register | MBK-MM-S02E04, MBK-BR-KCC-01 |
| AssetType | One code from the list below | THUMB, SOCIAL |
| Description | Short, no spaces, words joined with hyphens | YouTube, Instagram-Story |
| Language | EN, FR or BI for bilingual | FR |
| Version | Two digits, starting at 01 | v03 |

**Asset type codes:** THUMB (thumbnail), SOCIAL (social graphic), TITLE (title card), LOWER (lower third), MOTION (motion graphic), SUBS (subtitles file), POSTER, PRES (presentation).

**Examples**
- `MBK-MM-S02E04_THUMB_YouTube_EN_v03.png`
- `MBK-RDD-S01E08_SUBS_Episode_EN_v01.srt`
- `MBK-BR-KCC-01_SOCIAL_Instagram-Story_FR_v02.mp4`

## Versioning

- Every saved change that is shared for review gets a new version number. Never overwrite a version that has been shared.
- When the Creative Director approves an asset, the approved file is saved again with `_FINAL` added: `MBK-MM-S02E04_THUMB_YouTube_EN_v03_FINAL.png`.
- Only files ending in `_FINAL` may be published or sent to clients as final deliverables.

## Storage

| Content | Location in Mboko Drive |
|---|---|
| Working files and versions | `/Creative/{ProjectCode}/Working/` |
| Approved final files | `/Creative/{ProjectCode}/Final/` |
| Licence documents | `/Creative/Licences/` |
| Brand files and templates | `/Creative/Brand/` |

Creative files must not be stored only on personal devices or personal cloud accounts. Video projects with large files are stored on MBK-NAS-01 in the project's `EDIT` folder.

## Licensing third-party music, images and footage

### Rules

1. Only use third-party material that Mboko has the right to use for the specific purpose, platform and territory.
2. Approved sources:
   - **Music:** SoundTrack Africa Library (vendor V-005), under Mboko's annual subscription, which covers online video and social media worldwide but **not** television broadcast.
   - **Images and footage:** commissioned work owned by Mboko, material licensed with a written licence, or free-licence libraries whose licence allows commercial use.
3. Material found through search engines or social media must never be used unless the owner gives written permission.
4. Client-supplied material, such as Kribi Coffee Collective's product photos, needs written confirmation from the client that they own it or have the right to supply it.
5. Branded content and anything that could be broadcast on television needs a licence that covers that use. Check with the Creative Director before using subscription music in these projects.

### Licensing check procedure

1. Before using third-party material, the designer or editor records it in the creative asset register below with its source, licence type, permitted uses and expiry date.
2. The licence document or permission email is saved in `/Creative/Licences/`.
3. The Creative Director checks the licence status during design review under CREA-STD-001.
4. Material without a recorded licence is removed before publication.
5. If a rights holder complains, the Creative Director informs the Editor-in-Chief and the content is reviewed under the corrections process in EDIT-SOP-001.

## Creative asset register

Records as at 15 October 2026.

| Asset ID | File or material | Project | Source and licence | Permitted use | Expires | Status | Owner |
|---|---|---|---|---|---|---|---|
| CA-2026-031 | `MBK-MM-S02E04_THUMB_YouTube_EN_v03_FINAL.png` | MBK-MM-S02 | Created by Mboko | All uses | None | Approved | Grace Mbah |
| CA-2026-032 | "Douala Sunrise" music track | MBK-MM-S02 | SoundTrack Africa Library subscription | Online video and social media | 31 December 2026 | Approved | Grace Mbah |
| CA-2026-033 | Banque Sawa logo | MBK-MM-S02 | Supplied by Banque Sawa with written permission dated 20 August 2026 | Sponsor credit and sponsored social posts for CMP-2026-01 only | 31 December 2026 | Approved | Joëlle Essomba |
| CA-2026-034 | Kribi Coffee Collective product photos (12 images) | MBK-BR-KCC-01 | Supplied by client with written ownership confirmation | Campaign CMP-2026-02 only | 31 May 2027 | Approved | Grace Mbah |
| CA-2026-035 | `MBK-BR-KCC-01_SOCIAL_Instagram-Story_FR_v02.mp4` | MBK-BR-KCC-01 | Created by Mboko | Campaign CMP-2026-02 | None | In internal review | Grace Mbah |
| CA-2026-036 | Archive photograph of the Foumban royal palace, 1950s | MBK-RAC-S01 | Licence requested from a private archive; not yet received | Not yet licensed | Not applicable | Blocked: do not use | Grace Mbah |

## Related documents

- Brand Identity and Design Approval Guidelines (CREA-STD-001)
- Footage Storage and Handover Procedure (PROD-SOP-001)
- Procurement, Vendor and Invoice Procedure (FIN-SOP-001)

## Revision history

| Version | Date | Change | Approved by |
|---|---|---|---|
| 1.0 | 1 September 2026 | Initial version | Kevin Tabi, Creative Director |

