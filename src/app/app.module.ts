import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopforsaleComponent } from './shopforsale/shopforsale.component';
import { ShoponrentComponent } from './shoponrent/shoponrent.component';
import { OfficeOnRentComponent } from './office-on-rent/office-on-rent.component';
import { LandsComponent } from './lands/lands.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes=[

  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : 'shopforsale',
    component: ShopforsaleComponent
  },
  {
    path : 'shopfonrent',
    component: ShoponrentComponent
  },
  {
    path : 'office-on-rent',
    component: OfficeOnRentComponent
  },
  {
    path : 'lands',
    component: LandsComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopforsaleComponent,
    ShoponrentComponent,
    OfficeOnRentComponent,
    LandsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
