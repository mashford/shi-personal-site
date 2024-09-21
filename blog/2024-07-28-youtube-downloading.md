---
slug: youtube-downloading
title: YouTube Video Downloading with yt-dlp
authors: [Shi]
tags: [yt-dlp, youtube, video, download]
---

# How to download YouTube videos

yt-dlp had set the standard for downloading YouTube videos. It is a fork of youtube-dl with a lot of improvements. It is more actively maintained and has a lot of new features. It is a command-line program that can be used to download videos from YouTube and other websites. It is available for Windows, macOS, and Linux. [GitHub](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#dependencies)

## Installation

With Homebrew:

```bash
brew install yt-dlp
```

To update yt-dlp:

```bash
brew upgrade yt-dlp
```

## Usage

To download a video:

```bash
yt-dlp <video-url>
```

For Example:

```bash
yt-dlp 'https://www.youtube.com/watch?v=3Gt3r42tY5k'
```

To download a playlist:

```bash
yt-dlp <playlist-url>
```

For Example:

```bash
yt-dlp 'https://www.youtube.com/watch?v=PoK4oEuIx9U&list=PLlFS0wtICmJAUpqDUPRuf7DYG59by9oB5'
```

# ffmpeg

yt-dlp uses ffmpeg to merge audio and video files. You need to have ffmpeg installed on your system. You can install it with Homebrew:

```bash
brew install ffmpeg
```
