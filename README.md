# Interactive Form Project

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

For Team Treehouse made by [Lindsey](http://www.lindseyk.dev)

## Requirements
 Review Your Resources

Getting Started with the Project Files
- If you haven’t already, download the project's starter files, unzip them, add them to the root of your project folder.
- At the root of the project folder, create a folder named js and add a script.js file to it. This is where you’ll write your JavaScript. Carefully review the script tag near the bottom of the index.html file. Check that the value in the script tag’s src attribute matches the name of the folder and file that you created. This is necessary to connect the JavaScript to the HTML.
- Open the project folder in your text editor. Open and view the script.js file that you created. Load the index.html file in Chrome, and open the Chrome DevTools Console.
- To test that you have everything hooked up correctly, add console.log(‘Test’); to the script.js file, save it, and refresh the page in the browser. You should now see Test printed in the console.
- Commit/push the updated project files to your GitHub repo.
- If you have trouble with any of the above steps, be sure to reach out to your Slack team.
- ---
1. The "Name" field
When the page first loads, the first text field should have the focus state by default to prompt the user.
* Use the .focus() method on the <input type="text"> element for the "Name" field.
2. "Job Role" section
The "Job Role" section has an <input type="text"> field where users can enter a custom job role. If the user selects "Other" in the "Job Role" drop down menu, they can enter info into the "Other job role" text field. But this field should be hidden by default and only displayed once users select "Other" in the drop down menu, and be hidden if the user selects any other option.
* Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.
* Program the "Job Role" <select> element to listen for user changes. When a change is detected, display/hide the "text field" based on the user’s selection in the drop down menu.
3. "T-Shirt Info" section
The options in the "Color" drop down menu are not available for each t-shirt design. So the user shouldn’t be able to see or choose a color option until they have chosen a design.
* Disable the "Color" <select> element.
* Program the "Design" <select> element to listen for user changes. When a change is detected:
* The "Color" <select> element should be enabled.
* The "Color" <select> element should display an available color.
* The "Color" dropdown menu should display only the color options associated with the selected design. For example:
* If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
* If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."
> Important Note: A select element is used for the color selection. There are two parts to a select element display: the element field and the drop down menu which opens after clicking on the field. Both the "Color" field and drop down menu must correctly update when the user selects a new theme. Neither should be empty or display unavailable colors.


> Pro Tip:
The selected attribute can determine which option element is displayed in the select field.
The hidden attribute can prevent option elements from being displayed in the drop down menu.

4. "Register for Activities" section
The "Total: $" element below the "Register for Activities" section should update to reflect the sum of the cost of the user’s selected activities.

* Program the "Register for Activities" fieldset element to listen for user changes. When a change is detected:
* If an activity is checked, the total cost should increase by the value in the data-cost attribute of the activity’s <input type="checkbox"> element.
* If an activity is unchecked, the total cost should decrease by that amount.
* The <p> element with the id of "activity-cost" below the activities section should update to reflect the chosen activities' total cost.

5. "Payment Info" section
The credit card payment option should be selected for the user by default. So when the form first loads, "Credit Card" should be displayed in the "I'm going to pay with" <select> element, and the credit card payment section should be the only payment section displayed in the form’s UI. And when the user selects one of the payment options from the "I'm going to pay with" drop down menu, the form should update to display only the chosen payment method section.
* Program the "I'm going to pay with" <select> element to listen for user changes. When a change is detected, hide all payment sections in the form’s UI except the selected one.

6. Form validation
Users shouldn’t be able to submit a form without the required information, or with invalid information. To prevent that from happening, avoid using plugins, libraries, snippets or the built-in HTML5 validation, and create your own custom form validation.

> Note: Form submission behavior will differ depending on whether you’re running the project with a local server, or just viewing the files in the browser. It is recommended that you view the files in the browser instead of serving them locally. This helps facilitate development and testing, and this is how the project will be reviewed.

* Program the form element to listen for the submit event. When the form submission is detected, each required form field or section should be validated, or checked to ensure that they have been filled out correctly. If any of the following required fields is not valid, the form’s submission should be prevented.
* The "Name" field cannot be blank or empty.
* The "Email Address" field must contain a validly formatted email address. The email address does not need to be a real email address, just formatted like one. For example: dave@teamtreehouse.com. A few characters for the username, followed by "@", followed by a few more characters and a ".com" for the domain name. You don’t have to account for other top-level domains, like .org, .net, etc.
* The "Register for Activities" section must have at least one activity selected.
* If and only if credit card is the selected payment method:
* The "Card number" field must contain a 13 - 16 digit credit card number with no dashes or spaces. The value does not need to be a real credit card number.
* The "Zip code" field must contain a 5 digit number.
* The "CVV" field must contain a 3 digit number.

> Note:
Avoid using snippets, libraries or plugins.
Only validate the three credit card fields if "credit card" is the selected payment option.
Only call `preventDefault` on the `event` object if one or more of the required fields is invalid.

> Pro Tip:A recommended approach is to create helper functions for each of the required fields to be validated. For example, for the "Name" field, a function could check the "Name" field’s value. If it equals an empty string or only blank spaces, the function could log out a helpful statement and return false. Otherwise it would return true. And then in the `submit` event listener, you could call that helper function and check what it returns: if it returns false, you would prevent the form from submitting. Otherwise, you would avoid preventing form submission, and allow the `submit` handler to either submit or move onto checking the next required field.

7. Accessibility
To craft web experiences that are accessible to all users, reach the largest possible audience, and are in compliance with web regulations, it’s important to consider the needs of users with disabilities when presenting content. Some users require the help of assistive technologies like screen readers, and others aren’t able to recognize prompts that are indicated by color changes alone. Complete the steps below to make your form more accessible.
* Make the focus states of the activities more obvious to all users. Pressing the tab key on your keyboard moves the focus state from one input to the next, but the focus indicators in the "Register for Activities" section aren’t very obvious.
* Program all of the activity checkbox input elements to listen for the focus and blur events.
When the focus event is detected, add the ".focus" className to the checkbox input’s parent label element.
* When the blur event is detected, remove the .focus className from the label element that possesses it. It can be helpful here to directly target the element with the className of .focus in order to remove it.
* Make the form validation errors obvious to all users. With the custom form validation checks you’ve already written, invalid form fields will prevent the form from submitting, but all users should be presented with clear notifications of which fields are invalid.
* When the user tries to submit the form, if a required form field or section is invalid:
* Add the ‘.not-valid’ className to the parent element of the form field or section. For the activity section, the parent element would be the fieldset element for the activity section. For the other required inputs, the parent element would be a label element for the input.
* Remove the ‘.valid’ className from the parent element of the form field or section.
* Display the .hint element associated with the form field or section, which will be the last child of the parent element of the form field or section. The parentElement and lastElementChild properties will be helpful here.
* If a required form field or section is valid:
* Add the ‘.valid’ className to the parent element of the form field or section.
* Remove the ‘.not-valid’ className from the parent element of the form field or section.
* Hide the .hint element associated with that element.

> Note:
Error messages should not be visible by default or when the form first loads.
JavaScript alerts and prompts should not be used in your form validation error indications.
If your user tries to submit an empty form, all form validation error indications should be displayed at once, rather than one at a time.

> Pro Tip: A recommended approach to this part of the project is to create helper functions that accept an argument for the element that is being validated. For example, the function could accept an argument for the text input element that was checked. Then the function would update the styles for that element’s parent element and the last child of that parent element. One function could update the styles when errors are detected. And another function could update the styles when errors are resolved.

8. Finishing the Project
The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.

* Code Comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code and what it does.
* Code Readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation is consistent and in keeping with best practices.
* Quality Assurance Testing - This is a key step in the development process.
* Open and run your app.
* Open the Chrome DevTools console and ensure that there are no errors displayed when the app is being used and tested.
* Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
Cross Browser Consistency - To pass, your project only needs to work in Chrome but it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.
