import { NgModule } from '@angular/core';
import { MatButtonModule, MatIcon, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule{}