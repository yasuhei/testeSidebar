import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from '../user/user-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class HomeModule {}
