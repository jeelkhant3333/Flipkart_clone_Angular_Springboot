import { Component } from '@angular/core';
import { HomeCarouselComponent } from "./home-carousel/home-carousel.component";
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { meanJeans } from '../../Data/Men/men_jeans';
import { gounsPage1 } from '../../Data/Gouns/gouns';
import { mens_kurta } from '../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../Data/shoes';
import { womenJeans } from '../../Data/Women/women_jeans';
import { womenTop } from '../../Data/Women/women_top';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeCarouselComponent, ProductSliderComponent]
})
export class HomeComponent {
    menJeans: any;
    womenTop: any;
    womengouns: any;
    menKurtas: any;
    shoes: any;

    ngOnInit() {
        this.menJeans = meanJeans.slice(0, 5)
        this.womengouns = gounsPage1.slice(0, 5)
        this.menKurtas = mens_kurta.slice(0, 5)
        this.shoes = mensShoesPage1.slice(0, 5)
        this.womenTop = womenTop.slice(0, 5)
    }
}