import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

console.log('main.ts : BEGIN')
console.log('main.ts : boostrapping AppModule')
platformBrowserDynamic().bootstrapModule(AppModule);
console.log('main.ts : FIN')
