import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatBadge, MatMenuModule, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
