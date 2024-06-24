import { Routes } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.page').then(l => l.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./guards/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'new-playlist',
    loadComponent: () => import('./new-playlist/new-playlist.page').then( m => m.NewPlaylistPage)
  },  
  {
    path: 'video-player',
    loadComponent: () => import('./video-player/video-player.page').then( m => m.VideoPlayerPage)
  },
  {
    path: 'playlist-vie',
    loadComponent: () => import('./playlist-vie/playlist-vie.page').then( m => m.PlaylistViePage)
  },  {
    path: 'vista-playlists',
    loadComponent: () => import('./vista-playlists/vista-playlists.page').then( m => m.VistaPlaylistsPage)
  },

 


  //{
   // path: 'video-player',
   // loadComponent: () => import('./video-player/video-player.component').then( m => m.PlayerComponent)
  //}
 
];
