import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { IgxGridModule, IgxCheckboxModule, IgxButtonModule,
  IgxSwitchModule, IgxSliderModule, IgxExcelExporterService } from "igniteui-angular";
import { LocalDataService } from './components/login/localData.service';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxGridModule, IgxCheckboxModule, IgxButtonModule,
    IgxSwitchModule, IgxSliderModule
  ],
  providers: [LocalDataService, IgxExcelExporterService],

})
export class AuthModule {}
