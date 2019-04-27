import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';
import { JobsComponent } from './jobs/jobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, BannerComponent, SearchComponent, JobsComponent, CompaniesComponent, NewsletterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
