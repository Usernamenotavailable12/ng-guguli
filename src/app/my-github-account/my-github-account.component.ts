import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-github-account',
  standalone: true,
  imports: [],
  templateUrl: './my-github-account.component.html',
  styleUrls: ['./my-github-account.component.scss']
})
export class MyGithubAccountComponent implements AfterViewInit {

  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.backgroundVideo.nativeElement;
    
    // Ensures autoplay when the video is ready
    video.addEventListener('canplay', () => {
      video.play();
    });

    // Trigger video play programmatically
    video.muted = true; // Ensure it's muted for autoplay to work
    video.play().catch(error => {
      console.error('Error in video playback:', error);
    });
  }
}
