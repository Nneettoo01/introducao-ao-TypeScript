interface Playable {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements Playable {
  play(): void {
    console.log(`Tocando música...`);
  }

  pause(): void {
    console.log(`Música pausando...`);
  }

  stop(): void {
    console.log(`Música parando...`);
  }
}

class VideoPlayer implements Playable {
  play(): void {
    console.log("Rolando o vídeo...");
  }
  pause(): void {
    console.log("Pausando o vídeo...");
  }
  stop(): void {
    console.log("Parando o vídeo...");
  }
}

const players: Playable[] = [new VideoPlayer(), new MusicPlayer()];
players.forEach((p) => p.play());
