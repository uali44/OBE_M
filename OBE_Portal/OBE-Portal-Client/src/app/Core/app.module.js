import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './../Shared/Components/header/header.component';
import { SideBarComponent } from './../Shared/Components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../Shared/Services/Global/interceptor.service';
import { AuthGuard } from '../Shared/Services/Global/auth.guard';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent, HeaderComponent, SideBarComponent
        ],
        imports: [
            CommonModule,
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            RouterModule,
            HttpClientModule,
            ToastrModule.forRoot({
                newestOnTop: true,
                progressBar: true,
                progressAnimation: "increasing",
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: false,
                closeButton: true,
                titleClass: 'toast-title'
            }),
            NgxUiLoaderModule.forRoot({
                "bgsColor": "red",
                "bgsOpacity": 0.5,
                "bgsPosition": "bottom-right",
                "bgsSize": 60,
                "bgsType": "ball-spin-clockwise",
                "blur": 5,
                "delay": 0,
                "fastFadeOut": true,
                "fgsColor": "#0864a6",
                "fgsPosition": "center-center",
                "fgsSize": 200,
                "fgsType": "three-strings",
                "gap": 24,
                "logoPosition": "center-center",
                "logoSize": 120,
                "logoUrl": "",
                "masterLoaderId": "master",
                "overlayBorderRadius": "0",
                "overlayColor": "rgba(76,132,168,0.26)",
                "pbColor": "#0864a6",
                "pbDirection": "ltr",
                "pbThickness": 3,
                "hasProgressBar": false,
                "text": "loading...",
                "textColor": "#0864a6",
                "textPosition": "center-center",
                "maxTime": -1,
                "minTime": 300
            }),
            FormsModule,
            ReactiveFormsModule,
            SweetAlert2Module.forRoot(),
            OwlDateTimeModule,
            OwlNativeDateTimeModule
        ],
        providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map