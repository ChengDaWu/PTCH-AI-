# Lessons

## 2026-10-29 Reading embedded HTML on Windows
- Failure mode: a raw reference HTML read emitted large embedded base64 assets; initial text extraction also hit the Windows cp950 output encoding.
- Detection signal: truncated tool output and `UnicodeEncodeError`.
- Prevention rule: extract visible text while skipping script/style and data URLs; explicitly use UTF-8 for Python output.
- Tripwire: inspect file size and detect `data:image` before dumping an HTML attachment.

## 2026-10-29 Optional image tooling
- Failure mode: assumed Pillow was installed while extracting existing JPEG data.
- Detection signal: `ModuleNotFoundError: No module named 'PIL'` before any files were written.
- Prevention rule: use standard-library base64 extraction for existing assets and browser image decoding for dimensions; verify optional packages before importing.
- Tripwire: check tool availability before choosing a dependency-based verification path.

## 2026-10-29 Precise screenshot redaction
- Failure mode: a generative edit resized screenshots and altered unrelated UI text despite preservation instructions.
- Detection signal: output dimensions differed and nearby control labels were redrawn.
- Prevention rule: composite only approved redacted field patches onto original pixels, save losslessly, and verify zero pixel changes outside the specified regions.
- Tripwire: compare dimensions and pixels outside redaction rectangles before replacing any screenshot.
