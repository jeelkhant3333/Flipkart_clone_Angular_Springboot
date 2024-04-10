import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './module/admin/admin.module';
import { AuthModule } from './module/auth/auth.module';
import { FeatureModule } from './module/feature/feature.module';
import { ShareModule } from './module/share/share.module';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/auth/auth.reducers';
import { userReducer } from './state/user/user.reducer';
import { combineReducers } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AdminModule,
    AuthModule,
    FeatureModule,
    ShareModule,
    StoreModule.forRoot({
      auth: authReducer,
      user: userReducer
    }),
  ],
})
export class AppModule { }
