# AEM Guides WKND PWA

The WKND PWA app is part of the AEM Reference Demos Addon project. It is automatically installed within AEM upon creation of a new AEM Environment using the AEM Reference Demos Builder. The PWA was built with Create-React-App and customized for use according to the design, which can be found in `aem-guides-wknd-pwa.ui.content/design/`.

## Install through the Maven
The app is designed to be installed in AEM for easy usage with the [AEM Site Template WKND-SPA](https://git.corp.adobe.com/aem-reference-demos/aem-site-template-wknd-spa). To build the app for installation in AEM, from the project root directory use the maven command:

```bash
mvn clean install -PautoInstallPackage
```

To install it on another server use **aem.host** and **aem.port**:

```bash
mvn clean install -PautoInstallPackage -Daem.host=my-server -Daem.port=12345 
```

## Build with Node
The PWA can be built without maven via the Create-React-App Script. Upon completion, a build folder will be created and the app can be deployed to your desired location. 

```bash
cd aem-guides-wknd-pwa.ui.content
npm run build 
```

## Local Development
Additionally, the app can be ran locally for development purposes. Starting the app will create a node-based server running that application on <http://localhost:3000>. 

```bash
cd aem-guides-wknd-pwa.ui.content
npm run start 
```

Update the `/content/[site-name]/en/index.html` SPA Page Property to point to the local server at <http://localhost:3000/aem-guides-wknd-pwa>. 

## Environment Files
When the app is run locally or built, it consumes environment variables for server locations and authentication. There should be a .env.development and .env.production file configured for your specifications. Ensure to update the `REACT_APP_HOST_URI` and the `REACT_APP_AUTHORIZATION` environment variables with the URL of your AEM Cloud Instance, and the user:password credentials. If these are misconfigured, the app will not be able to connect with your AEM Instance in order to get content.

## React App
The application source code is located in `aem-guides-wknd-pwa.ui.content/src` and the public files for the build are in  `aem-guides-wknd-pwa.ui.content/public`.

## Notes
Not all AEM Core Components are supported within the Layout Containers on the Magazine and Magazine detail pages. The following components are supported:
 - Container
 - Content Fragment
 - Image
 - Responsive Grid
 - Teaser
 - Text
 - Title

By default, the PWA looks for a site named 'wknd-app' that was created from the [AEM Site Template WKND-SPA](https://git.corp.adobe.com/aem-reference-demos/aem-site-template-wknd-spa). If that site does not exist, visit the settings tab, and select the desired site from the dropdown. If the desired site is _not_ in the dropdown, then it must be created in the connected AEM Environment.