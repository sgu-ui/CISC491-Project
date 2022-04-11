import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [  
  {path:'', component: AppComponent},
  {path:'sign', component: SignComponent},
  {path:'upload', component: UploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
