import { APP_INITIALIZER, isDevMode, } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideIonicAngular, IonicRouteStrategy, } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { RM } from '@request-metrics/browser-agent';

if (isDevMode()) {
  RM.install({ token: 'g7kp7mi:y8ty9gm' });
}

const appInitialize = () => async () =>
  await globalThis.MusicKit.configure({
    developerToken: environment.musicKitToken,
    bitrate: globalThis.MusicKit.PlaybackBitrate.HIGH,
    app: {
      name: 'Star Track',
      build: '1.0',
      declarativeMarkup: false,
      debug: false,
      storefrontId: 'us',
      suppressErrorDialog: true,
      icon: 'https://startrack-ng.web.app/assets/icons/icon-mask.png',
    },
  });

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_INITIALIZER, useFactory: appInitialize, multi: true },
    provideIonicAngular(),
    provideRouter(routes, withComponentInputBinding()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
});
