# Food-Ordering-System
We propose a smart food ordering system which is designed to save time spent waiting at the food shops in college in a long queue for billing, which in ends up being an inconvenience for most of the people involved in the process, like for instance the person who takes orderswill have to manage several orders continuouslyand sometimes even simultaneously, the people who havewait in thelong queuemight be late to their classes or at leastremainhungry for alongperiod of timeand finally for the peopleworking in the kitchenwho cook the food and also deliver them, as they’ll have to communicate the availability of the food items to the order counter frequently to ensure that their customers don’t end up disappointed or frustrated, having already waited in a longqueue. We intend to come up a system which is tailor made for our campus scenario and try to solve the shortcomings of the existing making the process of ordering food and processing the order hassle-free.We do this by performing a proper study of such systems existing in other campusesand incorporating the best practicesaswell as coming up with innovative idea to overcome the shortcomings of such systemto end up with a refined and flawless system to an extent, which is suited for our campus scenario. This system would require all the shops to connect to our database by creating anaccount and using our webportalwhich then further be integratedwiththeir systemto ensure the proposed workflow falls in place as expected. The users can useourapp to view all the shops, the food items they have, when they’ll be available, plan and place an order accordinglyand payfor the dish. So,this is how it works: users can order the food in advance by our app, and it will generate a unique code. Whenthe restaurants receive the order, they can start cooking. As long as the meals are ready, the user is sent with a notification. As this is going to be used for college canteen, we check the user location and let him order only if he is in college. The restaurant can update/modify the list of items available at that time. Also, they can accept/reject an order based on the availability.

## USER APP :
### MODULES:
### Login/Register: 
This module basically allows a user to register creating a user record in firebase and also for authenticating an existing user of the system by using Firebase Authentication. Upon successful completion, it navigates to the Shop Menu Screen. 
### Shop Menu Screen: 
This module displays the products available with dynamic data to ensure that the product that is added is available. Upon selecting the food items for purchase, it navigates to the cart screen for placing the order. 
### Order Screen: 
This is basically a cart view where you can add/remove items based on dynamic availability. Also, here you can request to place the order which is then sent to shop through firebase. Upon accepting the order, you will be able to pay. 
### Payment Screen: 
This is the screen where you can pay for the food and finalize your order which offers users different methods of payment. This uses the Razor PayAPI which is a useful payment gateway for online payments. Upon successful payment, the user order will be confirmed. 
### Order Display Screen: 
This is the screen where you can see the food details and you will get a unique order id and OTP from where you can authenticate yourself. 
## ADMIN APP:
### MODULES:
### Login: 
This module basically allows admin to login inside the app using firebase and authenticate him an  existing  user  of  the  system and  as  an  admin  of  a  shop by  using  Firebase  Authentication, which then takes to the dashboard to manage the shop.
### Edit Food Details: 
This module displays the products available with dynamic data to ensure that the product that is added is available. Upon selecting the food item,he can edit all the details and it gets updated in real time.  
### Order Screen: 
This is basically a view where you can see the items based on dynamic data. Then he can update the status of the orderlike from the stage of receiving the orderto cooking to deliver it to the use, the system stateis update and can be kept track of, based on the logs made. This includes deny the order, order ready,etc.
### Add Food: 
This module allows users to add new products into the shop.They have to enter the required information about the dish like the name, category, price, imageand the availabilitytime based on which it’ll be shown to the user for ordering
