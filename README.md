# cathastro_app

### Description:
- Objective: Showcase a simple project using open-source actively used technologies.
- So what is this exactly?  Cathastrophe App is a simple app that simulates an Instat messagin chat application.



##### Steps to run:
* in order to run this app is mandatory for you to have a firebase database account running and a project to host the firebase app
1. Configure your Js out of the box the files are expecting for your messagingSenderId to firebase to be attach to your window object create a js file and call that file from within your Index.HTML file like:
``<script src='your_custom_js_file'></script``
make sure to call this before your call to the firebase Libray call
2. your "custom_js_file" should be like this
``window.messagingSenderId = 'here goes your messagingSenderId' ``
``window.apiKey = 'Here goes your Api Key'``
3. wihtin the app root folder in your terminal run npm install.. just to make sure all required dependencies are in the folder.
4. Finally time to run. on the terminal run npn run start. this will run the app locally.

###  Techonlogies and libraries Involved
- React (by facebook)
- Firebase Real-time database
- Firebase Functions
- Plain Javascript :) ftw!
doa: want more information of whats under the hood, you can always check the packge.JSON
