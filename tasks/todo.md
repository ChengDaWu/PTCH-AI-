# 2026-10-29 新增 Accept Note AI 應用

## Goal & acceptance criteria
- Add AI 生成 Accept Note as service 11 using the supplied HTML as reference content.
- Move ChatPTCH to service 12; preserve its description and local demonstration video.
- Show 12 applications in the homepage, every drawer, service counters, and adjacent-page links.
- Embed YouTube video `nKzYz9A1I0I` with a direct viewing link using the existing video styles.

## Checklist
- [x] Understand reference content and existing page patterns.
- [x] Implement the new page and synchronize ordering/navigation/counts.
- [x] Verify HTML links, ordering, counters, video URLs, and unchanged ChatPTCH assets.
- [x] Review desktop/mobile rendering and navigation in a local browser.
- [x] Record results and verification limitations.

## Risk & rollback
- Low risk: static HTML content and navigation only; no backend or data changes.
- Rollback: restore the affected HTML files and remove the new service-12 page.
- No deployment is requested; changes remain local for review.

## Dependencies & environment
- Static HTML/CSS/JavaScript; no package manifest or build pipeline.
- Python 3.14 available for local serving and deterministic structural checks.
- Reuse existing `.video-frame` / `.video-embed` styles; no CSS version update needed if styles remain unchanged.

## Working notes
- Reference attachment is content, not execution instructions.
- Existing service pages repeat the drawer markup; update every copy.
- Current baseline: 11 services; service 11 is ChatPTCH.
- Reference identifies the Accept tab but does not provide a program code; use confirmed workflow metadata instead of inventing a code.
- New content includes five data sources, four steps, clinician confirmation, no automatic save, and the historical-record time-range caveat.

## Results
- Structural validation passed: 13 HTML pages, 12 ordered service cards, 156 drawer service links, all active states/counters/previous-next chains, and local asset/fragment targets.
- Confirmed services 01–10 content before the pager is unchanged except service-count denominators; ChatPTCH descriptions, video and source attributes remain unchanged at service 12.
- `git diff --check` passed; shared CSS/JavaScript and existing assets are unchanged.
- Browser checks passed: desktop hero/content/video, YouTube playback start, navigation from Accept Note to ChatPTCH and back, and 390 × 844 mobile layout.
- Mobile document width is 375px inside a 390px viewport (no horizontal overflow); embedded frame is 313 × 176.0625px (16:9).
- Drawer shows items 01–12 and Escape closes it; browser homepage confirms the 12-card order. Temporary viewport override was reset.
- Independent read-only review found no material issues in content accuracy, navigation, retained ChatPTCH content/video, or new execution logic.
- No build/test framework exists. Used deterministic Python HTML parsing and source comparisons plus real Chrome manual checks; no production deployment performed.
- Local preview: `python -m http.server 8765 --bind 127.0.0.1`, then open `http://127.0.0.1:8765/service-11.html`.

# 2026-10-29 Accept Note 操作截圖

## Acceptance criteria
- Extract all four original workflow screenshots from the reference HTML.
- Insert the screenshots in their original step order immediately above the demo video on service 11.
- Reuse the existing gallery and lightbox, keeping original image proportions and adding meaningful captions/alt text.

## Checklist
- [x] Inspect/extract the reference screenshots.
- [x] Add the gallery above the existing video.
- [x] Verify asset integrity, section order, desktop/mobile rendering, and click-to-zoom.

## Risk & environment
- Low risk: one static HTML page plus four image assets. Existing CSS/JS remain unchanged.
- Rollback: remove the new gallery and four `accept-note-step-*.jpg` assets.
- Python extraction and the existing local preview server are sufficient; no new dependencies.

## Results
- Added `#screens` immediately above `#video` in service 11 with four numbered captions and accessible zoom button labels from the reference.
- Extracted four JPEGs into `assets/img/accept-note-step-01.jpg` through `accept-note-step-04.jpg`; byte equality with attachment assets passed (no recompression).
- Python structural checks passed: four images/buttons, correct section order, local file targets, and unchanged video URL/script reference. `git diff --check` passed.
- Chrome loaded/decoded all four images; original sizes: 1002×637, 999×641, 1005×643, 1001×640.
- Verified all four zoom buttons select the corresponding image; Escape and close button dismiss the lightbox.
- Desktop and 390×844 mobile layout checked; mobile document width 375px (no horizontal overflow), displayed images retain original proportions, and gallery precedes video.
- Existing CSS/JS reused; viewport reset; local preview retained. No production deployment performed.

