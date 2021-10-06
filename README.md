# Serbian meals REST API
This API is created with two goals in mind:
- My own learning experience 
- Letting others learn API integration while promoting amazing Serbian food! 

### Technologies
Technologies used in this projects are: 
- Node.js 
- Express 
-  MongoDB Atlas

# Routes
Constant url you'll be sending request is : 
```
91.109.116.4:4007
```
|METHOD|PATH  |
|--|--|
| GET |/meals  |
|POST |/meals |
| GET|/meals/breakfast |
| GET| meals/lunch|
| GET| meals/dinner|
| GET| /meals/:id|


### GET /Meals 
Sending a request to /meals with **GET** method looks like this:
```
{
	"count":number
	"meals":array
}
```
Every item of **meals** array is an object and looks like this:
```
{
	"id": "meal_id",
	"type": "lunch",
	"name": "Meal Name",
	"ingredients": [
		"ingredient 1",
		"ingredient 2",
		"ingredient 3"
	],
	"preparation": [
		"First step",
		"Second Step",
		"Third Step"
	],
	"request": {
		"method": "GET",
		"url": "http://91.109.116.4:4007/meals/:meal_id",
		"desc": "direct request to this meal"
	}
}
```

### GET /breakfast/lunch/dinner
Depending on selected route, you will receive filtered response

**NOTE** - Every meal contains direct request link so you can access the meal details easier

## FUTURE UPGRADES
- [ ] Add image url for every recipe and implement it into schema
- [ ] let anyone submit recipes

## LICENCE
This project is licensed under Unlicense license. This license does not require you to take the license with you to your project. If anyone decides to use my API for his project I would be more than happy to hear about it and help if needed. 

