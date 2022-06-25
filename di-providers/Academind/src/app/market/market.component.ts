import { Component, OnInit } from "@angular/core";
import { Collectable } from "../shared/collectable.model";
import { CollectableService } from "../shared/collectable.service";

@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    // providers: [CollectableService] <- instanciantion only for this class and nest classes 
})
export class MarketComponent implements OnInit {

    collectables:Collectable[]  = [];

    constructor(private collectableService: CollectableService) { }

    ngOnInit(): void {
        this.collectables = this.collectableService.getCollectables();
    }
}