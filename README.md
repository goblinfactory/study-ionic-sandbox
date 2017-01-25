# study-ionic-sandbox

sandbox playground for various ionic experiments - not meant as a public reference. I'm taking more manual notes in my A5 notebook, so don't expect this to be kept as up to date as often as my study-angular project.

Some of the code will be code I've written myself, and other code will most likely be copies of code from `@smichelotti` 's [Ionic2Course](https://github.com/smichelotti/Ionic2Course) as Ive decided to go once through copying his app, before starting my own throw away app based around the learning from the course. [Here is Steve Michelotti's course, `building Mobile Apps with Ionic 2, Angular 2, and Typescript` on pluralsight.](https://github.com/smichelotti/Ionic2Course)

### Installing Ionic

`> npm install -g ionic cordova` 

### fixing node 'EACCES' error

- If the node command (when installing node, or any other npm command) results in `Error: EACCES: permission denied, symlink '../lib/node_modules/cordova/bin/cordova'` then the fix is ***not*** to run as sudo, but rather might be as follows, to fix folder permissions by starting fresh; 
- see https://docs.npmjs.com/getting-started/fixing-npm-permissions
- fix

```
 mkdir ~/npm-global
 npm config set prefix "~/npm-global"
```

  - then add the new path above to your bash shell:
   - `>open ~/npm-global`
   - add `export PATH=~/.npm-global/bin:$PATH` to the bottom of the file and save.
   - close and re-open the terminal (bash) for the path to become active.
  - then re-run the install.
  - it's important to include the quotes above, otherwise it will not be set.
  - to check the npm path has been set correctly, run `npm config get prefix` (this should return the correct path.)
