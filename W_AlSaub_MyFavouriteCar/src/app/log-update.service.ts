import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) { }

  public init() {
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          let snackBarRef = this.snackBar.open("New app version ready for use:", "Update", { duration: 600000 });

          snackBarRef.afterDismissed().subscribe(() => {
            console.log('New app version was downloaded');
          });


          snackBarRef.onAction().subscribe(() => {
            console.log('Downloading new app version');
            this.updates.activateUpdate().then(() => document.location.reload());
          });

          console.log(`Current app version: ${event.currentVersion.hash}`);
          console.log(`New app version ready for use: ${event.latestVersion.hash}`);
          break;
      }
    });
  }
}