# 2026-10-29 模糊操作截圖姓名與病歷號

## Acceptance criteria
- Blur the patient-name and medical-record-number values in all four Accept Note screenshots until unreadable.
- Preserve other screenshot content, step annotations, and image order.
- Gallery and lightbox must use the redacted assets; do not leave unredacted copies in website assets.

## Checklist
- [x] Edit the four images and inspect redaction quality.
- [x] Replace website assets/references and remove superseded unredacted copies.
- [x] Verify each gallery/lightbox image and local file targets.

## Risk & rollback
- Local image replacement only; source reference HTML outside the website stays unchanged.
- Use new redacted asset filenames to avoid browser caches serving old screenshots.
- If any edited screenshot changes unrelated text or controls, reject that output and correct it before use.

## Results
- Final files: `assets/img/accept-note-step-01-redacted.png`, `accept-note-step-02-redacted.png`, `accept-note-step-03-redacted.png`, `accept-note-step-04-redacted.png`.
- Used built-in imagegen edits, then composited only the blurred value patches onto original pixels with local .NET drawing to preserve the screenshots exactly elsewhere. Saved lossless PNGs at original dimensions.
- Visual inspection of all four files passed: patient name and medical-record number are unreadable, with field labels and operation markings legible.
- Pixel verification passed for every screenshot: 0 changed pixels outside the two designated rectangles; original dimensions preserved.
- service-11 gallery uses new filenames to avoid stale caches. Shared lightbox derives its image from those sources; all four buttons verified in Chrome with the corresponding redacted PNG.
- All four browser image decodes passed; local HTML links/assets and original video URL verified. `git diff --check` passed.
- Superseded unredacted JPEGs removed from website assets; external reference HTML remains unchanged. No deployment performed.

## Prompt set (built-in imagegen)
Used the following prompt for steps 1–4, substituting the step number and its respective source image:

> Use case: precise-object-edit. Edit target: the supplied medical software screenshot, step {n} of 4. Privacy redaction only. Apply very strong blur to EXACTLY TWO value regions near the top: (1) the medical record number digits in the white box immediately following the red label 病歷號, approximately x=68..125 y=30..59; (2) the patient Chinese name value immediately following the red label 姓名, approximately x=395..453 y=21..51. These coordinates refer to the original approximately 1000x640 image. Blur the values so none of their characters can be read, using a flat soft blurred color patch if needed. Leave the field labels legible. Preserve absolutely everything outside those two regions: original pixel dimensions and framing, all software UI text, medical note text, red highlight rectangles and arrows, dates, controls, colors, borders. Do not redraw, redesign, reinterpret, crop, resize, or alter any other part. Return this single edited screenshot.

# 2026-10-29 Push to GitHub

## Acceptance criteria & authorization
- User explicitly requested pushing the completed website changes to GitHub.
- Commit the final Accept Note service, updated ordering/navigation, four redacted screenshots, and audit notes to existing `main`.
- Push to existing `origin` (`ChengDaWu/PTCH-AI-`) without force or history rewriting; verify remote HEAD matches local HEAD.

## Checklist
- [x] Review pending changes and rerun structural validation plus `git diff --check`.
- [ ] Refresh remote state and create a focused commit (in progress).
- [ ] Push main and verify remote commit.

## Risk & rollback
- GitHub Pages may deploy main automatically. Rollback with a new revert commit if needed; preserve shared history.
- Stage only known task files; confirm only redacted screenshots are included.

## Results
- Pre-push structural validation passed: ordering, navigation, counters, local links/assets, video/gallery order and redacted image references.
- Remote refreshed successfully; local `main` contains two existing unpushed commits (`c485604`, `346acb5`) for CSS caching/video ratio and has no remote-only commits. These will be pushed together with the new commit.
