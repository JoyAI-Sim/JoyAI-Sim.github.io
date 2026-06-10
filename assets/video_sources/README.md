# JoyAI-Sim Video Sources

Role: local source index for JoyAI-Sim project-page video materials.
Status: draft inventory, not a published web asset set.
Inputs: mp4 files from Downloads and `视频汇总.zip` from Desktop, plus `hdf5_video.tar.xz.part_00/01`.
Outputs: local raw copies, extracted samples, preview contact sheets, and `video_inventory.json`.
Owner/module: JoyAI-Sim GitHub Pages project.
Safe-to-delete / safe-to-move: raw media can be moved to external storage after web-ready clips are selected and copied into `assets/media/`.

## Local Layout

- `raw/`: copied source mp4 files, `视频汇总.zip`, and `hdf5_video.tar.xz.part_00/01`.
- `extracted/`: mp4 files unpacked from `视频汇总.zip`.
- `hdf5_samples/`: selected representative mp4 samples extracted from the HDF5 video archive.
- `previews/`: generated mid-frame thumbnails and contact sheets.
- `video_inventory.json`: ffprobe metadata for all directly inspected mp4 files.

The heavy media folders are ignored by git to avoid accidentally publishing multi-GB source files through GitHub Pages.

## Observed Content Groups

- Robot/simulation comparison:
  - `out_21x9.mp4`
  - `0511 (1)_mirror_20260521_202256 (1).mp4`
  - `0511 (1).mp4`
  - These are good candidates for compact comparison strips in the Robot → Simulation → Human section.

- Real robot top-camera rollouts:
  - `g1_top_camera_direct_scene02_realbot_correction_000_spacemouse_r001_20260605_150440.mp4`
  - `g1_top_camera_direct_chaji_step1_pot_r001_20260609_135508_trim.mp4`
  - `g1_top_camera_direct_chaji_20260609-175101_r001_20260609_175638_trim.mp4`
  - These show G1 tabletop manipulation and fit the model-evaluation/toolchain sections.

- Human / first-person / VR demonstrations:
  - `3DVideo_2026-05-22-11-48-11-948 (2).mp4`
  - `3DVideo_2026-05-22-11-51-15-646 (1).mp4`
  - `com.oculus.vrshell-*.mp4`
  - `clip_jd000023yyqw620260318V1005772_000000.mp4`
  - These fit the Human → Simulation → Robot data-enrichment section.

- Derived perception / multi-view examples:
  - `episode_1002_three_views.mp4`
  - `sam2_masked_video_1780656806372.mp4`
  - `output_web_7M.mp4`
  - These are useful for showing intermediate processing: multi-view alignment, segmentation/masking, and web-ready human-video examples.

## Web Usage Recommendations

1. Replace one static figure in the Robot → Simulation → Human section with `out_21x9.mp4` or a lighter encoded derivative. It directly communicates robot-vs-sim alignment.
2. Add a three-column video strip under Human → Simulation → Robot:
   human first-person demo → simulation/intermediate processing → robot-view rollout.
3. Use `episode_1002_three_views.mp4` as a concise multi-view evidence clip if the page needs a technical middle-stage visual.
4. Keep the large source videos local. For publication, create web derivatives under `assets/media/` with short duration, muted autoplay, H.264 mp4, and poster images.
