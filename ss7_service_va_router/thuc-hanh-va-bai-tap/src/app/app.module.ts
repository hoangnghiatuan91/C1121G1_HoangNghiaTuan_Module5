import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './ung-dung-tinh-thoi-gian-song/timelines/timelines.component';
import { YoutubePlaylistComponent } from './ung-dung-nghe-nhac/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './ung-dung-nghe-nhac/youtube-player/youtube-player.component';
import { DictionaryComponent } from './ung-dung-tu-dien/dictionary/dictionary.component';
import { DictionaryDetailComponent } from './ung-dung-tu-dien/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
