# Test task for Lightspeed

Check task in TASK.md

## Instruments that wasn't in the task description

- nuxt - to make code better organized (also I needed some practice with it)
- pinia - as the most recent state manager
- vuetify - I used that UI-kit on some of my previous projects and like it. Also it's very common
- linter/prettier - I used standard settings to make my code more general

## Architecture

I prefer to work with modular domain systems, but in this project I decided to use default nuxt structure. But I've extracted some extra layers:

- api - it's better to keep it separate so you know what features you use and how
- models - data models are used mostly in store and api, so I extracted them to their own folder. Also in large project it's better use DTO but for this case it's excessive

## API

I stored keys in .env file. It's not safe but I got them from the task, so I count them as public.

Api doesn't provide images for categories for test storage. I used _thumbnailUrl_ but I'm not sure how it would work on other storage (or if categories have images at all). I tried to use _responseFields_ param but it doesn't work either.

## Tests

- store with full coverage
- cart page - other page should be covered too, but I didn't want to waste time for that in the test task
- e2e - most of the time, QA engeneers write e2e tests, so I decided not to write any. I can give you link to the project where I worked with cypress
