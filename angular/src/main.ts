import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    importProvidersFrom(FormsModule, HttpClientModule), // Adding FormsModule to the app
  ],
}).catch((err) => console.error(err));