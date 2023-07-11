## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Change Detection Strategies

This application demonstrates the difference between the default change detection strategy and the onpush change detection strategy.

From Angular's documentation:

>OnPush change detection instructs Angular to run change detection for a component subtree only when:

> The root component of the subtree receives new inputs as the result of a template binding. Angular compares the current and past value of the input with ==

>Angular handles an event (for example using event binding, output binding, or @HostListener ) in the subtree's root component or any of its children whether they are using OnPush change detection or not.

One can see how changes to the underlying data model, dataObj, are communicated through the component tree. The root component and default components with default component ancestors are immediately informed of changes to dataObj via changes from setInterval, subscription events, and button clicks. OnPush components are only informed of changes to the data model when an event happens in themselves or a descendant component. 

Play around with the app to get a feel for yourself of how the different change detection strategies in Angular work.