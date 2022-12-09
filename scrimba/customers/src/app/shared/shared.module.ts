import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
declarations: [CapitalizePipe],
exports: [CapitalizePipe] /* every module can get it */
})
export class SharedModule { }
