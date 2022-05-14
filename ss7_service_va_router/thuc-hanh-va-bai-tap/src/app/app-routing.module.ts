import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './ung-dung-tinh-thoi-gian-song/timelines/timelines.component';
import {YoutubePlaylistComponent} from './ung-dung-nghe-nhac/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './ung-dung-nghe-nhac/youtube-player/youtube-player.component';
import {DictionaryDetailComponent} from './ung-dung-tu-dien/dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'detail/:id',
    component: DictionaryDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
