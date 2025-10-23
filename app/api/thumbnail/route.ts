import { NextResponse } from 'next/server';
import ffmpegPath from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';
import fetch from 'node-fetch';
import stream from 'stream';
import sharp from 'sharp';

export async function POST(request: Request) {
  const body = await request.json();
  const imageUrl: string = body.url;

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 400 });
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    // Sharp example: resize
    const resized = await sharp(buffer)
      .resize(200, 200)
      .toBuffer();

    // Example ffmpeg processing
    const ff = ffmpeg()
      .input(resized)
      .setFfmpegPath(ffmpegPath);

    const outChunks: Buffer[] = [];
    ff.on('error', (err: Error) => {
      console.error('ffmpeg error', err);
    });

    ff.on('data', (chunk: Buffer) => {
      outChunks.push(chunk);
    });

    // Use a Promise to await processing completion
    await new Promise<void>((resolve, reject) => {
      ff.on('end', () => resolve());
      ff.on('error', (err: Error) => reject(err));
      ff.run();
    });

    const resultBuffer = Buffer.concat(outChunks);

    return new NextResponse(resultBuffer, {
      status: 200,
      headers: { 'Content-Type': 'image/jpeg' }
    });
  } catch (err) {
    console.error('Processing error', err);
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 });
  }
}
