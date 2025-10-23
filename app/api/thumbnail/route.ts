// app/api/thumbnail/route.ts
import { NextResponse } from 'next/server';
import ffmpegPath from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';
import fetch from 'node-fetch';
import stream from 'stream';
import sharp from 'sharp';
import { supabase } from '../../../lib/supabaseClient';
import { pipeline } from 'stream/promises';

ffmpeg.setFfmpegPath(ffmpegPath || undefined);

export async function POST(req: Request) {
  try {
    const { url, idHint } = await req.json();
    if (!url) return NextResponse.json({ error: 'missing url' }, { status: 400 });

    // fetch remote to a buffer stream
    const res = await fetch(url);
    if (!res.ok) throw new Error('failed to fetch asset for thumbnail');

    // create a passthrough to ffmpeg
    const pass = new stream.PassThrough();
    res.body?.pipe(pass);

    // run ffmpeg to capture a frame (for video) or just forward image
    const tmpChunks: Buffer[] = [];

    // If content-type is image, we just resize with sharp
    const contentType = res.headers.get('content-type') || '';
    if (contentType.startsWith('image/')) {
      const inputBuffer = await res.arrayBuffer();
      const thumb = await sharp(Buffer.from(inputBuffer)).resize(720, 400, { fit: 'cover' }).png().toBuffer();
      // optionally upload to supabase storage here
      // const { data: sdata } = await supabase.storage.from('gallery-assets').upload(`thumbs/${idHint || Date.now()}.png`, thumb, { contentType: 'image/png' });
      // const publicUrl = supabase.storage.from('gallery-assets').getPublicUrl(sdata.path).publicURL;
      const base64 = thumb.toString('base64');
      return NextResponse.json({ thumbnail_url: `data:image/png;base64,${base64}` });
    }

    // For video: capture 1 frame via ffmpeg
    const ff = ffmpeg()
      .input(pass)
      .inputOptions(['-re']) // treat input as live-ish
      .frames(1)
      .outputOptions(['-vf', 'scale=1280:-2', '-q:v 2', '-f image2', '-vframes 1'])
      .format('image2pipe');

    const outChunks: Buffer[] = [];
    ff.on('error', (err) => {
      console.error('ffmpeg error', err);
    });

    ff.pipe()
      .on('data', (chunk: Buffer) => outChunks.push(chunk))
      .on('end', async () => {
        try {
          const imgBuf = Buffer.concat(outChunks);
          const thumb = await sharp(imgBuf).resize(720, 400, { fit: 'cover' }).png().toBuffer();
          const base64 = thumb.toString('base64');
          return; // end handler
        } catch (e) {
          console.error(e);
        }
      });

    // run ffmpeg asynchronously and capture result to buffer (fluent-ffmpeg doesn't return promise by default).
    const resultImage = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      const command = ff;
      const streamOut = command.pipe();
      streamOut.on('data', (c: Buffer) => chunks.push(c));
      streamOut.on('end', () => resolve(Buffer.concat(chunks)));
      streamOut.on('error', (err) => reject(err));
      // ensure command runs
    });

    const finalThumb = await sharp(resultImage).resize(720, 400, { fit: 'cover' }).png().toBuffer();
    const base64 = finalThumb.toString('base64');

    return NextResponse.json({ thumbnail_url: `data:image/png;base64,${base64}` });
  } catch (err: any) {
    console.error('thumbnail error', err);
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}
