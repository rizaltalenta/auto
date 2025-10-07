
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { FileInput } from './components/FileInput';
import { TextInput } from './components/TextInput';
import { CommandDisplay } from './components/CommandDisplay';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [videoFileName, setVideoFileName] = useState<string>('');
  const [rtmpUrl, setRtmpUrl] = useState<string>('');
  const [ffmpegCommand, setFfmpegCommand] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    const videoPath = videoFileName ? `"${videoFileName}"` : '<YOUR_VIDEO_FILE>';
    const rtmpEndpoint = rtmpUrl ? `"${rtmpUrl}"` : '<YOUR_RTMP_URL>';
    
    const command = `ffmpeg -re -stream_loop -1 -i ${videoPath} -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" -c:v libx264 -preset veryfast -b:v 3500k -c:a aac -ar 44100 -b:a 128k -f flv ${rtmpEndpoint}`;
    
    setFfmpegCommand(command);
  }, [videoFileName, rtmpUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setVideoFileName(event.target.files[0].name);
    } else {
      setVideoFileName('');
    }
  };
  
  const handleRtmpUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRtmpUrl(event.target.value);
  };
  
  const handleCopyCommand = useCallback(() => {
    if (!ffmpegCommand) return;

    navigator.clipboard.writeText(ffmpegCommand).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  }, [ffmpegCommand]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto bg-slate-800/50 rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-700 backdrop-blur-sm">
        <Header />
        
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-center text-slate-400">
            This tool generates an FFmpeg command to stream a video on loop. You must run the command in your own terminal.
          </p>
          
          <div className="space-y-4">
            <FileInput 
              label="1. Select Video File" 
              fileName={videoFileName} 
              onChange={handleFileChange} 
            />
            <TextInput 
              label="2. Enter RTMP URL + Stream Key"
              value={rtmpUrl}
              onChange={handleRtmpUrlChange}
              placeholder="rtmp://a.rtmp.youtube.com/live2/..."
            />
          </div>

          <CommandDisplay
            label="3. Copy Your FFmpeg Command"
            command={ffmpegCommand}
            onCopy={handleCopyCommand}
            isCopied={isCopied}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
   