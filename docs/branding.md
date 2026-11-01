# Rahesa — Brand Assets

Commercial brand: **Rahesa** · Wordmark: **RAHESA** · Descriptor: **DIGITAL SYSTEMS**

The professional identity **Rafi Hariman** is separate and lives on `/profile`
and in article authorship. The production domain remains
`https://rafihariman.my.id`.

## Assets

| File | Content | Use |
| --- | --- | --- |
| `public/brand/rahesa-logo.png` | Complete lockup — R symbol + `RAHESA` + `DIGITAL SYSTEMS` | Large branding contexts with a light background |
| `public/brand/rahesa-icon.png` | Compact geometric R symbol (original, with padding) | Source / reference only |
| `public/brand/rahesa-icon-cropped.png` | R symbol, tightly cropped (512×512) | Navbar, favicon, compact placements |
| `public/brand/rahesa-icon-192.png` | R symbol, 192×192 | Manifest icon |
| `public/brand/rahesa-icon-512.png` | R symbol, 512×512 | Manifest icon |
| `public/brand/rahesa-apple-touch-icon.png` | R symbol, 180×180 | Apple touch icon |
| `app/icon.png` | R symbol | Browser tab / favicon |
| `app/apple-icon.png` | R symbol, 180×180 | Apple touch icon |

## Usage table

| Context | Asset |
| --- | --- |
| Desktop navbar | Full logo where legible; otherwise icon + `Rahesa` text |
| Mobile navbar | Icon + optional `Rahesa` text |
| Browser tab / favicon | Icon (`app/icon.png`) |
| Apple touch icon | Icon (`app/apple-icon.png`) |
| Social avatar | Icon |
| Footer | Icon + `Rahesa` text (navy footer keeps the dark wordmark off dark surfaces) |
| Open Graph banner | Dedicated OG composition (generated), not the favicon |
| Structured-data logo | Full logo (`rahesa-logo.png`) |

## Rules

- Do not stretch, crop, distort, recolor, or add CSS filters to the assets.
- Do not use the full wordmark at favicon size — use the R icon.
- Do not place the dark wordmark on a dark background.
- Do not add the old slogan into the logo.
- The lockup is only: R symbol, `RAHESA`, `DIGITAL SYSTEMS`.
- Recommended clear space: keep a margin around the logo at least the height of
  the R symbol on all sides.
- `next/image` with `object-contain` is used so the intrinsic aspect ratio is
  preserved.
