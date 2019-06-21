import { Component, OnInit } from '@angular/core';
import { Header } from '../header.model';


@Component({
  selector: 'app-site-links',
  templateUrl: './site-links.component.html',
  styleUrls: ['./site-links.component.css']
})

export class SiteLinksComponent {
  albums: Header[] = [
   new Header("Pollinating the Planet", "More than 75 percent of Earth's flowering plants depend on butterflies, bees, bats, and other pollinators.", 1),
   new Header("Are You Prepared?", "With summer in full swing, get prepared for your vacation with a Trip Planning Guide for a fun, safe adventure.", 2),
 ];
}
